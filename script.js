let lastPage = 'page-library';

function showPage(pageId, element) {
    const oldPage = document.querySelector('.page.active');
    const newPage = document.getElementById(pageId);
    
    // Animate
    oldPage.style.transform = 'translateX(-100%)';
    newPage.style.transform = 'translateX(0)';
    newPage.classList.add('active');
    
    setTimeout(() => {
        oldPage.classList.remove('active');
        oldPage.style.transform = '';
    }, 300);

    if (element) {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        element.classList.add('active');
        lastPage = pageId;
    }
    lucide.createIcons();
}

function openSettings() { showPage('page-settings'); }
function goBack() { showPage(lastPage); }
function triggerFileSelect(e) { e.preventDefault(); document.getElementById('photo-upload').click(); }

function previewFile(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.querySelectorAll('.profile-container').forEach(c => 
                c.innerHTML = `<img src="${e.target.result}" style="width:100%; height:100%; object-fit:cover;">`);
        };
        reader.readAsDataURL(file);
    }
}
