function showPage(pageId, element) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    if (element) {
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        element.classList.add('active');
    }
}

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
    const hiddenItems = JSON.parse(localStorage.getItem('hiddenLibraryItems') || '[]');
    hiddenItems.forEach(id => {
        const item = document.querySelector(`[data-id="${id}"]`);
        if (item) item.classList.add('hidden');
    });
    lucide.createIcons();
};

function toggleEdit() {
    const page = document.getElementById('page-library');
    const menu = page.querySelector('.library-menu');
    const editBtn = page.querySelector('#edit-text');
    const menuItems = menu.querySelectorAll('.menu-item');
    
    const isEditing = menu.classList.toggle('editing-mode');
    editBtn.innerText = isEditing ? 'Done' : 'Edit';
    
    menuItems.forEach(item => item.classList.toggle('editing', isEditing));
}

document.querySelector('.library-menu').addEventListener('click', (e) => {
    const item = e.target.closest('.menu-item');
    if (!item || !item.classList.contains('editing')) return;

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

lucide.createIcons();
