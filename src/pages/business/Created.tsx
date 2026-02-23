import { Link } from "react-router-dom";
import Header from "../../components/Header";
import IMG from "../../assets/images";
import IconCreated23 from "../../components/Icons/IconCreated23";
import IconCreated24 from "../../components/Icons/IconCreated24";
import IconCreated25 from "../../components/Icons/IconCreated25";
import IconCreated26 from "../../components/Icons/IconCreated26";

export default function BusinessCreated () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/business" leftLinkIcon="" className="border-0"> </Header>

        {/* <!-- Account created --> */}
        <section className="account-created h-full d-flex">
            <div className="container h-full d-flex flex-column align-items-center">
                <div className="account-created__head d-flex flex-column align-items-center gap-3 text-center">
                    <img src={IMG.successCheck} width="48" alt="" />
                    <h2 className="fw-medium">Ваш счёт успешно создан!</h2>
                    <p className="fs-6">Поделитесь ссылкой или QR-кодом, чтобы принять оплату </p>
                </div>
                <div className="qr-code">
                    <img src={IMG.accountCreatedQrCode} alt="" className="w-100" />
                </div>
                <div className="w-100">
                    <input type="text" onChange={() => {}} className="px-4 fs-6 border-0 form-inp" value="https://4clever.io/pay?hash=9545b30095572b2e373d8740b71f791a" />
                    <div className="row gx-2 navigation">
                        <div className="col-6">
                            <Link to={'#'} className="w-100 d-flex flex-column align-items-center text-center gap-2">
                                <div className="icon d-flex align-items-center justify-content-center w-100">
                                    <IconCreated26 />
                                    <IconCreated25 />
                                </div>
                                <span>Скопировать</span>
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link to={'#'} className="w-100 d-flex flex-column align-items-center text-center gap-2">
                                <div className="icon d-flex align-items-center justify-content-center w-100">
                                    <IconCreated24 />
                                    <IconCreated23 />
                                </div>
                                <span>Поделиться</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Account created end --> */}
    </div>)
}