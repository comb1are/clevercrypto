import { useState } from "react"
import IMG from "../../assets/images"
import MainBtn from "../../components/UI/MainBtn";
import Offcanvas from "../../components/UI/Offcanvas";
import IconByCrypto41 from "../../components/Icons/IconByCrypto41";
import IconByCrypto42 from "../../components/Icons/IconByCrypto42";

interface CryptoListInterface {
    id: number;
    icon: string;
    title: string;
    subtitle: string;
    selected: boolean;
}

export default function PayingByCrypto () {
    const [cryptoList, setCryptoList] = useState<CryptoListInterface []>([
        { id: 1, icon: IMG.paymentCrypto1, title: 'Clever', subtitle: '', selected: true },
        { id: 2, icon: IMG.paymentCrypto2, title: 'Ethereum', subtitle: '', selected: false },
        { id: 3, icon: IMG.paymentCrypto3, title: 'Bitcoin', subtitle: '', selected: false },
        { id: 4, icon: IMG.paymentCrypto4, title: 'USDT', subtitle: 'TRC-20', selected: false },
        { id: 5, icon: IMG.paymentCrypto5, title: 'USDT', subtitle: 'ERC-20', selected: false },
        { id: 6, icon: IMG.paymentCrypto6, title: 'USDT', subtitle: 'BNB-20', selected: false },
        { id: 7, icon: IMG.paymentCrypto7, title: 'USD Coin', subtitle: '', selected: false },
        { id: 8, icon: IMG.paymentCrypto8, title: 'Tron', subtitle: '', selected: false },
        { id: 9, icon: IMG.paymentCrypto9, title: 'Litecoin', subtitle: '', selected: false },
    ])

    const handleSelectCrypto = (id: number) => {
        setCryptoList(prev =>
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
                                <IconByCrypto42 />
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
                            <input type="text" placeholder="Найти монету..." className="w-100 fs-6 pe-2" />
                        </div>
                        <div className="row g-1">
                            {cryptoList.map((data, index) => (
                                <div key={index} className="col-6">
                                    <div className="country-card d-flex align-items-start flex-column gap-3 position-relative overflow-hidden">
                                        {index == 0 && (
                                            <div className="circle-bg rounded-circle position-absolute"></div>
                                        )}
                                        <div className="w-100 d-flex align-items-center justify-content-between gap-3">
                                            <img src={data.icon} width="28" height="28" alt="" className="flex-shrink-0 rounded-circle" />
                                            <input
                                                type="radio"
                                                name="selectCountry"
                                                checked={data.selected}
                                                onChange={() => handleSelectCrypto(data.id)}
                                                className="position-absolute top-0 start-0 w-100 h-100"
                                            />
                                            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                                                <span className="rounded-circle"></span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            {index == 0 && (
                                                <IconByCrypto41 />
                                            )}
                                            <h3 className="fw-medium fs-6">
                                                Clever {data.subtitle && (<span>{data.subtitle}</span>)}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex flex-column paying-bottom">
                    <MainBtn theme="primary" className="fw-medium">Перейти к оплате</MainBtn>
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