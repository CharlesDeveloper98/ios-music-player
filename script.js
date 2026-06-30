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
    const menu = document.querySelector('.library-menu');
    const editBtn = document.getElementById('edit-text');
    const isEditing = menu.classList.toggle('editing-mode');
    
    editBtn.innerText = isEditing ? 'Done' : 'Edit';
    menu.querySelectorAll('.menu-item').forEach(item => {
        item.classList.toggle('editing', isEditing);
    });
}

// Logic for showing/hiding on click
document.querySelector('.library-menu').addEventListener('click', (e) => {
    const item = e.target.closest('.menu-item');
    if (!item || !item.classList.contains('editing')) return;

    if (item.classList.contains('hidden-default')) {
        item.classList.remove('hidden-default');
    } else {
        item.classList.add('hidden-default');
    }
});


// Add this at the bottom of your script
lucide.createIcons();
