import { useState } from "react";
import IMG from "../../assets/images";
import MainBtn from "../../components/UI/MainBtn";
import Offcanvas from "../../components/UI/Offcanvas";
import { useTheme } from "../../hooks/useTheme";

const PAYMENT_METHODS = [
    { id: 1, icon: IMG.paymentSelectCard1, title: 'QR-код', subtitle: 'СБП', text: 'Платите, отсканировав QR-код' },
    { id: 2, icon: IMG.paymentSelectCard2, title: 'Перевод по номеру', subtitle: 'СБП', text: 'Перевод на другую карту по номеру телефона СБП' },
    { id: 3, icon: IMG.paymentSelectCard3, title: 'Прямая оплата', subtitle: '', text: 'Ввести данные карты вручную' },
    { id: 4, icon: IMG.paymentSelectCard4, title: 'Перевод на карту', subtitle: '', text: 'Перевод на другую карту' },
];

export default function PayingSelect() {
    const isDark = useTheme();
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

    const [selectedMethodId, setSelectedMethodId] = useState<number>(PAYMENT_METHODS[0].id);

    return (
        <div className="flex flex-col min-h-screen pb-10 bg-(--bg-main)">
            <section className="flex flex-col flex-1 mt-4">
                <div className="container px-4 flex flex-col flex-1 justify-between gap-4 mx-auto">

                    <div className="w-full flex flex-col gap-6">

                        {/* Шапка с мерчантом */}
                        <div className="flex items-center justify-between pb-3">
                            <div className="flex items-center gap-3">
                                <MainBtn to="/paying" className="flex shrink-0 items-center justify-center bg-(--btn-secondary-bg) rounded-full w-10 h-10 p-0 transition-colors hover:bg-white/10">
                                    <img src={isDark ? IMG.arrowLeftDark : IMG.arrowLeft} alt="Back" />
                                </MainBtn>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center -space-x-2">
                                        <img src={IMG.payLogo1} alt="Logo 1" className="shrink-0 rounded-full w-10 h-10 relative z-10 border-2 border-(--bg-main)" />
                                        <img src={IMG.payLogo2} alt="Logo 2" className="shrink-0 rounded-full w-10 h-10 relative z-0 border-2 border-(--bg-main)" />
                                    </div>
                                    <h2 className="font-medium text-(--text-main) text-lg">Funpay</h2>
                                </div>
                            </div>
                            <p className="text-sm text-(--grey)">#451940</p>
                        </div>


                        <div className="flex flex-col gap-3">
                            <label className="text-sm text-(--grey) mb-1">Выберите метод оплаты картой</label>

                            <div className="flex flex-col gap-3">
                                {PAYMENT_METHODS.map((method) => {
                                    const isSelected = selectedMethodId === method.id;

                                    return (

                                        <label
                                            key={method.id}
                                            className="relative flex items-center justify-between border border-(--border-secondary) rounded-3xl p-5 gap-4 cursor-pointer transition-colors has-checked:border-[#367DF0] bg-(--bg-card)"
                                        >

                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value={method.id}
                                                checked={isSelected}
                                                onChange={() => setSelectedMethodId(method.id)}
                                                className="absolute inset-0 opacity-0 cursor-pointer peer"
                                            />

                                            <div className="flex items-center gap-4 flex-1">
                                                <img src={method.icon} alt={method.title} className="w-8 h-8 shrink-0" />
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="font-medium text-lg text-(--text-main)">
                                                        {method.title}
                                                        {method.subtitle && <span className="text-(--grey) ml-1 font-normal text-sm">{method.subtitle}</span>}
                                                    </h3>
                                                    <p className="text-sm text-(--grey) leading-snug">{method.text}</p>
                                                </div>
                                            </div>


                                            <div className="flex items-center justify-center shrink-0 w-7 h-7 rounded-full border-2 border-(--border-secondary) peer-checked:border-[#367DF0] transition-colors bg-transparent">
                                                <span className="w-3.5 h-3.5 rounded-full bg-[#367DF0] opacity-0 peer-checked:opacity-100 transition-opacity"></span>
                                            </div>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-3 mt-8">

                        <MainBtn
                            theme="neutral"
                            className="w-full font-medium bg-[#1AA179] text-black py-3.5 rounded-2xl text-center"
                            onClick={() => console.log('Оплачиваем методом ID:', selectedMethodId)}
                        >
                            Перейти к оплате
                        </MainBtn>
                        <button
                            className="w-full flex items-center justify-center gap-2 bg-(--btn-third-bg) text-(--text-main) py-3.5 rounded-2xl transition-colors hover:opacity-80"
                            type="button"
                            onClick={() => setIsDetailModalOpen(true)}
                        >
                            <img src={isDark ? IMG.warningCircleGrayDark : IMG.warningCircleGray} alt="Info" className="w-5 h-5 shrink-0" />
                            <span className="font-medium">Детали платежа</span>
                        </button>
                    </div>
                </div>
            </section>

            <Offcanvas className="details-modal" id="detailModal" isOpen={isDetailModalOpen} onClose={() => setIsDetailModalOpen(false)}>
                <div className="container px-4 flex flex-col gap-6 py-2">
                    <h2 className="font-medium text-(--text-main) text-xl">Детали платежа</h2>
                    <ul className="flex flex-col gap-5">
                        <li className="flex items-center justify-between">
                            <p className="text-sm text-(--grey)">Продавец</p>
                            <div className="flex items-center gap-2">
                                <img src={IMG.businessLogo2} alt="FunPay" className="rounded-full w-6 h-6" />
                                <h3 className="text-sm font-medium text-[#367DF0]">FunPay</h3>
                            </div>
                        </li>
                        <li className="flex items-center justify-between">
                            <p className="text-sm text-(--grey)">Страховой депозит</p>
                            <div className="flex items-center gap-2">
                                <img src={IMG.paymentCrypt1} alt="CLV" className="rounded-full w-6 h-6" />
                                <h3 className="text-sm font-medium text-(--text-main)">120.50 CLV</h3>
                            </div>
                        </li>
                        <li className="flex items-center justify-between">
                            <p className="text-sm text-(--grey)">Номер заказа</p>
                            <h3 className="text-sm font-medium text-(--text-main)">#124624</h3>
                        </li>
                    </ul>

                    <div className="w-full flex flex-col gap-3 mt-4">
                        <MainBtn to="#" theme="link" className="w-full flex items-center justify-center gap-2 bg-[#367DF0]/10 text-[#367DF0] py-3.5 rounded-2xl transition-colors hover:bg-[#367DF0]/20">
                            <img src={IMG.messageIcon} alt="Message" className="w-5 h-5 shrink-0" />
                            <span className="font-medium">Написать продавцу</span>
                        </MainBtn>
                        <MainBtn to="#" theme="red" className="w-full flex items-center justify-center gap-2 bg-[#DC3545]/10 text-[#DC3545] py-3.5 rounded-2xl transition-colors hover:bg-[#DC3545]/20">
                            <img src={IMG.alertRed} alt="Alert" className="w-5 h-5 shrink-0" />
                            <span className="font-medium">Открыть спор</span>
                        </MainBtn>
                        <button
                            className="w-full flex items-center justify-center bg-(--btn-secondary-bg) text-(--text-main) py-3.5 rounded-2xl transition-colors hover:bg-white/10 mt-2"
                            type="button"
                            onClick={() => setIsDetailModalOpen(false)}
                        >
                            <span className="font-medium">Закрыть</span>
                        </button>
                    </div>
                </div>
            </Offcanvas>
        </div>
    );
}