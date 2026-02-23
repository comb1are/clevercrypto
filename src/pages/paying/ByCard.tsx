import { useState } from "react";
import IMG from "../../assets/images";
import Offcanvas from "../../components/UI/Offcanvas";
import MainBtn from "../../components/UI/MainBtn";
import IconByCard40 from "../../components/Icons/IconByCard40";

interface CountryCardInterface {
    id: number;
    flag: string;
    name: string;
    currency: string;
    selected: boolean;
}

export default function PayingByCard () {
    const [countryCard, setCountryCard] = useState<CountryCardInterface []>([
        { id: 1, flag: IMG.flagRu, name: 'RUB', currency: '₽', selected: true },
        { id: 2, flag: IMG.flagUsa, name: 'USD', currency: '$', selected: false },
        { id: 3, flag: IMG.flagKz, name: 'KZT', currency: '₸', selected: false },
        { id: 4, flag: IMG.flagBy, name: 'BYN', currency: 'Br', selected: false },
        { id: 5, flag: IMG.flagUa, name: 'UAH', currency: '₴', selected: false },
        { id: 6, flag: IMG.flagTj, name: 'TJS', currency: 'с', selected: false },
        { id: 7, flag: IMG.flagUz, name: 'UZS', currency: 'Soʻm', selected: false },
    ])

    const handleSelectCountry = (id: number) => {
        setCountryCard(prev =>
            prev.map(item => ({
                ...item,
                selected: item.id === id,
            }))
        );
    };

    return (<div className="wrapper p-0 d-flex">
        {/* <!-- Paying --> */}
        <section className="paying h-full d-flex flex-column">
            <div className="container h-full d-flex flex-column justify-content-between gap-4">
                <div className="w-100">
                    <div className="paying-head d-flex align-items-center justify-content-between pb-3 mb-1">
                        <div className="paying-head__left d-flex align-items-center">
                            <a href="#" className="d-flex align-items-center justify-content-center btn-secondary rounded-circle p-0">
                                <IconByCard40 />
                            </a>
                            <div className="paying-head__img d-flex align-items-center">
                                <img src={IMG.payLogo1} width="40" alt="" className="flex-shrink-0 rounded-circle" />
                                <img src={IMG.payLogo2} width="40" alt="" className="flex-shrink-0 rounded-circle" />
                            </div>
                            <h2 className="fw-medium lh-1">Funpay</h2>
                        </div>
                        <p className="fs-6">#451940</p>
                    </div>
                    <div className="paying-body d-flex flex-column">
                        <label>Выберите валюту для оплаты</label>
                        <div className="form-search d-flex align-items-center gap-3 ps-4">
                            <button className="h-100 flex-shrink-0">
                                <img src={IMG.searchIcon2} alt="" />
                                <img src={IMG.searchIcon2Dark} alt="" className="dark-icon" />
                            </button>
                            <input type="text" placeholder="Найти валюту" className="w-100 fs-6 pe-2" />
                        </div>
                        <div className="row g-1">
                            {countryCard.map((data, index) => (
                                <div key={index} className="col-6">
                                    <div className="country-card d-flex align-items-start flex-column gap-3 position-relative overflow-hidden">
                                        <div className="w-100 d-flex align-items-center justify-content-between gap-3">
                                            <img src={data.flag} width="28" height="28" alt="" className="flex-shrink-0 rounded-circle" />
                                            <input
                                                type="radio"
                                                name="selectCountry"
                                                checked={data.selected}
                                                onChange={() => handleSelectCountry(data.id)}
                                                className="position-absolute top-0 start-0 w-100 h-100"
                                            />
                                            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                                                <span className="rounded-circle"></span>
                                            </div>
                                        </div>
                                        <h3 className="fw-medium fs-6">
                                            {data.name} <span>{data.currency}</span>
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex flex-column paying-bottom">
                    <MainBtn theme="neutral" className="w-100 d-flex align-items-center justify-content-center fw-medium btn-neutral">Продолжить</MainBtn>
                    <button className="w-100 d-flex align-items-center justify-content-center btn-space" type="button" data-bs-toggle="offcanvas" data-bs-target="#detailModal" aria-controls="detailModal">
                        <img src={IMG.warningCircleGray} alt="" className="flex-shrink-0" />
                        <img src={IMG.warningCircleGrayDark} alt="" className="flex-shrink-0 dark-icon" />
                        <span>Детали платежа</span>
                    </button>
                </div>
            </div>
        </section>
        {/* <!-- Paying end --> */}

        <Offcanvas className="details-modal" id="detailModal">
            <div className="container d-flex flex-column gap-4">
                <h2 className="fw-medium lh-1">Детали платежа</h2>
                <ul className="d-flex flex-column gap-4">
                    <li className="d-flex align-items-center justify-content-between gap-3">
                        <p className="fs-6">Продавец</p>
                        <div className="d-flex align-items-center gap-2">
                            <img src={IMG.businessLogo2} width="22" height="22" alt="" className="rounded-circle " />
                            <h3 className="fs-6 text-blue">FunPay</h3>
                        </div>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap-3">
                        <p className="fs-6">Страховой депозит</p>
                        <div className="d-flex align-items-center gap-2">
                            <img src={IMG.paymentCrypt1} width="22" height="22" alt="" className="rounded-circle " />
                            <h3 className="fs-6">120.50 CLV</h3>
                        </div>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap-3">
                        <p className="fs-6">Номер заказа</p>
                        <h3 className="fs-6 flex-shrink-0">#124624</h3>
                    </li>
                </ul>
                <div className="btns w-100 d-flex flex-column">
                    <MainBtn to="#" theme="link">
                        <img src={IMG.messageIcon} alt="" className="flex-shrink-0" />
                        <span>Написать продавцу</span>
                    </MainBtn>
                    <MainBtn to="#" theme="red">
                        <img src={IMG.alertRed} width="24" alt="" className="flex-shrink-0" />
                        <span>Открыть спор</span>
                    </MainBtn>
                    <button className="w-100 d-flex align-items-center justify-content-center text-center btn-secondary" type="button" data-bs-dismiss="offcanvas" aria-label="Close">Закрыть</button>
                </div>
            </div>
        </Offcanvas>
    </div>)
}