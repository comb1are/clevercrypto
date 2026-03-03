import IMG from "../assets/images";
import Header from "../components/Header";
import Alert from "../components/UI/Alert";
import IconWithdraw17 from "../components/Icons/IconWithdraw17";
import IconWithdraw18 from "../components/Icons/IconWithdraw18";
import IconWithdraw19 from "../components/Icons/IconWithdraw19";
import IconWithdraw20 from "../components/Icons/IconWithdraw20";
import IconWithdraw21 from "../components/Icons/IconWithdraw21";
import IconWithdraw22 from "../components/Icons/IconWithdraw22";
import { useTheme } from "../hooks/useTheme";

export default function Withdraw() {
    const isDark = useTheme();

    return (<div className="flex flex-col justify-between min-h-screen  ">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Пополнить баланс</Header>

        
        <section className="flex flex-1 mt-2">
            <div className="flex flex-col flex-1 pt-3 mx-auto px-2 gap-[20px] ">
                <Alert type="warning" className="flex items-center gap-3 py-3">
                    <img src={isDark ? IMG.alertWarningDark : IMG.alertWarning} className="shrink-0" alt="" />
                    <p className="text-[14px]">Отправляйте только монеты в сети BTC, иначе средства не поступят</p>
                </Alert>
                <div className="flex flex-col items-center justify-center ">
                    <h3 className="pb-2 mb-1 font-medium text-[20px] text-(--text-main) ">
                        Bitcoin <span className="text-(--grey)">BTC</span>
                    </h3>
                    <div className="qr-code bg-white py-[10px] px-[20px] rounded-4xl border-glow-blob">
                        <div className="main-img mt-2 rounded-[24px]  inline-block">
                            <img src={IMG.qrCode} alt="" />
                        </div>
                        <p className="text-(--grey) text-[14px] mt-4 mb-[2px] text-center">Адрес кошелька</p>
                        <h4 className="wrap-break-word max-w-[212px] text-center text-[#282828]">bc1qmtkq5g7scre06fgwzjextzn0m2vswsz53scw</h4>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 navigation  pb-6">
                    <div>
                        <a href="#" className="w-full flex flex-col items-center text-center gap-2">
                            <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) h-[54px] rounded-[18px]">
                                {isDark ? <IconWithdraw21 /> : <IconWithdraw22 />}
                            </div>
                            <span className="text-[14px] text-(--grey)">Скопировать</span>
                        </a>
                    </div>
                    <div>
                        <a href="#" className="w-full flex flex-col items-center text-center gap-2">
                            <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) h-[54px] rounded-[18px]">
                                {isDark ? <IconWithdraw19 /> : <IconWithdraw20 />}
                            </div>
                            <span className="text-[14px] text-(--grey)">Поделиться</span>
                        </a>
                    </div>
                    <div>
                        <a href="#" className="w-full flex flex-col items-center text-center gap-2">
                            <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) h-[54px] rounded-[18px]">
                                {isDark ? <IconWithdraw17 /> : <IconWithdraw18 />}
                            </div>
                            <span className="text-[14px] text-(--grey)">Купить картой</span>
                        </a>
                    </div>
                </div>
            </div>
        </section >
        
    </div >)
}