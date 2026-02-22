import { useState } from "react";
import IMG from "../../assets/images";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";
import Offcanvas from "../../components/UI/Offcanvas";

export default function PayingSend () {
    const [payingType, setPayingType] = useState<1 | 2>(1)

    return (<div className="wrapper p-0 d-flex">
        {/* <!-- Paying --> */}
        <section className="paying h-full d-flex flex-column">
            <div className="container h-full d-flex flex-column justify-content-between gap-4">
                <div className="w-100">
                    <div className="paying-head d-flex align-items-center justify-content-between pb-3 mb-3">
                        <div className="paying-head__left d-flex align-items-center">
                            <div className="paying-head__img d-flex align-items-center">
                                <img src={IMG.payLogo1} width="40" alt="" className="flex-shrink-0 rounded-circle" />
                                <img src={IMG.payLogo2} width="40" alt="" className="flex-shrink-0 rounded-circle" />
                            </div>
                            <h2 className="fw-medium lh-1">Funpay</h2>
                        </div>
                        <p className="fs-6">#451940</p>
                    </div>
                    <div className="payment-send d-flex flex-column gap-3 w-100">
                        <div className="title fw-medium">Отправьте средства</div>
                        <p className="subtitle">Отправьте средства по реквизитам ниже. Переводите точную сумму для зачисления платежа!</p>
                        <div className="payment-send__card">
                            <p className="mb-2">Страна получателя</p>
                            <div className="d-flex align-items-center gap-2">
                                <img src={IMG.flagRu} width="24" height="24" alt="" className="flex-shrink-0 rounded-circle object-fit-cover" />
                                <h3>Россия</h3>
                            </div>
                        </div>
                        <div className="payment-send__card">
                            <p className="mb-2">Банк получателя</p>
                            <div className="d-flex align-items-center gap-2">
                                <img src={IMG.alfaBank} width="24" height="24" alt="" className="flex-shrink-0 rounded-circle object-fit-cover light-img" />
                                <h3>Альфа-банк</h3>
                            </div>
                        </div>
                        <div className="payment-send__card d-flex align-items-center justify-content-between">
                            <div className="w-100">
                                <p className="mb-2">Номер карты</p>
                                <h3>2214 8539 8729 5735</h3>
                            </div>
                            <button className="flex-shrink-0 d-flex align-items-center justify-content-center">
                                <img src={IMG.copyIconGray} alt="" />
                            </button>
                        </div>
                        <div className="payment-send__card d-flex align-items-center justify-content-between">
                            <div className="w-100">
                                <p className="mb-2">Сумма к оплате</p>
                                <h3>2 410 Руб</h3>
                            </div>
                            <button className="flex-shrink-0 d-flex align-items-center justify-content-center">
                                <img src={IMG.copyIconGray} alt="" />
                            </button>
                        </div>
                        <Alert type="warning">
                            <img src={IMG.alertWarning} alt="" className="flex-shrink-0" />
                            <img src={IMG.alertWarningDark} alt="" className="flex-shrink-0 dark-img" />
                            <p>Не закрывайте страницу до завершения оплаты</p>
                        </Alert>
                        <MainBtn theme="secondary" size="md" className="text-center">
                            <img src={IMG.supportLogo} width="24" alt="" className="flex-shrink-0" />
                            <span>Проблемы с оплатой?</span>
                        </MainBtn>
                    </div>
                </div>
                <div className="w-100 d-flex flex-column paying-bottom">
                    <MainBtn theme="space">
                        <img src={IMG.clockIcon} alt="" className="flex-shrink-0" />
                        <img src={IMG.clockIconDark} alt="" className="flex-shrink-0 dark-icon" />
                        <span>Счёт действителен: 00:58:09</span>
                    </MainBtn>
                    <button className="w-100 d-flex align-items-center justify-content-center text-center btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#payingModal" aria-controls="payingModal">
                        <img src={IMG.shareIcon2} width="24" alt="" className="flex-shrink-0" />
                        <span>Поделиться</span>
                    </button>
                </div>
            </div>
        </section>
        {/* <!-- Paying end --> */}

        <Offcanvas className="paying-modal" id="payingModal">
            <div className="container d-flex flex-column gap-4">
                <div className="paying-modal__head d-flex align-items-center flex-column">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={IMG.cryptoBitcoin} width="24" alt="" className="flex-shrink-0" />
                        <h2 className="ps-2 ms-1 fs-6 fw-medium">Bitcoin <span>BTC</span></h2>
                    </div>
                    <div className="qr-code d-flex align-items-center flex-column text-center">
                        <img src={IMG.payingQrCode} alt="" className="w-100" />
                        <p>Адрес кошелька</p>
                        <h4>bc1qmtkq5g7scre06fgwzjextzn0m2vswsz53scw</h4>
                    </div>
                    <ul className="d-flex align-items-center justify-content-center">
                        <li className="position-relative rounded-pill fs-6 text-center">
                            <input
                                type="radio"
                                name="payingModalType"
                                checked={payingType == 1}
                                onChange={() => {setPayingType(1)}}
                                className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                            />
                            Без суммы
                        </li>
                        <li className="position-relative rounded-pill fs-6 text-center">
                            <input
                                type="radio"
                                name="payingModalType"
                                checked={payingType == 2}
                                onChange={() => {setPayingType(2)}}
                                className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                            />
                            С суммой
                        </li>
                    </ul>
                    <Alert type="warning">
                        <img src={IMG.alertWarning} alt="" className="flex-shrink-0" />
                        <img src={IMG.alertWarningDark} alt="" className="flex-shrink-0 dark-img" />
                        <p>Отправляйте только монеты в сети BTC, иначе средства не поступят</p>
                    </Alert>
                </div>
                <div className="btns w-100 d-flex flex-column">
                    <MainBtn theme="neutral" className="fw-medium">
                        <img src={IMG.shareLink} alt="" className="flex-shrink-0" />
                        <span>Поделиться</span>
                    </MainBtn>
                    <button className="w-100 d-flex align-items-center justify-content-center text-center btn-secondary" type="button" data-bs-dismiss="offcanvas" aria-label="Close">Закрыть</button>
                </div>
            </div>
        </Offcanvas>
    </div>)
}