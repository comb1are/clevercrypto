import React from "react";
import { Link } from "react-router-dom"
import IMG from "../assets/images"
import MainBtn from "../components/UI/MainBtn"

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
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L11 11M11 1L1 11" stroke="#282828" strokeWidth="2" strokeLinecap="round" />
                        </svg>
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
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.8152 5.03112C19.8152 5.03112 21.4468 4.39492 21.3108 5.93998C21.2655 6.57619 20.8576 8.80289 20.5404 11.2114L19.4526 18.3459C19.4526 18.3459 19.362 19.3911 18.5462 19.5729C17.7304 19.7546 16.5068 18.9367 16.2801 18.7549C16.0988 18.6186 12.8811 16.5736 11.748 15.5739C11.4307 15.3012 11.0682 14.7559 11.7933 14.1197L16.5521 9.57544C17.0959 9.03012 17.6398 7.75772 15.3737 9.30278L9.0287 13.6199C9.0287 13.6199 8.30356 14.0743 6.94394 13.6653L3.99803 12.7564C3.99803 12.7564 2.91031 12.0748 4.76849 11.3931C9.30065 9.2573 14.8752 7.07604 19.8152 5.03112Z" fill="#6C757D" />
                        </svg>
                        <span>Вход по Telegram</span>
                    </MainBtn>
                </div>
            </footer>

        </div>
    </>)
}