import IMG from "../../assets/images";
import Header from "../../components/Header";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";

export default function Pay () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Пополнить проверки</Header>

        {/* <!-- Check AML --> */}
        <section className="check-aml h-full d-flex">
            <div className="container h-full d-flex flex-column justify-content-between pt-3 gap-2">
                <div className="d-flex flex-column gap-3">
                    <Alert type="gray">
                        <img src={IMG.warningGray} className="flex-shrink-0" alt="" />
                        <img src={IMG.warningGrayDark} className="flex-shrink-0 dark-icon" alt="" />
                        <p>Выберите кошелек для проверки AML</p>
                    </Alert>
                    <ul className="d-flex flex-column gap-3">
                        {Array.from({length: 4}).map((_, index) => (
                            <li key={index} className="pay-card overflow-hidden position-relative d-flex align-items-start justify-content-between">
                                <input type="radio" name="pay" className="position-absolute start-0 top-0 w-100 h-100" id="" />
                                <div className="pay-card__left d-flex align-items-start">
                                    <img src={IMG.payDoc} className="flex-shrink-0" alt="" />
                                    <img src={IMG.payDocDark} className="flex-shrink-0 dark-icon" alt="" />
                                    <div>
                                        <h3 className="d-flex align-items-end gap-2 fw-medium lh-1">
                                            5
                                            <span className="fs-6 fw-normal">проверок</span>
                                        </h3>
                                        <div className="price d-flex align-items-center gap-2 fs-6 fw-medium">
                                            <del className="fw-normal">140 ₽</del>
                                            <span>100 ₽</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="icon d-flex align-items-center justify-content-center rounded-pill">
                                    <span className="rounded-pill"></span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <MainBtn className="fw-medium">Выбрать и оплатить</MainBtn>
            </div>
        </section>
        {/* <!-- Check AML end --> */}
    </div>)
}