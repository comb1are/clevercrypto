import { useState } from "react";
import Header from "../../components/Header";
import IMG from "../../assets/images";
import clsx from "clsx";
import Offcanvas from "../../components/UI/Offcanvas";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";
import { useGetBusinessPaymentsQuery } from "../../store/api/businessApi";
import type { BusinessPayment } from "../../store/models/business.model";
import DotsLoader from "../../components/DotsLoader";

const NAV_TABS = [
    { id: 'all', label: 'Все' },
    { id: 'approved', label: 'Подтвержденные' },
    { id: 'cancelled', label: 'Отмененные' },
];


const PAYMENT_ICONS: Record<string, string> = {
    'Ожидает оплаты': IMG.paymentCardIcon1,
    'Подтверждено': IMG.paymentCardIcon2,
    'Отменено': IMG.paymentCardIcon3,
    'Создан': IMG.paymentCardIcon4,
};

export default function BusinessPayments() {

    const [activeTab, setActiveTab] = useState(NAV_TABS[0].id);
    const [selectedPayment, setSelectedPayment] = useState<BusinessPayment | null>(null);

    const { data: payments, isLoading, isError } = useGetBusinessPaymentsQuery();
    const paymentList = payments ?? [];

    const filteredPayments = paymentList.filter((payment) => {
        if (activeTab === 'all') return true;
        if (activeTab === 'approved') return payment.type === 'success';
        if (activeTab === 'cancelled') return payment.warning === true;
        return true;
    });

    return (
        <div className="flex flex-col min-h-screen pb-[100px]">
            <Header type="inner" leftLink="/business">Обзор площадки</Header>

            <section className="relative ">
                <div className="container px-4">
                    
                    <div className="-mx-4 flex flex-col mb-4 border-b border-(--border-secondary)">
                        <ul className="flex items-center gap-2 py-2 px-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {NAV_TABS.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <li key={tab.id} className="shrink-0">
                                        <button
                                            
                                            onClick={() => setActiveTab(tab.id)}
                                            className={clsx(
                                                "text-(--text-main) flex items-center gap-1.5 px-4 py-[7px] rounded-full transition-colors",
                                                isActive ? "bg-(--btn-third-bg)" : ""
                                            )}
                                        >
                                            {tab.label}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {isLoading && (
                        <div className="flex items-center justify-center py-10">
                            <DotsLoader />
                        </div>
                    )}

                    {isError && (
                        <div className="text-center py-10 text-[#FF4D4F]">Ошибка загрузки данных</div>
                    )}

                    {!isLoading && !isError && (
                        <div className="flex flex-col gap-4">
                            {filteredPayments.map((data) => (
                                <div
                                    key={data.id}
                                    className="flex items-center justify-between gap-3 p-3 rounded-2xl cursor-pointer transition-colors hover:bg-(--btn-secondary-bg)"
                                    onClick={() => setSelectedPayment(data)}
                                >
                                    <div className="flex items-center gap-3">
                                        <img src={PAYMENT_ICONS[data.title] ?? IMG.paymentCardIcon1} className="shrink-0 rounded-full w-10 h-10 object-cover" alt="" />
                                        <div className="flex flex-col">
                                            <h3 className="font-medium text-base text-(--text-main) flex items-center gap-2">
                                                {data.title}
                                                {data.warning && (
                                                    <img src={IMG.alertRed} width="16" alt="Warning" className="shrink-0" />
                                                )}
                                            </h3>
                                            <p className="text-sm text-(--grey)">{data.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end text-right">
                                        <b className={clsx("font-medium text-base", data.type === 'success' ? "text-[#1AA179]" : "text-(--text-main)")}>
                                            {data.price}
                                        </b>
                                        <span className="text-sm text-(--grey)">#{data.id}</span>
                                    </div>
                                </div>
                            ))}

                            {filteredPayments.length === 0 && (
                                <div className="text-center py-10 text-(--grey)">
                                    Платежей не найдено
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <Offcanvas
                className="payment-modal"
                id="showPayment"
                isOpen={!!selectedPayment}
                onClose={() => setSelectedPayment(null)}
            >
                {selectedPayment && (
                    <div className="container px-4 flex flex-col gap-4">
                        <h2 className="font-medium font-nagel text-2xl leading-none text-(--text-main)">
                            Платёж #{selectedPayment.id}
                        </h2>

                        <div className="w-full flex flex-col gap-3">
                            {selectedPayment.warning && (
                                <Alert type="red" className="flex items-center gap-3 rounded-[14px] p-3">
                                    <img src={IMG.alertCircle} width="20" alt="" className="shrink-0" />
                                    <p className="text-sm text-[#FF4D4F]">Не хватило промежуточной комиссии для перевода</p>
                                </Alert>
                            )}

                            <div className="flex flex-col gap-2">
                                <div className="w-full bg-(--btn-secondary-bg) p-4 rounded-[18px]">
                                    <p className="text-sm text-(--grey) mb-1">Номер заказа</p>
                                    <h4 className="font-medium text-base text-(--text-main) break-all">f9e65ef73f9a90e1d9d3ba2728daf0ba</h4>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-(--btn-secondary-bg) p-4 rounded-[18px] flex flex-col">
                                        <p className="text-sm text-(--grey) mb-1">ID платежа</p>
                                        <h4 className="text-base font-medium text-(--text-main)">#{selectedPayment.id}</h4>
                                    </div>
                                    <div className="bg-(--btn-secondary-bg) p-4 rounded-[18px] flex flex-col">
                                        <p className="text-sm text-(--grey) mb-1">Статус</p>
                                        <h4 className={clsx("text-base font-medium flex items-center gap-2", selectedPayment.type === 'success' ? "text-[#1AA179]" : "text-(--text-main)")}>
                                            <span>{selectedPayment.title}</span>
                                        </h4>
                                    </div>

                                    <div className="bg-(--btn-secondary-bg) p-4 rounded-[18px] flex flex-col">
                                        <p className="text-sm text-(--grey) mb-1">Дата создания</p>
                                        <h4 className="text-base font-medium text-(--text-main)">{selectedPayment.date}</h4>
                                    </div>
                                    <div className="bg-(--btn-secondary-bg) p-4 rounded-[18px] flex flex-col">
                                        <p className="text-sm text-(--grey) mb-1">Сумма</p>
                                        <h4 className="text-base font-medium text-(--text-main)">
                                            {selectedPayment.price} <span className="text-(--grey) font-normal">BEP-20</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-2 mt-4">
                            <MainBtn className="w-full flex items-center justify-center gap-2 py-[14px] bg-(--text-main) text-(--bg-main) rounded-[18px] font-medium transition-colors hover:bg-white/80">
                                <img src={IMG.paymentModalBtnIcon1} alt="" className="shrink-0" />
                                <span>Перевести средства</span>
                            </MainBtn>
                            <MainBtn className="w-full flex items-center justify-center gap-2 py-[14px] bg-(--btn-secondary-bg) text-(--text-main) rounded-[18px] font-medium transition-colors hover:bg-white/10">
                                <img src={IMG.paymentModalBtnIcon2} alt="" className="shrink-0" />
                                <span>Отправить callback</span>
                            </MainBtn>
                            <button
                                className="w-full flex items-center justify-center py-3 mt-2 text-(--text-main) hover:text-(--grey) transition-colors font-medium"
                                type="button"
                                onClick={() => setSelectedPayment(null)}
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                )}
            </Offcanvas>
        </div>
    );
}