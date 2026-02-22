import IMG from "../../../assets/images";
import Header from "../../../components/Header";
import Alert from "../../../components/UI/Alert";
import MainBtn from "../../../components/UI/MainBtn";

export default function BusinessStoreOverview () {
    return (<div className="wrapper">
        <Header type="inner" leftLink="/business">Обзор магазина</Header>

        {/* <!-- Store review --> */}
        <section className="store-review position-relative">
            <div className="container pt-3">
                <Alert type="red" className="mb-2">
                    <img src={IMG.alertCircle} alt="" className="flex-shrink-0" />
                    <p>Будьте бдительны! На магазин недавно был открыт спор. <a href="#">Посмотреть детали спора...</a></p>
                </Alert>
                <div className="store-review__card d-flex flex-column align-items-start gap-3 p-3 mb-4">
                    <div className="d-flex align-items-center gap-3">
                        <img src={IMG.businessLogo2} width="44" alt="" className="flex-shrink-0 rounded-circle" />
                        <div className="d-flex flex-column gap-2">
                            <div className="store-review__card-name d-flex align-items-center fs-6">
                                <b className="fw-medium">FunPay</b>
                                funpay.com
                            </div>
                            <div className="store-review__card-id">ID: #194205</div>
                        </div>
                    </div>
                    <div className="w-100 d-flex flex-column gap-2">
                        <h4 className="fs-6">Описание</h4>
                        <p className="fs-6">Potter ipsum wand elf parchment wingardium. Mellow veil stunning inches ministry-of-magic again goblet stunning</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-start gap-2">
                        <Alert type="red" className="gap-2 rounded-pill">
                            <img src={IMG.errorIcon} height="20" alt="" className="flex-shrink-0" />
                            <span>Заблокирован</span>
                        </Alert>
                        <div className="business-link__alert rounded-pill m-0">Цифровые товары</div>
                    </div>
                    <MainBtn theme="neutral" className="fw-medium">
                        <img src={IMG.storeReviewCardBtnIcon} alt="" className="flex-shrink-0" />
                        <span>Изменить процентную ставку</span>
                    </MainBtn>
                    <MainBtn theme="neutral" className="fw-medium">Разблокировать магазин</MainBtn>
                </div>
                <div className="title fw-medium lh-1 mb-3">Статистика</div>
                <div className="d-flex flex-column gap-2 w-100 mb-4">
                    <div className="row g-2">
                        <div className="col-6">
                            <div className="statistica-card d-flex flex-column gap-3 p-3">
                                <div className="d-flex align-items-center">
                                    <img src={IMG.statisticaCardIcon1} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-2 ms-1">Общ. конверсия</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg className="flex-shrink-0" width="20" height="20" viewBox="0 0 44 44">
                                        <circle
                                            strokeWidth="8"
                                            stroke="#E9ECEF"
                                            fill="transparent"
                                            r="17"
                                            cx="22"
                                            cy="22"/>
                                        <circle
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            stroke="#38C793"
                                            fill="transparent"
                                            r="17"
                                            cx="22"
                                            cy="22"
                                            transform="rotate(-90 22 22)"
                                            strokeDasharray="100.48"
                                            strokeDashoffset="30.36"
                                        />
                                    </svg>
                                    <b className="fw-medium">70%</b>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="statistica-card d-flex flex-column gap-3 p-3">
                                <div className="d-flex align-items-center">
                                    <img src={IMG.statisticaCardIcon2} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-2 ms-1">Криптовалюта</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg className="flex-shrink-0" width="20" height="20" viewBox="0 0 44 44">
                                        <circle
                                            strokeWidth="8"
                                            stroke="#E9ECEF"
                                            fill="transparent"
                                            r="17"
                                            cx="22"
                                            cy="22"/>
                                        <circle
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            stroke="#38C793"
                                            fill="transparent"
                                            r="17"
                                            cx="22"
                                            cy="22"
                                            transform="rotate(-90 22 22)"
                                            strokeDasharray="100.48"
                                            strokeDashoffset="30.36"
                                        />
                                    </svg>
                                    <b className="fw-medium">70%</b>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="statistica-card d-flex flex-column gap-3 p-3">
                                <div className="d-flex align-items-center">
                                    <img src={IMG.statisticaCardIcon3} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-2 ms-1">Оплата картой</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg className="flex-shrink-0" width="20" height="20" viewBox="0 0 44 44">
                                        <circle
                                            strokeWidth="8"
                                            stroke="#E9ECEF"
                                            fill="transparent"
                                            r="17"
                                            cx="22"
                                            cy="22"/>
                                        <circle
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            stroke="#38C793"
                                            fill="transparent"
                                            r="17"
                                            cx="22"
                                            cy="22"
                                            transform="rotate(-90 22 22)"
                                            strokeDasharray="100.48"
                                            strokeDashoffset="30.36"
                                        />
                                    </svg>
                                    <b className="fw-medium">70%</b>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="statistica-card d-flex flex-column gap-3 p-3">
                                <div className="d-flex align-items-center">
                                    <img src={IMG.statisticaCardIcon4} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-2 ms-1">СБП</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg className="flex-shrink-0" width="20" height="20" viewBox="0 0 44 44">
                                        <circle
                                            strokeWidth="8"
                                            stroke="#E9ECEF"
                                            fill="transparent"
                                            r="17"
                                            cx="22"
                                            cy="22"/>
                                        <circle
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            stroke="#38C793"
                                            fill="transparent"
                                            r="17"
                                            cx="22"
                                            cy="22"
                                            transform="rotate(-90 22 22)"
                                            strokeDasharray="100.48"
                                            strokeDashoffset="30.36"
                                        />
                                    </svg>
                                    <b className="fw-medium">70%</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rating-card d-flex align-items-center justify-content-between py-2 pe-2 ps-3">
                        <p className="fs-6">Оценки</p>
                        <ul className="d-flex gap-2">
                            <li className="alert-teal d-flex align-items-center gap-2">
                                <img src={IMG.likeGreen} height="20" alt="" className="flex-shrink-0" />
                                <span className="fs-6 fw-medium">2 451</span>
                            </li>
                            <li className="alert-red d-flex align-items-center gap-2">
                                <img src={IMG.alertRed} height="20" alt="" className="flex-shrink-0" />
                                <span className="fs-6 fw-medium">1</span>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="w-100 d-flex align-items-center justify-content-center btn-red md">
                        <img src={IMG.alertRed} alt="" className="flex-shrink-0" />
                        <span>Открыть спор</span>
                    </a>
                </div>
                <div className="title fw-medium lh-1 mb-3">Открытые споры</div>
                <div className="disputes-card d-flex flex-column align-items-start gap-3 p-3">
                    <div className="disputes-card__head d-flex align-items-center">
                        <img src={IMG.businessLogo3} width="34" height="34" alt="" className="object-fit-cover rounded-circle" />
                        <h3 className="fs-6 fw-medium">Kupikod</h3>
                        <div className="alert-gray d-flex align-items-center">
                            <img src={IMG.bank1} alt="" className="flex-shrink-0" />
                            <img src={IMG.bank2} alt="" className="flex-shrink-0" />
                        </div>
                    </div>
                    <div className="alert-red d-flex align-items-center gap-2">
                        <img src={IMG.alertRed} height="20" alt="" className="flex-shrink-0" />
                        <span className="fs-6">Платеж не зачислен</span>
                    </div>
                    <p className="w-100 fs-6">Potter ipsum wand elf parchment wingardium. Mellow veil stunning inches ministry-of-magic again goblet stunning. Ground troll dervish daisies bedroom fawkes tonight teacup creature.</p>
                    <ul className="w-100 d-flex align-items-center justify-content-between">
                        <li>4 дек. 2024</li>
                        <li>ID: #194205</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* <!-- Store review end --> */}
    </div>)
}