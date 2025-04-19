// Loading Screen
window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.loader').classList.add('hidden');
    }, 1000);
});

// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ?
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const animateElements = document.querySelectorAll('[data-animate]');

    const animateOnScroll = () => {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
}

// Back to Top Button
function setupBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
}

// Navbar Scroll Effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Typing Animation
function setupTypingAnimation() {
    const subtitles = [
        "Web Developer • Blockchain Enthusiast • Problem Solver",
        "Tech Innovator • Open Source Contributor • Student",
        "Full Stack Developer • AI Explorer • Hackathon Winner"
    ];

    let currentSubtitle = 0;
    const subtitleElement = document.querySelector('.subtitle');

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            subtitleElement.innerHTML = text.substring(0, i + 1) + '<span class="cursor" aria-hidden="true"></span>';
            setTimeout(() => typeWriter(text, i + 1, fnCallback), 50);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 2000);
        }
    }

    function startTextAnimation() {
        typeWriter(subtitles[currentSubtitle], 0, () => {
            currentSubtitle = (currentSubtitle + 1) % subtitles.length;
            setTimeout(startTextAnimation, 1000);
        });
    }

    setTimeout(startTextAnimation, 1000);
}

// Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Certifications Slider
function setupCertificationsSlider() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });
}

// Button Animations
function setupButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'pulse 1s ease infinite';
        });
        button.addEventListener('mouseleave', () => {
            button.style.animation = '';
        });
    });
}

// Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    let currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');

    const applyTheme = (theme) => {
        document.body.className = theme;
        themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', theme);
    };

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
    });

    applyTheme(currentTheme);
}

// Counter Animation for Stats
function setupCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        let count = 0;
        const increment = target / speed;

        const updateCount = () => {
            count = Math.min(count + increment, target);
            counter.textContent = Math.floor(count) + '+';

            if (count < target) {
                requestAnimationFrame(updateCount);
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.unobserve(counter);
            }
        });

        observer.observe(counter);
    });
}

// Particles.js Background
function setupParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#3b82f6"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#3b82f6",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupScrollAnimations();
    setupBackToTop();
    setupNavbarScroll();
    setupTypingAnimation();
    setupSmoothScrolling();
    setupCertificationsSlider();
    setupButtonAnimations();
    setupThemeToggle();
    setupCounterAnimation();
    setupParticles();
});