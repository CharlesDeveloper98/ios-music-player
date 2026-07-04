// --- Navigation Logic ---
function showPage(pageId, element, index) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    if (element) {
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        element.classList.add('active');
    }

    const selector = document.getElementById('active-selector');
    if (index !== undefined && index <= 2) {
        const container = document.getElementById('tab-container');
        const tabWidth = container.offsetWidth / 3;
        selector.style.left = `${(index * tabWidth) + 5}px`;
        selector.style.width = `${tabWidth - 10}px`;
        selector.style.opacity = "1";
    } else {
        selector.style.opacity = "0";
    }
}

// --- Updated Profile Interaction ---
function initProfileInteraction() {
    const profiles = document.querySelectorAll('.profile-container');
    profiles.forEach(profile => {
        // Tap to open settings
        profile.addEventListener('click', () => openSettings());
        
        // Hold to prompt image upload
        profile.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            document.getElementById('photo-upload').click();
        });
    });
}

function openSettings() {
    const settings = document.getElementById('page-settings');
    settings.classList.add('active');
    document.body.classList.add('settings-open');
    lucide.createIcons();
}

function closeSettings() {
    const settings = document.getElementById('page-settings');
    settings.classList.remove('active');
    document.body.classList.remove('settings-open');
}

// Call initProfileInteraction inside your DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...
    initProfileInteraction();
});


// --- Library Edit Mode Logic ---
let hiddenItems = JSON.parse(localStorage.getItem('hiddenLibrary')) || ['tv-movies', 'music-videos', 'genres', 'compilations', 'composers'];

function renderMenu() {
    const menu = document.querySelector('.library-menu');
    if (!menu) return;
    
    const isEditing = menu.classList.contains('editing-mode');
    
    document.querySelectorAll('.menu-item').forEach(item => {
        const id = item.getAttribute('data-id');
        const isHidden = hiddenItems.includes(id);
        
        // 1. Remove ONLY the status icons we injected
        item.querySelectorAll('.status-icon').forEach(icon => icon.remove());

        if (isEditing) {
            // 2. Add exactly one icon
            const icon = document.createElement('div');
            icon.className = `status-icon ${isHidden ? 'plus' : 'minus'}`;
            icon.innerText = isHidden ? '+' : '-';
            item.prepend(icon);
            item.style.display = 'flex';
        } else {
            // 3. Normal mode: respect hidden state
            item.style.display = isHidden ? 'none' : 'flex';
        }
    });
}


function toggleEdit() {
    const menu = document.querySelector('.library-menu');
    const btn = document.getElementById('edit-text');
    menu.classList.toggle('editing-mode');
    btn.innerText = menu.classList.contains('editing-mode') ? 'Done' : 'Edit';
    renderMenu();
}

// --- Event Listeners ---
document.querySelector('.library-menu').addEventListener('click', (e) => {
    if (!document.querySelector('.library-menu').classList.contains('editing-mode')) return;
    
    const icon = e.target.closest('.status-icon');
    if (!icon) return;

    const item = icon.closest('.menu-item');
    const id = item.getAttribute('data-id');
    
    if (hiddenItems.includes(id)) {
        hiddenItems = hiddenItems.filter(i => i !== id);
    } else {
        hiddenItems.push(id);
    }
    
    localStorage.setItem('hiddenLibrary', JSON.stringify(hiddenItems));
    renderMenu();
});

// --- Tab Swiping/Dragging Logic ---
const tabContainer = document.getElementById('tab-container');
const selector = document.getElementById('active-selector');
let isDragging = false;

tabContainer.addEventListener('touchstart', () => { isDragging = true; selector.classList.add('expanded'); });

tabContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touchX = e.touches[0].clientX - tabContainer.getBoundingClientRect().left;
    const tabWidth = tabContainer.offsetWidth / 3;
    const index = Math.max(0, Math.min(2, Math.floor(touchX / tabWidth)));
    selector.style.left = `${(index * tabWidth) + 5}px`;
});

tabContainer.addEventListener('touchend', (e) => {
    isDragging = false;
    selector.classList.remove('expanded');
    const touchX = e.changedTouches[0].clientX - tabContainer.getBoundingClientRect().left;
    const tabWidth = tabContainer.offsetWidth / 3;
    const index = Math.max(0, Math.min(2, Math.floor(touchX / tabWidth)));
    const pages = ['page-home', 'page-new', 'page-library'];
    const navItems = document.querySelectorAll('.main-tabs .nav-item');
    showPage(pages[index], navItems[index], index);
});

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('active-selector');
    const container = document.getElementById('tab-container');
    selector.style.width = `${(container.offsetWidth / 3) - 10}px`;
    selector.style.left = "5px";
    
    renderMenu();
    lucide.createIcons();
});
