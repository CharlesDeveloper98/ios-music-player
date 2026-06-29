const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Hide all pages
        pages.forEach(page => page.style.display = 'none');
        // Show the selected page
        pages[index].style.display = 'block';
    });
});
