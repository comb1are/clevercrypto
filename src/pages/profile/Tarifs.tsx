import { Link } from "react-router-dom";
import Header from "../../components/Header";
import IMG from "../../assets/images";
import MainBtn from "../../components/UI/MainBtn";

export default function ProfileTarifs () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/profile" leftLinkIcon="">Тарифы</Header>
        
        {/* <!-- Profile tarifs --> */}
        <section className="profile-tarif h-full d-flex pt-3">
            <div className="container h-full d-flex flex-column align-items-center">
                <div className="profile-tarif__head d-flex align-items-center justify-content-center rounded-pill overflow-hidden">
                    <Link to={'#'} className="active d-flex align-items-center rounded-pill">Помесячно</Link>
                    <Link to={'#'} className="d-flex align-items-center rounded-pill">
                        <span>Ежегодно</span>
                        <span className="present fw-medium rounded-pill">-40%</span>
                    </Link>
                </div>
                <div className="tarif-list d-flex flex-column w-100 gap-3">
                    <div className="tarif-card overflow-hidden">
                        <div className="tarif-card__head d-flex flex-column">
                            <div className="w-100">
                                <img src={IMG.tarifCardIcon1} alt="" className="icon flex-shrink-0" />
                                <img src={IMG.tarifCardIcon1Dark} alt="" className="icon flex-shrink-0 dark-icon" />
                                <h4 className="fw-medium my-2 py-1">Базовый</h4>
                                <div className="text">Начальный план</div>
                            </div>
                            <h3 className="fw-medium lh-1">Бесплатно</h3>
                        </div>
                        <div className="tarif-card__bottom">
                            <h4 className="fw-normal fs-6 mb-3 pb-1">План включает в себя:</h4>
                            <ul className="d-flex flex-column">
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon1_1} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>50</span> платежей</p>
                                </li>
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon1_2} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>Общая</span> поддержка</p>
                                </li>
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon1_3} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>6</span> доступных монет</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tarif-card overflow-hidden position-relative">
                        <img src="./assets/images/tarif-card-bg-1.png" alt="" className="bg-img w-100 position-absolute top-0 start-0" />
                        <div className="tarif-card__head d-flex flex-column">
                            <div className="w-100">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src={IMG.tarifCardIcon2} alt="" className="icon flex-shrink-0" />
                                    <img src={IMG.tarifCardIcon2Dark} alt="" className="icon flex-shrink-0 dark-icon" />
                                    <div className="tarif-card__alert rounded-pill fw-medium">-40%</div>
                                </div>
                                <h4 className="fw-medium my-2 py-1">Начальный</h4>
                                <div className="text">Выбор для малого и среднего бизнеса</div>
                            </div>
                            <div>
                                <div className="price fw-medium lh-1 mb-2 d-flex align-items-end gap-2">
                                    6 560 ₽ <span className="fs-6 fw-normal">/в год</span>
                                </div>
                                <del>10 500 ₽</del>
                            </div>
                            <MainBtn theme="neutral" className="fw-medium">Оформить подписку</MainBtn>
                        </div>
                        <div className="tarif-card__bottom">
                            <h4 className="fw-normal fs-6 mb-3 pb-1">План включает в себя:</h4>
                            <ul className="d-flex flex-column">
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon2_1} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>1</span> магазин доступен для создания</p>
                                </li>
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon1_1} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>10 000</span> платежей в месяц</p>
                                </li>
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon1_2} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>24/7</span> поддержка</p>
                                </li>
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon1_3} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>60+</span> доступных монет</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="best-card overflow-hidden">
                        <div className="best-card__title d-flex align-items-center justify-content-center fw-medium">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.35" d="M16.6663 11.6667C16.6663 15.3484 13.6813 18.3334 9.99967 18.3334C6.31801 18.3334 3.33301 15.3484 3.33301 11.6667C3.33301 8.69672 6.71967 4.45672 8.66551 2.26672C9.37467 1.46839 10.6247 1.46839 11.3338 2.26672C13.2797 4.45672 16.6663 8.69672 16.6663 11.6667Z" fill="black" />
                                <path d="M13.3337 13.3334C13.3337 15.1742 11.8412 16.6667 10.0003 16.6667C8.15949 16.6667 6.66699 15.1742 6.66699 13.3334C6.66699 11.8484 8.36033 9.72836 9.33283 8.63336C9.68783 8.23419 10.312 8.23419 10.667 8.63336C11.6403 9.72836 13.3337 11.8484 13.3337 13.3334Z" fill="black" />
                            </svg>
                            <span>Лучшее предложение</span>
                        </div>
                        <div className="tarif-card overflow-hidden position-relative">
                            <img src={IMG.tarifCardBg2} alt="" className="bg-img w-100 position-absolute top-0 start-0" />
                            <div className="tarif-card__head d-flex flex-column">
                                <div className="w-100">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <img src={IMG.tarifCardIcon3} alt="" className="icon flex-shrink-0" />
                                        <img src={IMG.tarifCardIcon3Dark} alt="" className="icon flex-shrink-0 dark-icon" />
                                        <div className="tarif-card__alert rounded-pill fw-medium">-40%</div>
                                    </div>
                                    <h4 className="fw-medium my-2 py-1">Продвинутый</h4>
                                    <div className="text">Выбор для крупного бизнеса</div>
                                </div>
                                <div>
                                    <div className="price fw-medium lh-1 mb-2 d-flex align-items-end gap-2">
                                        157 680 ₽ <span className="fs-6 fw-normal">/в год</span>
                                    </div>
                                    <del>262 800 ₽</del>
                                </div>
                                <MainBtn theme="neutral">Оформить подписку</MainBtn>
                            </div>
                            <div className="tarif-card__bottom">
                                <h4 className="fw-normal fs-6 mb-3 pb-1">План включает в себя:</h4>
                                <ul className="d-flex flex-column">
                                    <li className="d-flex">
                                        <img src={IMG.tarifListIcon2_1} alt="" className="flex-shrink-0" />
                                        <p className="fs-6 ps-1 ms-2"><span>3</span> магазина доступны для создания</p>
                                    </li>
                                    <li className="d-flex">
                                        <img src={IMG.tarifListIcon3_2} alt="" className="flex-shrink-0" />
                                        <p className="fs-6 ps-1 ms-2"><span>1</span> площадка доступна для создания</p>
                                    </li>
                                    <li className="d-flex">
                                        <img src={IMG.tarifListIcon3_3} alt="" className="flex-shrink-0" />
                                        <p className="fs-6 ps-1 ms-2"><span>0%</span> комиссия P2P</p>
                                    </li>
                                    <li className="d-flex">
                                        <img src={IMG.tarifListIcon1_1} alt="" className="flex-shrink-0" />
                                        <p className="fs-6 ps-1 ms-2"><span>500 000</span> платежей в месяц</p>
                                    </li>
                                    <li className="d-flex">
                                        <img src={IMG.tarifListIcon1_2} alt="" className="flex-shrink-0" />
                                        <p className="fs-6 ps-1 ms-2"><span>24/7</span> поддержка</p>
                                    </li>
                                    <li className="d-flex">
                                        <img src={IMG.tarifListIcon1_3} alt="" className="flex-shrink-0" />
                                        <p className="fs-6 ps-1 ms-2"><span>60+</span> доступных монет</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tarif-card overflow-hidden position-relative">
                        <img src={IMG.tarifCardBg3} alt="" className="bg-img w-100 position-absolute top-0 start-0" />
                        <div className="tarif-card__head d-flex flex-column">
                            <div className="w-100">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src={IMG.tarifCardIcon4} alt="" className="icon flex-shrink-0" />
                                    <img src={IMG.tarifCardIcon4Dark} alt="" className="icon flex-shrink-0 dark-icon" />
                                    <div className="tarif-card__alert rounded-pill fw-medium">-40%</div>
                                </div>
                                <h4 className="fw-medium my-2 py-1">Индивидуальный</h4>
                                <div className="text">Для тех, кому нужны индивидуальные условия</div>
                            </div>
                            <MainBtn theme="neutral" className="fw-medium">Свяжитесь с нами</MainBtn>
                        </div>
                        <div className="tarif-card__bottom">
                            <h4 className="fw-normal fs-6 mb-3 pb-1">План включает в себя:</h4>
                            <ul className="d-flex flex-column">
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon2_1} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>5</span> магазинов доступны для создания</p>
                                </li>
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon3_2} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>3</span> площадки доступны для создания</p>
                                </li>
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon3_3} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>0%</span> комиссия P2P</p>
                                </li>
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon1_1} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>∞</span> платежей в месяц</p>
                                </li>
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon1_2} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>24/7</span> поддержка</p>
                                </li>
                                <li className="d-flex">
                                    <img src={IMG.tarifListIcon1_3} alt="" className="flex-shrink-0" />
                                    <p className="fs-6 ps-1 ms-2"><span>Монеты</span> по запросу</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Profile tarifs end --> */}
    </div>)
}