import { useTheme } from "../../hooks/useTheme";
import IMG from "../../assets/images";
import Header from "../../components/Header";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";

export default function WalletExport() {
    const isDark = useTheme();
    return (<div className="wrapper flex flex-col justify-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Экспорт кошелька</Header>

        {/* <!-- Export wallet --> */}
        <section className="export-wallet h-full flex">
            <div className="container h-full pt-3 flex items-center flex-col gap-3">
                <Alert type="gray">
                    <img src={isDark ? IMG.warningGrayDark : IMG.warningGray} className="shrink-0" alt="" />
                    <p>Отсканируйте QR-код для импорта кошелька в мобильное приложение Trust Wallet</p>
                </Alert>
                <div className="qr-code">
                    <img src={IMG.exportQrCode} alt="" className="w-full h-auto" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label>Seed-фраза</label>
                    <input type="text" onChange={() => { }} className="pl-4 py-3 pr-2 text-[15px] font-normal form-inp" value="divert inject apple focus divorce strategy dignity stairs state stem guard state" />
                    <MainBtn theme="neutral" className="font-medium">
                        <img src={IMG.copyIcon} className="shrink-0" alt="" />
                        <span>Скопировать</span>
                    </MainBtn>
                </div>
            </div>
        </section>
        {/* <!-- Export wallet end --> */}
    </div>)
}