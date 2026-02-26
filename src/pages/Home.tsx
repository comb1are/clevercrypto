import IMG from "../assets/images"
import { useState } from "react";
import BottomNav from "../components/BottomNav"
import Header from "../components/Header"

import Alert from "../components/UI/Alert";
import { Link } from "react-router-dom";
import IconHome5 from "../components/Icons/IconHome5";
import IconHome6 from "../components/Icons/IconHome6";
import IconHome7 from "../components/Icons/IconHome7";
import IconHome8 from "../components/Icons/IconHome8";
import IconHome9 from "../components/Icons/IconHome9";
import IconHome10 from "../components/Icons/IconHome10";
import IconHome11 from "../components/Icons/IconHome11";
import IconHome12 from "../components/Icons/IconHome12";
import IconHome13 from "../components/Icons/IconHome13";
import IconHome14 from "../components/Icons/IconHome14";
import IconHome15 from "../components/Icons/IconHome15";
import IconHome16 from "../components/Icons/IconHome16";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
    const isDark = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

    return (<div className="pb-10 flex flex-col min-h-screen">
        <Header type="inner" leftLinkIcon="hidden" rightLinkType="settings">
            Мой кошелёк #1
        </Header>

        <BottomNav />

        <main>

            {/* <!-- Main page --> */}
            <section className="relative">
                <div className="absolute left-1/2 top-[185px] z-[-1] h-[465px] w-[588px] translate-x-[calc(-50%+5px)] rotate-180 rounded-full bg-glow-blob opacity-[0.35] blur-[129px]"></div>
                <div className="">
                    <div className="overal-balance py-4 flex flex-col items-center gap-3 ">
                        <p className="text-base text-center text-[#ADB5BD] tracking-[3%] linke-he">Общий баланс</p>
                        <h3 className="font-medium text-5xl text-center font-nagel">$42 482.59</h3>
                        <Alert type="teal" className="gap-2 text-base text-center rounded-full">
                            <span>+$149</span>
                            <IconHome16 />
                            <span>4%</span>
                        </Alert>
                    </div>
                    <div className="grid grid-cols-4 gap-2 mb-4 navigation mx-3 bg-(--bg-card) rounded-[24px] p-3">
                        <div className="">
                            <Link to="/withdraw" className="w-full flex flex-col items-center text-center gap-2">
                                <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) py-4 px-6 rounded-[18px]">
                                    {isDark ? <IconHome14 /> : <IconHome15 />}
                                </div>
                                <span>Пополнить</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link to="/funds" className="w-full flex flex-col items-center text-center gap-2">
                                <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) py-4 px-6 rounded-[18px]">
                                    {isDark ? <IconHome12 /> : <IconHome13 />}
                                </div>
                                <span>Отправить</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link to="/withdraw" className="w-full flex flex-col items-center text-center gap-2">
                                <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) py-4 px-6 rounded-[18px]">
                                    {isDark ? <IconHome10 /> : <IconHome11 />}
                                </div>
                                <span>Вывести</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link to="#" className="w-full flex flex-col items-center text-center gap-2">
                                <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) py-4 px-6 rounded-[18px]">
                                    {isDark ? <IconHome8 /> : <IconHome9 />}
                                </div>
                                <span>Сделки</span>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="flex w-full overflow-x-auto snap-x snap-mandatory gap-3 pb-3 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        onScroll={(e) => setActiveIndex(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
                    >
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="shrink-0 snap-center w-full">
                                <div className="relative flex rounded-[18px] bg-(--bg-main) items-center gap-5  px-4 py-3 ">
                                    <img
                                        src={isDark ? IMG.alertWhiteIcon1Dark : IMG.alertWhiteIcon1}
                                        className=""
                                        alt="Alert Icon"
                                    />
                                    <div className="flex flex-col pr-8">
                                        <h3 className="text-(--text-main) tracking-[4%] text-sm">Транзакция в процессе</h3>
                                        <p className="text-[#6C757D] text-sm ">$12 492.59 • 0,106117 BTC</p>

                                        <Link to="#" className="mt-1 items-center gap-1 text-blue-400 tracking-[4%]  text-sm">
                                            <span>Перейти</span>

                                            {/* {isDark ? <IconHome6 className="" /> : <IconHome7 className="" />} */}
                                        </Link>
                                    </div>
                                    <button className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-(--intro-btn-bg)">
                                        {isDark ? <IconHome6 className="" /> : <IconHome7 className="" />}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-1.5 mt-1 mb-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-(--title-color) w-4" : "bg-(--25-opacity)  w-1.5"
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- Main page end --> */}

            {/* <!-- My wallet --> */}
            <section className="px-3 py-2 bg-(--bg-main) rounded-t-4xl pt-[20px]">
                <div className=" flex items-start gap-4 mb-2 bg-(--btn-secondary-bg) p-3 rounded-[18px]">
                    <div className="w-full flex items-center gap-3 ">
                        <img src={IMG.operationMonthIcon1} className="shrink-0" alt="" />
                        <div>
                            <p className="mb-1 text-[#6C757D]">Операции за месяц</p>
                            <h3 className="font-medium text-2xl">$124 492.24</h3>
                        </div>
                    </div>
                    <div className="operation-month__right shrink-0">
                        <Link to="#">
                            <IconHome5 />
                        </Link>
                    </div>
                </div>
                <div className="overflow-hidden relative flex items-center justify-between mb-2 bg-(--btn-secondary-bg) rounded-[18px] p-4 orounded-[24px]">
                    <div className="icon absolute"></div>
                    <div className="clever-card__left flex items-center gap-4 ">
                        <img src={IMG.cleverCardLogo1} className="shrink-0" alt="" />
                        <div>
                            <h3 className="font-medium text-lg">Clever</h3>
                            <p className="text-[#6C757D]">$1,00</p>
                        </div>
                    </div>
                    <div className="clever-card__right text-right">
                        <h4 className="text-lg text-(--btn-main) tracking-[3%]">4 491 CLV</h4>
                        <p className="text-[#6C757D]">$4 491,52</p>
                    </div>
                </div>
                <ul className="crypto-list flex flex-col gap-4">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <li key={index} className="p-4 flex items-center justify-between ">
                            <div className="crypto-card__left flex items-center gap-3">
                                <img src={IMG.cryptoBitcoin} className="shrink-0" alt="" />
                                <div className="">
                                    <h3 className="font-medium text-lg tracking-[3%]">Bitcoin</h3>
                                    <p className="text-[#6C757D]">≈$124 492,24</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <h4 className="text-lg text-(--btn-main) tracking-[3%]">1.4919 BTC</h4>
                                <p className="text-[#6C757D]">$181 319,56</p>
                            </div>
                        </li>
                    ))}
                </ul>

            </section>
            {/* <!-- My wallet end --> */}

        </main>
    </div>)
}