let tempProfilePic = null; // Add this variable at the top of your script.js

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


  
    const savedTheme = localStorage.getItem('user-theme') || 'system';
    setTheme(savedTheme);


    // 1. Get saved blur or default to 20
    const savedBlur = localStorage.getItem('userBlurIntensity') || '20';
    
    // 2. Set the CSS variable
    document.documentElement.style.setProperty('--dynamic-blur', `${savedBlur}px`);
    
    // 3. Set the slider position if it exists on the current page
    const blurSlider = document.getElementById('blur-slider');
    if (blurSlider) {
        blurSlider.value = savedBlur;
    }

    if (document.fonts) {
        document.fonts.ready.then(() => {
            console.log("Custom fonts are loaded and ready.");
            document.body.classList.add('fonts-loaded');
        });
    }
    
    
    lucide.createIcons();
});


 

// --- UI Updates ---
function updateAllProfileUI(imageData, firstName, lastName) {
    // 1. Get all relevant UI elements
    const containers = document.querySelectorAll('.profile-container');
    const badge = document.querySelector('.badge');
    const title = document.querySelector('.profile-info .title');
    const avatarPreview = document.getElementById('avatar-preview');
    
    // Target the specific avatar icon in the Settings modal (next to the name)
    const settingsAvatar = document.querySelector('.settings-card .avatar-placeholder');

    // 2. Update Images
    if (imageData) {
        const imgHTML = `<img src="${imageData}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
        
        // Update Nav Bar icons
        containers.forEach(c => c.innerHTML = imgHTML);
        
        // Update Edit Profile preview
        if (avatarPreview) avatarPreview.innerHTML = imgHTML;
        
        // Update Settings Modal icon (next to name)
        if (settingsAvatar) {
            settingsAvatar.innerHTML = imgHTML;
            settingsAvatar.style.background = 'transparent'; // Remove gray bg if image exists
        }
    }
    
    // 3. Update Name
    const nameString = `${firstName || ""} ${lastName || ""}`.trim();
    if (title) title.innerText = nameString || "Unknown ID";
    
    // 4. Update Badge Initials
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
    
    // Reset the inputs to the last saved data from localStorage
    const savedFName = localStorage.getItem('userFirstName') || "";
    const savedLName = localStorage.getItem('userLastName') || "";
    
    document.getElementById('first-name').value = savedFName;
    document.getElementById('last-name').value = savedLName;

    // Reset the image preview to the last saved image
    const savedPic = localStorage.getItem('userProfilePic');
    const avatarPreview = document.getElementById('avatar-preview');
    if (savedPic && avatarPreview) {
        avatarPreview.innerHTML = `<img src="${savedPic}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
    } else if (avatarPreview) {
        avatarPreview.innerHTML = `<i data-lucide="user"></i>`;
        lucide.createIcons();
    }
    
    // Clear the temporary variable
    tempProfilePic = null;

    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }, 400);
}

function saveProfileChanges() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    
    // Save names to LocalStorage
    localStorage.setItem('userFirstName', firstName);
    localStorage.setItem('userLastName', lastName);
    
    // Only save the picture if a new one was selected (tempProfilePic is not null)
    if (tempProfilePic) {
        localStorage.setItem('userProfilePic', tempProfilePic);
        tempProfilePic = null; // Clear temporary variable after saving
    }
    
    // Update UI everywhere
    updateAllProfileUI(localStorage.getItem('userProfilePic'), firstName, lastName);
    closeEditProfile();
}


let currentPopupType = "";


function removePhoto() {
    localStorage.removeItem('userProfilePic');
    updateAllProfileUI(null, document.getElementById('first-name').value, document.getElementById('last-name').value);
    closeDynamicPopup();
}

function clearAllData() {
    localStorage.removeItem('userProfilePic');
    localStorage.removeItem('userFirstName');
    localStorage.removeItem('userLastName');
    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    updateAllProfileUI(null, "", "");
    closeDynamicPopup();
}


