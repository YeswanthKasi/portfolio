// ============================================
// FUTURISTIC PORTFOLIO - PREMIUM JAVASCRIPT
// Version 2.0 - World-Class Interactions
// ============================================

// Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Hide loading screen after content loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            document.body.style.overflow = 'auto';
            initAnimations();
        }, 1500);
    });
});

// Initialize all animations after loading
function initAnimations() {
    createParticles();
    initScrollAnimations();
    initNavHighlight();
}

// Create Floating Particles
function createParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;
    
    const particleCount = 30;
    const colors = ['#00d4ff', '#7c3aed', '#ec4899', '#10b981'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 10px ${particle.style.background}, 0 0 20px ${particle.style.background}`;
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

// Custom Cursor
const cursorDot = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

if (cursorDot && cursorOutline) {
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    // Smooth follow for outline
    function animateCursor() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .tech-bubble, .certification-card, .profile-card, .social-link, .email-link');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('hover');
            cursorOutline.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('hover');
            cursorOutline.classList.remove('hover');
        });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Navigation active state
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars
                if (entry.target.classList.contains('skill-progress')) {
                    const width = entry.target.parentElement.parentElement.querySelector('.skill-level')?.textContent || '0%';
                    entry.target.style.width = width;
                }
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.querySelectorAll('.fade-up, .project-card, .experience-item, .certification-card, .skill-progress, .profile-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Hero parallax effect
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

if (mobileMenuToggle && navLinks && mobileMenuOverlay) {
    function openMenu() {
        navLinks.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.classList.add('menu-open');
        mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
    }
    
    function closeMenu() {
        navLinks.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
    mobileMenuToggle.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    navLinks.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    mobileMenuOverlay.addEventListener('click', closeMenu);
}

// Magnetic effect for interactive elements
document.querySelectorAll('.social-link, .btn').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
    });
});

// Tilt effect for cards
document.querySelectorAll('.project-card, .profile-card, .certification-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Typing effect for hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    updateCounter();
}

// Ripple effect for buttons
document.querySelectorAll('.btn, .nav-item').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${e.clientX - rect.left - size/2}px;
            top: ${e.clientY - rect.top - size/2}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple animation - moved to style.css for better maintainability

// Skill bars animation
document.querySelectorAll('.skill-progress').forEach(bar => {
    bar.style.width = '0%';
});

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Add hover listeners for dynamically created elements
    setTimeout(() => {
        const hoverElements = document.querySelectorAll('a, button, .project-card, .tech-bubble, .certification-card, .profile-card, .social-link, .email-link');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (cursorDot && cursorOutline) {
                    cursorDot.classList.add('hover');
                    cursorOutline.classList.add('hover');
                }
            });
            el.addEventListener('mouseleave', () => {
                if (cursorDot && cursorOutline) {
                    cursorDot.classList.remove('hover');
                    cursorOutline.classList.remove('hover');
                }
            });
        });
    }, 2000);
}); 