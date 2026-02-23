import IMG from "../assets/images"
import BottomNav from "../components/BottomNav"
import Header from "../components/Header"

import Alert from "../components/UI/Alert";
import { Link } from "react-router-dom";
import IconHome5 from "../components/Icons/IconHome5";
import IconHome6 from "../components/Icons/IconHome6";
import IconHome7 from "../components/Icons/IconHome7";
import IconHome8 from "../components/Icons/IconHome8";
import IconHome9 from "../components/Icons/IconHome9";
import IconHome10 from "../components/Icons/IconHome10";
import IconHome11 from "../components/Icons/IconHome11";
import IconHome12 from "../components/Icons/IconHome12";
import IconHome13 from "../components/Icons/IconHome13";
import IconHome14 from "../components/Icons/IconHome14";
import IconHome15 from "../components/Icons/IconHome15";
import IconHome16 from "../components/Icons/IconHome16";

export default function Home() {

    return (<div className="wrapper d-flex flex-column">
        <Header type="inner" leftLinkIcon="hidden" rightLinkType="settings">
            Мой кошелёк #1
        </Header>

        <BottomNav />

        <main>

            {/* <!-- Main page --> */}
            <section className="main-page position-relative">
                <div className="circle position-absolute"></div>
                <div className="container">
                    <div className="overal-balance py-4 d-flex flex-column align-items-center">
                        <p className="fs-6 text-center">Общий баланс</p>
                        <h3 className="fw-medium text-center">$42 482.59</h3>
                        <Alert type="teal" className="py-1 px-3 gap-2 fs-6 text-center rounded-pill">
                            <span>+$149</span>
                            <IconHome16 />
                            <span>4%</span>
                        </Alert>
                    </div>
                    <div className="row gx-2 mb-4 navigation">
                        <div className="col-3">
                            <Link to="#" className="w-100 d-flex flex-column align-items-center text-center gap-2">
                                <div className="icon d-flex align-items-center justify-content-center w-100">
                                    <IconHome15 />
                                    <IconHome14 />
                                </div>
                                <span>Пополнить</span>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="#" className="w-100 d-flex flex-column align-items-center text-center gap-2">
                                <div className="icon d-flex align-items-center justify-content-center w-100">
                                    <IconHome13 />
                                    <IconHome12 />
                                </div>
                                <span>Отправить</span>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="#" className="w-100 d-flex flex-column align-items-center text-center gap-2">
                                <div className="icon d-flex align-items-center justify-content-center w-100">
                                    <IconHome11 />
                                    <IconHome10 />
                                </div>
                                <span>Вывести</span>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="#" className="w-100 d-flex flex-column align-items-center text-center gap-2">
                                <div className="icon d-flex align-items-center justify-content-center w-100">
                                    <IconHome9 />
                                    <IconHome8 />
                                </div>
                                <span>Сделки</span>
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex overflow-auto gap-3 pb-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="flex-shrink-0" style={{ width: "90%" }}>
                                <div className="position-relative py-2 px-3 d-flex align-items-center gap-3 alert-white" style={{ minHeight: "100px" }}>
                                    <img src={IMG.alertWhiteIcon1} className="flex-shrink-0 main-img" alt="" />
                                    <img src={IMG.alertWhiteIcon1Dark} className="flex-shrink-0 main-img dark-icon" alt="" />
                                    <div>
                                        <h3>Незавершенная сделка</h3>
                                        <p>$12 492.59 • 0,106117 BTC</p>
                                        <Link to="#" className="d-inline-flex align-items-center">
                                            <span>Перейти</span>
                                            <IconHome7 />
                                        </Link>
                                    </div>
                                    <button
                                        className="btn-secondary position-absolute top-0 end-0 mt-2 me-2 d-flex align-items-center justify-content-center p-0">
                                        <IconHome6 />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- Main page end --> */}

            {/* <!-- My wallet --> */}
            <section className="my-wallet">
                <div className="container">
                    <h2>Мой кошелёк</h2>
                    <div className="operation-month d-flex align-items-start gap-3 mb-2">
                        <div className="w-100 d-flex align-items-center gap-3">
                            <img src={IMG.operationMonthIcon1} className="flex-shrink-0" alt="" />
                            <div>
                                <p className="mb-2">Операции за месяц</p>
                                <h3 className="fw-medium fs-3">$124 492.24</h3>
                            </div>
                        </div>
                        <div className="operation-month__right flex-shrink-0">
                            <Link to="#">
                                <IconHome5 />
                            </Link>
                        </div>
                    </div>
                    <div className="clever-card overflow-hidden position-relative d-flex align-items-center justify-content-between p-3 mb-2">
                        <div className="icon position-absolute"></div>
                        <div className="clever-card__left d-flex align-items-center">
                            <img src={IMG.cleverCardLogo1} className="flex-shrink-0" alt="" />
                            <div>
                                <h3 className="fw-medium">Clever</h3>
                                <p>$1,00</p>
                            </div>
                        </div>
                        <div className="clever-card__right text-end">
                            <h4>4 491 CLV</h4>
                            <p>$4 491,52</p>
                        </div>
                    </div>
                    <ul className="crypto-list p-3 d-flex flex-column gap-4">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <li key={index} className="crypto-card w-100 d-flex align-items-center justify-content-between">
                                <div className="crypto-card__left d-flex align-items-center">
                                    <img src={IMG.cryptoBitcoin} className="flex-shrink-0" alt="" />
                                    <div>
                                        <h3 className="fw-medium">Bitcoin</h3>
                                        <p>≈$124 492,24</p>
                                    </div>
                                </div>
                                <div className="crypto-card__right text-end">
                                    <h4>1.4919 BTC</h4>
                                    <p>$181 319,56</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* <!-- My wallet end --> */}

        </main>
    </div>)
}