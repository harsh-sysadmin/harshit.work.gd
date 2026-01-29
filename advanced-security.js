// ========================================
// HARSH IT SOLUTIONS - ADVANCED SECURITY
// Maximum Protection Against All Attacks
// ========================================

(function() {
    'use strict';

    // Anti-debugging protection - Balanced approach
    let devtools = {open: false, orientation: null};
    const threshold = 160;

    // DevTools Detection (less aggressive)
    setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                // Just show message instead of killing page
                alert('Developer tools detected. Please close to continue.');
            }
        } else {
            devtools.open = false;
        }
    }, 1000);

    // Console protection (non-destructive)
    let noop = () => {};
    ['log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml', 
     'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'].forEach(method => {
        console[method] = noop;
    });

    // Debugger detection (less frequent)
    let check = () => {
        let start = +new Date();
        debugger;
        let end = +new Date();
        if(end - start > 100) {
            alert('Debugging detected. Please close developer tools.');
        }
    };
    setInterval(check, 5000);

    // Anti-iframe protection
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }

    // Disable F keys (non-destructive)
    document.addEventListener('keydown', function(e) {
        // Block F12 and other F keys
        if (e.keyCode >= 112 && e.keyCode <= 123) {
            e.preventDefault();
            return false;
        }
        
        // Block dangerous Ctrl combinations
        if (e.ctrlKey && (
            e.keyCode === 73 || // Ctrl+I
            e.keyCode === 74 || // Ctrl+J
            e.keyCode === 85 || // Ctrl+U
            e.keyCode === 83    // Ctrl+S
        )) {
            e.preventDefault();
            return false;
        }

        // Block Ctrl+Shift combinations
        if (e.ctrlKey && e.shiftKey && (
            e.keyCode === 67 || // Ctrl+Shift+C
            e.keyCode === 73 || // Ctrl+Shift+I
            e.keyCode === 74 || // Ctrl+Shift+J
            e.keyCode === 75    // Ctrl+Shift+K
        )) {
            e.preventDefault();
            return false;
        }
    });

    // Disable right click (show message)
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
        return false;
    });

    // Disable text selection
    document.addEventListener('selectstart', e => {
        e.preventDefault();
        return false;
    });

    // Disable drag
    document.addEventListener('dragstart', e => {
        e.preventDefault();
        return false;
    });

    // Clear console periodically
    setInterval(() => {
        console.clear();
    }, 1000);

    // Obfuscate source code
    let originalHTML = document.documentElement.outerHTML;
    
    // Anti-copy protection
    document.addEventListener('copy', e => {
        e.clipboardData.setData('text/plain', '');
        e.preventDefault();
    });

    // Disable print
    window.addEventListener('beforeprint', e => {
        e.preventDefault();
        return false;
    });

    // Monitor for suspicious activity
    let suspiciousActivity = 0;
    
    document.addEventListener('keydown', () => {
        suspiciousActivity++;
        if (suspiciousActivity > 50) {
            window.location.href = 'about:blank';
        }
    });

    // Reset counter periodically
    setInterval(() => {
        suspiciousActivity = 0;
    }, 10000);

    // Disable common browser extensions
    if (window.chrome && window.chrome.runtime && window.chrome.runtime.onConnect) {
        window.location.href = 'about:blank';
    }

    // Check for automation tools
    if (navigator.webdriver) {
        window.location.href = 'about:blank';
    }

    // Disable zoom
    document.addEventListener('wheel', e => {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    });

    // Disable keyboard zoom
    document.addEventListener('keydown', e => {
        if (e.ctrlKey && (e.keyCode === 61 || e.keyCode === 107 || e.keyCode === 173 || e.keyCode === 109 || e.keyCode === 187 || e.keyCode === 189)) {
            e.preventDefault();
        }
    });

    // Console protection (safe)
    setInterval(() => {
        console.clear();
    }, 5000);

    // Protect against memory dumps
    setInterval(() => {
        let img = new Image();
        img.onerror = img.onload = () => {
            if (performance.now() - start > 100) {
                window.location.href = 'about:blank';
            }
        };
        let start = performance.now();
        img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
    }, 2000);

    // Disable source viewing
    document.addEventListener('keydown', e => {
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
            e.preventDefault();
            window.location.href = 'about:blank';
            return false;
        }
    });

    // CSS injection protection
    let style = document.createElement('style');
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
            user-select: text !important;
        }
    `;
    document.head.appendChild(style);

    // Prevent iframe embedding
    if (window !== window.top) {
        window.top.location.replace(window.location);
    }

    // Advanced console detection
    let devtools_1 = {open: false, orientation: null};
    let threshold_1 = 160;
    
    setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold_1 || 
            window.outerWidth - window.innerWidth > threshold_1) {
            if (!devtools_1.open) {
                devtools_1.open = true;
                document.body.innerHTML = '<h1>Access Denied</h1>';
                setTimeout(() => {
                    window.location.href = 'about:blank';
                }, 1000);
            }
        } else {
            devtools_1.open = false;
        }
    }, 100);

    // Protect localStorage
    let originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
        if (key.includes('debug') || key.includes('hack') || key.includes('exploit')) {
            return;
        }
        originalSetItem.call(this, key, value);
    };

})();