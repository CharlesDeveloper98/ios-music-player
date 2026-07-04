// --- Navigation & Tab Logic ---
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

// --- Profile Interaction ---
function initProfileInteraction() {
    const profiles = document.querySelectorAll('.profile-container');
    profiles.forEach(profile => {
        // Only open settings on click
        profile.onclick = (e) => {
            // Ensure we don't trigger if the click was actually a hold/contextmenu
            openSettings();
        };
        
        // Trigger file select ONLY on hold
        profile.oncontextmenu = (e) => {
            e.preventDefault();
            document.getElementById('photo-upload').click();
        };
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

// Ensure sub-pages handle taps correctly
function openSubPage(id) { 
    const page = document.getElementById(id);
    if(page) page.classList.add('active'); 
}

function closeSubPage(id) { 
    document.getElementById(id).classList.remove('active'); 
}

// --- Tab Swiping ---
const tabContainer = document.getElementById('tab-container');
tabContainer.addEventListener('touchend', (e) => {
    const touchX = e.changedTouches[0].clientX - tabContainer.getBoundingClientRect().left;
    const tabWidth = tabContainer.offsetWidth / 3;
    const index = Math.max(0, Math.min(2, Math.floor(touchX / tabWidth)));
    const pages = ['page-home', 'page-new', 'page-library'];
    const navItems = document.querySelectorAll('.main-tabs .nav-item');
    showPage(pages[index], navItems[index], index);
});

window.addEventListener('DOMContentLoaded', () => {
    initProfileInteraction();
    renderMenu();
});

function previewFile(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const dataUrl = e.target.result;
            localStorage.setItem('profilePic', dataUrl);
            document.querySelectorAll('.profile-container').forEach(c => {
                c.innerHTML = `<img src="${dataUrl}" class="profile-img">`;
            });
        };
        reader.readAsDataURL(file);
    }
}

// --- Settings & UI Pages ---
function setTheme(theme) {
    localStorage.setItem('app-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    const label = document.getElementById('theme-label');
    if (label) label.innerText = theme.charAt(0).toUpperCase() + theme.slice(1);
    document.getElementById('theme-options').classList.remove('show');
}

function toggleThemeMenu() {
    const options = document.getElementById('theme-options');
    if(options) options.classList.toggle('show');
}

function openSubPage(id) { document.getElementById(id).classList.add('active'); }
function closeSubPage(id) { document.getElementById(id).classList.remove('active'); }

// --- Library Edit Mode ---
let hiddenItems = JSON.parse(localStorage.getItem('hiddenLibrary')) || ['tv-movies', 'music-videos', 'genres', 'compilations', 'composers'];

function renderMenu() {
    const menu = document.querySelector('.library-menu');
    if (!menu) return;
    const isEditing = menu.classList.contains('editing-mode');
    document.querySelectorAll('.menu-item').forEach(item => {
        const id = item.getAttribute('data-id');
        const isHidden = hiddenItems.includes(id);
        item.querySelectorAll('.status-icon').forEach(icon => icon.remove());
        if (isEditing) {
            const icon = document.createElement('div');
            icon.className = `status-icon ${isHidden ? 'plus' : 'minus'}`;
            icon.innerText = isHidden ? '+' : '-';
            item.prepend(icon);
            item.style.display = 'flex';
        } else {
            item.style.display = isHidden ? 'none' : 'flex';
        }
    });
}

// Add to renderMenu or initialization
function setupDragAndDrop() {
    const menu = document.querySelector('.library-menu');
    let draggedItem = null;

    menu.addEventListener('dragstart', (e) => {
        if (!menu.classList.contains('editing-mode')) return;
        draggedItem = e.target.closest('.menu-item');
        e.dataTransfer.effectAllowed = 'move';
    });

    menu.addEventListener('dragover', (e) => {
        e.preventDefault();
        const targetItem = e.target.closest('.menu-item');
        if (!targetItem || targetItem === draggedItem) return;

        const allItems = Array.from(menu.querySelectorAll('.menu-item'));
        const index = allItems.indexOf(targetItem);
        const draggedIndex = allItems.indexOf(draggedItem);

        // Constraint: Uppermost cannot move up, Downmost cannot move down
        if (index === 0 && draggedIndex > 0) {
            menu.insertBefore(draggedItem, allItems[0]);
        } else if (index === allItems.length - 1 && draggedIndex < allItems.length - 1) {
            menu.appendChild(draggedItem);
        } else {
            // Standard drag
            const rect = targetItem.getBoundingClientRect();
            const midpoint = rect.top + rect.height / 2;
            if (e.clientY < midpoint) {
                menu.insertBefore(draggedItem, targetItem);
            } else {
                menu.insertBefore(draggedItem, targetItem.nextSibling);
            }
        }
    });
}

function toggleEdit() {
    const menu = document.querySelector('.library-menu');
    const isEditing = menu.classList.toggle('editing-mode');
    
    // Toggle visibility and add draggable attribute to items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.setAttribute('draggable', isEditing);
        const action = item.querySelector('.edit-action');
        // Logic to inject the plus/minus as seen in 1001006752.jpg
        action.innerHTML = isEditing ? `<div class="status-icon ${hiddenItems.includes(item.dataset.id) ? 'plus' : 'minus'}">
            ${hiddenItems.includes(item.dataset.id) ? '+' : '-'}</div>` : '';
    });
    
    lucide.createIcons();
}





// --- Library Event Listener ---
const libMenu = document.querySelector('.library-menu');
if (libMenu) {
    libMenu.addEventListener('click', (e) => {
        if (!libMenu.classList.contains('editing-mode')) return;
        const icon = e.target.closest('.status-icon');
        if (!icon) return;
        const item = icon.closest('.menu-item');
        const id = item.getAttribute('data-id');
        hiddenItems = hiddenItems.includes(id) ? hiddenItems.filter(i => i !== id) : [...hiddenItems, id];
        localStorage.setItem('hiddenLibrary', JSON.stringify(hiddenItems));
        renderMenu();
    });
}

// --- Tab Logic & Init ---
window.addEventListener('DOMContentLoaded', () => {
    // Load Profile
    const savedImg = localStorage.getItem('profilePic');
    if (savedImg) {
        document.querySelectorAll('.profile-container').forEach(c => {
            c.innerHTML = `<img src="${savedImg}" class="profile-img">`;
        });
    }

    initProfileInteraction();

    const selector = document.getElementById('active-selector');
    const container = document.getElementById('tab-container');
    if (container) {
        selector.style.width = `${(container.offsetWidth / 3) - 10}px`;
        selector.style.left = "5px";
    }
    renderMenu();
    lucide.createIcons();
});
