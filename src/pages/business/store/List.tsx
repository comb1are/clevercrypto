import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import IMG from "../../../assets/images";
import IconList76 from "../../../components/Icons/IconList76";
import IconList77 from "../../../components/Icons/IconList77";
import IconList78 from "../../../components/Icons/IconList78";
import IconList79 from "../../../components/Icons/IconList79";
import IconList80 from "../../../components/Icons/IconList80";
import IconList81 from "../../../components/Icons/IconList81";
import IconList82 from "../../../components/Icons/IconList82";

export default function BusinessStoreList () {
    return (<div className="wrapper">
        <Header type="inner" leftLink="/business" rightLinkType="search">Список магазинов </Header>

        {/* <!-- Stores list --> */}
        <section className="stores-list position-relative">
            <div className="container">
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
                <div className="d-flex flex-column gap-2 pt-3 w-100">
                    <Link to={'#'} className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                        <img src={IMG.businessLogo3} alt="" className="logo rounded-circle flex-shrink-0" />
                        <div className="w-100">
                            <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                <b className="fw-medium">Kupikod</b>
                                kupikod.com
                                {/* <!-- <div className="dot rounded-circle flex-shrink-0"></div> --> */}
                            </div>
                            <span className="business-link__alert rounded-pill">Цифровые товары</span>
                        </div>
                        <IconList82 />
                    </Link>
                    <Link to={'#'} className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                        <img src={IMG.businessLogo3} alt="" className="logo rounded-circle flex-shrink-0" />
                        <div className="w-100">
                            <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                <b className="fw-medium">Kupikod</b>
                                kupikod.com
                                <img src="./assets/images/error-icon.svg" alt="" className="icon flex-shrink-0" />
                            </div>
                            <span className="business-link__alert rounded-pill">Цифровые товары</span>
                        </div>
                        <IconList81 />
                    </Link>
                    <Link to={'#'} className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                        <img src={IMG.businessLogo2} alt="" className="logo rounded-circle flex-shrink-0" />
                        <div className="w-100">
                            <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                <b className="fw-medium">FunPay</b>
                                funpay.com
                                <img src="./assets/images/error-icon.svg" alt="" className="icon flex-shrink-0" />
                            </div>
                            <span className="business-link__alert rounded-pill">Цифровые товары</span>
                        </div>
                        <IconList80 />
                    </Link>
                    <Link to={'#'} className="business-link d-flex flex-column gap-3 p-3">
                        <div className="w-100 d-flex align-items-center justify-content-between gap-3">
                            <img src={IMG.businessLogo3} alt="" className="logo rounded-circle flex-shrink-0" />
                            <div className="w-100">
                                <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                    <b className="fw-medium">Kupikod</b>
                                    kupikod.com
                                </div>
                                <span className="business-link__alert rounded-pill">Цифровые товары</span>
                            </div>
                            <IconList79 />
                        </div>
                        <div className="business-link__bottom w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className="business-link__bottom-title fs-6">Конверсия оплаты</div>
                            <div className="d-flex align-items-center gap-2">
                                <IconList78 />
                                <b className="fs-6 fw-medium">70%</b>
                            </div>
                        </div>
                    </Link>
                    <Link to={'#'} className="business-link d-flex flex-column gap-3 p-3">
                        <div className="w-100 d-flex align-items-center justify-content-between gap-3">
                            <img src={IMG.businessLogo3} alt="" className="logo rounded-circle flex-shrink-0" />
                            <div className="w-100">
                                <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                    <b className="fw-medium">Kupikod</b>
                                    kupikod.com
                                </div>
                                <span className="business-link__alert rounded-pill">Цифровые товары</span>
                            </div>
                            <IconList77 />
                        </div>
                        <div className="business-link__bottom w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className="business-link__bottom-title fs-6">Конверсия оплаты</div>
                            <div className="d-flex align-items-center gap-2">
                                <IconList76 />
                                <b className="fs-6 fw-medium">70%</b>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
        {/* <!-- Stores list end --> */}
    </div>)
}