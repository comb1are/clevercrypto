import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import MainBtn from "../components/UI/MainBtn";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import IMG from "../assets/images";

export default function Anons () {
    const swiperRef = useRef<any>(null);
    const [slideCount, setSlideCount] = useState<number>(0);
    const [activeSlide, setActiveSlide] = useState<number>(0);

    useEffect(() => {
        setSlideCount(swiperRef.current.slides.length);
    }, [swiperRef.current]);
    
    return (
        <div className="wrapper d-flex flex-column justify-content-between">
            <section className="h-full anons d-flex position-relative">
                <div className="swp-pagination position-absolute top-0 d-flex align-items-center gap-2">
                    { Array.from({ length: slideCount }).map((_, index) => (
                        <span key={index} className={`${index > activeSlide ? '' : 'active'}`}></span>
                    ))}
                </div>
                <Swiper
                    modules={[Pagination, Navigation, EffectFade]}
                    slidesPerView={1}
                    spaceBetween={0}
                    effect="fade"
                    allowTouchMove={false}
                    navigation={{
                        nextEl: ".anons .swiper .btn-neutral",
                    }}
                    className="swiper h-full"
                    onSwiper={(swiperInstance) => {
                        swiperRef.current = swiperInstance;
                    }}
                    onSlideChange={(swiper) => {
                        setActiveSlide(swiper.activeIndex);
                    }}
                >
                    <SwiperSlide className="d-flex">
                        <div className="container h-full d-flex flex-column justify-content-end position-relative">
                            <img className="w-100 start-0 mb-4" src={IMG.anonsCard1} alt="Anons 1" />
                            <img className="w-100 mb-4 dark-img" src={IMG.anonsCard1Dark} alt="Anons 1 dark" />
                            <h2 className="mb-4 pt-2">Добро пожаловать</h2>
                            <p className="mb-5">Откройте мир мгновенных криптоплатежей <br /> с 4Clever — просто и надёжно</p>
                            <MainBtn theme="neutral" className="fw-medium">Далее</MainBtn>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="d-flex">
                        <div className="container h-full d-flex flex-column justify-content-end">
                            <h2 className="mb-4 pt-2">Принимайте платежи быстро</h2>
                            <p className="mb-5">
                                Принимайте BTC, ETH и другие токены мгновенно и безопасно прямо в своём магазине
                            </p>
                            <MainBtn theme="neutral" className="fw-medium">Далее</MainBtn>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="d-flex">
                        <div className="container h-full d-flex flex-column justify-content-end">
                            <h2 className="mb-4 pt-2">Быстрая регистрация</h2>
                            <p className="mb-5">
                                Введите данные компании и настройте безопасность, чтобы мгновенно получить API-ключ и&nbsp;начать приём крипты
                            </p>
                            <MainBtn to="/home" theme="primary" className="fw-medium">Начать работу</MainBtn>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};