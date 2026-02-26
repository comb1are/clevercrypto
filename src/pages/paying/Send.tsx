import { useState } from "react";
import IMG from "../../assets/images";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";
import Offcanvas from "../../components/UI/Offcanvas";
import { useTheme } from "../../hooks/useTheme";

export default function PayingSend() {
    const isDark = useTheme();
    const [payingType, setPayingType] = useState<1 | 2>(1);
    const [isPayingModalOpen, setIsPayingModalOpen] = useState(false);

    return (<div className="flex flex-col min-h-screen pb-10">
        {/* <!-- Paying --> */}
        <section className="flex flex-col flex-1 mt-4">
            <div className="container px-4 flex flex-col flex-1 justify-between gap-4">
                <div className="w-full flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-3 mb-1 border-b border-(--border-main)">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center -space-x-2 relative">
                                <img src={IMG.payLogo1} width={40} height={40} alt="" className="shrink-0 rounded-full w-[40px] h-[40px] relative z-2 border-2 border-(--bg-main)" />
                                <img src={IMG.payLogo2} width={40} height={40} alt="" className="shrink-0 rounded-full w-[40px] h-[40px] relative z-1 border-2 border-(--bg-main)" />
                            </div>
                            <h2 className="font-medium leading-none text-(--text-main) text-lg pl-1">Funpay</h2>
                        </div>
                        <p className="text-sm text-(--grey)">#451940</p>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <h1 className="font-medium font-nagel text-[32px] leading-[87%] text-(--text-main)">Отправьте средства</h1>
                        <p className="text-(--grey) text-sm leading-[137%] tracking-[0.03em]">Отправьте средства по реквизитам ниже. Переводите точную сумму для зачисления платежа!</p>

                        <div className="w-full bg-(--bg-card) rounded-[20px] p-4 flex flex-col gap-2">
                            <p className="text-sm text-(--grey) leading-none">Страна получателя</p>
                            <div className="flex items-center gap-2">
                                <img src={IMG.flagRu} width={24} height={24} alt="" className="shrink-0 rounded-full object-cover w-6 h-6" />
                                <h3 className="font-nagel text-[20px] leading-none text-(--text-main)">Россия</h3>
                            </div>
                        </div>

                        <div className="w-full bg-(--bg-card) rounded-[20px] p-4 flex flex-col gap-2">
                            <p className="text-sm text-(--grey) leading-none">Банк получателя</p>
                            <div className="flex items-center gap-2">
                                <img src={IMG.alfaBank} width={24} height={24} alt="" className="shrink-0 rounded-full object-cover w-6 h-6" />
                                <h3 className="font-nagel text-[20px] leading-none text-(--text-main)">Альфа-банк</h3>
                            </div>
                        </div>

                        <div className="w-full bg-(--bg-card) rounded-[20px] p-4 flex items-center justify-between">
                            <div className="w-full flex flex-col gap-2">
                                <p className="text-sm text-(--grey) leading-none">Номер карты</p>
                                <h3 className="font-nagel text-[20px] leading-none text-(--text-main)">2214 8539 8729 5735</h3>
                            </div>
                            <button className="shrink-0 flex items-center justify-center p-1 transition-colors hover:bg-white/10 rounded-lg">
                                <img src={IMG.copyIconGray} alt="" className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="w-full bg-(--bg-card) rounded-[20px] p-4 flex items-center justify-between">
                            <div className="w-full flex flex-col gap-2">
                                <p className="text-sm text-(--grey) leading-none">Сумма к оплате</p>
                                <h3 className="font-nagel text-[20px] leading-none text-(--text-main)">2 410 Руб</h3>
                            </div>
                            <button className="shrink-0 flex items-center justify-center p-1 transition-colors hover:bg-white/10 rounded-lg">
                                <img src={IMG.copyIconGray} alt="" className="w-6 h-6" />
                            </button>
                        </div>

                        <Alert type="warning">
                            <img src={isDark ? IMG.alertWarningDark : IMG.alertWarning} alt="" className="shrink-0 w-6 h-6" />
                            <p className="text-sm text-(--text-main)">Не закрывайте страницу до завершения оплаты</p>
                        </Alert>

                        <MainBtn className="w-full flex items-center justify-center gap-2 bg-(--btn-secondary-bg) text-(--text-main) py-[14px] rounded-[18px]">
                            <img src={IMG.supportLogo} width={24} alt="" className="shrink-0 w-6 h-6" />
                            <span className="font-medium tracking-[0.04em] text-sm">Проблемы с оплатой?</span>
                        </MainBtn>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-3 mt-auto pt-4">
                    <MainBtn className="w-full flex items-center justify-center gap-2 bg-(--btn-third-bg) text-(--text-main) py-3 rounded-[18px]">
                        <img src={isDark ? IMG.clockIconDark : IMG.clockIcon} alt="" className="shrink-0 w-[22px] h-[22px]" />
                        <span className="text-sm font-medium tracking-[0.04em]">Счёт действителен: 00:58:09</span>
                    </MainBtn>
                    <button
                        className="w-full flex items-center justify-center gap-2 bg-(--btn-secondary-bg) text-(--text-main) py-3 rounded-[18px]"
                        type="button"
                        onClick={() => setIsPayingModalOpen(true)}
                    >
                        <img src={IMG.shareIcon2} width={24} alt="" className="shrink-0 w-6 h-6" />
                        <span className="text-sm font-medium tracking-[0.04em]">Поделиться</span>
                    </button>
                </div>
            </div>
        </section>
        {/* <!-- Paying end --> */}

        <Offcanvas className="paying-modal" id="payingModal" isOpen={isPayingModalOpen} onClose={() => setIsPayingModalOpen(false)}>
            <div className="container px-4 flex flex-col gap-4">
                <div className="flex flex-col items-center border-b border-(--border-main) pb-6 mb-2">
                    <div className="flex items-center justify-center">
                        <img src={IMG.cryptoBitcoin} width={24} height={24} alt="" className="shrink-0 w-6 h-6" />
                        <h2 className="ml-2 font-medium text-sm text-(--text-main)">Bitcoin <span className="text-(--grey)">BTC</span></h2>
                    </div>

                    <div className="flex flex-col items-center text-center w-full py-8">
                        <img src={IMG.payingQrCode} alt="" className="w-full max-w-[200px] rounded-[12px] mb-6 object-cover aspect-square" />
                        <p className="text-sm text-(--grey) mb-3">Адрес кошелька</p>
                        <h4 className="font-medium text-[20px] leading-none text-(--text-main) break-all px-4">bc1qmtkq5g7scre06fgwzjextzn0m2vswsz53scw</h4>
                    </div>

                    <ul className="flex w-full bg-(--btn-secondary-bg) p-1 rounded-full mb-6 relative">
                        <li className={`w-1/2 relative text-sm text-center py-2.5 rounded-full transition-all cursor-pointer ${payingType === 1 ? 'bg-(--bg-main) text-(--text-main) shadow-[0_4px_14px_0_rgba(7,10,21,0.04)]' : 'text-(--grey)'}`}>
                            <input
                                type="radio"
                                name="payingModalType"
                                checked={payingType === 1}
                                onChange={() => { setPayingType(1) }}
                                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            Без суммы
                        </li>
                        <li className={`w-1/2 relative text-sm text-center py-2.5 rounded-full transition-all cursor-pointer ${payingType === 2 ? 'bg-(--bg-main) text-(--text-main) shadow-[0_4px_14px_0_rgba(7,10,21,0.04)]' : 'text-(--grey)'}`}>
                            <input
                                type="radio"
                                name="payingModalType"
                                checked={payingType === 2}
                                onChange={() => { setPayingType(2) }}
                                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            С суммой
                        </li>
                    </ul>

                    <Alert type="warning" className="w-full">
                        <img src={isDark ? IMG.alertWarningDark : IMG.alertWarning} alt="" className="shrink-0 w-6 h-6" />
                        <p className="text-sm text-(--text-main) text-left">Отправляйте только монеты в сети BTC, иначе средства не поступят</p>
                    </Alert>
                </div>

                <div className="w-full flex flex-col gap-3">
                    <MainBtn className="w-full flex items-center justify-center font-medium gap-2 bg-(--text-main) text-(--bg-main) py-[14px] rounded-[18px]">
                        <img src={IMG.shareLink} alt="" className="shrink-0 w-6 h-6" />
                        <span className="font-medium tracking-[0.04em]">Поделиться</span>
                    </MainBtn>
                    <button
                        className="w-full flex items-center justify-center text-center bg-(--btn-secondary-bg) text-(--text-main) py-[14px] rounded-[18px] transition-colors hover:bg-white/10"
                        type="button"
                        onClick={() => setIsPayingModalOpen(false)}
                    >
                        <span className="font-medium tracking-[0.04em]">Закрыть</span>
                    </button>
                </div>
            </div>
        </Offcanvas>
    </div>)
}