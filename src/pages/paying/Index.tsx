import { useState } from "react";
import IMG from "../../assets/images";
import MainBtn from "../../components/UI/MainBtn";
import Offcanvas from "../../components/UI/Offcanvas";
import IconIndex44 from "../../components/Icons/IconIndex44";
import { useTheme } from "../../hooks/useTheme";

export default function Paying() {
    const isDark = useTheme();
    const [payType, setPayType] = useState<number>(1);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

    return (<div className="flex flex-col min-h-screen pb-10">
        <section className="flex flex-col flex-1 mt-4">
            <div className="container px-4 flex flex-col flex-1 justify-between gap-3">
                <div className="w-full flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-3 mb-1">
                        <div className="flex items-center">
                            <div className="flex items-center -space-x-2 relative">
                                <img src={IMG.payLogo1} width={40} height={40} alt="" className="shrink-0 rounded-full w-10 h-10 relative z-2 border-2 border-(--bg-main)" />
                                <img src={IMG.payLogo2} width={40} height={40} alt="" className="shrink-0 rounded-full w-10 h-10 relative z-1 border-2 border-(--bg-main)" />
                            </div>
                            <h2 className="font-medium leading-none text-(--text-main) text-lg pl-2 ml-1">Funpay</h2>
                        </div>
                        <p className="text-sm text-(--grey)">#451940</p>
                    </div>

                    <div className="flex flex-col gap-3 relative">
                        <label className="text-sm text-(--grey)">Выберите способ оплаты</label>

                        <label className="flex flex-col w-full relative border border-(--border-secondary) rounded-[24px] p-5 gap-4 transition-colors cursor-pointer has-checked:border-[#367DF0]">
                            <div className="flex items-center justify-between relative z-5">
                                <img src={IMG.payCardLogo1} alt="" className="h-8" />
                                <input
                                    type="radio"
                                    name="payType"
                                    checked={payType === 1}
                                    onChange={() => setPayType(1)}
                                    className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer peer"
                                />
                                <div className="flex items-center justify-center shrink-0 rounded-full w-7 h-7 relative z-5 border border-(--border-secondary) transition-colors peer-checked:border-[#367DF0]">
                                    <span className="w-3.5 h-3.5 rounded-full block bg-[#367DF0] opacity-0 peer-checked:opacity-100 transition-opacity"></span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 relative z-5">
                                <h3 className="font-nagel font-medium text-xl leading-none text-(--text-main)">Оплата криптовалютой</h3>
                                <p className="text-sm text-(--grey)">Оплатита любой криптовалютой</p>
                            </div>
                        </label>

                        <label className="flex flex-col w-full relative border border-(--border-secondary) rounded-[24px] p-5 gap-4 transition-colors cursor-pointer has-checked:border-[#367DF0]">
                            <div className="flex items-center justify-between relative z-5">
                                <div className="flex items-center gap-2">
                                    <img src={IMG.bankCard1} alt="" className="h-5" />
                                    <img src={IMG.bankCard2} alt="" className="h-5" />
                                    <img src={IMG.bankCard3} alt="" className="h-5" />
                                    <img src={IMG.bankCard4} alt="" className="h-5 shrink-0" />
                                </div>
                                <input
                                    type="radio"
                                    name="payType"
                                    checked={payType === 2}
                                    onChange={() => setPayType(2)}
                                    className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer peer"
                                />
                                <div className="flex items-center justify-center shrink-0 rounded-full w-7 h-7 relative z-5 border border-(--border-secondary) transition-colors peer-checked:border-[#367DF0]">
                                    <span className="w-3.5 h-3.5 rounded-full block bg-[#367DF0] opacity-0 peer-checked:opacity-100 transition-opacity"></span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 relative z-5">
                                <h3 className="font-nagel font-medium text-xl leading-none text-(--text-main)">Оплата картой</h3>
                                <p className="text-sm text-(--grey)">Оплата банковской картой</p>
                            </div>
                        </label>

                        <MainBtn className="w-full flex items-center justify-center gap-2 bg-(--btn-secondary-bg) text-(--text-main) py-[14px] rounded-[18px]">
                            <span className="font-medium tracking-[0.04em]">Другие способы оплаты</span>
                            <IconIndex44 />
                        </MainBtn>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-3 mt-auto pt-4">
                    <MainBtn
                        className="w-full flex items-center justify-center font-medium bg-(--bg-green) text-(--bg-main) py-3 rounded-[18px]"
                        onClick={() => console.log('Продолжить с типом:', payType)}
                    >Продолжить</MainBtn>
                    <button
                        className="w-full flex items-center justify-center gap-2 bg-(--btn-third-bg) text-(--text-main) py-3 rounded-[18px]"
                        type="button"
                        onClick={() => setIsDetailModalOpen(true)}
                    >
                        <img src={isDark ? IMG.warningCircleGrayDark : IMG.warningCircleGray} alt="" className="shrink-0 w-6 h-6" />
                        <span className="font-medium">Детали платежа</span>
                    </button>
                </div>
            </div>
        </section>

        <Offcanvas className="details-modal" id="detailModal" isOpen={isDetailModalOpen} onClose={() => setIsDetailModalOpen(false)}>
            <div className="container px-4 flex flex-col gap-4">
                <h2 className="font-medium leading-none text-(--text-main) text-lg tracking-[0.04em]">Детали платежа</h2>
                <ul className="flex flex-col gap-4">
                    <li className="flex items-center justify-between gap-3">
                        <p className="text-sm text-(--grey)">Продавец</p>
                        <div className="flex items-center gap-2">
                            <img src={IMG.businessLogo2} width={22} height={22} alt="" className="rounded-full w-[22px] h-[22px]" />
                            <h3 className="text-sm text-[#367DF0]">FunPay</h3>
                        </div>
                    </li>
                    <li className="flex items-center justify-between gap-3">
                        <p className="text-sm text-(--grey)">Страховой депозит</p>
                        <div className="flex items-center gap-2">
                            <img src={IMG.paymentCrypt1} width={22} height={22} alt="" className="rounded-full w-[22px] h-[22px]" />
                            <h3 className="text-sm text-(--text-main)">120.50 CLV</h3>
                        </div>
                    </li>
                    <li className="flex items-center justify-between gap-3">
                        <p className="text-sm text-(--grey)">Номер заказа</p>
                        <h3 className="text-sm shrink-0 text-(--text-main)">#124624</h3>
                    </li>
                </ul>
                <div className="w-full flex flex-col gap-3 mt-2">
                    <MainBtn to="#" theme="link" className="w-full flex items-center justify-center gap-2 bg-(--blue-bg) text-[#367DF0] py-[14px] rounded-[18px] transition-colors hover:bg-[#367DF0]/20">
                        <img src={IMG.messageIcon} alt="" className="shrink-0" />
                        <span className="font-medium tracking-[0.04em]">Написать продавцу</span>
                    </MainBtn>
                    <MainBtn to="#" theme="red" className="w-full flex items-center justify-center gap-2 bg-[#DC35451A] text-[#DC3545] py-[14px] rounded-[18px] transition-colors hover:bg-[#DC3545]/20">
                        <img src={IMG.alertRed} width={24} height={24} alt="" className="shrink-0 w-6 h-6" />
                        <span className="font-medium tracking-[0.04em]">Открыть спор</span>
                    </MainBtn>
                    <button
                        className="w-full flex items-center justify-center text-center bg-(--btn-secondary-bg) text-(--text-main) py-[14px] rounded-[18px] transition-colors hover:bg-white/10"
                        type="button"
                        onClick={() => setIsDetailModalOpen(false)}
                    >
                        <span className="font-medium tracking-[0.04em]">Закрыть</span>
                    </button>
                </div>
            </div>
        </Offcanvas>
    </div>)
}