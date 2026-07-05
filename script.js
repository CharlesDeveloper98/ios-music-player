function showPage(pageId, element, index) {
    // 1. Switch pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    // 2. Update Nav States
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    // 3. Move the Liquid Selector (Only for main tabs 0-2)
    const selector = document.getElementById('active-selector');
    if (index <= 2) {
        const container = document.getElementById('tab-container');
        const tabWidth = container.offsetWidth / 3;
        selector.style.left = `${(index * tabWidth) + 5}px`;
        selector.style.width = `${tabWidth - 10}px`;
        selector.style.opacity = "1";
    } else {
        selector.style.opacity = "0"; // Hide when clicking Search
    }
}

// Initial position on load
window.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('active-selector');
    const container = document.getElementById('tab-container');
    selector.style.width = `${(container.offsetWidth / 3) - 10}px`;
    selector.style.left = "5px";
});


function openSettings() {
    showPage('page-settings', null);
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

window.onload = () => {
    // Load persisted state from localStorage
    const hiddenItems = JSON.parse(localStorage.getItem('hiddenLibraryItems') || '[]');
    document.querySelectorAll('.menu-item').forEach(item => {
        const id = item.getAttribute('data-id');
        // If it's in the hidden list, add the class
        if (hiddenItems.includes(id)) {
            item.classList.add('hidden');
        }
    });
    lucide.createIcons();
};

function toggleEdit() {
    const menu = document.querySelector('.library-menu');
    const editBtn = document.getElementById('edit-text');
    const isEditing = menu.classList.toggle('editing-mode');
    editBtn.innerText = isEditing ? 'Done' : 'Edit';
}

document.querySelector('.library-menu').addEventListener('click', (e) => {
    const menu = document.querySelector('.library-menu');
    if (!menu.classList.contains('editing-mode')) return;

    const item = e.target.closest('.menu-item');
    if (!item) return;

    const id = item.getAttribute('data-id');
    let hiddenItems = JSON.parse(localStorage.getItem('hiddenLibraryItems') || '[]');

    if (item.classList.contains('hidden')) {
        item.classList.remove('hidden');
        hiddenItems = hiddenItems.filter(i => i !== id);
    } else {
        item.classList.add('hidden');
        hiddenItems.push(id);
    }
    localStorage.setItem('hiddenLibraryItems', JSON.stringify(hiddenItems));
});


document.addEventListener('DOMContentLoaded', () => {
    let hiddenItems = JSON.parse(localStorage.getItem('hiddenLibrary')) || [];

    function renderMenu() {
        const isEditing = document.querySelector('.library-menu').classList.contains('editing-mode');
        document.querySelectorAll('.menu-item').forEach(item => {
            const id = item.getAttribute('data-id');
            const isHidden = hiddenItems.includes(id);
            
            // Remove old status icons
            item.querySelectorAll('.status-icon').forEach(el => el.remove());

            if (isEditing) {
                const icon = document.createElement('div');
                icon.className = `status-icon ${isHidden ? 'plus' : 'minus'}`;
                icon.innerText = isHidden ? '+' : '-';
                item.prepend(icon);
                item.classList.toggle('dull', isHidden);
            } else {
                item.style.display = isHidden ? 'none' : 'flex';
            }
        });
    }

    window.toggleEdit = () => {
        const menu = document.querySelector('.library-menu');
        const btn = document.getElementById('edit-text');
        menu.classList.toggle('editing-mode');
        btn.innerText = menu.classList.contains('editing-mode') ? 'Done' : 'Edit';
        renderMenu();
    };

    document.querySelector('.library-menu').addEventListener('click', (e) => {
        if (!document.querySelector('.library-menu').classList.contains('editing-mode')) return;
        const item = e.target.closest('.menu-item');
        if (!item) return;

        const id = item.getAttribute('data-id');
        if (hiddenItems.includes(id)) {
            hiddenItems = hiddenItems.filter(i => i !== id);
        } else {
            hiddenItems.push(id);
        }
        localStorage.setItem('hiddenLibrary', JSON.stringify(hiddenItems));
        renderMenu();
    });

    renderMenu();
});



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
    
    // Constrain within the 3 main tabs
    const index = Math.max(0, Math.min(2, Math.floor(touchX / tabWidth)));
    
    // Move selector instantly while dragging
    selector.style.left = `${(index * tabWidth) + 5}px`;
    
    // Highlight icon visually
    document.querySelectorAll('.nav-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
});

tabContainer.addEventListener('touchend', (e) => {
    isDragging = false;
    selector.classList.remove('expanded');
    
    // Snap to the closest tab center
    const touchX = e.changedTouches[0].clientX - tabContainer.getBoundingClientRect().left;
    const tabWidth = tabContainer.offsetWidth / 3;
    const index = Math.max(0, Math.min(2, Math.floor(touchX / tabWidth)));
    
    const pages = ['page-home', 'page-new', 'page-library'];
    const navItems = document.querySelectorAll('.main-tabs .nav-item');
    showPage(pages[index], navItems[index], index);
});


// --- Profile & Settings ---
function initProfileInteraction() {
    const profiles = document.querySelectorAll('.profile-container');
    profiles.forEach(profile => {
        profile.onclick = () => openSettings();
    });
}

function openSettings() { 
    document.getElementById('page-settings').classList.add('active');
    document.body.classList.add('settings-open');
}

function closeSettings() { 
    document.getElementById('page-settings').classList.remove('active');
    document.body.classList.remove('settings-open');
}

  // Initialize UI features
    initProfileInteraction();
    renderMenu();
   
        


// Add this at the bottom of your script
lucide.createIcons();
