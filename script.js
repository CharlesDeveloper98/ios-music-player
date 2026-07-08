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


// Function to close the menu
function closePopup() {
    const menu = document.getElementById('popup-menu');
    const overlay = document.getElementById('popup-overlay');

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        // Wait for transition to finish
        setTimeout(() => {
            menu.style.display = 'none';
            overlay.style.display = 'none';
        }, 250); 
    }
}

// Function to toggle the menu
function togglePopup() {
    const menu = document.getElementById('popup-menu');
    const overlay = document.getElementById('popup-overlay');

    if (menu.classList.contains('show')) {
        closePopup();
    } else {
        overlay.style.display = 'block';
        menu.style.display = 'block';
        setTimeout(() => {
            menu.classList.add('show');
        }, 10);
    }
}

// Global Event Listener for closing when clicking outside
document.addEventListener('click', (event) => {
    const menu = document.getElementById('popup-menu');
    const overlay = document.getElementById('popup-overlay');
    
    // Check if the click is outside the menu AND the menu is currently visible
    if (menu.classList.contains('show') && 
        !menu.contains(event.target) && 
        !event.target.closest('.three-dots-button')) { // Ensure clicking the trigger doesn't immediately re-close it
        closePopup();
    }
});

// Specifically allow tapping inside the menu to close it as per your requirement
document.getElementById('popup-menu').addEventListener('click', () => {
    closePopup();
});



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

// Initialize state: all items visible by default
let libraryState = JSON.parse(localStorage.getItem('libraryState')) || {
    "Playlists": true, "Artists": true, "Albums": true, "Songs": true,
    "TV-Movies": true, "Music-Videos": true, "Genres": true,
    "Compilations": true, "Composers": true
};

function toggleEditMode(isEditing) {
    const libraryPage = document.getElementById('page-library');
    const menu = document.getElementById('library-menu');
    
    if (isEditing) {
        libraryPage.classList.add('editing');
        sortableInstance = new Sortable(menu, {
            handle: '.reorder-handle',
            animation: 300,
            onEnd: saveOrder
        });
        closePopup();
    } else {
        libraryPage.classList.remove('editing');
        if (sortableInstance) sortableInstance.destroy();
        localStorage.setItem('libraryState', JSON.stringify(libraryState));
    }
}


function saveLibraryState() {
    const items = Array.from(document.querySelectorAll('.menu-item'));
    const order = items.map(item => item.getAttribute('data-id'));
    localStorage.setItem('libraryOrder', JSON.stringify(order));
}


function toggleTick(element) {
    const id = element.getAttribute('data-id');
    const icon = element.querySelector('.edit-circle');
    
    // Toggle state
    libraryState[id] = !libraryState[id];
    
    // Update UI visuals
    if (libraryState[id]) {
        icon.setAttribute('data-lucide', 'check-circle-2');
        element.style.opacity = "1";
    } else {
        icon.setAttribute('data-lucide', 'circle');
        element.style.opacity = "0.5";
    }
    
    // Handle Slide Animation
    element.style.transition = "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)";
    element.style.maxHeight = libraryState[id] ? "60px" : "0px";
    element.style.overflow = "hidden";
    element.style.margin = libraryState[id] ? "0" : "0";
    
    lucide.createIcons();
}

// Ensure state is applied on load
document.addEventListener('DOMContentLoaded', () => {
    Object.keys(libraryState).forEach(id => {
        const item = document.querySelector(`[data-id="${id}"]`);
        if (item) {
            const icon = item.querySelector('.edit-circle');
            icon.setAttribute('data-lucide', libraryState[id] ? 'check-circle-2' : 'circle');
            item.style.display = libraryState[id] ? "flex" : "flex"; // Keep DOM, hide via height
            item.style.maxHeight = libraryState[id] ? "60px" : "0px";
            item.style.overflow = "hidden";
        }
    });
    lucide.createIcons();
});






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
