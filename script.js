function showPage(pageId) {
    // Hide all pages and remove active-page class
    document.querySelectorAll('.page').forEach(p => {
        p.style.display = 'none';
        p.classList.remove('active-page');
    });
    
    // Show selected page and add active-page class
    const targetPage = document.getElementById(pageId);
    targetPage.style.display = 'block';
    targetPage.classList.add('active-page');
    
    // Update active color for tabs... (your existing logic)
}

    });
}
