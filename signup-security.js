// Security Protection for Signup Page
(function () {
    'use strict';

    // Complete right-click and context menu blocking
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        // Show website info instead of blocking message
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
                <p style="margin: 10px 0; font-size: 14px;">📞 Call: +91 8375084969</p>
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
    document.addEventListener('mousedown', function (e) {
        if (e.button === 2 || e.which === 3) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
    }, { capture: true, passive: false });

    document.addEventListener('mouseup', function (e) {
        if (e.button === 2 || e.which === 3) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
    }, { capture: true, passive: false });

    // Complete keyboard shortcut blocking
    document.addEventListener('keydown', function (e) {
        // F12 - Developer Tools
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }

        // Ctrl+Shift+I - DevTools
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }

        // Ctrl+Shift+J - Console
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }

        // Ctrl+U - View Source
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }

        // Ctrl+Shift+C - Element Inspector
        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.keyCode === 67)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }

        // Ctrl+Shift+K - Firefox Console
        if (e.ctrlKey && e.shiftKey && (e.key === 'K' || e.keyCode === 75)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
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

        // Ctrl+C - Copy
        if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.keyCode === 67) && !e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
    }, { capture: true, passive: false });

    // Disable text selection
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);

    // Disable drag and drop
    document.addEventListener('dragstart', function (e) {
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
        input, textarea {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
    `;
    document.head.appendChild(style);
})();