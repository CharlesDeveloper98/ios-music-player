function showPage(pageId, element) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Reset nav colors
    document.querySelectorAll('.nav-item').forEach(item => item.style.color = '#8e8e93');
    element.style.color = '#ff3b30';
}
