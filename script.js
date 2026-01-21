// ========================================
// HARSH IT SOLUTIONS - MAIN JAVASCRIPT
// Professional IT Services Website
// ========================================

// Maximum Security Protection - Complete Right-Click Blocking
(function() {
    'use strict';
    
    // Complete right-click and context menu blocking
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        // Show normal website info instead of blocking message
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 15px;
            z-index: 999999;
            font-family: 'Inter', Arial, sans-serif;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            text-align: center;
            backdrop-filter: blur(10px);
        `;
        
        overlay.innerHTML = `
            <div>
                <h2 style="margin: 0 0 15px 0; font-size: 24px;">💻 Harsh IT Solutions</h2>
                <p style="margin: 10px 0; font-size: 16px;">Professional Computer Repair Services</p>
                <p style="margin: 10px 0; font-size: 14px;">📞 Call: +91 8287884969</p>
                <p style="margin: 10px 0; font-size: 14px;">📍 North East Delhi</p>
                <p style="margin: 15px 0 0 0; font-size: 12px; opacity: 0.8;">Mon-Sat: 10AM-6PM</p>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            if (overlay.parentElement) {
                overlay.remove();
            }
        }, 3000);
        
        return false;
    }, { capture: true, passive: false });
    
    // Block all mouse right-click events
    document.addEventListener('mousedown', function(e) {
        if (e.button === 2 || e.which === 3) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
    }, { capture: true, passive: false });
    
    document.addEventListener('mouseup', function(e) {
        if (e.button === 2 || e.which === 3) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
    }, { capture: true, passive: false });
    
    // Block touch and hold on mobile
    let touchTimer;
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length === 1) {
            touchTimer = setTimeout(() => {
                e.preventDefault();
                e.stopPropagation();
            }, 500);
        }
    }, { passive: false });
    
    document.addEventListener('touchend', function() {
        clearTimeout(touchTimer);
    });
    
    document.addEventListener('touchmove', function() {
        clearTimeout(touchTimer);
    });
    
    // Complete keyboard shortcut blocking
    document.addEventListener('keydown', function(e) {
        // F12 - Developer Tools
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            showWebsiteInfo();
            return false;
        }
        
        // Ctrl+Shift+I - DevTools
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            showWebsiteInfo();
            return false;
        }
        
        // Ctrl+Shift+J - Console
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            showWebsiteInfo();
            return false;
        }
        
        // Ctrl+U - View Source
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            showWebsiteInfo();
            return false;
        }
        
        // Ctrl+Shift+C - Element Inspector
        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.keyCode === 67)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            showWebsiteInfo();
            return false;
        }
        
        // Ctrl+Shift+K - Firefox Console
        if (e.ctrlKey && e.shiftKey && (e.key === 'K' || e.keyCode === 75)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            showWebsiteInfo();
            return false;
        }
        
        // Ctrl+S - Save Page
        if (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
        
        // Ctrl+A - Select All
        if (e.ctrlKey && (e.key === 'a' || e.key === 'A' || e.keyCode === 65)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
        
        // Ctrl+P - Print
        if (e.ctrlKey && (e.key === 'p' || e.key === 'P' || e.keyCode === 80)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
        
        // Ctrl+C - Copy
        if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.keyCode === 67) && !e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
        
        // Ctrl+V - Paste
        if (e.ctrlKey && (e.key === 'v' || e.key === 'V' || e.keyCode === 86)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
        
        // Ctrl+X - Cut
        if (e.ctrlKey && (e.key === 'x' || e.key === 'X' || e.keyCode === 88)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
    }, { capture: true, passive: false });
    
    function showWebsiteInfo() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 15px;
            z-index: 999999;
            font-family: 'Inter', Arial, sans-serif;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            text-align: center;
            backdrop-filter: blur(10px);
        `;
        
        overlay.innerHTML = `
            <div>
                <h2 style="margin: 0 0 15px 0; font-size: 24px;">💻 Harsh IT Solutions</h2>
                <p style="margin: 10px 0; font-size: 16px;">Professional Computer Repair Services</p>
                <p style="margin: 10px 0; font-size: 14px;">📞 Call: +91 8287884969</p>
                <p style="margin: 10px 0; font-size: 14px;">📍 North East Delhi</p>
                <p style="margin: 15px 0 0 0; font-size: 12px; opacity: 0.8;">Mon-Sat: 10AM-6PM</p>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            if (overlay.parentElement) {
                overlay.remove();
            }
        }, 3000);
    }
    
    // Disable text selection completely
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);
    
    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);
    
    // CSS-based selection prevention
    const style = document.createElement('style');
    style.textContent = `
        * {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
            -webkit-touch-callout: none !important;
            -webkit-tap-highlight-color: transparent !important;
        }
    `;
    document.head.appendChild(style);
})();

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            document.body.classList.remove('loading');
        }, 500);
    }, 1500);
});

