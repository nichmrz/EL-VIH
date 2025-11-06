let lastScrollPosition = window.pageYOffset;

window.addEventListener('scroll', function() {
    const currentScrollPosition = window.pageYOffset;
    const header = document.querySelector('header');
    
    // Show/hide header based on scroll direction
    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }
    
    lastScrollPosition = currentScrollPosition;
});