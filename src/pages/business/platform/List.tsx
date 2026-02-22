import IMG from "../../../assets/images";
import Header from "../../../components/Header";

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
                                <b className="fs-6 fw-medium pr-1">70%</b>
                                <span className="fs-6">Выдач</span>
                            </div>
                        </div>
                        <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8L13.2929 11.2929C13.6834 11.6834 13.6834 12.3166 13.2929 12.7071L10 16" stroke="#ADB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="#" className="business-link w-100 d-flex align-items-center justify-content-between p-3 gap-3">
                        <img src={IMG.businessLogo3} alt="" className="logo rounded-circle flex-shrink-0" />
                        <div className="w-100 d-flex flex-column align-items-start gap-2">
                            <div className="business-link__title d-flex align-items-center gap-2 fs-6">
                                <b className="fw-medium">Kupikod</b>
                                kupikod.com
                            </div>
                            <div className="business-link__dagree d-flex align-items-center gap-2">
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
                                <b className="fs-6 fw-medium pr-1">70%</b>
                                <span className="fs-6">Выдач</span>
                            </div>
                        </div>
                        <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8L13.2929 11.2929C13.6834 11.6834 13.6834 12.3166 13.2929 12.7071L10 16" stroke="#ADB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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
                        <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8L13.2929 11.2929C13.6834 11.6834 13.6834 12.3166 13.2929 12.7071L10 16" stroke="#ADB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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
                        <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8L13.2929 11.2929C13.6834 11.6834 13.6834 12.3166 13.2929 12.7071L10 16" stroke="#ADB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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
                        <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8L13.2929 11.2929C13.6834 11.6834 13.6834 12.3166 13.2929 12.7071L10 16" stroke="#ADB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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
                        <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8L13.2929 11.2929C13.6834 11.6834 13.6834 12.3166 13.2929 12.7071L10 16" stroke="#ADB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        {/* <!-- Stores list end --> */}
    </div>)
}