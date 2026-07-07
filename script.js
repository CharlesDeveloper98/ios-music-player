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
    const overlay = document.getElementById('popup-overlay');
    const menu = document.getElementById('popup-menu');
    
    const isVisible = menu.style.display === 'block';
    menu.style.display = isVisible ? 'none' : 'block';
    overlay.style.display = isVisible ? 'none' : 'block';
    
    // Refresh icons if the popup was just opened
    if (!isVisible) lucide.createIcons();
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
