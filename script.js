const TOMTOM_KEY = 'G1dTLVCeHaOrGTa8obnU8sfUWWxV24TQKC1LxeQ5';
const API_URL = 'http://localhost:5000/api';

// Tamil Nadu Cities & Landmarks Data (Expanded with Colleges, Industry, Textiles)
const tamilNaduCities = {
    "Chennai": ["T. Nagar", "Anna Nagar", "Velachery", "Adyar", "IIT Madras", "Marina Beach", "ECR", "OMR IT Hub", "SIPCOT Siruseri", "Loyola College", "Tambaram"],
    "Coimbatore": ["Gandhipuram", "RS Puram", "PSG Tech", "Peelamedu", "Railway Station", "Saravanampatti IT Park", "Ukkadam", "Avinashi Road", "CIT College", "Kumaraguru College"],
    "Madurai": ["Meenakshi Amman Temple", "Mattuthavani", "Arapalayam", "Periyar Bus Stand", "Anna Nagar", "KK Nagar", "Lady Doak College", "MK University"],
    "Karur": ["Bus Stand", "Railway Station", "Pasupathipalayam", "Thanthonimalai", "Vengamedu", "Jawahar Bazaar", "Textile Hub"],
    "Trichy": ["Chatram Bus Stand", "Central Bus Stand", "Thillai Nagar", "Srirangam", "Rockfort", "NIT Trichy", "BHEL"],
    "Tiruppur": ["Avinashi Road", "Old Bus Stand", "New Bus Stand", "Textile Market", "Rayapuram", "Cotton City"],
    "Salem": ["New Bus Stand", "Hasthampatti", "Ammapet", "Suramangalam", "Yercaud Foot Hills", "Steel Plant"],
    "Tirunelveli": ["Junction", "Palayamkottai", "Town", "Vannarpettai", "Engineering College"],
    "Erode": ["Bus Stand", "Railway Station", "Perundurai Road", "Solar", "Turmeric Market"],
    "Thanjavur": ["Big Temple", "New Bus Stand", "Old Bus Stand", "Medical College Road", "SASTRA University"],
    "Vellore": ["CMC hospital", "VIT University", "Katpadi", "New Bus Stand"],
    "Ooty": ["Botanical Garden", "Lake", "Charing Cross", "Commercial Road", "Lawrence School"],
    "Kodaikanal": ["Lake", "Bus Stand", "Observatory", "Naidupuram"]
};

// Image Pool (High-Quality Real-World Rented Houses in Tamil Nadu/India)
const imagePool = [
    "https://housing-images.n7net.in/01c16c28/3356845532aab845df7db08a755713ee/v0/medium/1_bhk_independent_house-for-rent-bolarum-Secunderabad-living_room.jpg",
    "https://imganuncios.mitula.net/6_bhk_independent_house_in_neelankarai_for_rent_chennai_the_reference_number_is_19601644_9140000772096851637.jpg",
    "https://img.staticmb.com/mbphoto/property/cropped_images/2025/Dec/06/Photo_h470_w1080/82371621_3_PropertyImage1764959600123_470_1080.jpg",
    "https://lscdn.blob.core.windows.net/property/rentalad//21_12_2025_14_03_06_IMG_20251121_WA0016.jpg",
    "https://img.staticmb.com/mbphoto/property/cropped_images/2026/Jan/24/Photo_h470_w1080/83086021_1_WhatsApp-Image-2026-01-23-at-11-09-40-AM--1-_470_1080.jpeg",
    "https://imagecdn.99acres.com/media1/35710/19/714219419M-1771314400145.webp",
    "https://peolands.com/wp-content/uploads/2024/06/1-25.jpg",
    "https://imagecdn.99acres.com/media1/35316/1/706321843M-1769825965911.webp",
    "https://nestaway-houses-assets.nestaway.com/uploads/images/thumb_large_e7372c85-9abf-4354-b10c-17d1a66f8c2f.gif",
    "https://cloudimage.homeonline.com/512x512/public/uploads/property/images/root/44963667ac5a2cd9ad_blob.jpeg"
];

