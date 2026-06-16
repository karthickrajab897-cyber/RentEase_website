const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DB_FILE = path.join(__dirname, 'db.json');

app.use(cors());
app.use(bodyParser.json());

// Helper to read DB
const readDB = () => {
    if (!fs.existsSync(DB_FILE)) {
        return { users: [], properties: [], bookings: [] };
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
};

// Helper to write DB
const writeDB = (data) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
};

// --- AUTH ENDPOINTS ---

app.post('/api/auth/signup', (req, res) => {
    const { email, password, mobile, fullName } = req.body;
    const db = readDB();

    if (db.users.find(u => u.email === email)) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = { id: Date.now(), email, password, mobile, fullName };
    db.users.push(newUser);
    writeDB(db);

    res.json({ message: 'User created successfully', user: { id: newUser.id, email, fullName } });
});

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    const db = readDB();

    const user = db.users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user: { id: user.id, email: user.email, fullName: user.fullName, mobile: user.mobile } });
});

app.get('/api/users', (req, res) => {
    const db = readDB();
    const users = db.users.map(u => ({ id: u.id, email: u.email, fullName: u.fullName, mobile: u.mobile }));
    res.json(users);
});

// --- PROPERTY ENDPOINTS ---

app.get('/api/properties', (req, res) => {
    const db = readDB();
    const { all, userId } = req.query;
    if (all === 'true') {
        res.json(db.properties);
    } else if (userId) {
        res.json(db.properties.filter(p => p.userId == userId));
    } else {
        res.json(db.properties.filter(p => p.status !== 'pending'));
    }
});

app.post('/api/properties', (req, res) => {
    const property = req.body;
    const db = readDB();

    const newProperty = { ...property, id: Date.now(), rating: 5.0, bookings: 0, status: 'pending' };
    db.properties.push(newProperty);
    writeDB(db);

    res.json({ message: 'Property listed successfully, pending verification', property: newProperty });
});

app.put('/api/properties/:id/verify', (req, res) => {
    const { id } = req.params;
    const db = readDB();
    const property = db.properties.find(p => p.id == id);
    if (!property) return res.status(404).json({ error: 'Property not found' });
    
    property.status = 'verified';
    writeDB(db);
    res.json({ message: 'Property verified successfully', property });
});

app.delete('/api/properties/:id', (req, res) => {
    const { id } = req.params;
    const db = readDB();
    const index = db.properties.findIndex(p => p.id == id);
    if (index === -1) return res.status(404).json({ error: 'Property not found' });
    
    db.properties.splice(index, 1);
    writeDB(db);
    res.json({ message: 'Property deleted successfully' });
});

// --- BOOKING ENDPOINTS ---

app.post('/api/bookings', (req, res) => {
    const { userId, propertyId, duration, totalPrice } = req.body;
    const db = readDB();

    const property = db.properties.find(p => p.id == propertyId);
    if (!property) return res.status(404).json({ error: 'Property not found' });

    // 5% Commission Logic
    const commission = Math.round(totalPrice * 0.05);
    const ownerPayout = totalPrice - commission;

    const newBooking = {
        id: Date.now(),
        userId,
        propertyId,
        propertyTitle: property.title,
        duration,
        totalPrice,
        commission,
        ownerPayout,
        timestamp: new Date().toISOString()
    };

    db.bookings.push(newBooking);

    // Update property bookings count
    property.bookings = (property.bookings || 0) + 1;

    writeDB(db);

    res.json({ message: 'Booking confirmed', booking: newBooking });
});

app.get('/api/bookings/user/:userId', (req, res) => {
    const { userId } = req.params;
    const db = readDB();
    const userBookings = db.bookings.filter(b => b.userId == userId);
    res.json(userBookings);
});

app.listen(PORT, () => {
    console.log(`RentEase Backend running on http://localhost:${PORT}`);
});