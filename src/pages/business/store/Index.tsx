import IMG from "../../../assets/images";
import Header from "../../../components/Header";
import MainBtn from "../../../components/UI/MainBtn";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Alert from "../../../components/UI/Alert";

export default function BusinessStore () {
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
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={4}
                        className="swiper overflow-visible"
                    >
                        <SwiperSlide>
                            <div className="statistic-card d-flex flex-column align-items-start gap-3 p-3">
                                <p className="fs-6">Оборот за сутки</p>
                                <h3 className="fw-medium">24 491 940,54 ₽</h3>
                                <Alert type="teal" className="py-1 px-3 gap-2 fs-6 text-center rounded-pill">
                                    <span>+104 549 ₽</span>
                                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.76285 0.804169C4.15918 0.371801 4.84082 0.371801 5.23715 0.804168L8.46392 4.32427C9.05187 4.96568 8.59687 6 7.72676 6H1.27324C0.403131 6 -0.0518707 4.96568 0.536081 4.32428L3.76285 0.804169Z" fill="#1AA179" />
                                    </svg>
                                    <span>7%</span>
                                </Alert>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="statistic-card d-flex flex-column align-items-start gap-3 p-3">
                                <p className="fs-6">Средний чек</p>
                                <h3 className="fw-medium">3 291 ₽</h3>
                                <Alert type="red" className="py-1 px-3 gap-2 fs-6 text-center rounded-pill">
                                    <span>-104 549 ₽</span>
                                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.76285 5.19583C4.15918 5.6282 4.84082 5.6282 5.23715 5.19583L8.46392 1.67573C9.05187 1.03432 8.59687 0 7.72676 0H1.27324C0.403131 0 -0.0518707 1.03432 0.536081 1.67572L3.76285 5.19583Z" fill="#B02A37" />
                                    </svg>
                                    <span>7%</span>
                                </Alert>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="statistic-card d-flex flex-column align-items-start gap-3 p-3">
                                <p className="fs-6">Оборот за сутки</p>
                                <h3 className="fw-medium">24 491 940,54 ₽</h3>
                                <Alert type="teal" className="py-1 px-3 gap-2 fs-6 text-center rounded-pill">
                                    <span>+104 549 ₽</span>
                                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.76285 0.804169C4.15918 0.371801 4.84082 0.371801 5.23715 0.804168L8.46392 4.32427C9.05187 4.96568 8.59687 6 7.72676 6H1.27324C0.403131 6 -0.0518707 4.96568 0.536081 4.32428L3.76285 0.804169Z" fill="#1AA179" />
                                    </svg>
                                    <span>7%</span>
                                </Alert>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="statistic-card d-flex flex-column align-items-start gap-3 p-3">
                                <p className="fs-6">Средний чек</p>
                                <h3 className="fw-medium">3 291 ₽</h3>
                                <Alert type="red" className="py-1 px-3 gap-2 fs-6 text-center rounded-pill">
                                    <span>-104 549 ₽</span>
                                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.76285 5.19583C4.15918 5.6282 4.84082 5.6282 5.23715 5.19583L8.46392 1.67573C9.05187 1.03432 8.59687 0 7.72676 0H1.27324C0.403131 0 -0.0518707 1.03432 0.536081 1.67572L3.76285 5.19583Z" fill="#B02A37" />
                                    </svg>
                                    <span>7%</span>
                                </Alert>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="reviews w-100">
                    <div className="title fw-medium lh-1 mb-3">
                        Отзывы <span>14 429</span>
                    </div>
                    <ul className="d-flex flex-column gap-2">
                        {Array.from({length: 6}).map((_, index) => (
                            <li key={index} className="reviews-card p-3 d-flex flex-column gap-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <img src={IMG.reviewLogo1} width="34" className="flex-shrink-0 rounded-circle" alt="" />
                                        <div className="reviews-card__name fs-6 ps-2 ms-1">username</div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.08155 1.13274C9.42863 0.326779 10.5714 0.326779 10.9185 1.13274L12.7393 5.36101C12.8841 5.69719 13.201 5.92741 13.5654 5.96121L18.1494 6.38636C19.0232 6.4674 19.3763 7.55422 18.7171 8.13337L15.2584 11.1717C14.9835 11.4133 14.8624 11.7858 14.9429 12.1429L15.9551 16.6339C16.148 17.49 15.2235 18.1616 14.469 17.7136L10.5106 15.3632C10.1958 15.1763 9.80416 15.1763 9.48944 15.3632L5.531 17.7136C4.77647 18.1616 3.85197 17.49 4.04491 16.6339L5.0571 12.1429C5.13758 11.7858 5.01654 11.4133 4.74156 11.1717L1.28292 8.13337C0.623657 7.55422 0.976783 6.4674 1.85055 6.38636L6.43456 5.96121C6.79902 5.92741 7.11589 5.69719 7.26066 5.36101L9.08155 1.13274Z" fill="#FFC107" />
                                        </svg> 
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