const defaultProperties = [
    // Chennai
    { id: 1, title: "Luxury Villa near Marina Beach", location: "Marina Beach, Chennai", type: "luxury", price: 950, beds: 3, baths: 2, ownerName: "Sabarishwaran", ownerUpi: "sabar@upi", image: imagePool[0], rating: "4.8", bookings: 85 },
    { id: 2, title: "Modern Apartment in OMR", location: "Navalur, OMR Road, Chennai", type: "family", price: 450, beds: 2, baths: 2, ownerName: "Bhuvanesh", ownerUpi: "bhuvan@upi", image: imagePool[1], rating: "4.5", bookings: 42 },
    { id: 3, title: "Cozy Studio in Anna Nagar", location: "Anna Nagar, Chennai", type: "studio", price: 250, beds: 1, baths: 1, ownerName: "Revathi", ownerUpi: "revathi@upi", image: imagePool[2], rating: "4.9", bookings: 15 },

    // Coimbatore
    { id: 4, title: "Independent House in RS Puram", location: "RS Puram, Coimbatore", type: "luxury", price: 1200, beds: 3, baths: 3, ownerName: "Karthik S.", ownerUpi: "karthik@upi", image: imagePool[3], rating: "4.9", bookings: 60 },
    { id: 5, title: "Affordable PG near PSG Tech", location: "PSG Tech, Coimbatore", type: "student", price: 150, beds: 1, baths: 1, ownerName: "Meera J.", ownerUpi: "meera@upi", image: imagePool[4], rating: "4.3", bookings: 120 },
    { id: 6, title: "Premium Flat near Tidel Park", location: "Peelamedu, Coimbatore", type: "family", price: 550, beds: 2, baths: 2, ownerName: "Anjali R.", ownerUpi: "anjali@upi", image: imagePool[5], rating: "4.7", bookings: 45 },

    // Madurai
    { id: 7, title: "Traditional Home near Temple", location: "Meenakshi Amman Temple, Madurai", type: "family", price: 350, beds: 2, baths: 1, ownerName: "Vijay K.", ownerUpi: "vijay@upi", image: imagePool[6], rating: "4.8", bookings: 95 },
    { id: 8, title: "Modern Bachelor Pad", location: "Anna Nagar, Madurai", type: "studio", price: 200, beds: 1, baths: 1, ownerName: "Ramesh P.", ownerUpi: "ramesh@upi", image: imagePool[7], rating: "4.4", bookings: 30 },

    // Karur
    { id: 9, title: "Executive Flat near Textile Hub", location: "Jawahar Bazaar, Karur", type: "luxury", price: 600, beds: 2, baths: 2, ownerName: "Senthil M.", ownerUpi: "senthil@upi", image: imagePool[8], rating: "4.6", bookings: 25 },
    { id: 10, title: "Simple House near Bus Stand", location: "Bus Stand, Karur", type: "family", price: 300, beds: 2, baths: 1, ownerName: "Mani G.", ownerUpi: "mani@upi", image: imagePool[9], rating: "4.2", bookings: 18 },

    // Trichy
    { id: 11, title: "Heritage Stay near Rockfort", location: "Rockfort, Trichy", type: "luxury", price: 800, beds: 3, baths: 2, ownerName: "Arun M.", ownerUpi: "arun@upi", image: imagePool[0], rating: "4.9", bookings: 55 },
    { id: 12, title: "Student Room near NIT Trichy", location: "NIT Trichy, Trichy", type: "student", price: 100, beds: 1, baths: 1, ownerName: "Baskar T.", ownerUpi: "baskar@upi", image: imagePool[1], rating: "4.5", bookings: 80 },

    // Salem
    { id: 13, title: "Modern Villa in Yercaud Foothills", location: "Yercaud Foot Hills, Salem", type: "luxury", price: 1500, beds: 4, baths: 3, ownerName: "Selvam R.", ownerUpi: "selvam@upi", image: imagePool[2], rating: "4.9", bookings: 15 },
    { id: 14, title: "Central Apartment Salem", location: "New Bus Stand, Salem", type: "family", price: 400, beds: 2, baths: 2, ownerName: "Kumar S.", ownerUpi: "kumar@upi", image: imagePool[3], rating: "4.3", bookings: 40 },

    // Tiruppur
    { id: 15, title: "Cotton City Guest House", location: "Textile Market, Tiruppur", type: "family", price: 500, beds: 3, baths: 2, ownerName: "Prakash L.", ownerUpi: "prakash@upi", image: imagePool[4], rating: "4.6", bookings: 22 },
    { id: 16, title: "Industrialist Suite", location: "Avinashi Road, Tiruppur", type: "luxury", price: 900, beds: 2, baths: 2, ownerName: "Deepak V.", ownerUpi: "deepak@upi", image: imagePool[5], rating: "4.8", bookings: 12 },

    // Ooty & Kodaikanal
    { id: 17, title: "Mist View Cottage", location: "Botanical Garden, Ooty", type: "luxury", price: 2000, beds: 3, baths: 3, ownerName: "Rex A.", ownerUpi: "rex@upi", image: imagePool[6], rating: "5.0", bookings: 150 },
    { id: 18, title: "Pine Hill Cabin", location: "Observatory, Kodaikanal", type: "luxury", price: 1800, beds: 2, baths: 2, ownerName: "Samy K.", ownerUpi: "samy@upi", image: imagePool[7], rating: "4.9", bookings: 85 },
    { id: 19, title: "Tea Estate Stay", location: "Charing Cross, Ooty", type: "family", price: 1200, beds: 2, baths: 1, ownerName: "Nithin B.", ownerUpi: "nithin@upi", image: imagePool[8], rating: "4.7", bookings: 65 },

    // Vellore & Others
    { id: 20, title: "VIT Student Housing", location: "VIT University, Vellore", type: "student", price: 200, beds: 1, baths: 1, ownerName: "Lokesh M.", ownerUpi: "lokesh@upi", image: imagePool[9], rating: "4.2", bookings: 200 },
    { id: 21, title: "Global Hospital Stay", location: "CMC hospital, Vellore", type: "family", price: 600, beds: 2, baths: 2, ownerName: "Ganesh R.", ownerUpi: "ganesh@upi", image: imagePool[0], rating: "4.8", bookings: 75 },
    { id: 22, title: "River View Tirunelveli", location: "Palayamkottai, Tirunelveli", type: "family", price: 350, beds: 3, baths: 2, ownerName: "Sudhir P.", ownerUpi: "sudhir@upi", image: imagePool[1], rating: "4.5", bookings: 18 },
    { id: 23, title: "Smart Flat in Erode", location: "Perundurai Road, Erode", type: "family", price: 450, beds: 2, baths: 2, ownerName: "Kathir V.", ownerUpi: "kathir@upi", image: imagePool[2], rating: "4.6", bookings: 28 },
    { id: 24, title: "Temple City Suite", location: "Big Temple, Thanjavur", type: "luxury", price: 750, beds: 2, baths: 2, ownerName: "Moorthy S.", ownerUpi: "moorthy@upi", image: imagePool[3], rating: "4.9", bookings: 40 }
];

let properties = [];

