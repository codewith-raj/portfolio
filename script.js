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
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});


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


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(startTextAnimation, 1000);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.animation = 'pulse 1s ease infinite';
    });
    button.addEventListener('mouseleave', () => {
        button.style.animation = '';
    });
});