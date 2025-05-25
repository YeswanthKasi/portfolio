// Tech Background Animation
function createTechBackground() {
    const background = document.getElementById('techBackground');
    const numLines = 15;
    const numDots = 20;

    // Create circuit lines
    for (let i = 0; i < numLines; i++) {
        const line = document.createElement('div');
        line.className = 'circuit-line';
        line.style.top = `${Math.random() * 100}%`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        background.appendChild(line);
    }

    // Create glowing dots
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'circuit-dot';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animationDelay = `${Math.random() * 2}s`;
        background.appendChild(dot);
    }
}

// Initialize tech background
createTechBackground();

// Material Design Background Animation
function createMaterialBackground() {
    const background = document.getElementById('techBackground');
    background.style.opacity = '0.05';
}

// Initialize material background
createMaterialBackground();

// Navbar scroll effect with elevation
const navbar = document.querySelector('.navbar');
let lastScroll = 0;
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > scrollThreshold) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Smooth reveal animations on scroll with Material Design timing
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(element);
});

// Hero section fade out on scroll
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;
    const fadeStart = heroHeight * 0.4;
    const fadeEnd = heroHeight * 0.8;
    
    if (scrolled >= fadeStart && scrolled <= fadeEnd) {
        const opacity = 1 - ((scrolled - fadeStart) / (fadeEnd - fadeStart));
        heroContent.style.opacity = opacity.toString();
    } else if (scrolled > fadeEnd) {
        heroContent.style.opacity = '0';
    } else {
        heroContent.style.opacity = '1';
    }
});

// Typewriter effect with cursor
const typewriterText = document.querySelector('.typewriter h2');
if (typewriterText) {
    const text = typewriterText.textContent;
    typewriterText.textContent = '';
    typewriterText.style.borderRight = '0.15em solid #0071e3';

    let charIndex = 0;
    function typeWriter() {
        if (charIndex < text.length) {
            typewriterText.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        } else {
            // Start cursor blink after typing
            typewriterText.style.animation = 'blink-caret 0.75s step-end infinite';
        }
    }

    // Start typing when the element is in view
    const typewriterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeWriter, 500);
                typewriterObserver.unobserve(entry.target);
            }
        });
    });

    typewriterObserver.observe(typewriterText);
}

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 60; // Height of fixed navbar
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Skill bars animation with Material Design timing
const skillBars = document.querySelectorAll('.skill-progress');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetWidth = entry.target.getAttribute('style').match(/width: (\d+)%/)[1];
            entry.target.style.transform = `scaleX(${targetWidth / 100})`;
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    bar.style.transform = 'scaleX(0)';
    skillsObserver.observe(bar);
});

// Custom cursor
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.className = 'custom-cursor-follower';
document.body.appendChild(cursorFollower);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Smooth follow effect
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor hover effects
document.querySelectorAll('a, button, .project-card, .tech-bubble').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Hide cursor when mouse leaves window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
});

// Enhanced project card animations
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.transform = 'translateY(-8px)';
        card.style.background = `
            radial-gradient(circle at ${x}px ${y}px, 
            rgba(255,255,255,0.9) 0%, 
            rgba(255,255,255,0.8) 100%)
        `;
    });
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const gradientX = (x / rect.width) * 100;
        const gradientY = (y / rect.height) * 100;
        
        card.style.background = `
            radial-gradient(circle at ${gradientX}% ${gradientY}%, 
            rgba(255,255,255,0.9) 0%, 
            rgba(255,255,255,0.8) 100%)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.background = 'rgba(255,255,255,0.8)';
    });
});

// Enhanced tech bubble animations
const techBubbles = document.querySelectorAll('.tech-bubble');
techBubbles.forEach(bubble => {
    bubble.addEventListener('mouseenter', () => {
        bubble.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    bubble.addEventListener('mouseleave', () => {
        bubble.style.transform = 'translateY(0) scale(1)';
    });
});

// Add magnetic effect to social links
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        link.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translate(0, 0)';
    });
});

// Material Design ripple effect for buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;
    ripple.className = 'ripple';
    
    button.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}

const buttons = document.querySelectorAll('.submit-button, .nav-item');
buttons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// Contact Dialog Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactDialog = document.getElementById('contactDialog');
    const closeDialog = document.getElementById('closeDialog');
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    const contactToggleBtn = document.querySelector('.contact-toggle-btn');

    function openDialog(e) {
        if (e) e.preventDefault();
        contactDialog.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeDialogFunc() {
        contactDialog.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Event listeners for opening dialog
    contactLinks.forEach(link => {
        link.addEventListener('click', openDialog);
    });

    // Add event listener for the contact toggle button
    if (contactToggleBtn) {
        contactToggleBtn.addEventListener('click', openDialog);
    }

    // Event listeners for closing dialog
    if (closeDialog) {
        closeDialog.addEventListener('click', closeDialogFunc);
    }

    // Close when clicking outside the dialog
    contactDialog.addEventListener('click', (e) => {
        if (e.target === contactDialog) {
            closeDialogFunc();
        }
    });

    // Close dialog with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactDialog.classList.contains('show')) {
            closeDialogFunc();
        }
    });

    // Handle form submission in the dialog
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const mailtoLink = `mailto:Kasireddiyeswanth29@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}`;
            window.location.href = mailtoLink;
            contactForm.reset();
            contactDialog.classList.remove('show');
            document.body.style.overflow = '';
        });
    }
});

// Window resize handler for binary rain
window.addEventListener('resize', () => {
    const binaryRain = document.querySelector('.binary-rain');
    if (binaryRain) {
        binaryRain.innerHTML = '';
        createBinaryRain();
    }
});

// Mobile menu toggle (if needed in the future)
// This is a placeholder for mobile menu functionality
const mobileMenuToggle = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
};

// Scroll animation handling
const scrollElements = document.querySelectorAll('.scroll-trigger, .project-card, .skill-progress, .fade-up');

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const hideScrollElement = (element) => {
    element.classList.remove('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 90)) {
            displayScrollElement(el);
        }
    });
};

// Add scroll event listener
window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Initialize on page load
window.addEventListener('load', () => {
    handleScrollAnimation();
});

// Add scroll-trigger class to elements that should animate
document.querySelectorAll('.project-card, .skill-progress, .fade-up').forEach(el => {
    el.classList.add('scroll-trigger');
});

// Animate skill bars when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.parentElement.parentElement.querySelector('.skill-level').textContent;
                progressBar.style.setProperty('--progress', width);
                progressBar.classList.add('animate');
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
});

// Add fade-up animation to elements
const fadeUpElements = document.querySelectorAll('.fade-up');
const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeUpObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeUpElements.forEach(element => fadeUpObserver.observe(element)); 