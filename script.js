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

window.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('active-selector');
    const container = document.getElementById('tab-container');
    selector.style.width = `${(container.offsetWidth / 3) - 10}px`;
    selector.style.left = "5px";
    lucide.createIcons();
});

function openDetail(title, iconName) {
    // Hide Library, show Detail
    document.getElementById('page-library').classList.remove('active');
    const detailPage = document.getElementById('page-detail');
    detailPage.classList.add('active');
    
    // Update content
    document.getElementById('detail-title').innerText = title;
    document.getElementById('empty-text').innerText = `${title} will appear here.`;
    
    // Refresh icons (re-run lucide)
    const iconElement = document.getElementById('empty-icon');
    iconElement.setAttribute('data-lucide', iconName);
    lucide.createIcons();
}

function backToLibrary() {
    document.getElementById('page-detail').classList.remove('active');
    document.getElementById('page-library').classList.add('active');
}

// Add this to your script.js
function togglePopup() {
    const menu = document.getElementById('popup-menu');
    const overlay = document.getElementById('popup-overlay');

    if (menu.classList.contains('show')) {
        // Exit Animation
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.display = 'none';
            overlay.style.display = 'none';
        }, 250); // Matches CSS transition duration
    } else {
        // Entrance Animation
        overlay.style.display = 'block';
        menu.style.display = 'block';
        // Small timeout to allow browser to register display:block before starting animation
        setTimeout(() => {
            menu.classList.add('show');
        }, 10);
    }
}


// Load saved order/visibility on startup
document.addEventListener('DOMContentLoaded', () => {
    const savedOrder = JSON.parse(localStorage.getItem('libraryOrder'));
    if (savedOrder) {
        const menu = document.getElementById('library-menu');
        savedOrder.forEach(id => {
            const item = document.querySelector(`[data-id="${id}"]`);
            menu.appendChild(item);
        });
    }
});

// Update your toggleEditMode
function toggleEditMode(isEditing) {
    const libraryPage = document.getElementById('page-library');
    const menu = document.getElementById('library-menu');
    
    // Close popup
    const popup = document.getElementById('popup-menu');
    popup.classList.remove('show');
    setTimeout(() => { popup.style.display = 'none'; }, 250);

    if (isEditing) {
        libraryPage.classList.add('editing');
        // Show all items while editing so we can tick/untick them
        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.display = 'flex';
        });
        
        // Initialize Sortable
        new Sortable(menu, {
            handle: '.reorder-handle',
            animation: 200
        });
    } else {
        libraryPage.classList.remove('editing');
        saveLibraryState();
    }
}


function saveLibraryState() {
    const items = Array.from(document.querySelectorAll('.menu-item'));
    const state = items.map(item => ({
        id: item.getAttribute('data-id'),
        visible: !item.classList.contains('hidden-item')
    }));
    
    localStorage.setItem('libraryState', JSON.stringify(state));
    applyLibraryState(); // Re-apply visibility based on new saved state
}


function toggleItem(id) {
    // Logic to toggle the tick/circle state and store in localStorage
}

// Add this to handle the Tick/Circle toggle
function toggleTick(element) {
    element.classList.toggle('hidden-item');
    const icon = element.querySelector('.edit-circle');
    const isVisible = !element.classList.contains('hidden-item');
    icon.setAttribute('data-lucide', isVisible ? 'check-circle-2' : 'circle');
    lucide.createIcons();
}


// Load and render Library state
document.addEventListener('DOMContentLoaded', () => {
    renderLibrary();
    lucide.createIcons();
});

function renderLibrary() {
    const savedState = JSON.parse(localStorage.getItem('libraryState')) || [
        {id: 'Playlists', visible: true}, {id: 'Artists', visible: true},
        {id: 'Albums', visible: true}, {id: 'Songs', visible: true},
        {id: 'TV-Movies', visible: true}, {id: 'Music-Videos', visible: true},
        {id: 'Genres', visible: true}, {id: 'Compilations', visible: true},
        {id: 'Composers', visible: true}
    ];

    const menu = document.getElementById('library-menu');
    menu.innerHTML = ''; // Clear current

    savedState.forEach(itemState => {
        const item = document.querySelector(`.menu-item[data-id="${itemState.id}"]`);
        if (item) {
            const circle = item.querySelector('.edit-circle');
            // Set tick state
            circle.setAttribute('data-lucide', itemState.visible ? 'check-circle-2' : 'circle');
            item.classList.toggle('hidden-item', !itemState.visible);
            
            if (itemState.visible) {
                menu.appendChild(item);
            }
        }
    });
}



// Ensure Library state is initialized on startup
document.addEventListener('DOMContentLoaded', () => {
    // If no state exists in storage, initialize defaults
    if (!localStorage.getItem('libraryState')) {
        const defaultState = Array.from(document.querySelectorAll('.menu-item')).map(item => ({
            id: item.getAttribute('data-id'),
            visible: true
        }));
        localStorage.setItem('libraryState', JSON.stringify(defaultState));
    }
    applyLibraryState();
});

function applyLibraryState() {
    const state = JSON.parse(localStorage.getItem('libraryState'));
    const menu = document.getElementById('library-menu');
    
    state.forEach(itemState => {
        const item = document.querySelector(`.menu-item[data-id="${itemState.id}"]`);
        if (!item) return;

        // Toggle visibility: hide if not visible
        item.style.display = itemState.visible ? 'flex' : 'none';
        
        // Update tick icon
        const icon = item.querySelector('.edit-circle');
        icon.setAttribute('data-lucide', itemState.visible ? 'check-circle-2' : 'circle');
        
        // Add/Remove "dull" class
        item.classList.toggle('hidden-item', !itemState.visible);
    });
    lucide.createIcons();
}



function triggerFileSelect(e) {
    e.preventDefault();
    document.getElementById('photo-upload').click();
}

function previewFile(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const containers = document.querySelectorAll('.profile-container');
            containers.forEach(c => c.innerHTML = `<img src="${e.target.result}" class="profile-img">`);
        };
        reader.readAsDataURL(file);
    }
}

const tabContainer = document.getElementById('tab-container');
const selector = document.getElementById('active-selector');
let isDragging = false;

tabContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    selector.classList.add('expanded');
});

tabContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touchX = e.touches[0].clientX - tabContainer.getBoundingClientRect().left;
    const tabWidth = tabContainer.offsetWidth / 3;
    const index = Math.max(0, Math.min(2, Math.floor(touchX / tabWidth)));
    selector.style.left = `${(index * tabWidth) + 5}px`;
    document.querySelectorAll('.nav-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
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
