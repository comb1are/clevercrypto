import clsx from "clsx";
import { useEffect, useState } from "react";

interface OffcanvasInterface {
    className?: string;
    id?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export default function Offcanvas({
    className = '',
    id = '',
    children,
    isOpen = false,
    onClose
}: OffcanvasInterface) {
    const [render, setRender] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setRender(true);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            const timeout = setTimeout(() => setRender(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    // Unmount completely if not open and animation finished
    if (!render && !isOpen) return null;

    return (
        <>
            {/* Backdrop overlay */}
            <div
                className={clsx(
                    "fixed inset-0 z-[1040] bg-black/50 transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            ></div>

            {/* Modal Body */}
            <div
                className={clsx(
                    'fixed bottom-0 left-1/2 w-full max-w-[454px] z-[1045] bg-(--bg-main) rounded-t-[24px] shadow-[0_-4px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 transform',
                    isOpen ? "-translate-x-1/2 translate-y-0" : "-translate-x-1/2 translate-y-full",
                    className
                )}
                tabIndex={-1}
                id={id}
                aria-labelledby={`${id}Label`}
            >
                <div className="w-full max-h-[85vh] overflow-y-auto pb-6 pt-6">
                    {children}
                </div>
            </div>
        </>
    );
}