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

// Update your toggleEditMode
function toggleEditMode(isEditing) {
    const libraryPage = document.getElementById('page-library');
    const menu = document.getElementById('library-menu');

    if (isEditing) {
        libraryPage.classList.add('editing');
        
        // Setup Sortable
        sortableInstance = new Sortable(menu, {
            handle: '.reorder-handle',
            animation: 300,
            easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
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


// Initialize Sortable on page load
let sortableInstance;

document.addEventListener('DOMContentLoaded', () => {
    // Restore Order
    const savedOrder = JSON.parse(localStorage.getItem('libraryOrder'));
    if (savedOrder) {
        const menu = document.getElementById('library-menu');
        savedOrder.forEach(id => {
            const item = menu.querySelector(`[data-id="${id}"]`);
            if (item) menu.appendChild(item);
        });
    }
    lucide.createIcons();
});



function openSettings() {
    const modal = document.getElementById('settings-modal');
    const overlay = document.getElementById('settings-overlay');
    overlay.style.display = 'block';
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
        lucide.createIcons();
    }, 10);
}

function closeSettings() {
    const modal = document.getElementById('settings-modal');
    const overlay = document.getElementById('settings-overlay');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }, 400);
}


// Open Edit Profile
function openEditProfile() {
    const modal = document.getElementById('edit-profile-modal');
    const overlay = document.getElementById('edit-profile-overlay');
    overlay.style.display = 'block';
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
}

// Close Edit Profile
function closeEditProfile() {
    const modal = document.getElementById('edit-profile-modal');
    const overlay = document.getElementById('edit-profile-overlay');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }, 400);
}

// Function to save changes
function saveProfileChanges() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    
    // Save to Memory
    localStorage.setItem('userFirstName', firstName);
    localStorage.setItem('userLastName', lastName);
    
    // Update UI
    updateAllProfileUI(null, firstName, lastName);
    closeEditProfile();
}

// Update the click handler in Settings
document.querySelector('.edit-btn').onclick = openEditProfile;

// Function to handle Image Preview and Save
function previewFile(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageData = e.target.result;
            localStorage.setItem('userProfilePic', imageData);
            updateAllProfileUI(imageData, null, null);
        };
        reader.readAsDataURL(file);
    }
}

// Ensure data loads when app starts
document.addEventListener('DOMContentLoaded', () => {
    const savedPic = localStorage.getItem('userProfilePic');
    const fName = localStorage.getItem('userFirstName') || "";
    const lName = localStorage.getItem('userLastName') || "";
    
    // Set input fields if they exist
    const fInput = document.getElementById('first-name');
    const lInput = document.getElementById('last-name');
    if (fInput) fInput.value = fName;
    if (lInput) lInput.value = lName;

    updateAllProfileUI(savedPic, fName, lName);
    lucide.createIcons();
});


// Helper to apply image to all profile containers
function updateAllProfileIcons(imageData) {
    const containers = document.querySelectorAll('.profile-container, #avatar-preview');
    const imgHTML = `<img src="${imageData}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
    
    containers.forEach(c => {
        c.innerHTML = imgHTML;
    });
}

// Enhanced Load Logic
document.addEventListener('DOMContentLoaded', () => {
    // 1. Restore Library Order
    const savedOrder = JSON.parse(localStorage.getItem('libraryOrder'));
    if (savedOrder) {
        const menu = document.getElementById('library-menu');
        savedOrder.forEach(id => {
            const item = menu.querySelector(`[data-id="${id}"]`);
            if (item) menu.appendChild(item);
        });
    }

    // 2. Restore Profile Picture
    const savedPic = localStorage.getItem('userProfilePic');
    if (savedPic) {
        updateAllProfileIcons(savedPic);
    }

    // 3. Restore Names
    const fName = localStorage.getItem('userFirstName');
    const lName = localStorage.getItem('userLastName');
    if(fName || lName) {
        document.getElementById('first-name').value = fName || '';
        document.getElementById('last-name').value = lName || '';
        const idText = document.querySelector('.profile-info .title');
        if(idText) idText.innerText = `${fName} ${lName}`;
    }

    lucide.createIcons();
});

// Function to update the view (the UI)
function updateAllProfileUI(imageData, firstName, lastName) {
    const containers = document.querySelectorAll('.profile-container');
    const badge = document.querySelector('.badge');
    const title = document.querySelector('.profile-info .title');
    
    // Update Image if provided
    if (imageData) {
        const imgHTML = `<img src="${imageData}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
        containers.forEach(c => c.innerHTML = imgHTML);
        document.getElementById('avatar-preview').innerHTML = imgHTML;
    }
    
    // Update Name/Initials
    if (firstName || lastName) {
        const nameString = `${firstName} ${lastName}`.trim();
        if (title) title.innerText = nameString || "Unknown ID";
        
        const initials = (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
        if (badge && initials) badge.innerText = initials;
    }
}

                                 

function triggerFileSelect(e) {
    e.preventDefault();
    document.getElementById('photo-upload').click();
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
