import { useState } from "react";
import IMG from "../../assets/images";
import BottomNav from "../../components/BottomNav";
import MainBtn from "../../components/UI/MainBtn";
import { Link } from "react-router-dom";
import clsx from "clsx";
import IconIndex50 from "../../components/Icons/IconIndex50";

interface LinkInterface {
    id: number,
    title: string,
    to: string,
    icon: string,
}

export default function Profile () {
    const [linkList] = useState<LinkInterface []>([
        { id: 1, title: 'Основные настройки', to: '/profile/settings', icon: IMG.profileLink1 },
        { id: 2, title: 'Настройка API', to: '#', icon: IMG.profileLink2 },
        { id: 3, title: 'Безопасность', to: '/profile/security', icon: IMG.profileLink3 },
        { id: 4, title: 'Активные сессии', to: '/profile/devices', icon: IMG.profileLink4 },
        { id: 5, title: 'KYC верификация', to: '#', icon: IMG.profileLink5 },
        { id: 6, title: 'Реферальная программа', to: '#', icon: IMG.profileLink6 },
        { id: 7, title: 'Тарифы', to: '/profile/tarifs', icon: IMG.profileLink7 },
    ])

    return (<div className="wrapper p-0">
        <BottomNav />

        {/* <!-- Profile --> */}
        <section className="profile position-relative">
            <div className="circle position-absolute start-50"></div>
            <div className="container d-flex flex-column align-items-center">
                <img src={IMG.avatar} alt="" className="profile-avatar rounded-circle mb-3" />
                <div className="w-100 profile-head d-flex flex-column align-items-center mb-3">
                    <h2 className="fw-medium lh-1 text-center">Alex Kaste</h2>
                    <MainBtn to="#" theme="linear" size="sm" className="w-auto fw-medium">Обновить тариф</MainBtn>
                </div>
                <div className="profile-payment w-100 d-flex flex-column gap-3 mb-2">
                    <div>
                        <div className="text d-flex align-items-center justify-content-between">
                            <h3 className="fs-6 fw-medium">Лимит платежей</h3>
                            <div className="d-flex align-items-center gap-2">
                                <h4 className="fs-6 fw-medium">
                                    464 000<span>/500 000</span>
                                </h4>
                                <img src={IMG.warningIcon} className="flex-shrink-0" alt="" />
                            </div>
                        </div>
                        <div className="line position-relative rounded-pill overflow-hidden">
                            <span style={{width: "92.8%"}} className="position-absolute start-0 top-0 h-100"></span>
                        </div>
                    </div>
                    <MainBtn theme="secondary" size="md" className="text-center">
                        <img src="./assets/images/plus-icon.svg" className="flex-shrink-0" alt="" />
                        <img src="./assets/images/plus-icon-dark.svg" className="flex-shrink-0 dark-icon" alt="" />
                        <span>Приобрести платежи</span>
                    </MainBtn>
                </div>
                <ul className="link-list d-flex flex-column gap-2 mb-4 w-100">
                    {linkList.map((data, index) => (
                        <li key={index} className="d-flex flex-column gap-2">
                            <Link to={data.to} className="link-item fs-6 d-flex align-items-center justify-content-between gap-4">
                                <span className="d-flex align-items-center">
                                    <img src={data.icon} alt="" className="flex-shrink-0" />
                                    {data.title}
                                </span>
                                <IconIndex50 />
                            </Link>
                            <div className={clsx(
                                'link-line w-100 flex-shrink-0',
                                index + 1 == linkList.length && 'd-none'
                            )}></div>
                        </li>
                    ))}
                </ul>
                <Link to={'#'} className="log-out fs-6 d-flex align-items-center w-100">
                    <img src={IMG.logOut} alt="" className="flex-shrink-0" />
                    <span>Выйти из аккаунта</span>
                </Link>
            </div>
        </section>
        {/* <!-- Profile end --> */}
    </div>)
}