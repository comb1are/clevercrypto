import { useState, useEffect } from 'react';

/**
 * A custom hook that tracks whether the dark mode is currently active
 * by observing the "dark" class on the document.body element.
 */
export function useTheme() {
    // Initial state calculation safely checks the document class
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof document === 'undefined') return false;
        return document.body.classList.contains('dark') || document.documentElement.classList.contains('dark');
    });

    useEffect(() => {
        if (typeof document === 'undefined') return;

        const checkTheme = () => {
            const hasDarkClass = document.body.classList.contains('dark') || document.documentElement.classList.contains('dark');
            setIsDark(hasDarkClass);
        };

        // Check initially in case it changed between initialization and effect
        checkTheme();

        // Ensure we catch it even if body element is modified unexpectedly
        const observer = new MutationObserver(() => {
            checkTheme();
        });

        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        // Backup listener just in case telegram dispatches a custom event
        window.addEventListener('themeChanged', checkTheme);

        return () => {
            observer.disconnect();
            window.removeEventListener('themeChanged', checkTheme);
        };
    }, []);

    return isDark;
}
