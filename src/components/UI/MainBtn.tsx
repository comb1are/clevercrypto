import React from "react";
import { Link } from "react-router-dom";

// Define button appearance types
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

/** Utility: join multiple class names safely */
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
    // Common button base classes
    const base = "";

    // Theme variations
    const themeClasses: Record<Theme, string> = {
        primary: "",
        secondary: "",
        space: "",
        neutral: "",
        link: "l",
        red: "",
        linear: "",
    };

    // Build final className dynamically
    const finalClass = cn(base, themeClasses[theme], size, className, disabled && "disabled");

    // Render <Link> or <button> based on `to` prop
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
