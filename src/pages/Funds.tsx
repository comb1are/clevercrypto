import IMG from "../assets/images";
import Header from "../components/Header";
import MainBtn from "../components/UI/MainBtn";

import { IMaskInput } from "react-imask";
import { useState } from "react";
import MoneyInput from "../components/UI/MoneyInput";
import PriceSwp from "../components/PriceSwp";
import IconFunds3 from "../components/Icons/IconFunds3";
import IconFunds4 from "../components/Icons/IconFunds4";

export default function Funds () {
    const [phone, setPhone] = useState<string>();

    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">
            Кошелёк
        </Header>

        {/* <!-- Funds --> */}
        <section className="funds h-full d-flex">
            <div className="container h-full d-flex flex-column justify-content-between pt-3">
                <div className="d-flex flex-column gap-3">
                    <PriceSwp />
                    <div className="funds-transaction">
                        <p className="mb-2">Кому перевести</p>
                        <div className="position-relative form-tel">
                            <span className="position-absolute gap-2 d-flex align-items-center justify-content-center fs-6">
                                <img src={IMG.flagRu} alt="" />
                                +7
                            </span>
                            <IMaskInput
                                mask="(000) 000-00-00"
                                definitions={{ 0: /\d/ }}
                                value={phone}
                                onAccept={(val: unknown) => setPhone(String(val))}
                                placeholder="(000) 000-00-00"
                                className="position-relative h-100 w-100 start-0 top-0 fs-6"
                            />
                        </div>
                    </div>
                    <div className="transfer-amount d-flex flex-column gap-2">
                        <p>Сумма перевода</p>
                        <MoneyInput />
                        <ul className="d-flex align-items-center flex-wrap gap-2">
                            <li className="d-flex align-items-center rounded-pill">
                                <IconFunds4 />
                                <IconFunds3 />
                                <span>В долларах</span>
                            </li>
                            <li className="d-flex align-items-center rounded-pill">Max</li>
                        </ul>
                    </div>
                </div>
                <MainBtn theme="primary">Отправить</MainBtn>
            </div>
        </section>
        {/* <!-- Funds end --> */}
    </div>)
}