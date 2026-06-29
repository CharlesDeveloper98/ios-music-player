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

lucide.createIcons();

