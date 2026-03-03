import { useTheme } from "../../hooks/useTheme";
import IMG from "../../assets/images";
import Header from "../../components/Header";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";

export default function WalletExport() {
    const isDark = useTheme();
    return (<div className="wrapper flex flex-col justify-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Экспорт кошелька</Header>


        <section className="h-full flex">
            <div className="h-full pt-3 flex items-center flex-col gap-3">
                <Alert type="gray" className="py-3">
                    <img src={isDark ? IMG.warningGrayDark : IMG.warningGray} className="shrink-0" alt="" />
                    <p>Отсканируйте QR-код для импорта кошелька в мобильное приложение Trust Wallet</p>
                </Alert>
                <div className="bg-white p-[20px] rounded-4xl">
                    <img src={IMG.exportQrCode} alt="" className="w-full h-auto" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-(--grey)">Seed-фраза</label>
                    <input type="text" onChange={() => { }} className="pl-4 py-3 pr-2 bg-(--intro-btn-bg) rounded-[18px] form-inp" value="divert inject apple focus divorce strategy dignity stairs state stem guard state" />
                    <MainBtn theme="neutral" className="font-medium flex bg-[#282828] text-(--bg-main) gap-3 justify-center items-center rounded-[18px] py-3">
                        <img src={IMG.copyIcon} className="shrink-0" alt="" />
                        <span>Скопировать</span>
                    </MainBtn>
                </div>
            </div>
        </section>

    </div>)
}