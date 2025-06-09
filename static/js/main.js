// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        this.reset();
    });
}

// Add animation to service cards on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Portfolio animations
const portfolioItems = document.querySelectorAll('.portfolio-item');

const portfolioObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            portfolioObserver.unobserve(entry.target);
        }
    });
}, portfolioObserverOptions);

portfolioItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'all 0.6s ease-out';
    portfolioObserver.observe(item);
}); 