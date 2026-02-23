import IMG from "../assets/images";
import Header from "../components/Header";
import Alert from "../components/UI/Alert";
import IconWithdraw17 from "../components/Icons/IconWithdraw17";
import IconWithdraw18 from "../components/Icons/IconWithdraw18";
import IconWithdraw19 from "../components/Icons/IconWithdraw19";
import IconWithdraw20 from "../components/Icons/IconWithdraw20";
import IconWithdraw21 from "../components/Icons/IconWithdraw21";
import IconWithdraw22 from "../components/Icons/IconWithdraw22";

export default function Withdraw () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Пополнить баланс</Header>

        {/* <!-- Withdraw --> */}
        <section className="withdraw h-full d-flex">
            <div className="container h-full d-flex flex-column pt-3">
                <Alert type="warning" className="">
                    <img src={IMG.alertWarning} className="flex-shrink-0" alt="" />
                    <img src={IMG.alertWarningDark} className="flex-shrink-0 dark-img" alt="" />
                    <p>Отправляйте только монеты в сети BTC, иначе средства не поступят</p>
                </Alert>
                <div className="d-flex flex-column align-items-center text-center">
                    <h3 className="pb-2 mb-1 fw-medium">
                        Bitcoin <span>BTC</span>
                    </h3>
                    <div className="qr-code">
                        <div className="main-img">
                            <img src={IMG.qrCode} alt="" />
                        </div>
                        <p>Адрес кошелька</p>
                        <h4 className="fw-medium">bc1qmtkq5g7scre06fgwzjextzn0m2vswsz53scw</h4>
                    </div>
                </div>
                <div className="row gx-2 navigation">
                    <div className="col-4">
                        <a href="#" className="w-100 d-flex flex-column align-items-center text-center gap-2">
                            <div className="icon d-flex align-items-center justify-content-center w-100">
                                <IconWithdraw22 />
                                <IconWithdraw21 />
                            </div>
                            <span>Скопировать</span>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="#" className="w-100 d-flex flex-column align-items-center text-center gap-2">
                            <div className="icon d-flex align-items-center justify-content-center w-100">
                                <IconWithdraw20 />
                                <IconWithdraw19 />
                            </div>
                            <span>Поделиться</span>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="#" className="w-100 d-flex flex-column align-items-center text-center gap-2">
                            <div className="icon d-flex align-items-center justify-content-center w-100">
                                <IconWithdraw18 />
                                <IconWithdraw17 />
                            </div>
                            <span>Купить картой</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Withdraw end --> */}
    </div>)
}