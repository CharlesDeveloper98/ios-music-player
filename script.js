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



        


// Add this at the bottom of your script
lucide.createIcons();
