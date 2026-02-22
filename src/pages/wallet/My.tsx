import { useState } from "react";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

interface WalletInterface {
    id: number;
    title: string;
    price: string;
    checked: boolean;
}

export default function My () {
    const [waletList, setWalletList] = useState<WalletInterface[]>([
        { id: 1, title: 'Мой кошелек #1', price: '~$42 482.59', checked: true },
        { id: 2, title: 'Для funpay', price: '~$42 482.59', checked: false },
        { id: 3, title: 'Для себя', price: '~$42 482.59', checked: false },
    ])

    const handleCheck = (id: number) => {
        setWalletList((prev) =>
            prev.map((wallet) =>
                wallet.id === id
                    ? { ...wallet, checked: true }
                    : { ...wallet, checked: false }
            )
        );
    };

    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Мои кошельки</Header>

        {/* <!-- My wallet --> */}
        <section className="select-wallet h-full d-flex">
            <div className="container h-full pt-3 d-flex flex-column gap-2">
                <div className="text fs-6">Мои кошельки</div>
                <button className="w-100 d-flex align-items-center justify-content-center text-center md btn-secondary">
                    <img src="./assets/images/plus-icon.svg" className="flex-shrink-0" alt="" />
                    <img src="./assets/images/plus-icon-dark.svg" className="flex-shrink-0 dark-icon" alt="" />
                    <span>Добавить кошелек</span>
                </button>
                <ul className="add-wallet__list w-100 d-flex flex-column gap-2">
                    {waletList.map((data, index) => (
                        <li key={index} className="add-wallet__card p-3 position-relative overflow-hidden">
                            <input type="checkbox" checked={data.checked} name="addWallet" onChange={() => {}} />
                            <div className="mb-3 d-flex align-items-center justify-content-between">
                                <div>
                                    <h3 className="mb-1 fw-medium">{data.title}</h3>
                                    <p className="fs-6">{data.price}</p>
                                </div>
                                <div className="icon d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle">
                                    <span className="rounded-circle flex-shrink-0"></span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <MainBtn theme="secondary" size="md" className="text-center">Редактировать</MainBtn>
                                <MainBtn onClick={() => handleCheck(data.id)} theme="link" size="md" className="text-center">Выбрать</MainBtn>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        {/* <!-- My wallet end --> */}
    </div>)
}