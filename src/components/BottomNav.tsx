import { Link, useLocation } from "react-router-dom";
import IMG from "../assets/images";
import { useTheme } from "../hooks/useTheme";
import clsx from "clsx";
import { useMemo } from "react";

export default function BottomNav() {
    const isDark = useTheme();
    const location = useLocation();

    const navItems = useMemo(() => [
        { label: "Главная", to: "/home", iconDefault: IMG.navsIcon1, iconDark: IMG.navsIcon1Dark, iconActive: IMG.navsIcon1Active, hasDot: true, isActive: location.pathname.startsWith("/home") },
        { label: "Платежи", to: "#", iconDefault: IMG.navsIcon2, iconDark: IMG.navsIcon2Dark, iconActive: IMG.navsIcon2Active, hasDot: true, isActive: location.pathname.startsWith("/paying") },
        { label: "Бизнес", to: "#", iconDefault: IMG.navsIcon3, iconDark: IMG.navsIcon3Dark, iconActive: IMG.navsIcon3Active, hasDot: true, isActive: location.pathname.startsWith("/business") },
        { label: "Профиль", to: "/profile", iconDefault: IMG.navsIcon4, iconDark: IMG.navsIcon4Dark, iconActive: IMG.navsIcon4Active, hasDot: true, isActive: location.pathname.startsWith("/profile") },
    ], [location.pathname]);

    return (
        <section className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-(--bg-main) pt-[10px] pb-[17px] z-10 border-t border-(--header-border)">
            <div className="container px-4">
                <div className="grid grid-cols-4 gap-1">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.to}
                            className={clsx(
                                "w-full flex flex-col items-center text-center gap-[6px] text-[14px] leading-[1.57] tracking-[0.02em] transition-colors",
                                item.isActive ? "text-(--title-color)" : "text-[#7B7B7C] hover:text-(--title-color)"
                            )}
                        >
                            <span className="relative flex items-center justify-center">
                                <img
                                    src={item.isActive ? item.iconActive : (isDark ? item.iconDark : item.iconDefault)}
                                    alt={item.label}
                                />
                                {item.hasDot && (
                                    <span className="absolute -top-[3px] -right-[4.25px] w-[9px] h-[9px] bg-[#EF4444] rounded-full"></span>
                                )}
                            </span>
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}