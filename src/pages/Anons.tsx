import { useState } from "react";
import MainBtn from "../components/UI/MainBtn";
import IMG from "../assets/images";
import { useTheme } from "../hooks/useTheme";

export default function Anons() {
    const slideCount = 3;
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const isDark = useTheme();

    return (
        <div className="wrapper flex flex-col justify-between min-h-screen">
            <section className="h-full anons flex relative">
                <div className="absolute pt-6 top-0 left-1/2 -translate-x-1/2 flex items-center justify-between gap-2 z-2 w-[calc(100%-32px)]">
                    {Array.from({ length: slideCount }).map((_, index) => (
                        <span
                            key={index}
                            className={`h-1 w-full rounded-[10px] block transition-colors duration-300 ${index === activeSlide ? 'bg-(--btn-secondary-bg)' : 'bg-white'
                                }`}
                        ></span>
                    ))}
                </div>
                <div className="h-full w-full flex flex-col justify-end">
                    {activeSlide === 0 && (
                        <div className="container h-full flex flex-col justify-end relative mx-auto px-4">
                            <img className="w-full left-0 mb-4" src={isDark ? IMG.anonsCard1Dark : IMG.anonsCard1} alt="Anons 1" />
                            <h2 className="mb-6 pt-2 font-nagel text-[38px] font-medium">Добро пожаловать</h2>
                            <p className="mb-9 text-(--grey)">Откройте мир мгновенных криптоплатежей <br /> с 4Clever — просто и надёжно</p>
                            <MainBtn theme="neutral" className="font-medium w-full py-[14px] bg-(--text-main) text-(--bg-main) rounded-[18px]" onClick={() => setActiveSlide(1)}>Далее</MainBtn>
                        </div>
                    )}

                    {activeSlide === 1 && (
                        <div className="container h-full flex flex-col justify-end relative mx-auto px-4">
                            <h2 className="mb-6 pt-2 font-nagel text-[38px] font-medium">Принимайте платежи быстро</h2>
                            <p className="mb-9 text-(--grey)">
                                Принимайте BTC, ETH и другие токены мгновенно и безопасно прямо в своём магазине
                            </p>
                            <MainBtn theme="neutral" className="font-medium w-full py-[14px] bg-(--text-main) text-(--bg-main) rounded-[18px]" onClick={() => setActiveSlide(2)}>Далее</MainBtn>
                        </div>
                    )}

                    {activeSlide === 2 && (
                        <div className="container h-full flex flex-col justify-end relative mx-auto px-4">
                            <h2 className="mb-6 pt-2 font-nagel text-[38px] font-medium">Быстрая регистрация</h2>
                            <p className="mb-9 text-(--grey)">
                                Введите данные компании и настройте безопасность, чтобы мгновенно получить API-ключ и&nbsp;начать приём крипты
                            </p>
                            <MainBtn to="/home" theme="primary" className="font-medium text-center w-full py-[14px] bg-(--bg-green) text-(--black) rounded-[18px]">Начать работу</MainBtn>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}