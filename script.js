// --- Global Variables ---
let sortableInstance = null;

// --- Page Navigation Logic ---
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

// --- Initialization on Load ---
document.addEventListener('DOMContentLoaded', () => {
    // Restore Saved Library Order
    const savedOrder = JSON.parse(localStorage.getItem('libraryOrder'));
    if (savedOrder) {
        const menu = document.getElementById('library-menu');
        savedOrder.forEach(id => {
            const item = menu.querySelector(`[data-id="${id}"]`);
            if (item) menu.appendChild(item);
        });
    }

    // Set tab selector position
    const selector = document.getElementById('active-selector');
    const container = document.getElementById('tab-container');
    selector.style.width = `${(container.offsetWidth / 3) - 10}px`;
    selector.style.left = "5px";
    
    lucide.createIcons();
});

// --- Edit Mode & Sorting ---
function toggleEditMode(isEditing) {
    const libraryPage = document.getElementById('page-library');
    const menu = document.getElementById('library-menu');

    if (isEditing) {
        libraryPage.classList.add('editing');
        
        // --- PLACE THE CODE HERE ---
        sortableInstance = new Sortable(menu, {
    animation: 300,
    handle: '.reorder-handle',
    ghostClass: 'sortable-ghost',   // This now hides the item in the list
    chosenClass: 'sortable-chosen', // This styles the item you are dragging
    dragClass: 'sortable-drag',
    fallbackOnBody: false,          // Forces the drag to happen inside the list container
    forceFallback: false,           // Use native drag-and-drop for smoother feel
    onEnd: saveLibraryState
});

        
        closePopup();
    } else {
        libraryPage.classList.remove('editing');
        // Destroy the instance to "lock" the list when done
        if (sortableInstance) {
            sortableInstance.destroy();
            sortableInstance = null;
        }
        saveLibraryState();
    }
}

function saveLibraryState() {
    const items = Array.from(document.querySelectorAll('.menu-item'));
    const order = items.map(item => item.getAttribute('data-id'));
    localStorage.setItem('libraryOrder', JSON.stringify(order));
}

// --- Menu Interaction Logic ---
function toggleTick(element) {
    const icon = element.querySelector('.edit-circle');
    const isChecked = icon.getAttribute('data-lucide') === 'check-circle-2';
    
    icon.setAttribute('data-lucide', isChecked ? 'circle' : 'check-circle-2');
    icon.classList.add('tick-transition');
    
    lucide.createIcons(); 
    
    setTimeout(() => icon.classList.remove('tick-transition'), 200);
}

function closePopup() {
    const menu = document.getElementById('popup-menu');
    const overlay = document.getElementById('popup-overlay');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.display = 'none';
            overlay.style.display = 'none';
        }, 250); 
    }
}

function togglePopup() {
    const menu = document.getElementById('popup-menu');
    const overlay = document.getElementById('popup-overlay');
    if (menu.classList.contains('show')) {
        closePopup();
    } else {
        overlay.style.display = 'block';
        menu.style.display = 'block';
        setTimeout(() => menu.classList.add('show'), 10);
    }
}

document.addEventListener('click', (event) => {
    const menu = document.getElementById('popup-menu');
    if (menu.classList.contains('show') && !menu.contains(event.target) && !event.target.closest('.clickable-icon')) {
        closePopup();
    }
});

// --- Additional Helper Functions ---
function openDetail(title, iconName) {
    document.getElementById('page-library').classList.remove('active');
    document.getElementById('page-detail').classList.add('active');
    document.getElementById('detail-title').innerText = title;
    document.getElementById('empty-icon').setAttribute('data-lucide', iconName);
    lucide.createIcons();
}

function backToLibrary() {
    document.getElementById('page-detail').classList.remove('active');
    document.getElementById('page-library').classList.add('active');
}
