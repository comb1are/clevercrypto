import React from "react";
import { Link } from "react-router-dom";


type Theme = "primary" | "secondary" | "space" | "neutral" | "link" | "red" | "linear";
type Size = "" | "sm" | "md";

interface MainBtnProps {
    children: React.ReactNode;
    to?: string;
    theme?: Theme;
    size?: Size;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}


const cn = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(" ");

export default function MainBtn({
    children,
    to,
    theme = "primary",
    size,
    className,
    disabled,
    onClick,
}: MainBtnProps) {
    
    const base = "";

    
    const themeClasses: Record<Theme, string> = {
        primary: "",
        secondary: "",
        space: "",
        neutral: "",
        link: "",
        red: "",
        linear: "",
    };

    
    const finalClass = cn(base, themeClasses[theme], size, className, disabled && "disabled");

    
    return to ? (
        <Link to={to} className={finalClass} aria-disabled={disabled}>
            {children}
        </Link>
    ) : (
        <button type="button" className={finalClass} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}
