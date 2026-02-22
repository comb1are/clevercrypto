import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

export default function () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Результаты AML</Header>

        {/* <!-- Check AML --> */}
        <section className="check-result h-full d-flex">
            <div className="container h-full d-flex flex-column justify-content-between gap-2">
                <div className="pt-4 d-flex flex-column gap-3 w-100">
                    <div className="d-flex align-items-center flex-column position-relative">
                        <svg className="guade-chart" width="220" height="121" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path
                                d="M 0 105 A 83 80 0 0 1 200 105"
                                fill="none"
                                stroke="#E9ECEF"
                                strokeWidth="17"
                                strokeLinecap="round"
                            />
                            <path
                                d="M 0 105 A 83 80 0 0 1 200 105"
                                fill="none"
                                stroke="#FFC107"
                                strokeWidth="17"
                                strokeLinecap="round"
                                pathLength="100"
                                strokeDasharray="42 100"
                            />
                        </svg>
                        <div className="chart-text text-center position-absolute bottom-0 start-50 translate-middle-x">
                            <h3 className="fw-medium lh-1">42%</h3>
                            <p>Средний риск</p>
                        </div>
                    </div>
                    <div className="crypto-text d-flex w-100 d-flex align-items-center justify-content-center gap-2">
                        <img src={IMG.cryptoBitcoin} width="24" className="flex-shrink-0" alt="" />
                        <b className="fs-6 fw-medium">Bitcoin</b>
                        <p className="fs-6">bc1qm...3scw</p>
                    </div>
                    <ul className="d-flex flex-column gap-2 w-100">
                        <li className="px-3 result-card d-flex flex-column gap-3 w-100">
                            <p className="d-flex align-items-center">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="18" height="18" rx="9" fill="#20C997" />
                                    <path d="M13.4259 6.51481C13.8017 6.91972 13.778 7.55266 13.3729 7.92831L8.40842 12.5325C8.02491 12.8882 7.43209 12.8882 7.04852 12.5326L4.62704 10.2875C4.22197 9.91192 4.19814 9.27908 4.5738 8.8741L4.77806 8.65391C5.1536 8.24906 5.78622 8.22524 6.19114 8.60072L7.72754 10.0254L11.8091 6.24189C12.2139 5.86661 12.8463 5.89037 13.2218 6.29498L13.4259 6.51481Z" fill="white" />
                                </svg>
                                <span>Минимальный риск</span>
                            </p>
                            <div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <h3 className="d-flex align-items-center gap-2 fw-medium fs-6">
                                        Обменники
                                        <span>23.4%</span>
                                    </h3>
                                    <h3 className="fw-medium fs-6">$12 582.12</h3>
                                </div>
                                <div className="line line-green rounded-pill overflow-hidden position-relative w-100">
                                    <span className="position-absolute start-0 top-0 h-100" style={{ width: "23.4%" }}></span>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <h3 className="d-flex align-items-center gap-2 fw-medium fs-6">
                                        Другое
                                        <span>10.2%</span>
                                    </h3>
                                    <h3 className="fw-medium fs-6">$4 218.64</h3>
                                </div>
                                <div className="line line-green rounded-pill overflow-hidden position-relative w-100">
                                    <span className="position-absolute start-0 top-0 h-100" style={{ width: "10.2%" }}></span>
                                </div>
                            </div>
                        </li>
                        <li className="px-3 result-card d-flex flex-column gap-3 w-100">
                            <p className="d-flex align-items-center">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="18" height="18" rx="9" fill="#FFC107" />
                                    <rect x="10.5" y="3.99219" width="6.06055" height="3" rx="1" transform="rotate(90 10.5 3.99219)" fill="white" />
                                    <rect x="10.5" y="11.0078" width="3" height="3" rx="1" transform="rotate(90 10.5 11.0078)" fill="white" />
                                </svg>
                                <span>Средний риск</span>
                            </p>
                            <div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <h3 className="d-flex align-items-center gap-2 fw-medium fs-6">
                                        Unnamed Service
                                        <span>66.2%</span>
                                    </h3>
                                    <h3 className="fw-medium fs-6">$4 187.70</h3>
                                </div>
                                <div className="line line-yellow rounded-pill overflow-hidden position-relative w-100">
                                    <span className="position-absolute start-0 top-0 h-100" style={{ width: "66.22%" }}></span>
                                </div>
                            </div>
                        </li>
                        <li className="px-3 result-card d-flex flex-column gap-3 w-100">
                            <p className="d-flex align-items-center">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="18" height="18" rx="9" fill="#DC3545" />
                                    <rect x="4.57324" y="7.5" width="8.85352" height="3" rx="1" fill="white" />
                                </svg>
                                <span>Высокий риск</span>
                            </p>
                            <div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <h3 className="d-flex align-items-center gap-2 fw-medium fs-6">
                                        Казино
                                        <span>21.2%</span>
                                    </h3>
                                    <h3 className="fw-medium fs-6">$4 187.70</h3>
                                </div>
                                <div className="line line-red rounded-pill overflow-hidden position-relative w-100">
                                    <span className="position-absolute start-0 top-0 h-100" style={{ width: "21.2%" }}></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <MainBtn theme="secondary">Закрыть</MainBtn>
            </div>
        </section>
        {/* <!-- Check AML end --> */}
    </div>)
}