// Replace your existing showCustomAlert function with this:

function showCustomAlert(type) {
    const overlay = document.getElementById('custom-alert');
    const title = document.getElementById('alert-title');
    const msg = document.getElementById('alert-msg');
    const confirmBtn = document.getElementById('confirm-btn');

    // Reset button class
    confirmBtn.className = 'ios-alert-btn ios-alert-btn-destructive';

    if (type === 'photo') {
        title.innerText = "Remove Photo";
        msg.innerText = "Are you sure you want to remove current photo?";
        confirmBtn.onclick = () => {
            localStorage.removeItem('userProfilePic');
            updateAllProfileUI(null, document.getElementById('first-name').value, document.getElementById('last-name').value);
            closeAlert();
        };
    } else {
        title.innerText = "Clear Data";
        msg.innerText = "Are you sure you want to clear data?";
        confirmBtn.onclick = () => {
            localStorage.clear();
            document.getElementById('first-name').value = "";
            document.getElementById('last-name').value = "";
            updateAllProfileUI(null, "", "");
            closeAlert();
            closeEditProfile();
        };
    }
    overlay.style.display = 'flex';
}


function closeAlert() {
    document.getElementById('custom-alert').style.display = 'none';
}

// --- User Interface Page Logic ---
function openUI() {
    const modal = document.getElementById('ui-modal');
    const overlay = document.getElementById('ui-overlay');
    overlay.style.display = 'block';
    modal.style.display = 'block';
    setTimeout(() => { modal.classList.add('show'); lucide.createIcons(); }, 10);
}

function closeUI() {
    const modal = document.getElementById('ui-modal');
    const overlay = document.getElementById('ui-overlay');
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; overlay.style.display = 'none'; }, 400);
}


// --- Theme Management ---
function setTheme(theme) {
    if (theme === 'system') {
        localStorage.removeItem('user-theme');
        applySystemTheme();
    } else {
        localStorage.setItem('user-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }
    updateUIActiveState(theme);
}

function applySystemTheme() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
}


function updateUIActiveState(activeTheme) {
    // Logic to highlight the checkmark in the UI modal
    document.querySelectorAll('.theme-option').forEach(el => {
        el.querySelector('.check-icon').style.display = 
            (el.dataset.theme === activeTheme) ? 'block' : 'none';
    });
}


// 1. Define your default order constant at the top
const DEFAULT_ORDER = ["Playlists", "Artists", "Albums", "Songs", "TV-Movies", "Music-Videos", "Genres", "Compilations", "Composers"];

// 2. Add these functions to your script
function showResetPopup() {
    document.getElementById('reset-alert').style.display = 'flex';
}

function closeResetPopup() {
    document.getElementById('reset-alert').style.display = 'none';
}

function resetLibraryOrder() {
    const menu = document.getElementById('library-menu');
    const items = Array.from(menu.querySelectorAll('.menu-item'));
    
    // Animate the reset
    items.forEach(item => {
        item.classList.add('resetting');
        setTimeout(() => item.classList.remove('resetting'), 400);
    });

    // Reorder DOM based on default
    DEFAULT_ORDER.forEach(id => {
        const item = menu.querySelector(`[data-id="${id}"]`);
        if (item) menu.appendChild(item);
    });

    // Clear saved preference and close popups
    localStorage.removeItem('libraryOrder');
    closeResetPopup();
    toggleEditMode(false);
}

function updateBlur(value) {
    // 1. Update the CSS variable
    document.documentElement.style.setProperty('--dynamic-blur', `${value}px`);
    
    // 2. Save the value to LocalStorage
    localStorage.setItem('userBlurIntensity', value);
}


function previewFile(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            tempProfilePic = e.target.result; // Store temporarily
            // Update only the preview area so the user sees their choice
            document.getElementById('avatar-preview').innerHTML = 
                `<img src="${tempProfilePic}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
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
