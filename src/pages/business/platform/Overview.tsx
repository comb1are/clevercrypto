import IMG from "../../../assets/images";
import Header from "../../../components/Header";
import Alert from "../../../components/UI/Alert";
import MainBtn from "../../../components/UI/MainBtn";
import IconOverview70 from "../../../components/Icons/IconOverview70";

export default function BusinessPlatformOverview () {
    return (<div className="wrapper">
        <Header type="inner" leftLink="/business">Обзор площадки</Header>

        {/* <!-- Platform overview --> */}
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
                    <Alert type="success" className="w-100 justify-content-center">
                        <img src={IMG.checkGreen} width="24" alt="" className="flex-shrink-0" />
                        <span className="fs-6">Ваша заявка одобрена</span>
                    </Alert>
                    <Alert type="error" className="w-100 justify-content-center">
                        <img src={IMG.timesRed} width="24" alt="" className="flex-shrink-0" />
                        <span className="fs-6">Ваша заявка отклонена</span>
                    </Alert>
                    <MainBtn theme="neutral" className="fw-medium">Подать заявку</MainBtn>
                </div>
                <div className="title fw-medium lh-1 mb-3">Статистика</div>
                <div className="d-flex flex-column gap-2 w-100 mb-4">
                    <div className="w-100 statistica-card d-flex align-items-center justify-content-between gap-3 p-3">
                        <p className="fs-6 ps-2 ms-1">Общ. конверсия</p>
                        <div className="d-flex align-items-center gap-2">
                            <IconOverview70 />
                            <b className="fw-medium">70%</b>
                        </div>
                    </div>
                    <div className="rating-card d-flex align-items-center justify-content-between py-2 pe-2 ps-3">
                        <p className="fs-6">Оценки</p>
                        <div className="d-flex gap-2">
                            <Alert type="teal" className="gap-2">
                                <img src={IMG.likeGreen} height="20" alt="" className="flex-shrink-0" />
                                <span className="fs-6 fw-medium">2 451</span>
                            </Alert>
                            <Alert type="red" className="gap-2">
                                <img src={IMG.alertRed} height="20" alt="" className="flex-shrink-0" />
                                <span className="fs-6 fw-medium">1</span>
                            </Alert>
                        </div>
                    </div>
                    <MainBtn to="#" theme="red" size="md" className="md">
                        <img src={IMG.alertRed} alt="" className="flex-shrink-0" />
                        <span>Открыть спор</span>
                    </MainBtn>
                </div>
                <div className="title fw-medium lh-1 mb-3">Открытые споры</div>
                <div className="disputes-card d-flex flex-column align-items-start gap-3 p-3">
                    <div className="disputes-card__head d-flex align-items-center">
                        <img src={IMG.businessLogo3} width="34" height="34" alt="" className="object-fit-cover rounded-circle" />
                        <h3 className="fs-6 fw-medium">Kupikod</h3>
                        <Alert type="gray">
                            <img src={IMG.bank1} alt="" className="flex-shrink-0" />
                            <img src={IMG.bank2} alt="" className="flex-shrink-0" />
                        </Alert>
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
        {/* <!-- Platform overview end --> */}
    </div>)
}