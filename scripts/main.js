document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#gallery').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('.gallery, .journey-highlights, .cta-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Video play/pause on scroll
    const video = document.querySelector('video');
    if (video) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });

        videoObserver.observe(video);
    }
});