import { useState } from "react";
import IMG from "../../assets/images";
import Header from "../../components/Header";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";
import { useTheme } from "../../hooks/useTheme";

interface PayListInterface {
    id: number;
    amount: string;
    price: string;
    discount: string;
}

const PAY_LIST: PayListInterface[] = [
    { id: 1, amount: '2 000', price: '100 ₽', discount: '140 ₽' },
    { id: 2, amount: '20 000', price: '1000 ₽', discount: '1 440 ₽' },
    { id: 3, amount: '50 000', price: '2 400 ₽', discount: '3 000 ₽' },
    { id: 4, amount: '100 000', price: '4 800 ₽', discount: '5 400 ₽' },
];

export default function ProfilePayment() {
    const isDark = useTheme();


    const [selectedId, setSelectedId] = useState<number>(PAY_LIST[0].id);

    return (
        <div className="wrapper flex flex-col justify-between p-0 h-screen overflow-y-auto pb-[100px]">
            <Header type="inner" leftLink="/profile" leftLinkIcon="">Приобрести платежи</Header>

            <section className="h-full flex flex-col pt-3 px-4">
                <div className="container h-full flex flex-col justify-between gap-2 mx-auto">
                    <div className="flex flex-col gap-3">
                        <Alert type="gray" className="py-3 gap-4">
                            <img src={isDark ? IMG.warningGrayDark : IMG.warningGray} className="shrink-0" alt="" />
                            <p className="text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Выберите количество платежей</p>
                        </Alert>

                        <ul className="flex flex-col gap-3">
                            {PAY_LIST.map((data) => {

                                const isSelected = selectedId === data.id;

                                return (

                                    <li
                                        key={data.id}
                                        className={`relative overflow-hidden flex items-start justify-between bg-(--bg-card) border rounded-[24px] p-5 select-none z-10 transition-colors ${isSelected ? "border-[#367DF0]" : "border-(--header-border)"}`}
                                    >
                                        <input
                                            type="radio"
                                            checked={isSelected}

                                            onChange={() => setSelectedId(data.id)}
                                            name="pay"
                                            className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer z-20 peer"
                                        />
                                        <div className="flex items-start gap-3">
                                            <img src={isDark ? IMG.payDoc2Dark : IMG.payDoc2} className="shrink-0" alt="" />
                                            <div>
                                                <h3 className="flex items-end gap-2 font-nagel text-[24px] text-(--title-color) mb-[2px] leading-none">
                                                    {data.amount}
                                                    <span className="text-base leading-[1.37] tracking-[0.03em] text-(--grey)">платежей</span>
                                                </h3>
                                                <div className="flex items-center gap-2 text-base font-medium leading-[1.37] tracking-[0.03em] text-(--title-color)">
                                                    <del className="text-(--grey)">{data.discount}</del>
                                                    <span>{data.price}</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div className={`flex items-center justify-center shrink-0 w-[28px] h-[28px] border rounded-full transition-colors ${isSelected ? "border-[#367DF0]" : "border-[#303030]"}`}>
                                            <span className={`w-[14px] h-[14px] rounded-full transition-colors ${isSelected ? "bg-[#367DF0]" : "bg-transparent"}`}></span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>


                    <MainBtn
                        theme="primary"
                        className="font-medium mt-auto mb-4 py-[14px] rounded-[18px] bg-(--text-main) text-(--bg-main) tracking-[4%]"
                        onClick={() => console.log('Оплачиваем тариф с ID:', selectedId)}
                    >
                        Выбрать и оплатить
                    </MainBtn>
                </div>
            </section>
        </div>
    );
}