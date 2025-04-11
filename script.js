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

function setCurrentYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}


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

document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupScrollAnimations();
    setupBackToTop();
    setupNavbarScroll();
    setupTypingAnimation();
    setupSmoothScrolling();
    setCurrentYear();
    setupButtonAnimations();
});