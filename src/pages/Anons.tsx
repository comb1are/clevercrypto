import { useState } from "react";
import MainBtn from "../components/UI/MainBtn";
import IMG from "../assets/images";

export default function Anons() {
    const slideCount = 3;
    const [activeSlide, setActiveSlide] = useState<number>(0);


    return (
        <div className="wrapper d-flex flex-column justify-content-between">
            <section className="h-full anons d-flex position-relative">
                <div className="swp-pagination position-absolute top-0 d-flex align-items-center gap-2">
                    {Array.from({ length: slideCount }).map((_, index) => (
                        <span key={index} className={`${index > activeSlide ? '' : 'active'}`}></span>
                    ))}
                </div>
                <div className="h-full w-100 d-flex flex-column justify-content-end">
                    {activeSlide === 0 && (
                        <div className="container h-full d-flex flex-column justify-content-end position-relative">
                            <img className="w-100 start-0 mb-4" src={IMG.anonsCard1} alt="Anons 1" />
                            <img className="w-100 mb-4 dark-img" src={IMG.anonsCard1Dark} alt="Anons 1 dark" />
                            <h2 className="mb-4 pt-2">Добро пожаловать</h2>
                            <p className="mb-5">Откройте мир мгновенных криптоплатежей <br /> с 4Clever — просто и надёжно</p>
                            <MainBtn theme="neutral" className="fw-medium" onClick={() => setActiveSlide(1)}>Далее</MainBtn>
                        </div>
                    )}

                    {activeSlide === 1 && (
                        <div className="container h-full d-flex flex-column justify-content-end">
                            <h2 className="mb-4 pt-2">Принимайте платежи быстро</h2>
                            <p className="mb-5">
                                Принимайте BTC, ETH и другие токены мгновенно и безопасно прямо в своём магазине
                            </p>
                            <MainBtn theme="neutral" className="fw-medium" onClick={() => setActiveSlide(2)}>Далее</MainBtn>
                        </div>
                    )}

                    {activeSlide === 2 && (
                        <div className="container h-full d-flex flex-column justify-content-end">
                            <h2 className="mb-4 pt-2">Быстрая регистрация</h2>
                            <p className="mb-5">
                                Введите данные компании и настройте безопасность, чтобы мгновенно получить API-ключ и&nbsp;начать приём крипты
                            </p>
                            <MainBtn to="/home" theme="primary" className="fw-medium">Начать работу</MainBtn>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};