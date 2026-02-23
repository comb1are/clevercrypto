import React from "react";
import { Link } from "react-router-dom"
import IMG from "../assets/images"
import MainBtn from "../components/UI/MainBtn"
import IconAuthLayout1 from "../components/Icons/IconAuthLayout1";
import IconAuthLayout2 from "../components/Icons/IconAuthLayout2";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout ({children}: AuthLayoutProps) {
    return (<>
        <div className="wrapper d-flex flex-column justify-content-between">

            <header className="header">
                <div className="container d-flex align-items-center justify-content-between">
                    <Link to={'/'} className="header-logo">
                        <img src={IMG.logo} alt="" />
                        <img src={IMG.logoLight} alt="" className="light-img" />
                    </Link>
                    <Link to={'/'} className="btn-secondary d-flex align-items-center justify-content-center">
                        <IconAuthLayout2 />
                    </Link>
                </div>
            </header>

            <main>
                
                <section className="auth">
                    {children}
                </section>

            </main>

            <footer className="footer">
                <div className="container d-flex flex-column gap-4">
                    <MainBtn to={'#'} theme="space" className="gap-3">
                        <IconAuthLayout1 />
                        <span>Вход по Telegram</span>
                    </MainBtn>
                </div>
            </footer>

        </div>
    </>)
}