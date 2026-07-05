// --- Persistent Reorder Logic ---
function saveOrder() {
    const items = [...document.querySelectorAll('.menu-item')];
    const order = items.map(item => item.dataset.id);
    localStorage.setItem('libraryOrder', JSON.stringify(order));
}

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    // Load Library Order
    const savedOrder = JSON.parse(localStorage.getItem('libraryOrder'));
    const menu = document.getElementById('library-menu');
    if (savedOrder && menu) {
        savedOrder.forEach(id => {
            const item = menu.querySelector(`[data-id="${id}"]`);
            if (item) menu.appendChild(item);
        });
    }

    // Initialize UI features
    initProfileInteraction();
    renderMenu();
    lucide.createIcons();
    
    // Set default page and liquid tabs
    showPage('page-home', document.querySelector('.nav-item'), 0);
    initDragTabs();
});



let permissions = { notification: false, music: false };

function togglePermission(type) {
    permissions[type] = true;
    const btn = document.querySelector(`#${type}-block .action-btn`);
    btn.innerText = "Accessed";
    btn.classList.add('accessed');
    
    // Check if both are allowed to enable continue button
    if (permissions.notification && permissions.music) {
        const contBtn = document.getElementById('continue-btn');
        contBtn.classList.remove('disabled');
        contBtn.disabled = false;
    }
}





// On Load: Check Permissions
window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('permissionsGranted')) {
        document.getElementById('permission-overlay').classList.remove('hidden');
    }
});

function grantPermission(type) {
    // Logic to handle permission
    document.getElementById(`${type}-popup`).style.display = 'none';
    if (document.querySelectorAll('.glass-popup[style*="display: none"]').length === 2) {
        localStorage.setItem('permissionsGranted', 'true');
        document.getElementById('permission-overlay').style.display = 'none';
    }
}

// Navigate to Songs Detail
function openSongs() {
    const page = document.getElementById('page-songs-detail');
    page.classList.add('active');
    renderSongs();
}

function renderSongs() {
    const songs = [
        { title: "All I Ask", artist: "Adele" },
        { title: "Hello", artist: "Adele" },
        { title: "I Miss You", artist: "Adele" }
    ].sort((a, b) => a.title.localeCompare(b.title));

    const list = document.getElementById('song-list');
    list.innerHTML = songs.map(song => `
        <div class="song-item" onclick="playSong('${song.title}')">
            <div class="song-art"></div>
            <div>
                <div class="title">${song.title}</div>
                <div class="artist">${song.artist}</div>
            </div>
        </div>
    `).join('');
}


function openSongsPage() {
    const songs = [/* Your music data */].sort((a, b) => a.title.localeCompare(b.title));
    const container = document.getElementById('song-list-container');
    
    // Grouping by letter for alphabetical rendering
    container.innerHTML = songs.map(song => `
        <div class="song-row" onclick="play('${song.url}')">
            <img src="${song.art}" class="thumb">
            <div class="info">
                <div class="title">${song.title}</div>
                <div class="artist">${song.artist}</div>
            </div>
        </div>
    `).join('');
}






// --- Liquid Tab Selector Logic ---
function showPage(pageId, element, index) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    updateSelector(index);
}

function updateSelector(index) {
    const selector = document.getElementById('active-selector');
    const container = document.getElementById('tab-container');
    
    if (index <= 2) { // Only show/move on Home, New, Library
        selector.style.opacity = "1";
        const tabWidth = container.offsetWidth / 3;
        selector.style.left = `${(index * tabWidth) + 5}px`;
        selector.style.width = `${tabWidth - 10}px`;
    } else {
        selector.style.opacity = "0"; // Disappear on Search
    }
}

// Liquid Drag Logic
function initDragTabs() {
    const selector = document.getElementById('active-selector');
    let isDragging = false;

    const startDrag = () => {
        isDragging = true;
        selector.classList.add('dragging');
    };

    const stopDrag = () => {
        isDragging = false;
        selector.classList.remove('dragging');
    };

    selector.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', stopDrag);
    // Add touch support for mobile
    selector.addEventListener('touchstart', startDrag);
    window.addEventListener('touchend', stopDrag);
}

// --- Library Edit & Drag Logic ---
let hiddenItems = JSON.parse(localStorage.getItem('hiddenLibrary')) || [];

function renderMenu() {
    const menu = document.getElementById('library-menu');
    if (!menu) return;
    const isEditing = menu.classList.contains('editing-mode');
    
    document.querySelectorAll('.menu-item').forEach(item => {
        const id = item.dataset.id;
        const isHidden = hiddenItems.includes(id);
        const action = item.querySelector('.edit-action');
        
        item.classList.toggle('dull', isHidden && !isEditing);
        item.style.display = (isHidden && !isEditing) ? 'none' : 'flex';
        
        action.innerHTML = isEditing ? 
            `<div class="status-icon ${isHidden ? 'plus' : 'minus'}">${isHidden ? '+' : '-'}</div>` : '';
        item.setAttribute('draggable', isEditing);
    });
}

function toggleEdit() {
    const menu = document.getElementById('library-menu');
    const btn = document.getElementById('edit-text');
    const isEditing = menu.classList.toggle('editing-mode');
    btn.innerText = isEditing ? 'Done' : 'Edit';
    renderMenu();
}

// Drag & Drop
const menu = document.getElementById('library-menu');
let draggedItem = null;

if (menu) {
    menu.addEventListener('dragstart', (e) => {
        draggedItem = e.target.closest('.menu-item');
        draggedItem.classList.add('dragging');
    });

    menu.addEventListener('dragend', () => {
        draggedItem.classList.remove('dragging');
        saveOrder(); // Save position after dropping
    });

    menu.addEventListener('dragover', (e) => {
        e.preventDefault();
        const target = e.target.closest('.menu-item');
        if (!target || target === draggedItem) return;

        const items = [...menu.querySelectorAll('.menu-item')];
        const after = items.indexOf(target) > items.indexOf(draggedItem) ? target.nextSibling : target;
        menu.insertBefore(draggedItem, after);
    });

    menu.addEventListener('click', (e) => {
        const icon = e.target.closest('.status-icon');
        if (!icon) return;
        const id = icon.closest('.menu-item').dataset.id;
        hiddenItems = hiddenItems.includes(id) ? hiddenItems.filter(i => i !== id) : [...hiddenItems, id];
        localStorage.setItem('hiddenLibrary', JSON.stringify(hiddenItems));
        renderMenu();
    });
}

// --- Profile & Settings ---
function initProfileInteraction() {
    const profiles = document.querySelectorAll('.profile-container');
    profiles.forEach(profile => {
        profile.onclick = () => openSettings();
    });
}

function openSettings() { 
    document.getElementById('page-settings').classList.add('active');
    document.body.classList.add('settings-open');
}

function closeSettings() { 
    document.getElementById('page-settings').classList.remove('active');
    document.body.classList.remove('settings-open');
}

// Add this at the bottom of your script
lucide.createIcons();