// Add loading class to body initially
document.body.classList.add('loading');

// Matrix Canvas Animation with Advanced Effects
function initMatrixAnimation() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    const speeds = [];
    const colors = ['#00ff41', '#00cc33', '#008f11', '#00ff88'];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
        speeds[x] = Math.random() * 0.5 + 0.5;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            
            // Random color selection for variety
            const colorIndex = Math.floor(Math.random() * colors.length);
            ctx.fillStyle = colors[colorIndex];
            
            // Add glow effect
            ctx.shadowColor = colors[colorIndex];
            ctx.shadowBlur = 5;
            
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // Reset shadow
            ctx.shadowBlur = 0;
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i] += speeds[i];
        }
    }
    
    setInterval(draw, 35);
    
    // Update temperature display
    setInterval(() => {
        const tempElement = document.querySelector('.temp');
        if (tempElement) {
            const temp = Math.floor(Math.random() * 10) + 38;
            tempElement.textContent = temp + '°C';
        }
    }, 2000);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize matrix animation after DOM load
document.addEventListener('DOMContentLoaded', () => {
    initMatrixAnimation();
});

// Navigation functionality
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Sticky navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Service details for modals
const serviceDetails = {
    repair: {
        title: 'Computer & Laptop Repair',
        content: `
            <div class="service-detail">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=300&fit=crop" alt="Computer Repair" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                <h3>Professional Computer & Laptop Repair Services</h3>
                <p>We specialize in fixing all types of computer and laptop issues with fast turnaround times and competitive pricing.</p>
                
                <h4>Our Repair Services Include:</h4>
                <ul>
                    <li><i class="fas fa-check"></i> Motherboard repair and component replacement</li>
                    <li><i class="fas fa-check"></i> Screen replacement (LCD/LED/OLED)</li>
                    <li><i class="fas fa-check"></i> Keyboard and touchpad repair</li>
                    <li><i class="fas fa-check"></i> Battery replacement and charging issues</li>
                    <li><i class="fas fa-check"></i> Hard drive and SSD replacement</li>
                    <li><i class="fas fa-check"></i> RAM upgrades and memory issues</li>
                    <li><i class="fas fa-check"></i> Overheating and fan replacement</li>
                    <li><i class="fas fa-check"></i> Data recovery services</li>
                </ul>
                
                <div class="service-pricing">
                    <h4>Pricing:</h4>
                    <p><strong>Diagnostic:</strong> ₹200 (Free if you proceed with repair)</p>
                    <p><strong>Basic Repairs:</strong> Starting from ₹500</p>
                    <p><strong>Screen Replacement:</strong> ₹2,000 - ₹8,000</p>
                    <p><strong>Motherboard Repair:</strong> ₹1,500 - ₹5,000</p>
                </div>
                
                <div class="service-warranty">
                    <h4>Warranty & Guarantee:</h4>
                    <p>✅ 30-day warranty on all repairs</p>
                    <p>✅ Same-day service for most issues</p>
                    <p>✅ Free pickup and delivery in local area</p>
                </div>
                
                <button class="btn btn-primary" onclick="openModal('bookingModal')">Book Repair Now</button>
            </div>
        `
    },
    virus: {
        title: 'Virus & Malware Removal',
        content: `
            <div class="service-detail">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop" alt="Virus Removal" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                <h3>Complete Virus & Malware Removal Service</h3>
                <p>Protect your computer from viruses, malware, ransomware, and other security threats with our comprehensive cleanup service.</p>
                
                <h4>What We Remove:</h4>
                <ul>
                    <li><i class="fas fa-check"></i> Viruses and trojans</li>
                    <li><i class="fas fa-check"></i> Malware and spyware</li>
                    <li><i class="fas fa-check"></i> Adware and browser hijackers</li>
                    <li><i class="fas fa-check"></i> Ransomware (if possible)</li>
                    <li><i class="fas fa-check"></i> Rootkits and bootkits</li>
                    <li><i class="fas fa-check"></i> Potentially unwanted programs (PUPs)</li>
                </ul>
                
                <h4>Our Process:</h4>
                <ul>
                    <li><i class="fas fa-check"></i> Complete system scan and analysis</li>
                    <li><i class="fas fa-check"></i> Safe removal of all threats</li>
                    <li><i class="fas fa-check"></i> System optimization and cleanup</li>
                    <li><i class="fas fa-check"></i> Install reliable antivirus software</li>
                    <li><i class="fas fa-check"></i> Browser cleanup and security setup</li>
                    <li><i class="fas fa-check"></i> System backup and recovery setup</li>
                </ul>
                
                <div class="service-pricing">
                    <h4>Pricing:</h4>
                    <p><strong>Basic Cleanup:</strong> ₹300</p>
                    <p><strong>Advanced Removal:</strong> ₹500</p>
                    <p><strong>Complete Security Setup:</strong> ₹800</p>
                </div>
                
                <button class="btn btn-primary" onclick="openModal('bookingModal')">Get Protected Now</button>
            </div>
        `
    },
    network: {
        title: 'Network Setup & WiFi',
        content: `
            <div class="service-detail">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop" alt="Network Setup" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                <h3>Professional Network Setup & WiFi Configuration</h3>
                <p>Get your home or office network running smoothly with our expert setup and troubleshooting services.</p>
                
                <h4>Network Services:</h4>
                <ul>
                    <li><i class="fas fa-check"></i> WiFi router setup and configuration</li>
                    <li><i class="fas fa-check"></i> Network troubleshooting and optimization</li>
                    <li><i class="fas fa-check"></i> Internet connectivity issues</li>
                    <li><i class="fas fa-check"></i> Network security setup</li>
                    <li><i class="fas fa-check"></i> Range extender installation</li>
                    <li><i class="fas fa-check"></i> Ethernet cable installation</li>
                    <li><i class="fas fa-check"></i> Network printer setup</li>
                    <li><i class="fas fa-check"></i> Smart device connectivity</li>
                </ul>
                
                <h4>Business Network Solutions:</h4>
                <ul>
                    <li><i class="fas fa-check"></i> Office network design and setup</li>
                    <li><i class="fas fa-check"></i> Server configuration</li>
                    <li><i class="fas fa-check"></i> Network security implementation</li>
                    <li><i class="fas fa-check"></i> VPN setup for remote work</li>
                </ul>
                
                <div class="service-pricing">
                    <h4>Pricing:</h4>
                    <p><strong>Basic WiFi Setup:</strong> ₹500</p>
                    <p><strong>Network Troubleshooting:</strong> ₹800</p>
                    <p><strong>Complete Office Setup:</strong> ₹2,000+</p>
                </div>
                
                <button class="btn btn-primary" onclick="openModal('bookingModal')">Setup Network</button>
            </div>
        `
    },
    custom: {
        title: 'Custom PC Builds',
        content: `
            <div class="service-detail">
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop" alt="Custom PC Build" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                <h3>Custom PC Builds & Workstations</h3>
                <p>Build your dream computer with our expert assembly service. We create custom PCs for gaming, work, and specialized needs.</p>
                
                <h4>Build Categories:</h4>
                <ul>
                    <li><i class="fas fa-check"></i> Gaming PCs (Budget to High-end)</li>
                    <li><i class="fas fa-check"></i> Workstations for professionals</li>
                    <li><i class="fas fa-check"></i> Office computers</li>
                    <li><i class="fas fa-check"></i> Video editing rigs</li>
                    <li><i class="fas fa-check"></i> Streaming setups</li>
                    <li><i class="fas fa-check"></i> Mining rigs</li>
                </ul>
                
                <h4>Our Process:</h4>
                <ul>
                    <li><i class="fas fa-check"></i> Consultation and requirement analysis</li>
                    <li><i class="fas fa-check"></i> Component selection and sourcing</li>
                    <li><i class="fas fa-check"></i> Professional assembly</li>
                    <li><i class="fas fa-check"></i> Cable management and optimization</li>
                    <li><i class="fas fa-check"></i> OS installation and setup</li>
                    <li><i class="fas fa-check"></i> Performance testing and benchmarking</li>
                </ul>
                
                <div class="service-pricing">
                    <h4>Sample Builds:</h4>
                    <p><strong>Budget Gaming PC:</strong> ₹35,000 - ₹50,000</p>
                    <p><strong>Mid-range Gaming PC:</strong> ₹60,000 - ₹1,00,000</p>
                    <p><strong>High-end Gaming PC:</strong> ₹1,20,000+</p>
                    <p><strong>Assembly Service:</strong> ₹2,000 - ₹5,000</p>
                </div>
                
                <button class="btn btn-primary" onclick="openModal('bookingModal')">Build My PC</button>
            </div>
        `
    },
    software: {
        title: 'Software Installation',
        content: `
            <div class="service-detail">
                <img src="https://images.unsplash.com/photo-1551808525-51a94da548ce?w=500&h=300&fit=crop" alt="Software Installation" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                <h3>Software Installation & System Setup</h3>
                <p>Get your computer ready with all the software you need. We handle everything from OS installation to software setup.</p>
                
                <h4>Operating System Installation:</h4>
                <ul>
                    <li><i class="fas fa-check"></i> Windows 10/11 installation</li>
                    <li><i class="fas fa-check"></i> Linux distributions</li>
                    <li><i class="fas fa-check"></i> macOS installation (Mac computers)</li>
                    <li><i class="fas fa-check"></i> Dual boot setup</li>
                </ul>
                
                <h4>Software Installation:</h4>
                <ul>
                    <li><i class="fas fa-check"></i> Microsoft Office suite</li>
                    <li><i class="fas fa-check"></i> Adobe Creative Suite</li>
                    <li><i class="fas fa-check"></i> Antivirus and security software</li>
                    <li><i class="fas fa-check"></i> Browsers and essential apps</li>
                    <li><i class="fas fa-check"></i> Gaming platforms (Steam, Epic, etc.)</li>
                    <li><i class="fas fa-check"></i> Professional software</li>
                </ul>
                
                <h4>System Optimization:</h4>
                <ul>
                    <li><i class="fas fa-check"></i> Driver updates and installation</li>
                    <li><i class="fas fa-check"></i> System performance tuning</li>
                    <li><i class="fas fa-check"></i> Startup optimization</li>
                    <li><i class="fas fa-check"></i> Registry cleanup</li>
                </ul>
                
                <div class="service-pricing">
                    <h4>Pricing:</h4>
                    <p><strong>OS Installation:</strong> ₹500</p>
                    <p><strong>Software Setup:</strong> ₹200 per software</p>
                    <p><strong>Complete Setup:</strong> ₹1,500</p>
                </div>
                
                <button class="btn btn-primary" onclick="openModal('bookingModal')">Setup Software</button>
            </div>
        `
    },
    printer: {
        title: 'Printer Repair & Setup',
        content: `
            <div class="service-detail">
                <img src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=300&fit=crop" alt="Printer Repair" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
                <h3>Printer Repair & Setup Services</h3>
                <p>Fix all your printer problems and get your printing back on track with our expert repair and setup services.</p>
                
                <h4>Printer Issues We Fix:</h4>
                <ul>
                    <li><i class="fas fa-check"></i> Paper jam problems</li>
                    <li><i class="fas fa-check"></i> Print quality issues</li>
                    <li><i class="fas fa-check"></i> Connectivity problems</li>
                    <li><i class="fas fa-check"></i> Driver installation</li>
                    <li><i class="fas fa-check"></i> Cartridge replacement</li>
                    <li><i class="fas fa-check"></i> Wireless setup</li>
                    <li><i class="fas fa-check"></i> Network printer configuration</li>
                </ul>
                
                <h4>Printer Types We Service:</h4>
                <ul>
                    <li><i class="fas fa-check"></i> Inkjet printers</li>
                    <li><i class="fas fa-check"></i> Laser printers</li>
                    <li><i class="fas fa-check"></i> All-in-one printers</li>
                    <li><i class="fas fa-check"></i> Dot matrix printers</li>
                    <li><i class="fas fa-check"></i> Large format printers</li>
                </ul>
                
                <div class="service-pricing">
                    <h4>Pricing:</h4>
                    <p><strong>Basic Setup:</strong> ₹300</p>
                    <p><strong>Repair Service:</strong> ₹500+</p>
                    <p><strong>Cartridge Replacement:</strong> ₹200</p>
                </div>
                
                <button class="btn btn-primary" onclick="openModal('bookingModal')">Fix Printer</button>
            </div>
        `
    }
};

