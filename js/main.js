// ========================================
// OneTribe - Main JavaScript
// ========================================

'use strict';

// ========================================
// Mobile Navigation Toggle
// ========================================

function initMobileNav() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}


// ========================================
// FAQ Accordion
// ========================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-item__question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}


// ========================================
// Smooth Scroll
// ========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


// ========================================
// Scroll Animations
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.pricing-card, .testimonial-card, .case-card, .feature-item');

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Add CSS class for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);


// ========================================
// Header Scroll Effect
// ========================================

function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}


// ========================================
// Form Validation (if contact form exists)
// ========================================

function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Add your form validation and submission logic here
            console.log('Form submitted');

            // Example: Show success message
            alert('Ďakujeme za vašu správu! Budeme vás kontaktovať čoskoro.');
        });
    });
}


// ========================================
// Pricing Card Hover Effect Enhancement
// ========================================

function initPricingCards() {
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add subtle effect to other cards
            pricingCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.opacity = '0.7';
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            pricingCards.forEach(otherCard => {
                otherCard.style.opacity = '1';
            });
        });
    });
}


// ========================================
// Initialize All Functions
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('OneTribe - Website loaded');

    initMobileNav();
    initFAQ();
    initSmoothScroll();
    initScrollAnimations();
    initHeaderScroll();
    initFormValidation();
    initPricingCards();
});


// ========================================
// Handle Window Resize
// ========================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Handle any resize-specific logic here
        console.log('Window resized');
    }, 250);
});
