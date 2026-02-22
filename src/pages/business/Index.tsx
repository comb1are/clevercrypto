import { Link } from "react-router-dom";
import IMG from "../../assets/images";
import BottomNav from "../../components/BottomNav";
import MainBtn from "../../components/UI/MainBtn";

export default function Business () {
    return (<div className="wrapper p-0">
        <BottomNav />

        {/* <!-- Business --> */}
        <section className="business position-relative">
            <div className="container">
                <h2 className="fw-medium lh-1 mb-4">Магазины и площадки</h2>
                <ul className="business-navs d-flex align-items-center gap-2 py-2 px-3">
                    <li className="flex-shrink-0">
                        <Link to={'#'} className="fs-6 d-flex align-items-center active">Все</Link>
                    </li>
                    <li className="flex-shrink-0">
                        <Link to={'#'} className="fs-6 d-flex align-items-center">
                            Ждут проверки
                            <span className="d-flex align-items-center justify-content-center rounded-circle fw-medium">5</span>
                        </Link>
                    </li>
                    <li className="flex-shrink-0">
                        <Link to={'#'} className="fs-6 d-flex align-items-center">
                            Одобренные
                        </Link>
                    </li>
                    <li className="flex-shrink-0">
                        <Link to={'#'} className="fs-6 d-flex align-items-center">
                            Заблокированные
                        </Link>
                    </li>
                </ul>
                <div className="d-flex flex-column gap-4 pt-3 w-100">
                    <div className="d-flex flex-column gap-2 w-100">
                        <label className="fs-6">Площадки</label>
                        <MainBtn theme="secondary" size="md" className="text-center">
                            <img src={IMG.plusIcon} alt="" className="flex-shrink-0" />
                            <img src={IMG.plusIconDark} alt="" className="flex-shrink-0 dark-icon" />
                            <span>Добавить</span>
                        </MainBtn>
                        <Link to={'#'} className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                            <img src={IMG.businessLogo1} alt="" className="logo rounded-circle flex-shrink-0" />
                            <div className="w-100">
                                <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                    <b className="fw-medium">OZON</b>
                                    ozon.ru
                                </div>
                            </div>
                            <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 8L13.2929 11.2929C13.6834 11.6834 13.6834 12.3166 13.2929 12.7071L10 16" stroke="#ADB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link to={'#'} className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                            <img src={IMG.businessLogo2} alt="" className="logo rounded-circle flex-shrink-0" />
                            <div className="w-100">
                                <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                    <b className="fw-medium">FunPay</b>
                                    funpay.com
                                </div>
                            </div>
                            <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 8L13.2929 11.2929C13.6834 11.6834 13.6834 12.3166 13.2929 12.7071L10 16" stroke="#ADB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                    <div className="d-flex flex-column gap-2 w-100">
                        <label className="fs-6">Магазины</label>
                        <MainBtn theme="secondary" size="md">
                            <img src={IMG.plusIcon} alt="" className="flex-shrink-0" />
                            <img src={IMG.plusIconDark} alt="" className="flex-shrink-0 dark-icon" />
                            <span>Добавить</span>
                        </MainBtn>
                        <Link to={'#'} className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                            <img src={IMG.businessLogo3} alt="" className="logo rounded-circle flex-shrink-0" />
                            <div className="w-100">
                                <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                    <b className="fw-medium">Kupikod</b>
                                    kupikod.com
                                    <div className="dot rounded-circle flex-shrink-0"></div>
                                </div>
                                <span className="business-link__alert rounded-pill">Цифровые товары</span>
                            </div>
                            <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 8L13.2929 11.2929C13.6834 11.6834 13.6834 12.3166 13.2929 12.7071L10 16" stroke="#ADB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link to={'#'} className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                            <img src={IMG.businessLogo2} alt="" className="logo rounded-circle flex-shrink-0" />
                            <div className="w-100">
                                <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                    <b className="fw-medium">FunPay</b>
                                    funpay.com
                                </div>
                                <span className="business-link__alert rounded-pill">Цифровые товары</span>
                            </div>
                            <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 8L13.2929 11.2929C13.6834 11.6834 13.6834 12.3166 13.2929 12.7071L10 16" stroke="#ADB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link to={'#'} className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                            <img src={IMG.businessLogo2} alt="" className="logo rounded-circle flex-shrink-0" />
                            <div className="w-100">
                                <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                    <b className="fw-medium">FunPay</b>
                                    funpay.com
                                </div>
                                <span className="business-link__alert rounded-pill">Цифровые товары</span>
                            </div>
                            <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 8L13.2929 11.2929C13.6834 11.6834 13.6834 12.3166 13.2929 12.7071L10 16" stroke="#ADB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Business end --> */}
    </div>)
}