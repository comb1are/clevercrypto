import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import IMG from "../assets/images";

export default function PriceSwp () {
    return (<div>
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            pagination={{
                el: '.swiper-pagination',
                clickable: true,
            }}
            className="swiper h-full overflow-visible"
        >
            {Array.from({length: 5}).map((_, index) => (
                <SwiperSlide key={index}>
                    <div className="funds-card p-3">
                        <h3 className="d-flex align-items-center gap-2 mb-3 fs-6">
                            <img src={IMG.cryptoBitcoin} width="24" alt="" />
                            Bitcoin
                            <span>bc1qm...3scw</span>
                        </h3>
                        <div className="d-flex justify-content-between align-items-end">
                            <h2 className="fw-medium lh-1 d-flex align-items-end gap-2">
                                1.4919
                                <span className="fw-normal">BTC</span>
                            </h2>
                            <p className="fs-6">≈$124 492,24</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-pagination position-relative d-flex align-items-center justify-content-center gap-2 w-100"></div>
    </div>)
}