// Service modal functionality
function openServiceModal(service) {
    const modal = document.getElementById('serviceModal');
    const content = document.getElementById('serviceModalContent');
    const serviceData = serviceDetails[service];
    
    if (serviceData) {
        content.innerHTML = `
            <h2>${serviceData.title}</h2>
            ${serviceData.content}
        `;
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    }
}

// Testimonials slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const testimonialDots = document.querySelectorAll('.nav-dot');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
    
    testimonialDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    currentTestimonial = index;
}

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Chat widget functionality
const chatWidget = document.getElementById('chat-widget');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

function toggleChat() {
    chatWidget.classList.toggle('open');
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    const responses = {
        'hello': 'Hello! 👋 How can I help you today? Are you looking for computer repair, virus removal, or custom PC builds?',
        'hi': 'Hi there! What can I help you with? We offer computer repair, network setup, virus removal, and more!',
        'repair': 'We offer professional computer and laptop repair services starting from ₹500. What type of repair do you need?',
        'virus': 'Our virus removal service starts at ₹300 and includes complete system cleanup. Is your computer running slow or showing pop-ups?',
        'price': 'Our pricing varies by service:\\n• Computer Repair: ₹500+\\n• Virus Removal: ₹300+\\n• Network Setup: ₹500+\\n• Custom PC Build: ₹25,000+\\nWhat service are you interested in?',
        'network': 'We provide WiFi setup and network troubleshooting starting from ₹500. Are you having connectivity issues?',
        'custom': 'We build custom PCs for gaming and work starting from ₹25,000. What\\'s your budget and intended use?',
        'gaming': 'We build amazing gaming PCs! Budget gaming PCs start from ₹35,000. What games do you want to play?',
        'laptop': 'We repair all laptop brands including screen replacement, keyboard repair, and motherboard issues. What\\'s wrong with your laptop?',
        'hours': 'We\\'re open Monday-Saturday 10AM-6PM, Sunday closed. Need emergency service?',
        'location': 'We\\'re located at Gali Number 3 Near Hanuman Mandir Fanne Khan Mod North East Delhi 110093. We also offer pickup and delivery service!',
        'whatsapp': 'You can reach us on WhatsApp at +91 8287884969 for quick support!',
        'call': 'Call us at +91 8287884969 for immediate assistance!',
        'default': 'Thanks for your message! For specific help, please call us at +91 8287884969 or book a service through our website. How else can I help you?'
    };
    
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return responses.default;
}

