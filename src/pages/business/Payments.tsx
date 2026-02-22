import { useState } from "react";
import Header from "../../components/Header";
import IMG from "../../assets/images";
import clsx from "clsx";
import Offcanvas from "../../components/UI/Offcanvas";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";

interface PaymentListInterface {
    id: number;
    icon: string;
    title: string;
    date: string;
    price: string;
    type?: 'success' | "";
    warning: boolean;
}

export default function BusinessPayments () {
    const [paymentList] = useState<PaymentListInterface []>([
        { id: 1, icon: IMG.paymentCardIcon1, title: 'Ожидает оплаты', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: false },
        { id: 2, icon: IMG.paymentCardIcon2, title: 'Подтверждено', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: 'success', warning: false },
        { id: 3, icon: IMG.paymentCardIcon3, title: 'Отменено', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: true },
        { id: 4, icon: IMG.paymentCardIcon1, title: 'Ожидает оплаты', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: false },
        { id: 5, icon: IMG.paymentCardIcon4, title: 'Создан', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: false },
        { id: 6, icon: IMG.paymentCardIcon1, title: 'Ожидает оплаты', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: false },
        { id: 7, icon: IMG.paymentCardIcon2, title: 'Подтверждено', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: 'success', warning: false },
        { id: 8, icon: IMG.paymentCardIcon3, title: 'Отменено', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: true },
        { id: 9, icon: IMG.paymentCardIcon1, title: 'Ожидает оплаты', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: false },
        { id: 10, icon: IMG.paymentCardIcon4, title: 'Создан', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: false },
        { id: 11, icon: IMG.paymentCardIcon1, title: 'Ожидает оплаты', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: false },
        { id: 12, icon: IMG.paymentCardIcon2, title: 'Подтверждено', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: 'success', warning: false },
        { id: 13, icon: IMG.paymentCardIcon3, title: 'Отменено', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: true },
        { id: 14, icon: IMG.paymentCardIcon1, title: 'Ожидает оплаты', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: false },
        { id: 15, icon: IMG.paymentCardIcon4, title: 'Создан', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: false },
    ])

    return (<div className="wrapper">
        <Header type="inner" leftLink="/business">Обзор площадки</Header>

        {/* <!-- View payment --> */}
        <section className="view-payment position-relative">
            <div className="container">
                <ul className="business-navs d-flex align-items-center gap-2 py-2 px-3">
                    <li className="flex-shrink-0">
                        <a href="#" className="fs-6 d-flex align-items-center active">Все</a>
                    </li>
                    <li className="flex-shrink-0">
                        <a href="#" className="fs-6 d-flex align-items-center">Подтвержденные</a>
                    </li>
                    <li className="flex-shrink-0">
                        <a href="#" className="fs-6 d-flex align-items-center">Отмененные</a>
                    </li>
                </ul>
                <div className="d-flex flex-column gap-4 pt-3">
                    {paymentList.map((data, index) => (
                        <div
                            key={index}
                            className={clsx(
                                'view-payment__card d-flex align-items-center justify-content-between gap-3',
                                data.type
                            )}
                            data-bs-toggle="offcanvas"
                            data-bs-target="#showPayment"
                            aria-controls="showPayment"
                        >
                            <div className="view-payment__card-right d-flex align-items-center">
                                <img src={data.icon} width="40" height="40" alt="" className="flex-shrink-0 rounded-circle object-fit-cover" />
                                <div className="ps-2 ms-1">
                                    <h3 className="fw-medium d-flex align-items-center gap-2">
                                        {data.title}
                                        {data.warning && (
                                            <img src={IMG.alertRed} width="20" alt="" className="flex-shrink-0" />
                                        )}
                                    </h3>
                                    <p>{data.date}</p>
                                </div>
                            </div>
                            <div className="view-payment__card-right d-flex flex-column align-items-end text-end">
                                <b className="fw-normal">{data.price}</b>
                                #{data.id}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* <!-- View payment end --> */}

        <Offcanvas className="payment-modal" id="showPayment">
            <div className="container d-flex flex-column gap-4">
                <h2 className="fw-medium lh-1">Платёж #17704</h2>
                <div className="w-100 d-flex flex-column gap-2">
                    <Alert type="red">
                        <img src={IMG.alertCircle} width="20" alt="" className="flex-shrink-0" />
                        <p>Не хватило промежуточной комиссии для перевода</p>
                    </Alert>
                    <div className="row w-100 g-2">
                        <div className="col-12">
                            <div className="payment-modal__card d-flex flex-column align-items-start">
                                <p className="fs-6">Номер заказа</p>
                                <h4 className="fw-medium">f9e65ef73f9a90e1d9d3ba2728daf0ba</h4>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="payment-modal__card d-flex flex-column align-items-start">
                                <p className="fs-6">ID платежа</p>
                                <h4 className="fs-6 fw-medium">#17558</h4>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="payment-modal__card d-flex flex-column align-items-start">
                                <p className="fs-6">Статус</p>
                                <h4 className="fs-6 fw-medium d-flex align-items-center">
                                    <img src={IMG.timesRedCircle} width="24" alt="" className="flex-shrink-0" />
                                    <span>Отклонён</span>
                                </h4>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="payment-modal__card d-flex flex-column align-items-start">
                                <p className="fs-6">Дата создания</p>
                                <h4 className="fs-6 fw-medium d-flex align-items-center">14 сен. 2025 16:25</h4>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="payment-modal__card d-flex flex-column align-items-start">
                                <p className="fs-6">Сумма</p>
                                <h4 className="fs-6 fw-medium">
                                    1.28 USDT <span className="text-gray">BEP-20</span>
                                </h4>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="payment-modal__card d-flex flex-column align-items-start">
                                <p className="fs-6">Погрешность</p>
                                <h4 className="fs-6 fw-medium d-flex align-items-center">1.00%</h4>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="payment-modal__card d-flex flex-column align-items-start">
                                <p className="fs-6">Комиссия сети</p>
                                <h4 className="fs-6 fw-medium d-flex align-items-center">1.00 USDT</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex flex-column btns">
                    <MainBtn theme="neutral" className="fw-medium">
                        <img src={IMG.paymentModalBtnIcon1} alt="" className="flex-shrink-0" />
                        <span>Перевести средства</span>
                    </MainBtn>
                    <MainBtn theme="secondary" className="text-center">
                        <img src={IMG.paymentModalBtnIcon2} alt="" className="flex-shrink-0" />
                        <span>Отправить callback</span>
                    </MainBtn>
                    <button className="w-100 d-flex align-items-center justify-content-center btn-space" type="button" data-bs-dismiss="offcanvas" aria-label="Close">Закрыть</button>
                </div>
            </div>
        </Offcanvas>
    </div>)
}