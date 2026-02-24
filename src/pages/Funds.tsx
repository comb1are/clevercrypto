import IMG from "../assets/images";
import Header from "../components/Header";
import MainBtn from "../components/UI/MainBtn";

import { IMaskInput } from "react-imask";
import { useState } from "react";
import MoneyInput from "../components/UI/MoneyInput";
import PriceSwp from "../components/PriceSwp";
import IconFunds3 from "../components/Icons/IconFunds3";
import IconFunds4 from "../components/Icons/IconFunds4";
import { useTheme } from "../hooks/useTheme";

export default function Funds() {
    const isDark = useTheme();
    const [phone, setPhone] = useState<string>();

    return (<div className="flex flex-col min-h-screen justify-between py-6 pb-10">
        <Header type="inner" leftLink="/home" leftLinkIcon="arrow">
            Кошелёк
        </Header>

        {/* <!-- Funds --> */}
        <section className="funds flex-1 flex flex-col pt-[20px] bg-(--bg-main) rounded-t-[24px]">
            <div className="container px-4 h-full flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                    <PriceSwp />
                    <div className="funds-transaction bg-(--btn-secondary-bg) p-4 rounded-[18px]">
                        <p className="mb-2 text-[#6C757D]">Кому перевести</p>
                        <div className="relative form-tel flex items-center border-b border-(--header-border) pb-2">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-2 text-base text-(--title-color)">
                                <img src={IMG.flagRu} alt="" />
                                +7
                            </span>
                            <IMaskInput
                                mask="(000) 000-00-00"
                                definitions={{ 0: /\d/ }}
                                value={phone}
                                onAccept={(val: unknown) => setPhone(String(val))}
                                placeholder="(000) 000-00-00"
                                className="w-full bg-transparent outline-none text-base pl-16 py-2 text-(--title-color) placeholder:text-[#6C757D]"
                            />
                        </div>
                    </div>
                    <div className="transfer-amount flex flex-col gap-2 bg-(--btn-secondary-bg) p-4 rounded-[18px]">
                        <p className="text-[#6C757D]">Сумма перевода</p>
                        <MoneyInput />
                        <ul className="flex items-center flex-wrap gap-2 mt-2">
                            <li className="flex items-center rounded-full bg-(--bg-main) px-3 py-1 gap-1 text-(--title-color)">
                                <IconFunds4 />
                                <IconFunds3 />
                                <span className="text-sm">В долларах</span>
                            </li>
                            <li className="flex items-center rounded-full bg-(--bg-main) px-3 py-1 text-sm text-(--title-color)">Max</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 pb-4">
                    <MainBtn theme="primary">Отправить</MainBtn>
                </div>
            </div>
        </section>
        {/* <!-- Funds end --> */}
    </div>)
}