// Allow Enter key to send messages
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.classList.add('modal-open');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.classList.remove('modal-open');
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});

// Form submissions
function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Show success message
    alert(`Thank you ${data.name}! We've received your message about ${data.service}. We'll contact you at ${data.phone} within 2 hours.`);
    event.target.reset();
}

function submitBooking(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Show booking confirmation
    alert(`Booking Confirmed! 🎉\\n\\nService: ${data.service}\\nDate: ${data.date}\\nName: ${data.name}\\nPhone: ${data.phone}\\n\\nWe'll call you to confirm the exact time. Thank you for choosing Harsh IT Solutions!`);
    closeModal('bookingModal');
    event.target.reset();
}

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: var(--shadow);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add loading states for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.type === 'submit') {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add stagger animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
    
    // Add stagger animation to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
    });
    
    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        if (target) {
            animateCounter(stat, target);
        }
    });
});

// Counter animation function
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const suffix = element.textContent.replace(/[0-9]/g, '');
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    }
    
    // Start animation when element is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(element);
}

// Performance optimization - lazy loading for images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// Add smooth reveal animations for sections
const revealElements = document.querySelectorAll('.fade-in');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Add hover effects for interactive elements
document.querySelectorAll('.service-card, .portfolio-item').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Initialize chat widget with welcome message
setTimeout(() => {
    if (!chatWidget.classList.contains('open')) {
        // Show notification dot or pulse effect
        chatWidget.style.animation = 'pulse 2s infinite';
    }
}, 5000);

