import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";
import IconResult36 from "../../components/Icons/IconResult36";
import IconResult37 from "../../components/Icons/IconResult37";
import IconResult38 from "../../components/Icons/IconResult38";
import IconResult39 from "../../components/Icons/IconResult39";

export default function () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Результаты AML</Header>

        {/* <!-- Check AML --> */}
        <section className="check-result h-full d-flex">
            <div className="container h-full d-flex flex-column justify-content-between gap-2">
                <div className="pt-4 d-flex flex-column gap-3 w-100">
                    <div className="d-flex align-items-center flex-column position-relative">
                        <IconResult39 />
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
                                <IconResult38 />
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
                                <IconResult37 />
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
                                <IconResult36 />
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