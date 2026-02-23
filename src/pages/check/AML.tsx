import IMG from "../../assets/images";
import Header from "../../components/Header";
import PriceSwp from "../../components/PriceSwp";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";
import IconAML32 from "../../components/Icons/IconAML32";
import IconAML33 from "../../components/Icons/IconAML33";
import IconAML34 from "../../components/Icons/IconAML34";
import IconAML35 from "../../components/Icons/IconAML35";

export default function AML () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Проверка AML</Header>

        {/* <!-- Check AML --> */}
        <section className="check-aml h-full d-flex">
            <div className="container h-full d-flex flex-column justify-content-between pt-3 gap-2">
                <div className="d-flex flex-column gap-3">
                    <div>
                        <Alert type="gray" className="d-flex align-items-center">
                            <img src={IMG.warningGray} className="flex-shrink-0" alt="" />
                            <img src={IMG.warningGrayDark} className="flex-shrink-0 dark-icon" alt="" />
                            <p>Выберите кошелек для проверки AML</p>
                        </Alert>
                        <PriceSwp />
                    </div>
                    <div>
                        <div className="check-aml__body d-flex align-items-center justify-content-between py-2 pe-2 mb-2">
                            <p className="fs-6 fw-medium">Осталось 9 проверок</p>
                            <MainBtn theme="neutral" size="sm" className="w-auto fw-medium py-2">
                                <img src={IMG.addIcon} className="flex-shrink-0" alt="" />
                                <img src={IMG.addIconDark} className="flex-shrink-0 dark-icon" alt="" />
                                Добавить
                            </MainBtn>
                        </div>
                        <div className="history-check px-3 d-flex flex-column">
                            <h3 className="fw-medium lh-1">История проверок</h3>
                            <ul className="d-flex flex-column gap-3">
                                <li className="history-card d-flex align-items-center justify-content-between">
                                    <div className="history-card__left d-flex align-items-center">
                                        <img src={IMG.cryptoBitcoin} width="40" height="40" className="rounded-circle object-fit-cover flex-shrink-0" alt="" />
                                        <div>
                                            <h4 className="d-flex align-items-center gap-2 fs-6">
                                                Bitcoin
                                                <span>bc1qm...3scw</span>
                                            </h4>
                                            <p>12 сен. 2025</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 flex-shrink-0">
                                        <b className="fw-medium fs-6">14%</b>
                                        <IconAML35 />
                                    </div>
                                </li>
                                <li className="history-card d-flex align-items-center justify-content-between">
                                    <div className="history-card__left d-flex align-items-center">
                                        <img src={IMG.cryptoBitcoin} width="40" height="40" className="rounded-circle object-fit-cover flex-shrink-0" alt="" />
                                        <div>
                                            <h4 className="d-flex align-items-center gap-2 fs-6">
                                                Bitcoin
                                                <span>bc1qm...3scw</span>
                                            </h4>
                                            <p>12 сен. 2025</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 flex-shrink-0">
                                        <b className="fw-medium fs-6">42%</b>
                                        <IconAML34 />
                                    </div>
                                </li>
                                <li className="history-card d-flex align-items-center justify-content-between">
                                    <div className="history-card__left d-flex align-items-center">
                                        <img src={IMG.cryptoBitcoin} width="40" height="40" className="rounded-circle object-fit-cover flex-shrink-0" alt="" />
                                        <div>
                                            <h4 className="d-flex align-items-center gap-2 fs-6">
                                                Bitcoin
                                                <span>bc1qm...3scw</span>
                                            </h4>
                                            <p>12 сен. 2025</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 flex-shrink-0">
                                        <b className="fw-medium fs-6">36%</b>
                                        <IconAML33 />
                                    </div>
                                </li>
                                <li className="history-card d-flex align-items-center justify-content-between">
                                    <div className="history-card__left d-flex align-items-center">
                                        <img src={IMG.cryptoBitcoin} width="40" height="40" className="rounded-circle object-fit-cover flex-shrink-0" alt="" />
                                        <div>
                                            <h4 className="d-flex align-items-center gap-2 fs-6">
                                                Bitcoin
                                                <span>bc1qm...3scw</span>
                                            </h4>
                                            <p>12 сен. 2025</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 flex-shrink-0">
                                        <b className="fw-medium fs-6">75%</b>
                                        <IconAML32 />
                                    </div>
                                </li>
                            </ul>
                            <a href="#" className="more-link w-100 text-center fs-6">Показать больше</a>
                        </div>
                    </div>
                </div>
                <MainBtn theme="neutral" className="fw-medium">Проверить AML</MainBtn>
            </div>
        </section>
        {/* <!-- Check AML end --> */}
    </div>)
}