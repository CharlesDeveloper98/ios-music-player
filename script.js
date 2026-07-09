// --- Navigation Logic ---
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

// --- App Startup ---
let sortableInstance;
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Nav Selector
    const selector = document.getElementById('active-selector');
    const container = document.getElementById('tab-container');
    selector.style.width = `${(container.offsetWidth / 3) - 10}px`;
    selector.style.left = "5px";

    // 2. Restore Library Order
    const savedOrder = JSON.parse(localStorage.getItem('libraryOrder'));
    if (savedOrder) {
        const menu = document.getElementById('library-menu');
        savedOrder.forEach(id => {
            const item = menu.querySelector(`[data-id="${id}"]`);
            if (item) menu.appendChild(item);
        });
    }

    // 3. Restore Profile Data
    const savedPic = localStorage.getItem('userProfilePic');
    const fName = localStorage.getItem('userFirstName') || "";
    const lName = localStorage.getItem('userLastName') || "";

    document.getElementById('first-name').value = fName;
    document.getElementById('last-name').value = lName;

    updateAllProfileUI(savedPic, fName, lName);
    
    lucide.createIcons();
});

// --- UI Updates ---
function updateAllProfileUI(imageData, firstName, lastName) {
    const containers = document.querySelectorAll('.profile-container');
    const badge = document.querySelector('.badge');
    const title = document.querySelector('.profile-info .title');
    const avatarPreview = document.getElementById('avatar-preview');
    
    // Update Image
    if (imageData) {
        const imgHTML = `<img src="${imageData}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
        containers.forEach(c => c.innerHTML = imgHTML);
        if (avatarPreview) avatarPreview.innerHTML = imgHTML;
    }
    
    // Update Name
    const nameString = `${firstName || ""} ${lastName || ""}`.trim();
    if (title) title.innerText = nameString || "Unknown ID";
    
    // Update Badge Initials
    if (badge && (firstName || lastName)) {
        const initials = ((firstName ? firstName[0] : "") + (lastName ? lastName[0] : "")).toUpperCase();
        badge.innerText = initials || "";
    }
}

// --- Library & Detail Navigation ---
function openDetail(title, iconName) {
    document.getElementById('page-library').classList.remove('active');
    const detailPage = document.getElementById('page-detail');
    detailPage.classList.add('active');
    
    document.getElementById('detail-title').innerText = title;
    document.getElementById('empty-text').innerText = `${title} will appear here.`;
    
    const iconElement = document.getElementById('empty-icon');
    iconElement.setAttribute('data-lucide', iconName);
    lucide.createIcons();
}

function backToLibrary() {
    document.getElementById('page-detail').classList.remove('active');
    document.getElementById('page-library').classList.add('active');
}

// --- Popup & Edit Mode ---
function closePopup() {
    const menu = document.getElementById('popup-menu');
    const overlay = document.getElementById('popup-overlay');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => { menu.style.display = 'none'; overlay.style.display = 'none'; }, 250); 
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
        setTimeout(() => { menu.classList.add('show'); }, 10);
    }
}

document.addEventListener('click', (event) => {
    const menu = document.getElementById('popup-menu');
    if (menu.classList.contains('show') && !menu.contains(event.target) && !event.target.closest('.clickable-icon')) {
        closePopup();
    }
});

function toggleEditMode(isEditing) {
    const libraryPage = document.getElementById('page-library');
    const menu = document.getElementById('library-menu');
    if (isEditing) {
        libraryPage.classList.add('editing');
        sortableInstance = new Sortable(menu, {
            handle: '.reorder-handle',
            animation: 300,
            onEnd: saveLibraryState
        });
        closePopup();
    } else {
        libraryPage.classList.remove('editing');
        if (sortableInstance) sortableInstance.destroy();
        saveLibraryState();
    }
}

function saveLibraryState() {
    const items = Array.from(document.querySelectorAll('.menu-item'));
    const order = items.map(item => item.getAttribute('data-id'));
    localStorage.setItem('libraryOrder', JSON.stringify(order));
}

function toggleTick(element) {
    const icon = element.querySelector('.edit-circle');
    const isChecked = icon.getAttribute('data-lucide') === 'check-circle-2';
    icon.setAttribute('data-lucide', isChecked ? 'circle' : 'check-circle-2');
    icon.classList.add('tick-transition');
    lucide.createIcons();
    setTimeout(() => icon.classList.remove('tick-transition'), 200);
}

// --- Settings & Profile ---
function openSettings() {
    const modal = document.getElementById('settings-modal');
    const overlay = document.getElementById('settings-overlay');
    overlay.style.display = 'block';
    modal.style.display = 'block';
    setTimeout(() => { modal.classList.add('show'); lucide.createIcons(); }, 10);
}

function closeSettings() {
    const modal = document.getElementById('settings-modal');
    const overlay = document.getElementById('settings-overlay');
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; overlay.style.display = 'none'; }, 400);
}

function openEditProfile() {
    const modal = document.getElementById('edit-profile-modal');
    const overlay = document.getElementById('edit-profile-overlay');
    overlay.style.display = 'block';
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeEditProfile() {
    const modal = document.getElementById('edit-profile-modal');
    const overlay = document.getElementById('edit-profile-overlay');
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; overlay.style.display = 'none'; }, 400);
}

function saveProfileChanges() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    localStorage.setItem('userFirstName', firstName);
    localStorage.setItem('userLastName', lastName);
    updateAllProfileUI(localStorage.getItem('userProfilePic'), firstName, lastName);
    closeEditProfile();
}

function previewFile(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageData = e.target.result;
            localStorage.setItem('userProfilePic', imageData);
            updateAllProfileUI(imageData, document.getElementById('first-name').value, document.getElementById('last-name').value);
        };
        reader.readAsDataURL(file);
    }
}

// --- Touch Navigation ---
const tabContainer = document.getElementById('tab-container');
const selector = document.getElementById('active-selector');
let isDragging = false;

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