// Add typing indicator for chat
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing';
    typingDiv.innerHTML = '<p>Typing...</p>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    setTimeout(() => {
        typingDiv.remove();
    }, 1000);
}

// FAQ functionality
function toggleFaq(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const currentItem = faqItems[index];
    
    // Close all other FAQ items
    faqItems.forEach((item, i) => {
        if (i !== index) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current item
    currentItem.classList.toggle('active');
}

// Language Toggle
let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    const langText = document.getElementById('langText');
    
    if (currentLanguage === 'hi') {
        langText.textContent = 'English';
        translateToHindi();
    } else {
        langText.textContent = 'हिंदी';
        translateToEnglish();
    }
}

function translateToHindi() {
    // Comprehensive Hindi translation would go here
    // For brevity, showing key translations only
    const translations = {
        'Home': 'होम',
        'About': 'हमारे बारे में',
        'Services': 'सेवाएं',
        'Contact': 'संपर्क',
        'Professional IT Solutions & Computer Repair': 'पेशेवर आईटी समाधान और कंप्यूटर रिपेयर'
    };
    
    Object.keys(translations).forEach(english => {
        const elements = document.querySelectorAll('*');
        elements.forEach(element => {
            if (element.textContent.trim() === english) {
                element.textContent = translations[english];
            }
        });
    });
}

function translateToEnglish() {
    location.reload(); // Simple way to restore original content
}

console.log('🚀 Harsh IT Solutions website loaded successfully!');
console.log('📞 Contact: +91 8287884969');
console.log('💻 Services: Computer Repair, Virus Removal, Network Setup, Custom PC Builds');