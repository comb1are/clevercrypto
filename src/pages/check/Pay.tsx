import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import IMG from "../../assets/images";
import Header from "../../components/Header";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";

const MOCK_PLANS = [
    { id: 1, checks: 5, oldPrice: '140 ₽', currentPrice: '100 ₽' },
    { id: 2, checks: 10, oldPrice: '250 ₽', currentPrice: '180 ₽' },
    { id: 3, checks: 20, oldPrice: '450 ₽', currentPrice: '320 ₽' },
    { id: 4, checks: 50, oldPrice: '1000 ₽', currentPrice: '700 ₽' },
];

export default function Pay() {
    const isDark = useTheme();

    const [selectedPlanId, setSelectedPlanId] = useState<number>(MOCK_PLANS[0].id);

    const handlePayment = () => {
        const selectedPlan = MOCK_PLANS.find(p => p.id === selectedPlanId);
        console.log("Отправляем на бэкенд запрос на покупку:", selectedPlan);

    };

    return (
        <div className="wrapper flex min-h-screen flex-col justify-between bg-(--bg-main)">
            <Header type="inner" leftLink="/home" leftLinkIcon="">Пополнить проверки</Header>

            <section className="check-aml flex flex-1 flex-col pb-6 px-4">
                <div className="container mx-auto flex flex-1 flex-col justify-between pt-4 gap-4">

                    <div className="flex flex-col gap-4">
                        <Alert type="gray" className="flex items-center gap-3">
                            <img
                                src={isDark ? IMG.warningGrayDark : IMG.warningGray}
                                className="shrink-0 w-6 h-6"
                                alt="Warning"
                            />
                            <p className="text-sm text-(--text-main)">Выберите кошелек для проверки AML</p>
                        </Alert>

                        <ul className="flex flex-col gap-3">
                            {MOCK_PLANS.map((plan) => {
                                const isSelected = selectedPlanId === plan.id;
                                return (
                                    <li
                                        key={plan.id}
                                        className={`relative flex items-center justify-between overflow-hidden rounded-2xl bg-(--bg-card) p-4 border-1 transition-colors border-(--border-secondary)`}
                                    >
                                        <input
                                            type="radio"
                                            name="pay"
                                            value={plan.id}
                                            checked={selectedPlanId === plan.id}
                                            onChange={() => setSelectedPlanId(plan.id)}
                                            className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0 peer"
                                        />

                                        <div className="flex items-start gap-3">
                                            <img
                                                src={isDark ? IMG.payDocDark : IMG.payDoc}
                                                className="shrink-0 w-8 h-8"
                                                alt="Document"
                                            />
                                            <div>
                                                <h3 className="flex items-end gap-1 font-medium leading-none text-xl text-(--text-main)">
                                                    {plan.checks}
                                                    <span className="text-sm font-normal text-(--grey)">проверок</span>
                                                </h3>
                                                <div className="flex items-center gap-2 text-sm font-medium mt-1">
                                                    <del className="font-normal text-(--grey)">{plan.oldPrice}</del>
                                                    <span className="text-[#1AA179]">{plan.currentPrice}</span>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-1 transition-all border-(--border-secondary)`}>
                                            <span className={`h-3 w-3 rounded-full bg-[#367DF0] transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0'}`}></span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    
                    <MainBtn onClick={handlePayment} className="w-full font-medium bg-(--bg-green) text-[#282828] py-4 rounded-[18px]">
                        Выбрать и оплатить
                    </MainBtn>
                </div>
            </section>
        </div>
    );
}