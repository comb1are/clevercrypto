import IMG from "../../assets/images";
import Header from "../../components/Header";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";

export default function WalletExport () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Экспорт кошелька</Header>

        {/* <!-- Export wallet --> */}
        <section className="export-wallet h-full d-flex">
            <div className="container h-full pt-3 d-flex align-items-center flex-column gap-3">
                <Alert type="gray">
                    <img src={IMG.warningGray} className="flex-shrink-0" alt="" />
                    <img src={IMG.warningGrayDark} className="flex-shrink-0 dark-icon" alt="" />
                    <p>Отсканируйте QR-код для импорта кошелька в мобильное приложение Trust Wallet</p>
                </Alert>
                <div className="qr-code">
                    <img src={IMG.exportQrCode} alt="" className="w-100 h-auto" />
                </div>
                <div className="w-100 d-flex flex-column gap-2">
                    <label>Seed-фраза</label>
                    <input type="text" onChange={() => {}} className="ps-4 py-3 pe-2 fs-6 fw-normal form-inp" value="divert inject apple focus divorce strategy dignity stairs state stem guard state" />
                    <MainBtn theme="neutral" className="fw-medium">
                        <img src={IMG.copyIcon} className="flex-shrink-0" alt="" />
                        <span>Скопировать</span>
                    </MainBtn>
                </div>
            </div>
        </section>
        {/* <!-- Export wallet end --> */}
    </div>)
}