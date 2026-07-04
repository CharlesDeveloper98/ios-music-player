// --- Navigation & Tab Logic ---
function showPage(pageId, element, index) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    if (element) {
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        element.classList.add('active');
    }

    const selector = document.getElementById('active-selector');
    if (selector && index !== undefined) {
        const container = document.getElementById('tab-container');
        const tabWidth = container.offsetWidth / 3;
        selector.style.left = `${(index * tabWidth) + 5}px`;
        selector.style.width = `${tabWidth - 10}px`;
        selector.style.opacity = "1";
    }
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
    });

    menu.addEventListener('dragover', (e) => {
        e.preventDefault();
        const target = e.target.closest('.menu-item');
        if (!target || target === draggedItem) return;

        const items = [...menu.querySelectorAll('.menu-item')];
        const dragIdx = items.indexOf(draggedItem);
        const targetIdx = items.indexOf(target);

        if (targetIdx === 0 || targetIdx === items.length - 1) return; // Optional constraint
        
        const after = targetIdx > dragIdx ? target.nextSibling : target;
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
        profile.oncontextmenu = (e) => { e.preventDefault(); document.getElementById('photo-upload').click(); };
    });
}

function openSettings() { document.getElementById('page-settings').classList.add('active'); }
function closeSettings() { document.getElementById('page-settings').classList.remove('active'); }

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    initProfileInteraction();
    renderMenu();
    
    // Tab Swipe Setup
    const tabContainer = document.getElementById('tab-container');
    if (tabContainer) {
        tabContainer.addEventListener('touchend', (e) => {
            const touchX = e.changedTouches[0].clientX - tabContainer.getBoundingClientRect().left;
            const index = Math.floor(touchX / (tabContainer.offsetWidth / 3));
            const pages = ['page-home', 'page-new', 'page-library'];
            const navItems = document.querySelectorAll('.nav-item');
            showPage(pages[index], navItems[index], index);
        });
    }

    lucide.createIcons();
});
