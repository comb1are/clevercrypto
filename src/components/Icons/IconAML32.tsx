import React from 'react';

interface IconAML32Props extends React.SVGProps<SVGSVGElement> {
    percent?: number;      // Процент заполнения (от 0 до 100)
    emptyColor?: string;
    reverse?: boolean;   // Цвет серого фона кольца
}

export default function IconAML32({
    percent = 0,
    emptyColor = "#E9ECEF",
    reverse = false,
    className,
    ...props
}: IconAML32Props) {

    const safePercent = Math.max(0, Math.min(100, percent));


    const getFillColor = (p: number, reverse: boolean) => {
        if (reverse === false) {
            if (p > 66) return "#DC3545"; // Красный
            if (p > 33) return "#FFC107"; // Оранжевый
            return "#20C997";
        } else {
            if (p < 33) return "#DC3545"; // Красный
            if (p < 66) return "#FFC107"; // Оранжевый
            return "#20C997";  // Зеленый
        }

    };

    const currentColor = getFillColor(safePercent, reverse);


    const radius = 17;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (safePercent / 100) * circumference;

    return (
        <svg
            {...props}
            className={`flex-shrink-0 ${className || ''}`}
            width="22"
            height="22"
            viewBox="0 0 44 44"
        >
            {/* Фоновое кольцо */}
            <circle
                strokeWidth="8"
                stroke={emptyColor}
                fill="transparent"
                r={radius}
                cx="22"
                cy="22"
            />

            <circle
                strokeWidth="8"
                strokeLinecap="round"
                stroke={currentColor}
                fill="transparent"
                r={radius}
                cx="22"
                cy="22"
                transform="rotate(-90 22 22)"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{
                    transition: 'stroke-dashoffset 0.5s ease-in-out, stroke 0.4s ease'
                }}
            />
        </svg>
    );
}