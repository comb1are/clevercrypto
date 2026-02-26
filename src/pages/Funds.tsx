import IMG from "../assets/images";
import Header from "../components/Header";
import MainBtn from "../components/UI/MainBtn";

import { IMaskInput } from "react-imask";
import { useState } from "react";
import { useSliderObserver } from "../hooks/useSliderObserver";
import MoneyInput from "../components/UI/MoneyInput";

import IconFunds3 from "../components/Icons/IconFunds3";
import IconFunds4 from "../components/Icons/IconFunds4";
import { useTheme } from "../hooks/useTheme";

export default function Funds() {
    const isDark = useTheme();
    const [phone, setPhone] = useState<string>();
    const { activeIndex, sliderRef, cardsRef } = useSliderObserver();

    return (<div className="flex flex-col min-h-screen pb-10">
        <Header type="inner" leftLink="/home" leftLinkIcon="arrow">
            Кошелёк
        </Header>

        {/* <!-- Funds --> */}
        <section className="flex flex-col flex-1 mt-4 bg-(--bg-main) rounded-t-[24px]">
            <div className="container px-4 flex flex-col flex-1 justify-between">
                <div className="flex flex-col gap-3">
                    <div className="-mx-4">
                        <div
                            ref={sliderRef}
                            className="flex w-full overflow-x-auto snap-x snap-mandatory gap-3 pb-3 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div key={index} ref={(el) => { cardsRef.current[index] = el; }} className="shrink-0 snap-center w-[100%]">
                                    <div className="bg-(--btn-secondary-bg) p-4 rounded-[18px]">
                                        <h3 className="flex items-center gap-2 mb-4 text-base leading-[1.37] tracking-[0.03em] text-(--text-main)">
                                            <img src={IMG.cryptoBitcoin} width="24" alt="" />
                                            Bitcoin
                                            <span className="text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">bc1qm...3scw</span>
                                        </h3>
                                        <div className="flex justify-between items-end">
                                            <h2 className="font-medium font-nagel text-[38px] leading-none flex items-end gap-2 text-(--text-main)">
                                                1.4919
                                                <span className="font-normal font-nebulas text-[18px] leading-[1.33] tracking-[0.03em] text-(--grey) ">BTC</span>
                                            </h2>
                                            <p className="text-base font-nebulas leading-[1.37] tracking-[0.03em] text-(--grey)">≈$124 492,24</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-1.5 mt-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-(--text-main) w-4" : "bg-(--grey) opacity-50 w-1.5"
                                        }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <p className="mb-2 text-(--grey)">Кому перевести</p>
                        <div className="relative form-tel flex items-center  bg-(--btn-secondary-bg) px-4 py-3 rounded-[18px]">
                            <span className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center gap-2 text-base text-(--text-main) ">
                                <img src={IMG.flagRu} alt="" />
                                +7
                            </span>
                            <IMaskInput
                                mask="(000) 000-00-00"
                                definitions={{ 0: /\d/ }}
                                value={phone}
                                onAccept={(val: unknown) => setPhone(String(val))}
                                placeholder="(000) 000-00-00"
                                className="w-full bg-transparent outline-none text-base pl-16 text-(--text-main) placeholder:text-(--grey)"
                            />
                        </div>
                    </div>
                    <div className="transfer-amount flex flex-col gap-2 rounded-[18px]">
                        <p className="text-(--grey)">Сумма перевода</p>
                        <MoneyInput className="bg-(--btn-secondary-bg) py-3 px-6 rounded-[18px]" />
                        <ul className="flex items-center flex-wrap gap-2 mt-2 ">
                            <li className="flex items-center rounded-full px-3 py-2 gap-1 text-(--text-main) bg-(--btn-secondary-bg)">
                                {isDark ? <IconFunds3 /> : <IconFunds4 />}
                                <span className="text-sm">В долларах</span>
                            </li>
                            <li className="flex items-center rounded-full px-3 py-2 text-sm text-(--text-main) bg-(--btn-secondary-bg)">Max</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 pb-4">
                    <MainBtn className="font-medium w-full leading-tight bg-[var(--bg-green)] text-[var(--black)] text-center py-[14.5px] rounded-2xl ">Отправить</MainBtn>
                </div>
            </div>
        </section>
        {/* <!-- Funds end --> */}
    </div>)
}