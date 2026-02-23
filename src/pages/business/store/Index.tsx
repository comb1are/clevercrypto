import IMG from "../../../assets/images";
import Header from "../../../components/Header";
import MainBtn from "../../../components/UI/MainBtn";

import Alert from "../../../components/UI/Alert";
import IconIndex71 from "../../../components/Icons/IconIndex71";
import IconIndex72 from "../../../components/Icons/IconIndex72";
import IconIndex73 from "../../../components/Icons/IconIndex73";
import IconIndex74 from "../../../components/Icons/IconIndex74";
import IconIndex75 from "../../../components/Icons/IconIndex75";

export default function BusinessStore() {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/business" leftLinkIcon="">Профиль магазина</Header>

        {/* <!-- Business store --> */}
        <section className="profile-store h-full d-flex pt-3">
            <div className="container h-full d-flex flex-column">
                <div className="profile-store__head w-100 d-flex flex-column align-items-center gap-3">
                    <div className="text-center">
                        <img src={IMG.businessLogo2} width="80" height="80" alt="" className="flex-shrink-0 rounded-circle" />
                        <h3 className="fw-medium my-1 pt-2">FunPay</h3>
                        <p className="fs-6">funpay.com</p>
                    </div>
                    <div className="btns d-flex flex-column gap-2 w-100">
                        <MainBtn to="#" theme="neutral" className="fw-medium">Выставить счёт</MainBtn>
                        <MainBtn to="#" theme="secondary" className="text-center">
                            <img src={IMG.settings} alt="" className="flex-shrink-0" />
                            <img src={IMG.settingsDark} alt="" className="flex-shrink-0 dark-icon" />
                            <span>Настройки магазина</span>
                        </MainBtn>
                    </div>
                </div>
                <div className="store-statistic">
                    <div className="title fw-medium lh-1 mb-3">Статистика</div>
                    <div className="d-flex overflow-auto gap-2 pb-2">
                        <div className="flex-shrink-0" style={{ width: "240px" }}>
                            <div className="statistic-card d-flex flex-column align-items-start gap-3 p-3">
                                <p className="fs-6">Оборот за сутки</p>
                                <h3 className="fw-medium">24 491 940,54 ₽</h3>
                                <Alert type="teal" className="py-1 px-3 gap-2 fs-6 text-center rounded-pill">
                                    <span>+104 549 ₽</span>
                                    <IconIndex75 />
                                    <span>7%</span>
                                </Alert>
                            </div>
                        </div>

                        <div className="flex-shrink-0" style={{ width: "240px" }}>
                            <div className="statistic-card d-flex flex-column align-items-start gap-3 p-3">
                                <p className="fs-6">Средний чек</p>
                                <h3 className="fw-medium">3 291 ₽</h3>
                                <Alert type="red" className="py-1 px-3 gap-2 fs-6 text-center rounded-pill">
                                    <span>-104 549 ₽</span>
                                    <IconIndex74 />
                                    <span>7%</span>
                                </Alert>
                            </div>
                        </div>

                        <div className="flex-shrink-0" style={{ width: "240px" }}>
                            <div className="statistic-card d-flex flex-column align-items-start gap-3 p-3">
                                <p className="fs-6">Оборот за сутки</p>
                                <h3 className="fw-medium">24 491 940,54 ₽</h3>
                                <Alert type="teal" className="py-1 px-3 gap-2 fs-6 text-center rounded-pill">
                                    <span>+104 549 ₽</span>
                                    <IconIndex73 />
                                    <span>7%</span>
                                </Alert>
                            </div>
                        </div>

                        <div className="flex-shrink-0" style={{ width: "240px" }}>
                            <div className="statistic-card d-flex flex-column align-items-start gap-3 p-3">
                                <p className="fs-6">Средний чек</p>
                                <h3 className="fw-medium">3 291 ₽</h3>
                                <Alert type="red" className="py-1 px-3 gap-2 fs-6 text-center rounded-pill">
                                    <span>-104 549 ₽</span>
                                    <IconIndex72 />
                                    <span>7%</span>
                                </Alert>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reviews w-100">
                    <div className="title fw-medium lh-1 mb-3">
                        Отзывы <span>14 429</span>
                    </div>
                    <ul className="d-flex flex-column gap-2">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <li key={index} className="reviews-card p-3 d-flex flex-column gap-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <img src={IMG.reviewLogo1} width="34" className="flex-shrink-0 rounded-circle" alt="" />
                                        <div className="reviews-card__name fs-6 ps-2 ms-1">username</div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <IconIndex71 />
                                        <div className="reviews-card__rating fs-6 fw-medium ps-2 ms-1">
                                            4.5<span>/5</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="fs-6">Potter ipsum wand elf parchment wingardium. Mellow veil stunning inches ministry-of-magic again goblet stunning. Ground troll dervish daisies bedroom fawkes tonight teacup creature.</p>
                                <div className="reviews-card__date">4 дек. 2024</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        {/* <!-- Business store end --> */}
    </div>)
}