// Fetch Properties from Backend
async function fetchProperties() {
    try {
        const response = await fetch(`${API_URL}/properties`);
        if (!response.ok) throw new Error("Server error");
        properties = await response.json();
    } catch (err) {
        console.warn("Failed to fetch properties, using fallback data", err);
        properties = defaultProperties;
    }
    renderProperties();
}

// DOM Elements
const propertyGrid = document.getElementById('property-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('booking-modal');
const closeModalBtn = document.querySelector('.close-modal');
const locationInput = document.getElementById('location-input');
const searchSuggestions = document.getElementById('search-suggestions');
const searchBtn = document.getElementById('search-btn');

let currentProperty = null;
let currentUser = null;

// Sign In Logic
const signinModal = document.getElementById('signin-modal');

function openSignIn() {
    if (signinModal) {
        signinModal.classList.remove('hidden');
        setTimeout(() => signinModal.classList.add('open'), 10);
    }
}

function closeSignIn() {
    if (signinModal) {
        signinModal.classList.remove('open');
        setTimeout(() => signinModal.classList.add('hidden'), 300);
    }
}

function switchAuthTab(tab, btn) {
    document.querySelectorAll('#signin-modal .dash-tab').forEach(b => {
        b.classList.remove('active');
        b.style.borderBottom = 'none';
        b.style.color = 'var(--text-muted)';
    });
    btn.classList.add('active');
    btn.style.borderBottom = '2px solid var(--primary)';
    btn.style.color = 'white';
    
    document.querySelectorAll('.auth-form').forEach(f => f.style.display = 'none');
    document.getElementById(`${tab}-form`).style.display = 'block';
}

const loginForm = document.getElementById('login-form');
loginForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;

    try {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        const data = await res.json();
        
        if (res.ok) {
            currentUser = {
                id: data.user.id,
                fullName: data.user.fullName,
                email: data.user.email,
                phone: data.user.mobile,
                memberSince: 'Today',
                status: 'Verified Host'
            };
            localStorage.setItem('rentease_user', JSON.stringify(currentUser));
            updateNavForAuth();
            closeSignIn();
            
            // Fetch User specific properties and bookings
            fetchUserProperties();
            
            alert(`Welcome back to RENTEASE, ${data.user.fullName}!`);
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (err) {
        console.error("Login Error", err);
        // Fallback for demo without backend
        currentUser = { id: 999, fullName: 'Demo User', email: email, phone: '+91 0000', memberSince: 'Today', status: 'Verified Host' };
        localStorage.setItem('rentease_user', JSON.stringify(currentUser));
        updateNavForAuth();
        closeSignIn();
        alert(`Logged in via offline mode as Demo User`);
    }
});

const signupForm = document.getElementById('signup-form');
signupForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fullName = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const mobile = document.getElementById('signup-mobile').value;
    const password = document.getElementById('signup-pass').value;

    try {
        const res = await fetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName, email, mobile, password })
        });
        
        const data = await res.json();
        
        if (res.ok) {
            currentUser = {
                id: data.user.id,
                fullName: data.user.fullName,
                email: data.user.email,
                phone: mobile,
                memberSince: 'Today',
                status: 'Verified Host'
            };
            // Save session
            localStorage.setItem('rentease_user', JSON.stringify(currentUser));
            
            updateNavForAuth();
            closeSignIn();
            alert(`Account Created! Welcome to RENTEASE, ${data.user.fullName}!`);
        } else {
            alert(data.error || 'Signup failed');
        }
    } catch (err) {
        console.error("Signup Error", err);
        currentUser = { id: 999, fullName, email, phone: mobile, memberSince: 'Today', status: 'Verified Host' };
        updateNavForAuth();
        closeSignIn();
        alert(`Signed up via offline mode as ${fullName}`);
    }
});

async function fetchUserProperties() {
    if(!currentUser) return;
    try {
        const res = await fetch(`${API_URL}/properties?userId=${currentUser.id}`);
        if(res.ok) {
            userListings = await res.json();
        }
    } catch(e) { console.warn("Failed fetching user listings", e); }
}

function updateNavForAuth() {
    const navActions = document.querySelector('.nav-actions');
    if (navActions && currentUser) {
        navActions.innerHTML = `
            <button class="btn-nav-ghost" onclick="openDashboard()">
                <i class="fa-solid fa-user-circle"></i> Dashboard
            </button>
            <button class="btn-nav-primary" onclick="openAddPropertyModal()">
                <i class="fa-solid fa-plus-circle"></i> List Property
            </button>
        `;
    }
}

function handleSignOut() {
    currentUser = null;
    userBookings = [];
    userListings = [];
    localStorage.removeItem('rentease_user');
    
    const navActions = document.querySelector('.nav-actions');
    if (navActions) {
        navActions.innerHTML = `
            <button class="btn-nav-ghost" id="nav-signin-btn" onclick="openSignIn()">Sign In</button>
            <button class="btn-nav-primary" onclick="openAddPropertyModal()">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                List Property
            </button>
        `;
    }
    closeDashboard();
    alert("Signed out successfully.");
}

