import { Link } from "react-router-dom";
import IMG from "../assets/images";

export default function BottomNav () {
    return (<section className="navs position-fixed bottom-0 start-0 w-100 bg-white">
        <div className="container">
            <div className="row gx-1">
                <div className="col-3">
                    <Link to="#" className="navs-link w-100 d-flex flex-column align-items-center text-center active">
                        <span className="icon position-relative">
                            <img src={IMG.navsIcon1} alt="" />
                            <img src={IMG.navsIcon1Dark} alt="" className="dark-icon" />
                            <img src={IMG.navsIcon1Dark} alt="" className="active-icon" />
                            <span className="dot position-absolute rounded-circle"></span>
                        </span>
                        <span>Главная</span>
                    </Link>
                </div>
                <div className="col-3">
                    <Link to="#" className="navs-link w-100 d-flex flex-column align-items-center text-center">
                        <span className="icon position-relative">
                            <img src={IMG.navsIcon2} alt="" />
                            <img src={IMG.navsIcon2Dark} alt="" className="dark-icon" />
                            <img src={IMG.navsIcon2Dark} alt="" className="active-icon" />
                            <span className="dot position-absolute rounded-circle"></span>
                        </span>
                        <span>Платежи</span>
                    </Link>
                </div>
                <div className="col-3">
                    <Link to="#" className="navs-link w-100 d-flex flex-column align-items-center text-center">
                        <span className="icon position-relative">
                            <img src={IMG.navsIcon3} alt="" />
                            <img src={IMG.navsIcon3Dark} alt="" className="dark-icon" />
                            <img src={IMG.navsIcon3Dark} alt="" className="active-icon" />
                            <span className="dot position-absolute rounded-circle"></span>
                        </span>
                        <span>Бизнес</span>
                    </Link>
                </div>
                <div className="col-3">
                    <Link to="#" className="navs-link w-100 d-flex flex-column align-items-center text-center">
                        <span className="icon position-relative">
                            <img src={IMG.navsIcon4} alt="" />
                            <img src={IMG.navsIcon4Dark} alt="" className="dark-icon" />
                            <img src={IMG.navsIcon4Dark} alt="" className="active-icon" />
                            <span className="dot position-absolute rounded-circle"></span>
                        </span>
                        <span>Профиль</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>)
}