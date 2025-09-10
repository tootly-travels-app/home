document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll animation for page load
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Add loading animation to images
    const images = document.querySelectorAll('.photo-grid img');
    
    images.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(20px)';
        
        img.addEventListener('load', () => {
            setTimeout(() => {
                img.style.transition = 'all 0.6s ease-out';
                img.style.opacity = '1';
                img.style.transform = 'translateY(0)';
            }, index * 100);
        });
        
        // Fallback for cached images
        if (img.complete) {
            img.dispatchEvent(new Event('load'));
        }
    });
    
    // Add click handler for image modal (future enhancement)
    images.forEach(img => {
        img.addEventListener('click', () => {
            img.style.transform = 'scale(0.95)';
            setTimeout(() => {
                img.style.transform = '';
            }, 150);
        });
    });
    
    // Parallax effect for header
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});