function openDashboard() {
    const modal = document.getElementById('dashboard-modal');
    if (!modal || !currentUser) return;

    // Update Profile Info
    document.getElementById('dash-user-name').innerText = currentUser.fullName;
    document.getElementById('dash-user-email').innerHTML = `<i class="fa-solid fa-envelope"></i> ${currentUser.email}`;
    document.getElementById('dash-user-phone').innerHTML = `<i class="fa-solid fa-phone"></i> ${currentUser.phone}`;
    document.getElementById('dash-user-status').innerHTML = `<i class="fa-solid fa-circle-check"></i> ${currentUser.status}`;
    document.getElementById('dash-avatar').innerText = currentUser.fullName.charAt(0).toUpperCase();

    // Update Stats
    const totalEarnings = userListings.reduce((acc, curr) => acc + (parseInt(curr.price) * (curr.bookings || 0)), 0);
    document.getElementById('stat-bookings').innerText = userBookings.length;
    document.getElementById('stat-listings').innerText = userListings.length;
    document.getElementById('stat-earnings').innerText = `₹${totalEarnings.toLocaleString()}`;
    document.getElementById('stat-date').innerText = currentUser.memberSince;

    renderDashboardBookings();
    renderDashboardListings();

    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('open'), 10);
}

function closeDashboard() {
    const modal = document.getElementById('dashboard-modal');
    modal.classList.remove('open');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function switchDashTab(btn, contentId) {
    document.querySelectorAll('.dash-tab').forEach(t => {
        t.classList.remove('active');
        t.style.borderBottom = 'none';
        t.style.color = 'var(--text-muted)';
    });
    btn.classList.add('active');
    btn.style.borderBottom = '2px solid var(--primary)';
    btn.style.color = 'white';

    document.querySelectorAll('.dash-content-area').forEach(c => c.style.display = 'none');
    document.getElementById(contentId).style.display = 'block';
}

function renderDashboardListings() {
    const container = document.getElementById('dash-listings');
    if (userListings.length === 0) {
        container.innerHTML = `<div class="empty-dash" style="text-align: center; padding: 3rem; color: var(--text-muted);"><i class="fa-solid fa-house-chimney" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.2; display: block;"></i>You haven't listed any properties yet.</div>`;
        return;
    }

    container.innerHTML = `<div style="padding: 1rem; display: flex; flex-direction: column; gap: 1rem;">` + userListings.map(l => `
        <div class="dash-item glass-card" style="display: flex; gap: 1.5rem; align-items: center; padding: 1.2rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="position: relative;">
                <img src="${l.image || imagePool[0]}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 16px;">
                <span class="${l.status === 'pending' ? 'badge-warning' : 'badge-success'}" style="position: absolute; top: -5px; right: -5px; padding: 2px 8px; border-radius: 10px; font-weight: 700; font-size: 0.6rem; color: white;">
                    ${l.status === 'pending' ? 'PENDING' : 'ACTIVE'}
                </span>
            </div>
            <div style="flex: 1;">
                <h4 style="margin: 0; color: white; font-size: 1.1rem;">${l.title}</h4>
                <div style="margin: 0.4rem 0; color: var(--primary); font-size: 0.9rem; font-weight: 600;">
                    <i class="fa-solid fa-location-dot"></i> ${l.location}
                </div>
                <div style="display: flex; gap: 15px; font-size: 0.8rem; color: var(--text-muted);">
                    <span><i class="fa-solid fa-bed"></i> ${l.beds} Beds</span>
                    <span><i class="fa-solid fa-bath"></i> ${l.baths} Baths</span>
                    <span><i class="fa-solid fa-star"></i> ${l.rating || '5.0'}</span>
                </div>
            </div>
            <div style="text-align: right; display: flex; flex-direction: column; gap: 8px;">
                <strong style="font-size: 1.2rem; color: white;">₹${l.price}/night</strong>
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('rent house in ' + l.location)}" target="_blank" 
                   style="color: var(--primary); text-decoration: none; font-size: 0.8rem; font-weight: 600;">
                   <i class="fa-solid fa-map-location-dot"></i> View on Map
                </a>
                <span style="font-size: 0.7rem; color: var(--text-muted);">REF: #RTZ${l.id}</span>
            </div>
        </div>
    `).join('') + `</div>`;
}

function renderDashboardBookings() {
    const container = document.getElementById('dash-bookings');
    if (userBookings.length === 0) {
        container.innerHTML = `<div class="empty-dash" style="text-align: center; padding: 3rem; color: var(--text-muted);"><i class="fa-solid fa-calendar-xmark" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.2; display: block;"></i>No bookings yet. Find your dream home now!</div>`;
        return;
    }

    container.innerHTML = `<div style="padding: 1rem; display: flex; flex-direction: column; gap: 1rem;">` + userBookings.map(b => `
        <div class="dash-item glass-card" style="display: flex; gap: 1.5rem; align-items: center; padding: 1.2rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <img src="${b.propertyImage}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 16px;">
            <div style="flex: 1;">
                <h4 style="margin: 0; color: white; font-size: 1.1rem;">${b.propertyTitle}</h4>
                <div style="margin: 0.4rem 0; color: var(--text-muted); font-size: 0.85rem;">
                   <i class="fa-solid fa-clock"></i> Booked for <b>${b.days} Nights</b> • ${new Date(b.timestamp).toLocaleDateString()}
                </div>
                <div style="display: flex; gap: 15px; font-size: 0.8rem; color: #10b981; font-weight: 600;">
                    <span><i class="fa-solid fa-circle-check"></i> Payment Confirmed</span>
                    <span><i class="fa-solid fa-ticket"></i> #RTZ-BOOK-${Math.floor(Math.random() * 9000) + 1000}</span>
                </div>
            </div>
            <div style="text-align: right;">
                <strong style="display: block; font-size: 1.2rem; color: white; margin-bottom: 5px;">₹${b.totalPrice}</strong>
                <button onclick="alert('Digital Receipt Downloaded!')" style="background: rgba(212, 175, 55, 0.1); border: 1px solid var(--primary); color: var(--primary); padding: 5px 12px; border-radius: 8px; font-size: 0.75rem; cursor: pointer;">
                    <i class="fa-solid fa-file-invoice"></i> Receipt
                </button>
            </div>
        </div>
    `).join('') + `</div>`;
}




// Current Location Logic via TomTom
function getCurrentLocation() {
    const iconWrap = document.querySelector('.search-icon-wrap');
    iconWrap.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="color:#c084fc"></i>';

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            try {
                const response = await fetch(`https://api.tomtom.com/search/2/reverseGeocode/${latitude},${longitude}.json?key=${TOMTOM_KEY}`);
                const data = await response.json();
                const city = data.addresses[0].address.municipality || data.addresses[0].address.freeformAddress;
                locationInput.value = city;
                searchBtn.click();
            } catch (err) {
                console.error("Reverse geocode failed", err);
                alert("Could not detect exact city name. Please type manually.");
            }
            iconWrap.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c084fc" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3m10-10h-3m-14 0h-3" /></svg>`;
        }, () => {
            alert("Location access denied. Please allow location to use this feature.");
            iconWrap.innerHTML = `...`;
        });
    }
}

// Search & Autocomplete Logic
locationInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    searchSuggestions.innerHTML = '';

    if (value.length < 1) {
        searchSuggestions.classList.add('hidden');
        return;
    }

    // Search in Cities and Landmarks
    const suggestions = [];

    // Check Cities
    Object.keys(tamilNaduCities).forEach(city => {
        if (city.toLowerCase().includes(value)) suggestions.push(city);
    });

    // Check Landmarks
    Object.entries(tamilNaduCities).forEach(([city, landmarks]) => {
        landmarks.forEach(landmark => {
            const fullLocation = `${landmark}, ${city}`;
            if (fullLocation.toLowerCase().includes(value)) {
                suggestions.push(fullLocation);
            }
        });
    });

    if (suggestions.length > 0) {
        suggestions.slice(0, 10).forEach(place => { // Limit to 10
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${place}`;
            div.addEventListener('click', () => {
                locationInput.value = place;
                searchSuggestions.classList.add('hidden');
            });
            searchSuggestions.appendChild(div);
        });
        searchSuggestions.classList.remove('hidden');
    } else {
        searchSuggestions.classList.add('hidden');
    }
});


// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!locationInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
        searchSuggestions.classList.add('hidden');
    }
});

// Search Button Logic
searchBtn.addEventListener('click', () => {
    const query = locationInput.value.toLowerCase();

    // Search Properties
    const filtered = properties.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
        renderFilteredProperties(filtered);
    } else {
        // "Show Nearby Areas" Logic
        const foundCity = Object.keys(tamilNaduCities).find(city => query.includes(city.toLowerCase()));
        if (foundCity) {
            const nearby = properties.filter(p => p.location.toLowerCase().includes(foundCity.toLowerCase()));
            renderFilteredProperties(nearby);
            alert(`No exact matches for your search, showing homes in ${foundCity} nearby.`);
        } else {
            renderFilteredProperties([]);
        }
    }
});

function renderFilteredProperties(props) {
    propertyGrid.innerHTML = '';

    if (props.length === 0) {
        propertyGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem;"><h3>No properties found in this location.</h3><p>Try searching for Chennai, Madurai, or Ooty.</p></div>';
        return;
    }

    props.forEach(prop => {
        const card = document.createElement('div');
        card.className = 'property-card visible';
        card.innerHTML = `
            <div class="card-img-container" onclick="openDetail(${prop.id})">
                <img src="${prop.image}" alt="${prop.title}" class="card-img">
                <span class="badge">${prop.type}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title" onclick="openDetail(${prop.id})">${prop.title}</h3>
                <p class="card-location"><i class="fa-solid fa-location-dot"></i> ${prop.location}</p>
                <div class="card-features">
                    <span><i class="fa-solid fa-star"></i> ${prop.rating}</span>
                    <span><i class="fa-solid fa-users"></i> ${prop.bookings} Booked</span>
                </div>
                <div class="owner-badge"><i class="fa-solid fa-user-shield"></i> ${prop.ownerName}</div>
                <div class="card-footer">
                    <div class="price">₹${prop.price} <span style="font-size:0.7rem">/ night</span></div>
                    <div class="actions">
                        <button class="btn-book" onclick="openBooking(${prop.id})">Book Now</button>
                    </div>
                </div>
            </div>
        `;
        propertyGrid.appendChild(card);
    });

    observeScroll();
}

