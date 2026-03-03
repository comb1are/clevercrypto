import Header from "../../components/Header";
import IMG from "../../assets/images";
import MainBtn from "../../components/UI/MainBtn";
import IconTarifs51 from "../../components/Icons/IconTarifs51";
import { useTheme } from "../../hooks/useTheme";
import { useState } from "react";

export default function ProfileTarifs() {
    const isDark = useTheme();

    const [isMonthly, setIsMonthly] = useState(true);

    return (<div className="wrapper flex flex-col justify-between p-0 h-screen overflow-y-auto pb-[100px]">
        <Header type="inner" leftLink="/profile" leftLinkIcon="">Тарифы</Header>

        
        <section className="h-full flex flex-col pt-3 px-4">
            <div className="container h-full flex flex-col items-center mx-auto w-full">
                <div className="flex items-center justify-center rounded-full overflow-hidden bg-(--btn-secondary-bg) mb-3 shrink-0">
                    <button onClick={() => setIsMonthly(true)} className={`flex items-center rounded-full py-[10px] px-6 text-base leading-[1.37] tracking-[0.03em] text-center gap-[10px] outline-none transition-colors border-none cursor-pointer ${isMonthly ? " bg-blue-500/12 text-[#458CFF] " : " text-(--text-main) bg-transparent"}`}>Помесячно</button>
                    <button onClick={() => setIsMonthly(false)} className={`flex items-center rounded-full py-[7px] pl-6 pr-[7px] text-base leading-[1.37] tracking-[0.03em] text-center gap-[10px] outline-none transition-colors border-none cursor-pointer ${!isMonthly ? "bg-blue-500/12 text-[#458CFF] " : " text-(--text-main) bg-transparent"}`}>
                        <span>Ежегодно</span>
                        <span className="bg-[rgba(220,53,69,0.12)] text-[14px] leading-[1.29] tracking-[0.04em] text-[#dc3545] py-[7px] px-4 rounded-full font-medium">-40%</span>
                    </button>
                </div>
                <div className="flex flex-col w-full gap-3">
                    <div className="relative overflow-hidden border border-(--header-border) rounded-[24px] bg-(--bg-card) z-10 w-full">
                        <div className="flex flex-col p-5 gap-5 border-b border-(--header-border)">
                            <div className="w-full">
                                <img src={isDark ? IMG.tarifCardIcon1Dark : IMG.tarifCardIcon1} alt="" className="shrink-0" />
                                <h4 className="font-medium text-[20px] leading-[1.2] tracking-[0.02em] text-(--title-color) my-2 py-1">Базовый</h4>
                                <div className="text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Начальный план</div>
                            </div>
                            <h3 className="font-nagel text-[28px] text-(--title-color) font-medium leading-none">Бесплатно</h3>
                        </div>
                        <div className="p-5">
                            <h4 className="font-normal text-base leading-[1.37] tracking-[0.03em] text-(--grey) mb-3 pb-1">План включает в себя:</h4>
                            <ul className="flex flex-col gap-5">
                                <li className="flex">
                                    <img src={IMG.tarifListIcon1_1} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">50</span> платежей</p>
                                </li>
                                <li className="flex">
                                    <img src={IMG.tarifListIcon1_2} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">Общая</span> поддержка</p>
                                </li>
                                <li className="flex">
                                    <img src={IMG.tarifListIcon1_3} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">6</span> доступных монет</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative overflow-hidden border border-(--header-border) rounded-[24px] bg-(--bg-card) z-10 w-full">
                        <img src="./assets/images/tarif-card-bg-1.png" alt="" className="absolute top-0 left-0 w-full object-cover -z-10" />
                        <div className="flex flex-col p-5 gap-5 border-b border-(--header-border)">
                            <div className="w-full">
                                <div className="flex items-center justify-between">
                                    <img src={isDark ? IMG.tarifCardIcon2Dark : IMG.tarifCardIcon2} alt="" className="shrink-0" />
                                    <div className="text-[14px] leading-[1.29] tracking-[0.04em] text-[#dc3545] bg-[rgba(220,53,69,0.12)] py-[5px] px-4 rounded-full font-medium">-40%</div>
                                </div>
                                <h4 className="font-medium text-[20px] leading-[1.2] tracking-[0.02em] text-(--title-color) my-2 py-1">Начальный</h4>
                                <div className="text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Выбор для малого и среднего бизнеса</div>
                            </div>
                            <div>
                                <div className="flex items-end gap-2 font-nagel text-[38px] text-(--title-color) font-medium leading-none mb-2">
                                    6 560 ₽ <span className="font-nebulas text-base font-normal leading-[1.37] tracking-[0.03em] text-(--grey)">/в год</span>
                                </div>
                                <del className="text-[18px] leading-[1.33] tracking-[0.03em] line-through text-(--grey)">10 500 ₽</del>
                            </div>
                            <MainBtn theme="neutral" className="font-medium w-full py-[14px] rounded-[18px] bg-(--text-main) text-(--bg-main) tracking-[4%]">Оформить подписку</MainBtn>
                        </div>
                        <div className="p-5">
                            <h4 className="font-normal text-base leading-[1.37] tracking-[0.03em] text-(--grey) mb-3 pb-1">План включает в себя:</h4>
                            <ul className="flex flex-col gap-5">
                                <li className="flex">
                                    <img src={IMG.tarifListIcon2_1} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">1</span> магазин доступен для создания</p>
                                </li>
                                <li className="flex">
                                    <img src={IMG.tarifListIcon1_1} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">10 000</span> платежей в месяц</p>
                                </li>
                                <li className="flex">
                                    <img src={IMG.tarifListIcon1_2} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">24/7</span> поддержка</p>
                                </li>
                                <li className="flex">
                                    <img src={IMG.tarifListIcon1_3} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">60+</span> доступных монет</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-[#9DFF73] rounded-[24px]">
                        <div className="flex flex-row items-center justify-center gap-[10px] py-[9px] text-[14px] leading-[1.29] tracking-[0.04em] text-[#1e1e1e] font-medium">
                            <IconTarifs51 />
                            <span>Лучшее предложение</span>
                        </div>
                        <div className="relative overflow-hidden border border-(--header-border) rounded-[24px] bg-(--bg-card) z-10 w-full">
                            <img src={IMG.tarifCardBg2} alt="" className="absolute top-0 left-0 w-full h-full object-cover -z-10 bg-(--bg-card)" />
                            <div className="flex flex-col p-5 gap-5 border-b border-(--header-border)">
                                <div className="w-full">
                                    <div className="flex items-center justify-between">
                                        <img src={isDark ? IMG.tarifCardIcon3Dark : IMG.tarifCardIcon3} alt="" className="shrink-0" />
                                        <div className="text-[14px] leading-[1.29] tracking-[0.04em] text-[#dc3545] bg-[rgba(220,53,69,0.12)] py-[5px] px-4 rounded-full font-medium">-40%</div>
                                    </div>
                                    <h4 className="font-medium text-[20px] leading-[1.2] tracking-[0.02em] text-(--title-color) my-2 py-1">Продвинутый</h4>
                                    <div className="text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Выбор для крупного бизнеса</div>
                                </div>
                                <div>
                                    <div className="flex items-end gap-2 font-nagel text-[38px] text-(--title-color) font-medium leading-none mb-2">
                                        157 680 ₽ <span className="font-nebulas text-base font-normal leading-[1.37] tracking-[0.03em] text-(--grey)">/в год</span>
                                    </div>
                                    <del className="text-[18px] leading-[1.33] tracking-[0.03em] line-through text-(--grey)">262 800 ₽</del>
                                </div>
                                <MainBtn theme="neutral" className="font-medium w-full py-[14px] rounded-[18px] bg-(--text-main) text-(--bg-main) tracking-[4%]">Оформить подписку</MainBtn>
                            </div>
                            <div className="p-5">
                                <h4 className="font-normal text-base leading-[1.37] tracking-[0.03em] text-(--grey) mb-3 pb-1">План включает в себя:</h4>
                                <ul className="flex flex-col gap-5">
                                    <li className="flex">
                                        <img src={IMG.tarifListIcon2_1} alt="" className="shrink-0" />
                                        <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">3</span> магазина доступны для создания</p>
                                    </li>
                                    <li className="flex">
                                        <img src={IMG.tarifListIcon3_2} alt="" className="shrink-0" />
                                        <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">1</span> площадка доступна для создания</p>
                                    </li>
                                    <li className="flex">
                                        <img src={IMG.tarifListIcon3_3} alt="" className="shrink-0" />
                                        <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">0%</span> комиссия P2P</p>
                                    </li>
                                    <li className="flex">
                                        <img src={IMG.tarifListIcon1_1} alt="" className="shrink-0" />
                                        <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">500 000</span> платежей в месяц</p>
                                    </li>
                                    <li className="flex">
                                        <img src={IMG.tarifListIcon1_2} alt="" className="shrink-0" />
                                        <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">24/7</span> поддержка</p>
                                    </li>
                                    <li className="flex">
                                        <img src={IMG.tarifListIcon1_3} alt="" className="shrink-0" />
                                        <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">60+</span> доступных монет</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden border border-(--header-border) rounded-[24px] bg-(--bg-card) z-10 w-full mb-4">
                        <img src={IMG.tarifCardBg3} alt="" className="absolute top-0 left-0 w-full object-cover -z-10" />
                        <div className="flex flex-col p-5 gap-5 border-b border-(--header-border)">
                            <div className="w-full">
                                <div className="flex items-center justify-between">
                                    <img src={isDark ? IMG.tarifCardIcon4Dark : IMG.tarifCardIcon4} alt="" className="shrink-0" />
                                    <div className="text-[14px] leading-[1.29] tracking-[0.04em] text-[#dc3545] bg-[rgba(220,53,69,0.12)] py-[5px] px-4 rounded-full font-medium">-40%</div>
                                </div>
                                <h4 className="font-medium text-[20px] leading-[1.2] tracking-[0.02em] text-(--title-color) my-2 py-1">Индивидуальный</h4>
                                <div className="text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Для тех, кому нужны индивидуальные условия</div>
                            </div>
                            <MainBtn theme="neutral" className="font-medium w-full py-[14px] rounded-[18px] bg-(--text-main) text-(--bg-main) tracking-[4%]">Свяжитесь с нами</MainBtn>
                        </div>
                        <div className="p-5">
                            <h4 className="font-normal text-base leading-[1.37] tracking-[0.03em] text-(--grey) mb-3 pb-1">План включает в себя:</h4>
                            <ul className="flex flex-col gap-5">
                                <li className="flex">
                                    <img src={IMG.tarifListIcon2_1} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">5</span> магазинов доступны для создания</p>
                                </li>
                                <li className="flex">
                                    <img src={IMG.tarifListIcon3_2} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">3</span> площадки доступны для создания</p>
                                </li>
                                <li className="flex">
                                    <img src={IMG.tarifListIcon3_3} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">0%</span> комиссия P2P</p>
                                </li>
                                <li className="flex">
                                    <img src={IMG.tarifListIcon1_1} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">∞</span> платежей в месяц</p>
                                </li>
                                <li className="flex">
                                    <img src={IMG.tarifListIcon1_2} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">24/7</span> поддержка</p>
                                </li>
                                <li className="flex">
                                    <img src={IMG.tarifListIcon1_3} alt="" className="shrink-0" />
                                    <p className="text-base leading-[1.37] tracking-[0.03em] text-(--grey) pl-1 ml-2"><span className="text-(--title-color)">Монеты</span> по запросу</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>)
}