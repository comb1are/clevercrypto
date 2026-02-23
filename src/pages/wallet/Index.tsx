import Header from "../../components/Header";

import Alert from "../../components/UI/Alert";
import { useState } from "react";
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
    type: '' | 'input' | 'other';
};

export default function Wallet() {
    const [transactionList] = useState<Transaction[]>([
        {
            id: 1,
            title: "Bitcoin",
            subtitle: "Пополнение",
            amount: "+1.4919 BTC",
            usd: "$181,319.56",
            type: ''
        },
        {
            id: 2,
            title: "Bitcoin",
            subtitle: "Перевод",
            amount: "-0.534 BTC",
            usd: "$1,928.40",
            type: 'input'
        },
        {
            id: 3,
            title: "Bitcoin",
            subtitle: "Вывод",
            amount: "-0.534 BTC",
            usd: "$1,928.40",
            type: 'other'
        },
        {
            id: 4,
            title: "Bitcoin",
            subtitle: "Пополнение",
            amount: "+1.4919 BTC",
            usd: "$181,319.56",
            type: ''
        },
        {
            id: 5,
            title: "Bitcoin",
            subtitle: "Перевод",
            amount: "-0.534 BTC",
            usd: "$1,928.40",
            type: 'input'
        },
        {
            id: 6,
            title: "Bitcoin",
            subtitle: "Вывод",
            amount: "-0.534 BTC",
            usd: "$1,928.40",
            type: 'other'
        },
        {
            id: 7,
            title: "Bitcoin",
            subtitle: "Пополнение",
            amount: "+1.4919 BTC",
            usd: "$181,319.56",
            type: ''
        },
        {
            id: 8,
            title: "Bitcoin",
            subtitle: "Перевод",
            amount: "-0.534 BTC",
            usd: "$1,928.40",
            type: 'input'
        },
        {
            id: 9,
            title: "Bitcoin",
            subtitle: "Вывод",
            amount: "-0.534 BTC",
            usd: "$1,928.40",
            type: 'other'
        },
    ]);

    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="" rightLinkType="search">
            Кошелёк
        </Header>

        <main>

            {/* <!-- Wallet --> */}
            <section className="wallet position-relative pt-3">
                <div className="circle position-absolute"></div>
                <div className="container">
                    <div className="d-flex overflow-auto gap-3 pb-2 mb-3">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="flex-shrink-0" style={{ width: "95%" }}>
                                <div className="wallet-card d-flex flex-column align-items-center gap-3">
                                    <img src="./assets/images/crypto-bitcoin.svg" alt="" className="crypto-logo" />
                                    <h2 className="d-flex align-items-end justify-content-center gap-2 fw-medium lh-1 text-center">
                                        1.4919
                                        <span className="fw-normal">BTC</span>
                                    </h2>
                                    <div className="d-flex align-items-center gap-2">
                                        <Alert type="gray" className="py-1 px-3 gap-2 fs-6 text-center rounded-pill">$4 491,52</Alert>
                                        <Alert type="teal" className="py-1 px-3 gap-2 fs-6 text-center rounded-pill">
                                            <span>+$149</span>
                                            <IconIndex61 />
                                            <span>4%</span>
                                        </Alert>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row gx-2 mb-4 navigation">
                        <div className="col-3">
                            <Link to={'#'} className="w-100 d-flex flex-column align-items-center text-center gap-2">
                                <div className="icon d-flex align-items-center justify-content-center w-100">
                                    <IconIndex60 />
                                    <IconIndex59 />
                                </div>
                                <span>Пополнить</span>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to={'#'} className="w-100 d-flex flex-column align-items-center text-center gap-2">
                                <div className="icon d-flex align-items-center justify-content-center w-100">
                                    <IconIndex58 />
                                    <IconIndex57 />
                                </div>
                                <span>Отправить</span>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to={'#'} className="w-100 d-flex flex-column align-items-center text-center gap-2">
                                <div className="icon d-flex align-items-center justify-content-center w-100">
                                    <IconIndex56 />
                                    <IconIndex55 />
                                </div>
                                <span>Вывести</span>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to={'#'} className="w-100 d-flex flex-column align-items-center text-center gap-2">
                                <div className="icon d-flex align-items-center justify-content-center w-100">
                                    <IconIndex54 />
                                    <IconIndex53 />
                                </div>
                                <span>AML</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Wallet end --> */}

            {/* <!-- Transactions --> */}
            <section className="transactions">
                <div className="container">
                    <h2 className="mb-3 fw-medium lh-1">Транзакции</h2>
                    <ul className="transactions-navs d-flex align-items-center flex-wrap gap-2">
                        <li>
                            <Link to={'#'} className="rounded-pill active">Все</Link>
                        </li>
                        <li>
                            <Link to={'#'} className="rounded-pill">Пополнения</Link>
                        </li>
                        <li>
                            <Link to={'#'} className="rounded-pill">Переводы</Link>
                        </li>
                        <li>
                            <Link to={'#'} className="rounded-pill">Выводы</Link>
                        </li>
                    </ul>
                    <ul className="transactions-list d-flex flex-column gap-4">
                        {transactionList.map((data, index) => (
                            <li key={index} className={clsx(
                                'transactions-card d-flex align-items-center justify-content-between',
                                data.type
                            )}>
                                <div className="transactions-card__left d-flex align-items-center">
                                    <div className="icon d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle">
                                        {data.type == 'other' ? (
                                            <>
                                                <img src={IMG.cardIcon} alt="" />
                                                <img src={IMG.cardIconDark} alt="" className="dark-img" />
                                            </>
                                        ) : (
                                            <IconIndex52 />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="fw-medium">{data.title}</h3>
                                        <p>{data.subtitle}</p>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <h4>{data.amount}</h4>
                                    <p>{data.usd}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* <!-- Transactions end --> */}

        </main>
    </div>)
}