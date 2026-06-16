const API_URL = 'http://localhost:5000/api';

let adminUsers = [];
let adminProperties = [];

// Navigation Logic
function switchAdminSection(sectionId, btnElement) {
    document.querySelectorAll('.admin-nav-item').forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
    document.getElementById(`sec-${sectionId}`).classList.add('active');
}

// Fetch Data
async function fetchAdminData() {
    try {
        const [usersRes, propsRes] = await Promise.all([
            fetch(`${API_URL}/users`),
            fetch(`${API_URL}/properties?all=true`)
        ]);

        if (usersRes.ok) adminUsers = await usersRes.json();
        if (propsRes.ok) adminProperties = await propsRes.json();

        updateDashboardStats();
        renderUsersTable();
        renderPropertiesTable('all');

    } catch (err) {
        console.error("Failed to fetch admin data", err);
        alert("Cannot connect to backend server.");
    }
}

function updateDashboardStats() {
    document.getElementById('stat-total-users').innerText = adminUsers.length;
    
    const active = adminProperties.filter(p => p.status !== 'pending').length;
    const pending = adminProperties.filter(p => p.status === 'pending').length;

    document.getElementById('stat-active-props').innerText = active;
    document.getElementById('stat-pending-props').innerText = pending;
}

function renderUsersTable() {
    const tbody = document.getElementById('admin-users-tbody');
    if (adminUsers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">No users registered yet.</td></tr>';
        return;
    }

    tbody.innerHTML = adminUsers.map((u, i) => `
        <tr>
            <td>#USR-${u.id.toString().slice(-4)}</td>
            <td><strong>${u.fullName}</strong></td>
            <td>${u.email}</td>
            <td>${u.mobile}</td>
        </tr>
    `).join('');
}

function renderPropertiesTable(filterStatus = 'all') {
    const tbody = document.getElementById('admin-props-tbody');
    
    let filtered = adminProperties;
    if (filterStatus !== 'all') {
        filtered = adminProperties.filter(p => 
            (filterStatus === 'pending' && p.status === 'pending') || 
            (filterStatus === 'verified' && p.status !== 'pending')
        );
    }

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No properties found.</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(p => `
        <tr>
            <td>
                <div class="property-cell">
                    <img src="${p.image}" alt="Property" onerror="this.src='hero-villa.png'">
                    <div class="property-cell-info">
                        <strong>${p.title}</strong>
                        <span><i class="fa-solid fa-location-dot"></i> ${p.location}</span>
                        ${p.proofDoc ? `<a href="${p.proofDoc}" target="_blank" style="display:inline-block; margin-top:5px; font-size:0.75rem; color:var(--primary); text-decoration:none;"><i class="fa-solid fa-file-contract"></i> View Proof Document</a>` : '<span style="display:inline-block; margin-top:5px; font-size:0.75rem; color:#ef4444;"><i class="fa-solid fa-triangle-exclamation"></i> No Proof Provided</span>'}
                    </div>
                </div>
            </td>
            <td><span style="text-transform: capitalize;">${p.type}</span></td>
            <td><strong>₹${p.price}</strong></td>
            <td>${p.ownerName}</td>
            <td>
                <span class="status-badge ${p.status === 'pending' ? 'status-pending' : 'status-verified'}">
                    ${p.status === 'pending' ? 'Pending' : 'Verified'}
                </span>
            </td>
            <td>
                ${p.status === 'pending' ? `
                    <div class="action-btns">
                        <button class="btn-approve" onclick="verifyProperty(${p.id})"><i class="fa-solid fa-check"></i> Approve</button>
                        <button class="btn-reject" onclick="rejectProperty(${p.id})"><i class="fa-solid fa-xmark"></i> Reject</button>
                    </div>
                ` : `
                    <button class="btn-reject" onclick="rejectProperty(${p.id})"><i class="fa-solid fa-trash"></i> Delete</button>
                `}
            </td>
        </tr>
    `).join('');
}

function filterAdminProps(status, btnElement) {
    document.querySelectorAll('#sec-properties .filter-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    renderPropertiesTable(status);
}

// Actions
async function verifyProperty(id) {
    if (!confirm('Are you sure you want to verify and publish this property?')) return;
    
    try {
        const res = await fetch(`${API_URL}/properties/${id}/verify`, { method: 'PUT' });
        if (res.ok) {
            alert('Property verified successfully!');
            fetchAdminData();
        } else {
            alert('Failed to verify property.');
        }
    } catch (err) {
        console.error(err);
    }
}

async function rejectProperty(id) {
    if (!confirm('Are you sure you want to delete/reject this property? This action cannot be undone.')) return;
    
    try {
        const res = await fetch(`${API_URL}/properties/${id}`, { method: 'DELETE' });
        if (res.ok) {
            alert('Property removed successfully!');
            fetchAdminData();
        } else {
            alert('Failed to delete property.');
        }
    } catch (err) {
        console.error(err);
    }
}

// Init
document.addEventListener('DOMContentLoaded', fetchAdminData);
