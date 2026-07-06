// --- Navigation & Page Logic ---
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

// --- Detail View Logic ---
function openDetail(title, iconName) {
    document.getElementById('page-library').classList.remove('active');
    const detailPage = document.getElementById('page-detail');
    detailPage.classList.add('active');
    
    document.getElementById('detail-title').innerText = title;
    
    // Update empty state text and icon
    const emptyText = document.getElementById('empty-text');
    if (emptyText) emptyText.innerText = `${title} will appear here.`;
    
    const iconElement = document.getElementById('empty-icon');
    if (iconElement) {
        iconElement.setAttribute('data-lucide', iconName);
        lucide.createIcons();
    }
    
    // Show segmented control only for TV & Movies
    const segControl = document.getElementById('tv-segmented-control');
    segControl.style.display = (title === 'TV & Movies') ? 'flex' : 'none';
}

function backToLibrary() {
    document.getElementById('page-detail').classList.remove('active');
    document.getElementById('page-library').classList.add('active');
    // Hide segmented control when leaving
    document.getElementById('tv-segmented-control').style.display = 'none';
}



const bubble = document.getElementById('seg-bubble');

// Set initial state to TV Shows
window.addEventListener('DOMContentLoaded', () => {
    moveBubble(0); // 0 = TV Shows, 1 = Movies
});

function moveBubble(index) {
    const offset = index === 0 ? 0 : 50; 
    bubble.style.transform = `translateX(${offset}%)`;
    
    // Toggle active text color
    document.querySelectorAll('.seg-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

    // Drag Interaction
let isDragging = false;
bubble.addEventListener('mousedown', () => isDragging = true);
window.addEventListener('mouseup', () => isDragging = false);
window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    // Logic to calculate position based on container width
});



function switchTab(tab) {
    console.log("Switching to: " + tab);
    // Add your tab switching content logic here
}

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('active-selector');
    const container = document.getElementById('tab-container');
    if (container) {
        selector.style.width = `${(container.offsetWidth / 3) - 10}px`;
        selector.style.left = "5px";
    }
    lucide.createIcons();
});

// --- Tab Drag/Touch Logic ---
const tabContainer = document.getElementById('tab-container');
const tabSelector = document.getElementById('active-selector');
let isDragging = false;

tabContainer.addEventListener('touchstart', () => {
    isDragging = true;
    tabSelector.classList.add('expanded');
});

tabContainer.addEventListener('touchend', (e) => {
    isDragging = false;
    tabSelector.classList.remove('expanded');
    const touchX = e.changedTouches[0].clientX - tabContainer.getBoundingClientRect().left;
    const tabWidth = tabContainer.offsetWidth / 3;
    const index = Math.max(0, Math.min(2, Math.floor(touchX / tabWidth)));
    const pages = ['page-home', 'page-new', 'page-library'];
    const navItems = document.querySelectorAll('.main-tabs .nav-item');
    showPage(pages[index], navItems[index], index);
});
