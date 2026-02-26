import { useTheme } from "../../hooks/useTheme";
import Header from "../../components/Header";

import Alert from "../../components/UI/Alert";
import { useState } from "react";
import { useSliderObserver } from "../../hooks/useSliderObserver";
import IMG from "../../assets/images";
import clsx from "clsx";
import { Link } from "react-router-dom";
import IconIndex52 from "../../components/Icons/IconIndex52";
import IconIndex53 from "../../components/Icons/IconIndex53";
import IconIndex54 from "../../components/Icons/IconIndex54";
import IconIndex55 from "../../components/Icons/IconIndex55";
import IconIndex56 from "../../components/Icons/IconIndex56";
import IconIndex57 from "../../components/Icons/IconIndex57";
import IconIndex58 from "../../components/Icons/IconIndex58";
import IconIndex59 from "../../components/Icons/IconIndex59";
import IconIndex60 from "../../components/Icons/IconIndex60";
import IconIndex61 from "../../components/Icons/IconIndex61";

type Transaction = {
    id: number;
    title: string;
    subtitle: string;
    amount: string;
    usd: string;
    type: TransactionType;
};

// Задаем жесткие и понятные типы
type TransactionType = 'deposit' | 'transfer' | 'withdrawal';

export default function Wallet() {
    const isDark = useTheme();
    const { activeIndex, sliderRef, cardsRef } = useSliderObserver();
    const [transactionList] = useState<Transaction[]>([
        {
            id: 1,
            title: "Bitcoin",
            subtitle: "Пополнение",
            amount: "+1.4919 BTC",
            usd: "$181,319.56",
            type: 'deposit'
        },
        {
            id: 2,
            title: "Bitcoin",
            subtitle: "Перевод",
            amount: "-0.534 BTC",
            usd: "$1,928.40",
            type: 'transfer'
        },
        {
            id: 3,
            title: "Bitcoin",
            subtitle: "Вывод",
            amount: "-0.534 BTC",
            usd: "$1,928.40",
            type: 'withdrawal'
        },
        {
            id: 4,
            title: "Bitcoin",
            subtitle: "Пополнение",
            amount: "+1.4919 BTC",
            usd: "$181,319.56",
            type: 'deposit'
        },
        {
            id: 5,
            title: "Bitcoin",
            subtitle: "Перевод",
            amount: "-0.534 BTC",
            usd: "$1,928.40",
            type: 'transfer'
        },
        {
            id: 6,
            title: "Bitcoin",
            subtitle: "Вывод",
            amount: "-0.534 BTC",
            usd: "$1,928.40",
            type: 'withdrawal'
        },
        {
            id: 7,
            title: "Bitcoin",
            subtitle: "Пополнение",
            amount: "+1.4919 BTC",
            usd: "$181,319.56",
            type: 'deposit'
        },
        {
            id: 8,
            title: "Bitcoin",
            subtitle: "Перевод",
            amount: "-0.534 BTC",
            usd: "$1,928.40",
            type: 'transfer'
        },
        {
            id: 9,
            title: "Bitcoin",
            subtitle: "Вывод",
            amount: "-0.534 BTC",
            usd: "$1,928.40",
            type: "withdrawal"
        },
    ]);

    const getTransactionUI = (type: TransactionType, isDark: boolean) => {
        switch (type) {
            case 'deposit':
                return {
                    icon: <IconIndex52 fill="#1AA179" />,
                    amountColor: 'text-[#1AA179]',
                    bgColor: 'bg-(--bg-icon-green)',
                    reverse: 'rotate-180'
                };
            case 'withdrawal':
                return {
                    icon: <img src={isDark ? IMG.cardIconDark : IMG.cardIcon} alt="Card" />,
                    amountColor: 'text-(--text-main)',
                    bgColor: 'bg-(--btn-secondary-bg)',
                    reverse: ''
                };
            case 'transfer':
                return {
                    icon: <IconIndex52 />,
                    amountColor: 'text-(--text-main)',
                    bgColor: 'bg-(--btn-secondary-bg)',
                    reverse: ''
                };
        }
    };

    return (<div className="wrapper flex flex-col justify-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="" rightLinkType="search">
            Кошелёк
        </Header>

        <main>

            {/* <!-- Wallet --> */}
            <section className="relative">
                <div className="absolute left-1/2 top-[185px] z-[-1] h-[465px] w-[588px] translate-x-[calc(-50%+5px)] rotate-180 rounded-full bg-glow-blob opacity-[0.35] blur-[129px]"></div>
                <div className="">
                    <div
                        ref={sliderRef}
                        className="flex w-full overflow-x-auto snap-x snap-mandatory gap-3 pb-3 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} ref={(el) => { cardsRef.current[index] = el; }} className="shrink-0 snap-center w-full">
                                <div className="py-4 flex flex-col items-center gap-3">
                                    <img src={IMG.cryptoBitcoin} alt="" className=" rounded-full w-[48px] h-[48px]" />
                                    <h3 className="flex items-end justify-center gap-2 font-medium text-5xl text-center font-nagel">
                                        1.4919
                                        <span className="font-normal text-3xl">BTC</span>
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <Alert type="gray" className="py-1 px-3 gap-2 text-[15px] text-center rounded-full">$4 491,52</Alert>
                                        <Alert type="teal" className="py-1 px-3 gap-2 text-[15px] text-center rounded-full">
                                            <span>+$149</span>
                                            <IconIndex61 />
                                            <span>4%</span>
                                        </Alert>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-1.5 mt-1 mb-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-(--title-color) w-4" : "bg-(--25-opacity)  w-1.5"
                                    }`}
                            ></div>
                        ))}
                    </div>
                    <div className="grid grid-cols-4 gap-2 mb-4 navigation mx-3 bg-(--bg-card) rounded-[24px] p-3">
                        <div className="">
                            <Link to={'/withdraw'} className="w-full flex flex-col items-center text-center gap-2">
                                <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) py-4 px-6 rounded-[18px]">
                                    {isDark ? <IconIndex59 /> : <IconIndex60 />}
                                </div>
                                <span>Пополнить</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link to={'/funds'} className="w-full flex flex-col items-center text-center gap-2">
                                <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) py-4 px-6 rounded-[18px]">
                                    {isDark ? <IconIndex57 /> : <IconIndex58 />}
                                </div>
                                <span>Отправить</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link to={'/'} className="w-full flex flex-col items-center text-center gap-2">
                                <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) py-4 px-6 rounded-[18px]">
                                    {isDark ? <IconIndex55 /> : <IconIndex56 />}
                                </div>
                                <span>Вывести</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link to={'#'} className="w-full flex flex-col items-center text-center gap-2">
                                <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) py-4 px-6 rounded-[18px]">
                                    {isDark ? <IconIndex53 /> : <IconIndex54 />}
                                </div>
                                <span>AML</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Wallet end --> */}

            {/* <!-- Transactions --> */}
            <section className="px-4 mt-2 py-4 pt-[20px] rounded-t-4xl bg-(--bg-main)">
                <div className="container">
                    <h2 className="mb-5 font-medium leading-none font-nagel text-2xl">Транзакции</h2>
                    <ul className="transactions-navs flex items-center flex-wrap gap-2">
                        <li>
                            <Link to={'#'} className="rounded-full bg-(--text-main) text-(--bg-main) px-3 py-[9px]">Все</Link>
                        </li>
                        <li>
                            <Link to={'#'} className="rounded-full bg-(--btn-secondary-bg) px-3 py-[9px]">Пополнения</Link>
                        </li>
                        <li>
                            <Link to={'#'} className="rounded-full bg-(--btn-secondary-bg) px-3 py-[9px]">Переводы</Link>
                        </li>
                        <li>
                            <Link to={'#'} className="rounded-full bg-(--btn-secondary-bg) px-3 py-[9px]">Выводы</Link>
                        </li>
                    </ul>
                    <ul className="transactions-list flex flex-col gap-4 mt-4">
                        {transactionList.map((data) => {
                            const { icon, bgColor, reverse, amountColor } = getTransactionUI(data.type, isDark);
                            return (<li key={data.id} className={'transactions-card flex items-center justify-between '}>
                                <div className="flex items-center gap-3">
                                    <div className={clsx(`icon flex items-center justify-center shrink-0 rounded-full w-[40px] h-[40px]`, bgColor, reverse)}>
                                        {icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg ">{data.title}</h3>
                                        <p className="text-(--grey)">{data.subtitle}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <h4 className={clsx(`text-lg`, amountColor)}>{data.amount}</h4>
                                    <p className="text-(--grey)">{data.usd}</p>
                                </div>
                            </li>)
                        })}
                    </ul>
                </div>
            </section>
            {/* <!-- Transactions end --> */}

        </main>
    </div>)
}