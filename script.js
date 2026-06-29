function showPage(pageId) {
    // 1. Hide all pages by setting style directly
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(p => {
        p.style.display = 'none';
    });
    
    // 2. Show the selected page
    const target = document.getElementById(pageId);
    if (target) {
        target.style.display = 'block';
    }
    
    // 3. Reset all nav colors
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.style.color = '#8e8e93');
    
    // 4. Highlight current tab (we use event.currentTarget to target the clicked element)
    event.currentTarget.style.color = '#ff3b30';
}
