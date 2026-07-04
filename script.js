// --- Navigation & Tab Logic ---
function showPage(pageId, element, index) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if (element) element.classList.add('active');

    const selector = document.getElementById('active-selector');
    // If index is 3 (Search), hide the selector
    if (selector && index !== undefined && index <= 2) {
        const container = document.getElementById('tab-container');
        const tabWidth = container.offsetWidth / 3;
        selector.style.left = `${(index * tabWidth) + 5}px`;
        selector.style.width = `${tabWidth - 10}px`;
        selector.style.opacity = "1";
    } else if (selector) {
        selector.style.opacity = "0";
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
        
        // Update visibility and "dull" state
        item.classList.toggle('dull', isHidden && !isEditing);
        item.style.display = (isHidden && !isEditing) ? 'none' : 'flex';
        
        // Update edit controls
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

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    initProfileInteraction();
    renderMenu();
    lucide.createIcons();
});