// Render Properties
function renderProperties(filter = 'all') {
    propertyGrid.innerHTML = '';

    const filteredProps = filter === 'all'
        ? properties.slice(0, 12) // Show limited initally
        : properties.filter(p => p.type === filter);

    filteredProps.forEach(prop => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${prop.image}" alt="${prop.title}" class="card-img">
                <span class="badge">${prop.type}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${prop.title}</h3>
                <p class="card-location"><i class="fa-solid fa-location-dot"></i> ${prop.location}</p>
                <div class="card-features">
                    <span><i class="fa-solid fa-bed"></i> ${prop.beds} Beds</span>
                    <span><i class="fa-solid fa-bath"></i> ${prop.baths} Baths</span>
                    <span><i class="fa-solid fa-star"></i> ${prop.rating}</span>
                </div>
                <div class="card-footer">
                    <div class="price">₹${prop.price} <span>/ night</span></div>
                     <div class="actions" style="display: flex; gap: 10px;">
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('rent house near ' + prop.location)}" target="_blank" class="btn-map">
                            <i class="fa-solid fa-map-location-dot"></i> Map
                        </a>
                        <button class="btn-book" onclick="openBooking(${prop.id})">Book</button>
                    </div>
                </div>
            </div>
        `;
        propertyGrid.appendChild(card);
    });

    // Re-trigger scroll animations for new elements
    observeScroll();
}

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProperties(btn.dataset.type);
    });
});

// Scroll Reveal Animation with Staggering
function observeScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay based on position for staggered effect
                const delay = (index % 4) * 100;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.property-card, .feature-card, .testimonial-card, .info-section').forEach(el => {
        observer.observe(el);
    });
}


// Booking Modal Logic
function openBooking(id) {
    if (!currentUser) {
        alert("Please sign in first to book a property.");
        openSignIn();
        return;
    }

    currentProperty = properties.find(p => p.id === id);
    if (!currentProperty) return;

    modal.classList.remove('hidden');
    // slight delay for transition
    setTimeout(() => modal.classList.add('open'), 10);
    resetForm();
    document.getElementById('guest-name').value = currentUser.fullName;
    updateSummary();
}

function closeModal() {
    modal.classList.remove('open');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

closeModalBtn.addEventListener('click', closeModal);

// Handle Receipt Download
const downloadBtn = document.querySelector('.btn-download');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        if (!currentProperty) return;

        const receiptContent = `
        ===================================
                RENTEASE RECEIPT
        ===================================
        Guest Name: ${currentUser.name}
        Guest Email: ${currentUser.email}
        Property: ${currentProperty.title}
        Location: ${currentProperty.location}
        Stay Duration: ${currentProperty.days} Days
        -----------------------------------
        Base Rent / Night: ₹${currentProperty.price}
        Platform Fee: ₹${currentProperty.commission}
        -----------------------------------
        TOTAL PAID: ₹${currentProperty.finalRent}
        ===================================
        Thank you for booking with RENTEASE!
        `;

        const blob = new Blob([receiptContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `RentEase_Receipt_${currentProperty.id}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        // Simulate sending to email
        alert("Receipt has been generated and sent to " + currentUser.email);
    });
}

// Multi-Step Logic
function nextStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));

    // Show current step content
    document.getElementById(`step-${stepNumber}`).classList.add('active');

    // Update progress bar
    for (let i = 1; i <= stepNumber; i++) {
        document.querySelector(`.step[data-step="${i}"]`).classList.add('active');
    }
}

function updateSummary() {
    if (!currentProperty) return;

    const durationType = document.getElementById('stay-duration').value;
    const basePrice = currentProperty.price;
    let days = 1;
    let discount = 0;

    // Innovative Duration Logic
    switch (durationType) {
        case 'weekly':
            days = 7;
            discount = 0.10; // 10% off
            break;
        case 'monthly':
            days = 30;
            discount = 0.20; // 20% off
            break;
        case 'yearly':
            days = 365;
            discount = 0.30; // 30% off
            break;
        default:
            days = 1; // daily
    }

    const grossRent = basePrice * days;
    const discountAmount = grossRent * discount;
    const finalRent = Math.round(grossRent - discountAmount);

    // 5% Commission Calculation
    const commission = Math.round(finalRent * 0.05);
    const ownerPayout = finalRent - commission;

    // Update UI
    document.getElementById('summary-rent').innerText = `₹${grossRent} (${days} days)`;
    document.getElementById('summary-commission').innerHTML = `₹${commission} <small>(My Share)</small>`;
    document.getElementById('summary-owner').innerText = `₹${ownerPayout}`;
    document.getElementById('summary-total').innerText = `₹${finalRent}`;

    // Store values for receipt generation
    currentProperty.finalRent = finalRent;
    currentProperty.days = days;
    currentProperty.commission = commission;

    // Update Pay Amount in Step 3
    // document.getElementById('pay-amount').innerText = `₹${finalRent}`;

    // Update QR Code with Amount
    const qrData = `upi://pay?pa=9715596046@fam&pn=Sabarishwaran&am=${finalRent}&cu=INR`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
    const qrImg = document.getElementById('payment-qr');
    if (qrImg) qrImg.src = qrUrl;
}

async function verifyPayment() {
    if (!currentUser || !currentProperty) return;

    const btn = document.querySelector('.btn-pay');
    if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
        btn.disabled = true;
    }

    // Local Simulation for demo
    setTimeout(() => {
        // Record the booking
        userBookings.push({
            propertyId: currentProperty.id,
            propertyTitle: currentProperty.title,
            propertyImage: currentProperty.image,
            days: document.getElementById('stay-duration').value,
            totalPrice: currentProperty.finalRent,
            timestamp: new Date().toISOString()
        });

        nextStep(4);
        setTimeout(() => {
            nextStep(5);
            fireConfetti();

            // Connect the download button
            const latestBooking = userBookings[userBookings.length - 1];
            const downloadBtn = document.querySelector('.btn-download');
            if (downloadBtn) {
                downloadBtn.onclick = () => downloadReceipt(latestBooking);
            }

            // Send receipt details from rentease@gmail.com
            const successText = document.querySelector('#step-5 h3');
            if (successText) {
                successText.innerHTML = `Booking Confirmed!<br><span style="font-size: 0.9rem; color: #10b981;">📩 Receipt sent from <b style="color:var(--primary)">rentease@gmail.com</b> to ${currentUser.email}</span><br><span style="font-size: 0.8rem; color: var(--text-muted); font-weight: normal; margin-top: 10px; display: block;">You can also download your receipt below.</span>`;
            }
            console.log("SIMULATED MAIL DISPATCHED: From rentease@gmail.com To " + currentUser.email);
        }, 2000);
    }, 1500);
}

