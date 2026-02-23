import IMG from "../../assets/images";
import MainBtn from "../../components/UI/MainBtn";
import Offcanvas from "../../components/UI/Offcanvas";
import IconIndex44 from "../../components/Icons/IconIndex44";

export default function Paying () {
    return (<div className="wrapper p-0 d-flex">
        {/* <!-- Paying --> */}
        <section className="paying h-full d-flex flex-column">
            <div className="container h-full d-flex flex-column justify-content-between gap-3">
                <div className="w-100">
                    <div className="paying-head d-flex align-items-center justify-content-between pb-3 mb-1">
                        <div className="d-flex align-items-center">
                            <div className="paying-head__img d-flex align-items-center">
                                <img src={IMG.payLogo1} width="40" alt="" className="flex-shrink-0 rounded-circle" />
                                <img src={IMG.payLogo2} width="40" alt="" className="flex-shrink-0 rounded-circle" />
                            </div>
                            <h2 className="fw-medium lh-1 ps-2 ms-1">Funpay</h2>
                        </div>
                        <p className="fs-6">#451940</p>
                    </div>
                    <div className="paying-body d-flex flex-column">
                        <label>Выберите способ оплаты</label>
                        <div className="paying-card d-flex flex-column w-100 position-relative overflow-hidden">
                            <div className="d-flex align-items-center justify-content-between">
                                <img src={IMG.payCardLogo1} alt="" />
                                <input type="radio" name="payType" className="position-absolute top-0 start-0 w-100 h-100" />
                                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                                    <span className="rounded-circle"></span>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <h3 className="fw-medium lh-1">Оплата криптовалютой</h3>
                                <p className="fs-6">Оплатита любой криптовалютой</p>
                            </div>
                        </div>
                        <div className="paying-card d-flex flex-column w-100 position-relative overflow-hidden">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="paying-card__images d-flex align-items-center">
                                    <img src={IMG.bankCard1} alt="" />
                                    <img src={IMG.bankCard2} alt="" />
                                    <img src={IMG.bankCard3} alt="" />
                                    <img src={IMG.bankCard4} alt="" />
                                </div>
                                <input type="radio" name="payType" id="" className="position-absolute top-0 start-0 w-100 h-100" />
                                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                                    <span className="rounded-circle"></span>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <h3 className="fw-medium lh-1">Оплата криптовалютой</h3>
                                <p className="fs-6">Оплатита любой криптовалютой</p>
                            </div>
                        </div>
                        <MainBtn theme="secondary">
                            <span>Другие способы оплаты</span>
                            <IconIndex44 />
                        </MainBtn>
                    </div>
                </div>
                <div className="w-100 d-flex flex-column paying-bottom">
                    <MainBtn theme="neutral" className="fw-medium">Продолжить</MainBtn>
                    <button className="d-flex align-items-center justify-content-center btn-space" data-bs-toggle="offcanvas" data-bs-target="#detailModal" aria-controls="detailModal">
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