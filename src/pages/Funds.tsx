import IMG from "../assets/images";
import Header from "../components/Header";
import MainBtn from "../components/UI/MainBtn";

import { IMaskInput } from "react-imask";
import { useState } from "react";
import MoneyInput from "../components/UI/MoneyInput";
import PriceSwp from "../components/PriceSwp";

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
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M16.2581 3.54734L15.7848 4.02067C14.2856 2.56984 12.2515 1.6665 9.99979 1.6665C6.49063 1.6665 3.48896 3.83567 2.26063 6.9065C1.82729 7.98984 2.65813 9.1665 3.82479 9.1665C4.48313 9.1665 5.10813 8.79067 5.34813 8.17817C6.07563 6.31817 7.88146 4.99984 9.99979 4.99984C11.3315 4.99984 12.5356 5.5265 13.4306 6.37567L12.714 7.0915C12.2556 7.54984 12.5806 8.33317 13.2281 8.33317H16.3173C16.9706 8.33317 17.4998 7.804 17.4998 7.1515V4.0615C17.4998 3.414 16.7165 3.08984 16.2581 3.54734Z" fill="#282828" />
                                    <path d="M3.68167 11.6665H6.77083C7.41833 11.6665 7.74333 12.4498 7.285 12.9082L3.74167 16.4523C3.28333 16.9098 2.5 16.5857 2.5 15.9382V12.849C2.5 12.1957 3.02917 11.6665 3.68167 11.6665Z" fill="#282828" />
                                    <path d="M16.1749 10.8335C15.5165 10.8335 14.8915 11.2093 14.6515 11.8218C13.924 13.6818 12.1182 15.0002 9.99987 15.0002C8.15987 15.0002 6.55403 14.0052 5.6882 12.5235C5.3882 12.011 2.3757 13.6435 3.1757 14.7835C4.6832 16.9302 7.17737 18.3335 9.99987 18.3335C13.509 18.3335 16.5107 16.1643 17.739 13.0935C18.1724 12.0102 17.3415 10.8335 16.1749 10.8335Z" fill="#282828" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M16.2581 3.54783L15.7848 4.02116C14.2856 2.57033 12.2515 1.66699 9.99979 1.66699C6.49063 1.66699 3.48896 3.83616 2.26063 6.90699C1.82729 7.99033 2.65813 9.16699 3.82479 9.16699C4.48313 9.16699 5.10813 8.79116 5.34813 8.17866C6.07563 6.31866 7.88146 5.00033 9.99979 5.00033C11.3315 5.00033 12.5356 5.52699 13.4306 6.37616L12.714 7.09199C12.2556 7.55033 12.5806 8.33366 13.2281 8.33366H16.3173C16.9706 8.33366 17.4998 7.80449 17.4998 7.15199V4.06199C17.4998 3.41449 16.7165 3.09033 16.2581 3.54783Z" fill="#E7E7E7" />
                                    <path d="M3.68167 11.667H6.77083C7.41833 11.667 7.74333 12.4503 7.285 12.9087L3.74167 16.4528C3.28333 16.9103 2.5 16.5862 2.5 15.9387V12.8495C2.5 12.1962 3.02917 11.667 3.68167 11.667Z" fill="#E7E7E7" />
                                    <path d="M16.1749 10.833C15.5165 10.833 14.8915 11.2088 14.6515 11.8213C13.924 13.6813 12.1182 14.9997 9.99987 14.9997C8.15987 14.9997 6.55403 14.0047 5.6882 12.523C5.3882 12.0105 2.3757 13.643 3.1757 14.783C4.6832 16.9297 7.17737 18.333 9.99987 18.333C13.509 18.333 16.5107 16.1638 17.739 13.093C18.1724 12.0097 17.3415 10.833 16.1749 10.833Z" fill="#E7E7E7" />
                                </svg>
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