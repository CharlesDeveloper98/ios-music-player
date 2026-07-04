let hiddenItems = JSON.parse(localStorage.getItem('hiddenLibrary')) || [];
let menuOrder = JSON.parse(localStorage.getItem('libraryOrder')) || null;

function showPage(pageId, element, index) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if (element) element.classList.add('active');

    const selector = document.getElementById('active-selector');
    const container = document.getElementById('tab-container');
    if (selector && container) {
        const tabWidth = container.offsetWidth / 3;
        selector.style.left = `${(index * tabWidth) + 5}px`;
        selector.style.width = `${tabWidth - 10}px`;
        selector.style.opacity = "1";
    }
}

function renderMenu() {
    const menu = document.getElementById('library-menu');
    const isEditing = menu.classList.contains('editing-mode');
    const items = Array.from(menu.querySelectorAll('.menu-item'));
    
    // Apply Order
    if (menuOrder) {
        menuOrder.forEach(id => {
            const item = items.find(i => i.dataset.id === id);
            if (item) menu.appendChild(item);
        });
    }

    items.forEach(item => {
        const id = item.dataset.id;
        const isHidden = hiddenItems.includes(id);
        const action = item.querySelector('.edit-action');
        
        item.classList.toggle('dull', isHidden && !isEditing);
        item.style.display = (isHidden && !isEditing) ? 'none' : 'flex';
        
        action.innerHTML = isEditing ? 
            `<div class="status-icon ${isHidden ? 'plus' : 'minus'}">${isHidden ? '+' : '-'}</div>` : '';
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
let draggedItem = null;
const menu = document.getElementById('library-menu');
menu.addEventListener('dragstart', (e) => { draggedItem = e.target.closest('.menu-item'); });
menu.addEventListener('dragover', (e) => {
    e.preventDefault();
    const target = e.target.closest('.menu-item');
    if (!target || target === draggedItem) return;
    const after = [...menu.querySelectorAll('.menu-item')].indexOf(target) > [...menu.querySelectorAll('.menu-item')].indexOf(draggedItem) ? target.nextSibling : target;
    menu.insertBefore(draggedItem, after);
});
menu.addEventListener('dragend', () => {
    menuOrder = [...menu.querySelectorAll('.menu-item')].map(i => i.dataset.id);
    localStorage.setItem('libraryOrder', JSON.stringify(menuOrder));
});

// Click for +/-
menu.addEventListener('click', (e) => {
    const icon = e.target.closest('.status-icon');
    if (!icon) return;
    const id = icon.closest('.menu-item').dataset.id;
    hiddenItems = hiddenItems.includes(id) ? hiddenItems.filter(i => i !== id) : [...hiddenItems, id];
    localStorage.setItem('hiddenLibrary', JSON.stringify(hiddenItems));
    renderMenu();
});

window.addEventListener('DOMContentLoaded', () => {
    // Initial Setup
    const homeTab = document.querySelector('.nav-item');
    showPage('page-home', homeTab, 0);
    renderMenu();
    lucide.createIcons();
});
