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
    if (isEditing) {
        libraryPage.classList.add('editing');
        // Initialize SortableJS
        new Sortable(document.getElementById('library-menu'), {
            handle: '.reorder-handle',
            animation: 200, // Native feeling animation
            easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
            onEnd: saveLibraryState
        });
    } else {
        libraryPage.classList.remove('editing');
        saveLibraryState();
    }
}

function saveLibraryState() {
    const items = Array.from(document.querySelectorAll('.menu-item'));
    const order = items.map(item => item.getAttribute('data-id'));
    localStorage.setItem('libraryOrder', JSON.stringify(order));
}

function toggleItem(id) {
    // Logic to toggle the tick/circle state and store in localStorage
}

// Add this to handle the Tick/Circle toggle
function toggleTick(element) {
    const icon = element.querySelector('.edit-circle');
    const isChecked = icon.getAttribute('data-lucide') === 'check-circle-2';
    
    // Switch between circle and check-circle-2
    icon.setAttribute('data-lucide', isChecked ? 'circle' : 'check-circle-2');
    icon.style.color = isChecked ? 'var(--ios-red)' : 'var(--ios-red)';
    icon.classList.add('tick-transition');
    
    lucide.createIcons(); // Re-render the icon
    
    // Remove animation class after it finishes
    setTimeout(() => icon.classList.remove('tick-transition'), 200);
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
