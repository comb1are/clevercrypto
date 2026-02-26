import { useState } from "react";
import IMG from "../../assets/images";
import MainBtn from "../../components/UI/MainBtn";
import Offcanvas from "../../components/UI/Offcanvas";
import { useTheme } from "../../hooks/useTheme";

interface PaymentSelectInterface {
    id: number;
    icon: string;
    title: string;
    subtitle: string;
    text: string;
    selected: boolean;
}

export default function PayingSelect() {
    const isDark = useTheme();
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [paymentSelect, setPaymentSelect] = useState<PaymentSelectInterface[]>([
        { id: 1, icon: IMG.paymentSelectCard1, title: 'QR-код', subtitle: 'СБП', text: 'Платите, отсканировав QR-код', selected: true },
        { id: 2, icon: IMG.paymentSelectCard2, title: 'Перевод по номеру', subtitle: 'СБП', text: 'Перевод на другую карту по номеру телефона СБП', selected: false },
        { id: 3, icon: IMG.paymentSelectCard3, title: 'Прямая оплата', subtitle: '', text: 'Ввести данные карты вручную', selected: false },
        { id: 4, icon: IMG.paymentSelectCard4, title: 'Перевод на карту', subtitle: '', text: 'Перевод на другую карту', selected: false },
    ])

    const handleSelectPayment = (id: number) => {
        setPaymentSelect(prev =>
            prev.map(item => ({
                ...item,
                selected: item.id === id, // faqat shu bosilgan true
            }))
        );
    };

    return (<div className="flex flex-col min-h-screen pb-10">
        {/* <!-- Paying --> */}
        <section className="flex flex-col flex-1 mt-4">
            <div className="container px-4 flex flex-col flex-1 justify-between gap-4">
                <div className="w-full flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-3 mb-1 ">
                        <div className="flex items-center gap-2">
                            <MainBtn to="/paying" className="flex items-center justify-center bg-(--btn-secondary-bg) rounded-full w-[40px] h-[40px] p-0 transition-colors hover:bg-white/10">
                                <img src={isDark ? IMG.arrowLeftDark : IMG.arrowLeft} alt="" />
                            </MainBtn>
                            <div className="flex items-center -space-x-2 relative">
                                <img src={IMG.payLogo1} width={40} height={40} alt="" className="shrink-0 rounded-full w-[40px] h-[40px] relative z-2 border-2 border-(--bg-main)" />
                                <img src={IMG.payLogo2} width={40} height={40} alt="" className="shrink-0 rounded-full w-[40px] h-[40px] relative z-1 border-2 border-(--bg-main)" />
                            </div>
                            <h2 className="font-medium leading-none text-(--text-main) text-lg pl-1">Funpay</h2>
                        </div>
                        <p className="text-sm text-(--grey)">#451940</p>
                    </div>

                    <div className="flex flex-col gap-3 relative">
                        <label className="text-sm text-(--grey)">Выберите метод оплаты картой</label>
                        {paymentSelect.map((data, index) => (
                            <div key={index} className="flex flex-col w-full relative border border-(--border-secondary) rounded-[24px] p-5 gap-4 transition-colors">
                                <div className="flex items-center justify-between relative z-5">
                                    <img src={data.icon} width={32} height={32} alt="" className="shrink-0 w-8 h-8" />
                                    <input
                                        type="radio"
                                        name="paymentSelect"
                                        checked={data.selected}
                                        onChange={() => handleSelectPayment(data.id)}
                                        className="absolute cursor-pointer inset-0 z-10 w-full h-full opacity-0 peer"
                                    />
                                    <div className={`flex items-center justify-center shrink-0 rounded-full w-7 h-7 relative z-5 border border-(--border-secondary) transition-colors ${data.selected ? 'border-[#367DF0]' : ''}`}>
                                        {data.selected && <span className={`w-[14px] h-[14px] rounded-full block ${data.selected ? 'bg-[#367DF0]' : 'bg-(--main-link)'}`}></span>}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 relative z-5">
                                    <h3 className="font-nagel font-medium text-[20px] leading-none text-(--text-main)">
                                        {data.title} {data.subtitle && <span className="text-(--grey)">{data.subtitle}</span>}
                                    </h3>
                                    <p className="text-sm leading-[137%] tracking-[0.03em] text-(--grey)">{data.text}</p>
                                </div>
                                <div className={`absolute inset-0 rounded-[24px] pointer-events-none transition-colors`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full flex flex-col gap-3 mt-auto pt-4">
                    <MainBtn theme="neutral" className="w-full flex items-center justify-center font-medium bg-(--bg-green) text-(--bg-main) py-3 rounded-[18px]">Перейти к оплате</MainBtn>
                    <button
                        className="w-full flex items-center justify-center gap-2 bg-(--btn-third-bg) text-(--text-main) py-3 rounded-[18px]"
                        type="button"
                        onClick={() => setIsDetailModalOpen(true)}
                    >
                        <img src={isDark ? IMG.warningCircleGrayDark : IMG.warningCircleGray} alt="" className="shrink-0" />
                        <span className=" font-medium ">Детали платежа</span>
                    </button>
                </div>
            </div>
        </section>
        {/* <!-- Paying end --> */}

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
                        <img src={IMG.alertRed} width={24} height={24} alt="" className="shrink-0 w-[24px] h-[24px]" />
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