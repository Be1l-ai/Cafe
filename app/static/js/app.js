// Theme Toggle Function
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'lemonade' || currentTheme === null) {
        // Switch to dark theme
        html.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        // Switch to light theme
        html.setAttribute('data-theme', 'lemonade');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'lemonade');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    } else {
        // Default to light theme
        document.documentElement.setAttribute('data-theme', 'lemonade');
        themeIcon.textContent = '🌙';
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Product Carousel Functionality
let currentSlide = 1;
const totalSlides = 2;

function nextSlide() {
    currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    goToSlide(currentSlide);
}

function previousSlide() {
    currentSlide = currentSlide <= 1 ? totalSlides : currentSlide - 1;
    goToSlide(currentSlide);
}

function goToSlide(slideNumber) {
    currentSlide = slideNumber;
    const carousel = document.getElementById('productCarousel');
    const targetSlide = document.getElementById(`slide${slideNumber}`);
    
    if (targetSlide) {
        targetSlide.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
    }
    
    // Update indicators
    for (let i = 1; i <= totalSlides; i++) {
        const indicator = document.getElementById(`indicator${i}`);
        if (indicator) {
            if (i === slideNumber) {
                indicator.classList.add('btn-primary');
                indicator.classList.remove('btn-ghost');
            } else {
                indicator.classList.remove('btn-primary');
                indicator.classList.add('btn-ghost');
            }
        }
    }
}

// Initialize carousel indicators
document.addEventListener('DOMContentLoaded', function() {
    goToSlide(1);
});

// Auto-advance carousel (optional)
document.addEventListener('DOMContentLoaded', function() {
    setInterval(() => {
        nextSlide();
    }, 8000); // Auto-advance every 8 seconds
});