function downloadReceipt(booking) {
    if (!booking || !currentUser) return alert("System busy, please try again in a moment.");

    const receiptText = `
=========================================
          RENTEASE - OFFICIAL RECEIPT
=========================================
Booking ID: RTZ-${Math.floor(Math.random() * 1000000)}
Date: ${new Date(booking.timestamp).toLocaleString()}
-----------------------------------------
GUEST DETAILS:
Name: ${currentUser.fullName}
Phone: ${currentUser.phone || 'N/A'}
Email: ${currentUser.email}
-----------------------------------------
PROPERTY DETAILS:
Property: ${booking.propertyTitle}
Stay Duration: ${booking.days} Nights
Total Price: ₹${booking.totalPrice}
-----------------------------------------
PAYMENT SUMMARY:
Status: SUCCESS (Simulated)
Method: UPI / Rentease Wallet
-----------------------------------------
Thank you for choosing RENTEASE!
Visit again for premium luxury rentals.
Contact: rentease@gmail.com
=========================================
    `.trim();

    const blob = new Blob([receiptText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `RentEase_Receipt_${booking.propertyTitle.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}



function fireConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#3b82f6', '#1e40af', '#ffffff']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#3b82f6', '#1e40af', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function resetForm() {
    nextStep(1);
    document.getElementById('guest-form').reset();
}

// Add Property Modal Logic
const addPropertyModal = document.getElementById('add-property-modal');

function openAddPropertyModal() {
    addPropertyModal.classList.remove('hidden');
    setTimeout(() => addPropertyModal.classList.add('open'), 10);
}

function closeAddPropertyModal() {
    addPropertyModal.classList.remove('open');
    setTimeout(() => addPropertyModal.classList.add('hidden'), 300);
}

// Detail Modal Logic with TomTom Map
let detailMap = null;

async function openDetail(id) {
    const prop = properties.find(p => p.id === id);
    if (!prop) return;

    const modal = document.getElementById('detail-modal');
    const content = document.getElementById('detail-content');

    content.innerHTML = `
        <div class="property-detail-grid">
            <div class="detail-img-gallery">
                <img src="${prop.image}" id="main-detail-img">
            </div>
            <div class="detail-info">
                <span class="badge">${prop.type.toUpperCase()}</span>
                <h2 style="font-size: 2rem; margin: 1rem 0;">${prop.title}</h2>
                <p style="color: var(--text-muted); margin-bottom: 2rem;"><i class="fa-solid fa-location-dot"></i> ${prop.location}</p>
                
                <div class="card-features" style="margin-bottom: 2rem;">
                    <div class="stat-badge"><strong>${prop.rating}</strong> ⭐ Rating</div>
                    <div class="stat-badge"><strong>${prop.bookings}</strong> Bookings</div>
                </div>

                <div class="owner-info-box" style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 16px;">
                    <h4 style="margin-bottom: 0.5rem;"><i class="fa-solid fa-user-check"></i> Verified Owner</h4>
                    <p style="font-size: 1.1rem; color: white;">${prop.ownerName}</p>
                </div>

                <div style="margin-top: 2rem; display: flex; justify-content: space-between; align-items: center;">
                    <div style="font-size: 1.5rem; font-weight: 700;">₹${prop.price} <span style="font-size: 0.8rem; opacity: 0.6;">/ night</span></div>
                    <button class="btn-nav-primary" onclick="openBooking(${prop.id})">Reserve Now</button>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('open'), 10);

    // Initialize TomTom Map
    const coords = await getCoords(prop.location);
    initPropertyMap(coords);
}

function closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    modal.classList.remove('open');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

async function getCoords(address) {
    try {
        const response = await fetch(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(address)}.json?key=${TOMTOM_KEY}`);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            return data.results[0].position;
        }
    } catch (e) { console.error(e); }
    return { lat: 11.0168, lon: 76.9558 }; // Fallback to Coimbatore
}

function initPropertyMap(position) {
    if (detailMap) detailMap.remove();

    detailMap = tt.map({
        key: TOMTOM_KEY,
        container: 'property-map',
        center: [position.lon, position.lat],
        zoom: 15,
        theme: 'main',
        style: 'dark'
    });

    new tt.Marker({ color: '#c084fc' }).setLngLat([position.lon, position.lat]).addTo(detailMap);
}

// Updated Add Property Logic with Backend Post
document.getElementById('add-property-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('prop-title').value;
    const location = document.getElementById('prop-location').value;
    const type = document.getElementById('prop-type').value;
    const price = parseInt(document.getElementById('prop-price').value);
    const beds = document.getElementById('prop-beds').value;
    const baths = document.getElementById('prop-baths').value;
    const ownerName = document.getElementById('prop-owner-name').value;
    const ownerUpi = document.getElementById('prop-owner-upi').value;
    const imageInput = document.getElementById('prop-image').value;
    const advance = document.getElementById('prop-advance').value;
    const proofDoc = document.getElementById('prop-proof').value;
    const fileInput = document.getElementById('prop-upload');

    let finalImage = imageInput || imagePool[Math.floor(Math.random() * imagePool.length)];

    // Simulate local file upload by using a placeholder if files are selected
    if (fileInput.files && fileInput.files.length > 0) {
        // In a real app, this would be a URL.createObjectURL or a server upload
        finalImage = "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
        alert("Photo imported from mobile gallery!");
    }

    const propertyData = {
        title, location, type, price, beds, baths, ownerName, ownerUpi, advance,
        image: finalImage, proofDoc,
        userId: currentUser ? currentUser.id : null
    };

    // --- DEMO SIMULATION START ---
    // Update local state immediately for instant feedback
    const newProp = {
        ...propertyData,
        id: properties.length + 101,
        rating: "5.0",
        bookings: 0,
        status: 'pending'
    };
    userListings.unshift(newProp);

    // Refresh UI
    renderDashboardListings();

    closeAddPropertyModal();
    fireConfetti();
    alert(`Property "${title}" Successfully Listed! It is now pending admin verification.`);

    // Reset form and UI
    document.getElementById('add-property-form').reset();
    const dropMsg = document.querySelector('.drop-msg');
    if (dropMsg) {
        dropMsg.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i><span>Drag & Drop or Click to Browse</span>';
        dropMsg.style.color = 'var(--text-muted)';
    }
    // --- DEMO SIMULATION END ---

    try {
        // Attempt background sync if server is available
        fetch(`${API_URL}/properties`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(propertyData)
        }).catch(err => console.warn("Background sync failed, staying in local session mode."));
    } catch (err) {
        // Errors handled by catch above
    }
});


// File input feedback
document.getElementById('prop-upload')?.addEventListener('change', function (e) {
    const files = e.target.files;
    const dropMsg = document.querySelector('.drop-msg');
    if (dropMsg && files.length > 0) {
        dropMsg.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981; opacity: 1;"></i>
                             <span style="color: #10b981; font-weight: 700;">${files.length} Photo${files.length > 1 ? 's' : ''} Attached Successfully!</span>`;
    } else if (dropMsg) {
        dropMsg.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i><span>Drag & Drop or Click to Browse</span>';
    }
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved session
    const savedUser = localStorage.getItem('rentease_user');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            updateNavForAuth();
            fetchUserProperties();
        } catch(e) {
            console.warn("Invalid saved session");
            localStorage.removeItem('rentease_user');
        }
    }

    fetchProperties();
    initHeroAnimation();
    initMouseParallax();
});

