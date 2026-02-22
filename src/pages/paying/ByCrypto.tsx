import { useState } from "react"
import IMG from "../../assets/images"
import MainBtn from "../../components/UI/MainBtn";
import Offcanvas from "../../components/UI/Offcanvas";

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
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.75993 5.52727C9.43449 5.20186 8.90697 5.20184 8.58154 5.52727L4.46126 9.64755C4.13593 9.97298 4.13589 10.5005 4.46126 10.8259L8.58154 14.9462C8.90695 15.2716 9.43449 15.2715 9.75993 14.9462C10.0854 14.6208 10.0853 14.0933 9.75993 13.7678L7.06217 11.0701H14.9479C15.4081 11.0701 15.7812 10.6969 15.7812 10.2367C15.7812 9.7765 15.4082 9.4034 14.9479 9.4034H7.06217L9.75993 6.70565L9.81689 6.64217C10.0839 6.31486 10.065 5.83237 9.75993 5.52727Z" fill="#282828" />
                                </svg>
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
                                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.35" fillRule="evenodd" clipRule="evenodd" d="M8.02627 2.32208C8.21752 1.96208 8.59177 1.73633 8.99977 1.73633C9.40777 1.73633 9.78202 1.96208 9.97327 2.32208L11.8205 5.80583C11.8415 5.84633 11.8723 5.88083 11.909 5.90783C11.9458 5.93483 11.9885 5.95283 12.0335 5.96033L15.917 6.64058C16.319 6.71108 16.6483 6.99758 16.775 7.38533C16.901 7.77308 16.8028 8.19908 16.5185 8.49233L13.7765 11.3258C13.745 11.3588 13.721 11.3986 13.7068 11.4413C13.6925 11.4848 13.6888 11.5306 13.6948 11.5763L14.2475 15.4801C14.3045 15.8836 14.1343 16.2863 13.8043 16.5263C13.4743 16.7663 13.0393 16.8038 12.6725 16.6246L9.13102 14.8921C9.09052 14.8718 9.04552 14.8613 8.99977 14.8613C8.95402 14.8613 8.90902 14.8718 8.86777 14.8913L5.32627 16.6238C4.95952 16.8031 4.52452 16.7648 4.19452 16.5256C3.86452 16.2856 3.69427 15.8836 3.75127 15.4793L4.30402 11.5756C4.31077 11.5306 4.30627 11.4841 4.29202 11.4406C4.27777 11.3971 4.25452 11.3573 4.22227 11.3251L1.48027 8.49158C1.19677 8.19833 1.09777 7.77233 1.22377 7.38458C1.34977 6.99683 1.67977 6.71033 2.08177 6.63983L5.96527 5.95958C6.01027 5.95133 6.05302 5.93333 6.08977 5.90708C6.12652 5.88008 6.15727 5.84558 6.17827 5.80508L8.02627 2.32208Z" fill="#282828" />
                                                </svg>
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