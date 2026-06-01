// ============ PARALLAX EFFECT ============
document.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax elements with data attributes
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach((element) => {
        const parallaxSpeed = element.getAttribute('data-parallax');
        const offset = scrolled * (parallaxSpeed / 10);
        element.style.transform = `translateY(${offset}px)`;
    });

    // Update navbar styling on scroll
    const navbar = document.querySelector('.navbar');
    if (scrolled > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// ============ SCROLL-TRIGGERED ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe cards and content sections
document.querySelectorAll('.skill-card, .project-card, .about-text').forEach((element) => {
    observer.observe(element);
});

// ============ 3D TILT EFFECT FOR PROJECT CARDS ============
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// ============ CURSOR TRACKER ============
const cursor = document.createElement('div');
cursor.className = 'cursor-tracker';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(99, 102, 241, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: screen;
    display: none;
`;
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.display = 'block';
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    
    cursor.style.left = cursorX - 10 + 'px';
    cursor.style.top = cursorY - 10 + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// ============ SMOOTH SCROLL TO SECTIONS ============
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============ MOUSE FOLLOW EFFECT FOR BACKGROUND SPHERES ============
document.addEventListener('mousemove', (e) => {
    const spheres = document.querySelectorAll('.sphere');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    spheres.forEach((sphere, index) => {
        const offsetX = (x - 0.5) * 30 * (index + 1);
        const offsetY = (y - 0.5) * 30 * (index + 1);
        sphere.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

// ============ SCROLL PROGRESS INDICATOR ============
function createProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 60px;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #ec4899);
        width: 0%;
        z-index: 999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

createProgressIndicator();

// ============ ADD ANIMATION CLASSES ============
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .skill-card,
    .project-card {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
    }

    .in-view {
        animation: fadeInUp 0.6s ease-out forwards !important;
    }

    .cursor-tracker {
        box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
    }
`;
document.head.appendChild(style);

// ============ INITIALIZE EVERYTHING ============
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded with 3D parallax effects!');
    setupScrollAnimations();
});

function setupScrollAnimations() {
    const aboutSection = document.querySelector('.about');
    
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                }
            });
        });
        
        aboutObserver.observe(aboutSection);
    }
}