// Creative Mouse Parallax for Hero
function initMouseParallax() {
    const hero = document.querySelector('.hero');
    const searchContainer = document.querySelector('.search-container');
    const headline = document.querySelector('.hero-headline');

    if (!hero) return;

    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = (clientX - centerX) / 50;
        const moveY = (clientY - centerY) / 50;

        if (searchContainer) {
            searchContainer.style.transform = `translateY(0) translate(${moveX}px, ${moveY}px)`;
        }
        if (headline) {
            headline.style.transform = `translate(${moveX * -0.5}px, ${moveY * -0.5}px)`;
        }
    });

    // Reset on leave
    hero.addEventListener('mouseleave', () => {
        if (searchContainer) searchContainer.style.transform = '';
        if (headline) headline.style.transform = '';
    });
}


// 3D Vanta Background Logic
function initHeroAnimation() {
    // Check if libraries are loaded
    if (typeof VANTA !== 'undefined') {
        VANTA.BIRDS({
            el: "body",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x09090b, // var(--dark)
            color1: 0xd4af37, // var(--primary)
            color2: 0x1e293b,
            birdSize: 1.50,
            wingSpan: 20.00,
            separation: 50.00,
            alignment: 20.00,
            cohesion: 20.00,
            quantity: 3.00
        });
    }
}


// AI Chatbot Logic
function toggleChatbot() {
    const body = document.getElementById('chatbot-body');
    const icon = document.getElementById('chatbot-toggle-icon');

    if (body.classList.contains('hidden')) {
        body.classList.remove('hidden');
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    } else {
        body.classList.add('hidden');
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    }
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    const text = input.value.trim();

    if (!text) return;

    // Add User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.innerText = text;
    messages.appendChild(userMsg);

    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Simulate AI Response
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'message bot';

        // Simple keyword logic
        const lowerText = text.toLowerCase();
        if (lowerText.includes('chennai')) {
            botMsg.innerText = "I have some great premium properties in Chennai. Would you prefer OMR or Anna Nagar?";
        } else if (lowerText.includes('price') || lowerText.includes('cost')) {
            botMsg.innerText = "Prices vary by region and type. Luxury stays are around ₹900/night, while student PGs start at ₹150/night.";
        } else {
            botMsg.innerText = "I can help you find properties, answer questions about bookings, or guide you on listing your own place. How can I help today?";
        }

        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
}

// Allow Enter key in chat input
document.getElementById('chat-input')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

// ============================================
// BACKGROUND IMAGE SLIDESHOW — Auto Rotate
// ============================================
(function initBgSlideshow() {
    const slides = document.querySelectorAll('.bg-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    const interval = 6000; // 6 seconds per slide

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, interval);
})();

// ============================================
// PARALLAX SCROLL EFFECT — House Divider
// ============================================
(function initParallax() {
    const parallaxImg = document.querySelector('.parallax-house-img');
    if (!parallaxImg) return;

    window.addEventListener('scroll', () => {
        const divider = document.querySelector('.house-parallax-divider');
        if (!divider) return;

        const rect = divider.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Only apply parallax when the divider is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
            const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
            const translateY = -50 + (scrollProgress * 100);
            parallaxImg.style.transform = `translateY(${translateY * 0.3}px)`;
        }
    }, { passive: true });
})();

// ============================================
// HERO HOUSE IMAGE — Dynamic Opacity on Scroll
// ============================================
(function initHeroParallax() {
    const heroBgImage = document.querySelector('.hero-bg-image');
    if (!heroBgImage) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroHeight = document.querySelector('.hero')?.offsetHeight || 800;

        // Fade out the hero house image as user scrolls down
        const opacity = Math.max(0.05, 0.25 - (scrollY / heroHeight) * 0.25);
        heroBgImage.style.opacity = opacity;
    }, { passive: true });
})();