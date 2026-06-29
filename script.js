function showPage(pageId, element) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    // Update Nav active class
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

// 1. Open Settings on single click
function openSettings() {
    showPage('page-settings', null);
}

// 2. Trigger file upload on long press (Right-click or hold)
function triggerFileSelect(e) {
    e.preventDefault(); // Stop default browser menu
    document.getElementById('photo-upload').click();
}

// 3. Handle image selection
function previewFile(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const containers = document.querySelectorAll('.profile-container');
            containers.forEach(c => {
                c.innerHTML = `<img src="${e.target.result}" class="profile-img">`;
            });
        }
        reader.readAsDataURL(file);
    }
}

// Updated showPage to handle the settings page correctly
function showPage(pageId, element) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    if (element) {
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        element.classList.add('active');
    }
}

// Load state on startup
window.onload = () => {
    const hiddenItems = JSON.parse(localStorage.getItem('hiddenLibraryItems') || '[]');
    hiddenItems.forEach(id => {
        const item = document.querySelector(`[data-id="${id}"]`);
        if (item) item.classList.add('hidden');
    });
    lucide.createIcons();
};

function toggleEdit() {
    const editBtn = document.getElementById('edit-text');
    const menuItems = document.querySelectorAll('.library-menu .menu-item');
    const isEditing = editBtn.innerText === 'Edit';

    editBtn.innerText = isEditing ? 'Done' : 'Edit';
    menuItems.forEach(item => item.classList.toggle('editing', isEditing));
}

// Logic for clicking the red circle
document.querySelector('.library-menu').addEventListener('click', (e) => {
    const item = e.target.closest('.menu-item');
    if (!item || !item.classList.contains('editing')) return;

    const id = item.getAttribute('data-id');
    let hiddenItems = JSON.parse(localStorage.getItem('hiddenLibraryItems') || '[]');

    if (item.classList.contains('hidden')) {
        // Add back
        item.classList.remove('hidden');
        hiddenItems = hiddenItems.filter(i => i !== id);
    } else {
        // Hide
        item.classList.add('hidden');
        hiddenItems.push(id);
    }
    localStorage.setItem('hiddenLibraryItems', JSON.stringify(hiddenItems));
});



lucide.createIcons();

