document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 248, 240, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(255, 140, 66, 0.2)';
        } else {
            navbar.style.background = 'rgba(255, 248, 240, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(255, 140, 66, 0.1)';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Stagger animation for gallery items
                if (entry.target.classList.contains('gallery-item')) {
                    const items = entry.target.parentElement.children;
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.gallery, .video-section, .cta-section, .gallery-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Video play/pause on scroll and hover
    const video = document.querySelector('video');
    const videoContainer = document.querySelector('.video-container');
    
    if (video && videoContainer) {
        // Video visibility observer
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(e => console.log('Video autoplay prevented'));
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });

        videoObserver.observe(video);

        // Video controls
        const playButton = document.querySelector('.play-button');
        if (playButton) {
            playButton.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    playButton.style.opacity = '0';
                } else {
                    video.pause();
                    playButton.style.opacity = '1';
                }
            });
        }

        // Show/hide play button based on video state
        video.addEventListener('play', () => {
            if (playButton) playButton.style.opacity = '0';
        });

        video.addEventListener('pause', () => {
            if (playButton) playButton.style.opacity = '1';
        });
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Gallery item hover effects with 3D transform
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02) rotateX(5deg)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        });
    });

    // Add loading animation for images
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.filter = 'blur(0px)';
        });

        // Initial state
        img.style.opacity = '0';
        img.style.filter = 'blur(5px)';
        img.style.transition = 'opacity 0.6s ease, filter 0.6s ease';
    });

    // Dynamic gradient background based on scroll
    window.addEventListener('scroll', () => {
        const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
        const hue1 = 25 + (scrollPercent * 20); // Orange to yellow range
        const hue2 = 45 + (scrollPercent * 15); // Yellow range
        
        document.documentElement.style.setProperty('--dynamic-gradient', 
            `linear-gradient(135deg, hsl(${hue1}, 85%, 60%) 0%, hsl(${hue2}, 90%, 65%) 100%)`);
    });
});