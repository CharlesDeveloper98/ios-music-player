function showPage(pageId) {
    // Hide ALL pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Show the target page
    const target = document.getElementById(pageId);
    if (target) {
        target.style.display = 'block';
    }

    // Update Tab Colors (Optional: adds visual feedback)
    document.querySelectorAll('.nav-item').forEach(item => item.style.color = '#8e8e93');
    event.currentTarget.style.color = '#ff3b30'; // Apple Music Red
}



    });
}
