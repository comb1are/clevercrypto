import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    isDark?: boolean;
}

export default function IconAuthLayout2({ isDark, ...props }: IconProps) {
    return (
        <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L11 11M11 1L1 11" stroke={isDark ? "#ffffff" : "#282828"} strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}
