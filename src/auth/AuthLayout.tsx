import React from "react";
import { Link } from "react-router-dom"
import IMG from "../assets/images"
import MainBtn from "../components/UI/MainBtn"
import IconAuthLayout1 from "../components/Icons/IconAuthLayout1";
import IconAuthLayout2 from "../components/Icons/IconAuthLayout2";
import { useTheme } from "../hooks/useTheme";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const isDark = useTheme();

    return (<>
        <div className="py-6 pb-10 w-full min-h-screen flex flex-col justify-between">

            <header className="shrink-0 mb-8">
                <div className="px-4 w-full flex items-center justify-between">
                    <Link to={'/'} className="block w-[140px]">
                        <img src={isDark ? IMG.logoLight : IMG.logo} alt="Logo" className="w-full rounded-lg" />
                    </Link>
                    <Link to={'/'} className="w-10 h-10 flex items-center justify-center rounded-2xl bg-(--btn-secondary-bg) transition-colors hover:bg-(--buttons-light-secondary-hover-pressed)">
                        <IconAuthLayout2 />
                    </Link>
                </div>
            </header>

            <main className="flex-1 flex flex-col justify-center">

                <section className="px-4 w-full">
                    {children}
                </section>

            </main>

            <footer className="pt-[10px] shrink-0 relative z-10 w-full mt-8">
                <div className="px-4 w-full flex flex-col gap-4">
                    <MainBtn to={'#'} theme="space" className="gap-3">
                        <IconAuthLayout1 />
                        <span>Вход по Telegram</span>
                    </MainBtn>
                </div>
            </footer>

        </div>
    </>)
}