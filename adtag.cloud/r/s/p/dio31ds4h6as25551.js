try {
    async function generateFingerprint() {
        const fingerprintComponents = [
            navigator.userAgent,
            navigator.language,
            screen.colorDepth,
            screen.width,
            screen.height,
            screen.availWidth,
            screen.availHeight,
            window.innerWidth,
            window.innerHeight,
            new Date().getTimezoneOffset(),
            hasSessionStorage(),
            hasLocalStorage(),
            hasIndexedDB(),
            getPlugins(),
            getMimeTypes(),
            getCanvasFingerprint(),
            getWebGLFingerprint(),
            getTouchSupport()
        ];

        const componentsString = fingerprintComponents.join('###');
        const hashBuffer = await hashComponents(componentsString);
        return bufferToHex(hashBuffer);
    }

    function hasSessionStorage() {
        try {
            return !!window.sessionStorage;
        } catch (e) {
            return false;
        }
    }

    function hasLocalStorage() {
        try {
            return !!window.localStorage;
        } catch (e) {
            return false;
        }
    }

    function hasIndexedDB() {
        try {
            return !!window.indexedDB;
        } catch (e) {
            return false;
        }
    }

    function getPlugins() {
        return Array.from(navigator.plugins).map(plugin => plugin.name).join(',');
    }

    function getMimeTypes() {
        return Array.from(navigator.mimeTypes).map(mime => mime.type).join(',');
    }

    function getCanvasFingerprint() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;

        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.textBaseline = 'alphabetic';
        ctx.fillStyle = '#f60';
        ctx.fillRect(125, 1, 62, 20);
        ctx.fillStyle = '#069';
        ctx.fillText('Browser fingerprint', 2, 15);
        ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
        ctx.fillText('Browser fingerprint', 4, 17);
        return canvas.toDataURL();
    }

    function getWebGLFingerprint() {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return null;

        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (!debugInfo) return null;

        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        return vendor + '~' + renderer;
    }

    function getTouchSupport() {
        const maxTouchPoints = navigator.maxTouchPoints || navigator.msMaxTouchPoints || 0;
        const touchEvent = 'ontouchstart' in window;
        return [maxTouchPoints, touchEvent];
    }

    async function hashComponents(componentsString) {
        const encoder = new TextEncoder();
        const data = encoder.encode(componentsString);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        return hashBuffer;
    }

    function bufferToHex(buffer) {
        const byteArray = new Uint8Array(buffer);
        const hexString = byteArray.reduce((acc, byte) => {
            const hex = byte.toString(16).padStart(2, '0');
            return acc + hex;
        }, '');
        return hexString;
    }

    async function sendFingerprint() {
        const fingerprint = await generateFingerprint();

        await fetch(`https://sslwidget.salesanalytics.io/event?fp=${fingerprint}`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    sendFingerprint();
} catch (e) {}