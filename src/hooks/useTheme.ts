import { useState, useEffect } from 'react';


export function useTheme() {
    
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

        
        checkTheme();

        
        const observer = new MutationObserver(() => {
            checkTheme();
        });

        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        
        window.addEventListener('themeChanged', checkTheme);

        return () => {
            observer.disconnect();
            window.removeEventListener('themeChanged', checkTheme);
        };
    }, []);

    return isDark;
}
