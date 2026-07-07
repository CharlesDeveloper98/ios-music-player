// --- Global Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize state in localStorage if it doesn't exist
    if (!localStorage.getItem('libraryState')) {
        const initialState = Array.from(document.querySelectorAll('.menu-item')).map(item => ({
            id: item.getAttribute('data-id'),
            visible: true
        }));
        localStorage.setItem('libraryState', JSON.stringify(initialState));
    }
    
    // 2. Initial render of the library
    applyLibraryState();
    
    // 3. Initialize icons
    lucide.createIcons();
});

// --- State Management ---
function applyLibraryState() {
    const state = JSON.parse(localStorage.getItem('libraryState'));
    const menu = document.getElementById('library-menu');
    
    // Apply order and visibility
    state.forEach(itemState => {
        const item = document.querySelector(`.menu-item[data-id="${itemState.id}"]`);
        if (!item) return;

        // Apply visibility class for CSS control
        item.classList.toggle('hidden-item', !itemState.visible);
        
        // Update tick icon based on visibility
        const icon = item.querySelector('.edit-circle');
        icon.setAttribute('data-lucide', itemState.visible ? 'check-circle-2' : 'circle');
        
        // Append in the saved order
        menu.appendChild(item);
    });
    lucide.createIcons();
}

function saveLibraryState() {
    const items = Array.from(document.querySelectorAll('.menu-item'));
    const state = items.map(item => ({
        id: item.getAttribute('data-id'),
        visible: !item.classList.contains('hidden-item')
    }));
    
    localStorage.setItem('libraryState', JSON.stringify(state));
    applyLibraryState();
}

// --- Interaction Logic ---
function toggleEditMode(isEditing) {
    const libraryPage = document.getElementById('page-library');
    const menu = document.getElementById('library-menu');
    
    // Close popup menu
    const popup = document.getElementById('popup-menu');
    if (popup.classList.contains('show')) {
        popup.classList.remove('show');
        setTimeout(() => { popup.style.display = 'none'; }, 250);
    }

    if (isEditing) {
        libraryPage.classList.add('editing');
        
        // Initialize Sortable for reordering
        new Sortable(menu, {
            handle: '.reorder-handle',
            animation: 200,
            onEnd: saveLibraryState // Save order when dropped
        });
    } else {
        libraryPage.classList.remove('editing');
        saveLibraryState();
    }
}

function toggleTick(element) {
    element.classList.toggle('hidden-item');
    const icon = element.querySelector('.edit-circle');
    const isVisible = !element.classList.contains('hidden-item');
    icon.setAttribute('data-lucide', isVisible ? 'check-circle-2' : 'circle');
    lucide.createIcons();
}

// --- Navigation & Other Utilities ---
function showPage(pageId, element, index) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    const selector = document.getElementById('active-selector');
    if (index <= 2) {
        const container = document.getElementById('tab-container');
        const tabWidth = container.offsetWidth / 3;
        selector.style.left = `${(index * tabWidth) + 5}px`;
        selector.style.width = `${tabWidth - 10}px`;
        selector.style.opacity = "1";
    } else {
        selector.style.opacity = "0";
    }
}

function togglePopup() {
    const menu = document.getElementById('popup-menu');
    const overlay = document.getElementById('popup-overlay');

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.display = 'none';
            overlay.style.display = 'none';
        }, 250);
    } else {
        overlay.style.display = 'block';
        menu.style.display = 'block';
        setTimeout(() => { menu.classList.add('show'); }, 10);
    }
}

function backToLibrary() {
    document.getElementById('page-detail').classList.remove('active');
    document.getElementById('page-library').classList.add('active');
}

// --- Touch Handlers ---
const tabContainer = document.getElementById('tab-container');
const selector = document.getElementById('active-selector');
let isDragging = false;

if (tabContainer) {
    tabContainer.addEventListener('touchstart', () => { isDragging = true; selector.classList.add('expanded'); });
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
}
