import { useState } from "react";
import IMG from "../../assets/images";
import MainBtn from "../../components/UI/MainBtn";
import Offcanvas from "../../components/UI/Offcanvas";

interface PaymentSelectInterface {
    id: number;
    icon: string;
    title: string;
    subtitle: string;
    text: string;
    selected: boolean;
}

export default function PayingSelect () {
    const [paymentSelect, setPaymentSelect] = useState<PaymentSelectInterface []>([
        { id: 1, icon: IMG.paymentSelectCard1, title: 'QR-код', subtitle: 'СБП', text: 'Платите, отсканировав QR-код', selected: true },
        { id: 2, icon: IMG.paymentSelectCard2, title: 'Перевод по номеру', subtitle: 'СБП', text: 'Перевод на другую карту по номеру телефона СБП', selected: false },
        { id: 3, icon: IMG.paymentSelectCard3, title: 'Прямая оплата', subtitle: '', text: 'Ввести данные карты вручную', selected: false },
        { id: 4, icon: IMG.paymentSelectCard4, title: 'Перевод на карту', subtitle: '', text: 'Перевод на другую карту', selected: false },
    ])

    const handleSelectPayment = (id: number) => {
        setPaymentSelect(prev =>
            prev.map(item => ({
                ...item,
                selected: item.id === id, // faqat shu bosilgan true
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
                    <div className="paying-body d-flex flex-column position-relative">
                        <label>Выберите метод оплаты картой</label>
                        {paymentSelect.map((data, index) => (
                            <div key={index} className="payment-select d-flex align-items-start justify-content-between position-relative">
                                <div className="w-100 d-flex align-items-center gap-3">
                                    <img src={data.icon} width="32" alt="" className="flex-shrink-0" />
                                    <div className="w-100">
                                        <h3 className="mb-2 fw-medium lh-1">{data.title} <span>{data.subtitle}</span></h3>
                                        <p className="fs-6">{data.text}</p>
                                    </div>
                                </div>
                                <input
                                    type="radio"
                                    name="paymentSelect"
                                    checked={data.selected}
                                    onChange={() => handleSelectPayment(data.id)}
                                    className="position-absolute start-0 top-0 w-100 h-100 opacity-0"
                                />
                                <div className="icon rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                                    <span className="rounded-circle"></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-100 d-flex flex-column paying-bottom">
                    <MainBtn theme="primary" className="fw-medium">Перейти к оплате</MainBtn>
                    <button className="w-100 d-flex align-items-center justify-content-center btn-space" type="button" data-bs-toggle="offcanvas" data-bs-target="#detailModal" aria-controls="detailModal">
                        <img src="./assets/images/warning-circle-gray.svg" alt="" className="flex-shrink-0" />
                        <img src="./assets/images/warning-circle-gray-dark.svg" alt="" className="flex-shrink-0 dark-icon" />
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