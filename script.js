function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    // Show selected page
    document.getElementById(pageId).style.display = 'block';
    
    // Update active color for tabs
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if(item.textContent.toLowerCase().includes(pageId.split('-')[1])) {
            item.classList.add('active');
        }
    });
}
