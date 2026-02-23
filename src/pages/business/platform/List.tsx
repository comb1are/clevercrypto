import IMG from "../../../assets/images";
import Header from "../../../components/Header";
import IconList62 from "../../../components/Icons/IconList62";
import IconList63 from "../../../components/Icons/IconList63";
import IconList64 from "../../../components/Icons/IconList64";
import IconList65 from "../../../components/Icons/IconList65";
import IconList66 from "../../../components/Icons/IconList66";
import IconList67 from "../../../components/Icons/IconList67";
import IconList68 from "../../../components/Icons/IconList68";
import IconList69 from "../../../components/Icons/IconList69";

export default function BusinessPlatformList () {
    return (<div className="wrapper">
        <Header type="inner" leftLink="/business" rightLinkType="search">Список площадок</Header>

        {/* <!-- Stores list --> */}
        <section className="stores-list position-relative">
            <div className="container">
                <ul className="business-navs d-flex align-items-center gap-2 py-2 px-3">
                    <li className="flex-shrink-0">
                        <a href="#" className="fs-6 d-flex align-items-center active">Все</a>
                    </li>
                    <li className="flex-shrink-0">
                        <a href="#" className="fs-6 d-flex align-items-center">
                            Ждут проверки
                            <span className="d-flex align-items-center justify-content-center rounded-circle fw-medium">5</span>
                        </a>
                    </li>
                    <li className="flex-shrink-0">
                        <a href="#" className="fs-6 d-flex align-items-center">
                            Одобренные
                        </a>
                    </li>
                    <li className="flex-shrink-0">
                        <a href="#" className="fs-6 d-flex align-items-center">
                            Заблокированные
                        </a>
                    </li>
                </ul>
                <div className="d-flex flex-column gap-2 pt-3 w-100">
                    <a href="#" className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                        <img src={IMG.businessLogo3} alt="" className="logo rounded-circle flex-shrink-0" />
                        <div className="w-100 d-flex flex-column align-items-start gap-2">
                            <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                <b className="fw-medium">Kupikod</b>
                                kupikod.com
                            </div>
                            <div className="business-link__dagree d-flex align-items-center gap-2">
                                <IconList69 />
                                <b className="fs-6 fw-medium pr-1">70%</b>
                                <span className="fs-6">Выдач</span>
                            </div>
                        </div>
                        <IconList68 />
                    </a>
                    <a href="#" className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                        <img src={IMG.businessLogo3} alt="" className="logo rounded-circle flex-shrink-0" />
                        <div className="w-100 d-flex flex-column align-items-start gap-2">
                            <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                <b className="fw-medium">Kupikod</b>
                                kupikod.com
                            </div>
                            <div className="business-link__dagree d-flex align-items-center gap-2">
                                <IconList67 />
                                <b className="fs-6 fw-medium pr-1">70%</b>
                                <span className="fs-6">Выдач</span>
                            </div>
                        </div>
                        <IconList66 />
                    </a>
                    <a href="#" className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                        <img src={IMG.businessLogo3} alt="" className="logo rounded-circle flex-shrink-0" />
                        <div className="w-100 d-flex flex-column align-items-start gap-2">
                            <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                <b className="fw-medium">Kupikod</b>
                                kupikod.com
                            </div>
                            <div className="alert-teal rounded-pill">
                                <img src={IMG.checkGreen} alt="" className="flex-shrink-0" />
                                <span className="fw-normal">Заявка одобрена</span>
                            </div>
                        </div>
                        <IconList65 />
                    </a>
                    <a href="#" className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                        <img src={IMG.businessLogo3} alt="" className="logo rounded-circle flex-shrink-0" />
                        <div className="w-100 d-flex flex-column align-items-start gap-2">
                            <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                <b className="fw-medium">Kupikod</b>
                                kupikod.com
                            </div>
                            <div className="alert-red rounded-pill">
                                <img src={IMG.timesRed} alt="" className="flex-shrink-0" />
                                <span className="fw-normal">Заявка одобрена</span>
                            </div>
                        </div>
                        <IconList64 />
                    </a>
                    <a href="#" className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                        <img src={IMG.businessLogo3} alt="" className="logo rounded-circle flex-shrink-0" />
                        <div className="w-100 d-flex flex-column align-items-start gap-2">
                            <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                <b className="fw-medium">Kupikod</b>
                                kupikod.com
                            </div>
                            <div className="alert-gray rounded-pill">Ожидает проверки</div>
                        </div>
                        <IconList63 />
                    </a>
                    <a href="#" className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                        <img src={IMG.businessLogo3} alt="" className="logo rounded-circle flex-shrink-0" />
                        <div className="w-100 d-flex flex-column align-items-start gap-2">
                            <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                <b className="fw-medium">Kupikod</b>
                                kupikod.com
                            </div>
                            <div className="alert-gray rounded-pill">Ожидает проверки</div>
                        </div>
                        <IconList62 />
                    </a>
                </div>
            </div>
        </section>
        {/* <!-- Stores list end --> */}
    </div>)
}