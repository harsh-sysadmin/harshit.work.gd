// Theme Refinements - Professional Interactions

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.service-card, .feature-item, .section-header');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('reveal', 'active');
        }
    });
}

// Enhanced Button Interactions
function enhanceButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });
}

// Professional Loading States
function addLoadingStates() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.add('loading-pulse');
            setTimeout(() => {
                this.classList.remove('loading-pulse');
            }, 1000);
        });
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Add reveal class to elements
    const elements = document.querySelectorAll('.service-card, .feature-item, .section-header');
    elements.forEach(el => el.classList.add('reveal'));
    
    // Initialize enhancements
    enhanceButtons();
    addLoadingStates();
    
    // Scroll listener
    window.addEventListener('scroll', revealOnScroll);
    
    // Initial reveal check
    revealOnScroll();
});

// Professional Color Theme Toggle
function applyProfessionalTheme() {
    document.documentElement.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #1e3a8a, #3b82f6)');
    document.documentElement.style.setProperty('--success-gradient', 'linear-gradient(135deg, #059669, #10b981)');
    document.documentElement.style.setProperty('--card-shadow', '0 10px 30px rgba(59, 130, 246, 0.1)');
}

// Apply theme on load
document.addEventListener('DOMContentLoaded', applyProfessionalTheme);