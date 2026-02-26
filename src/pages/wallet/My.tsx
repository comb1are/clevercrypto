import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

interface WalletInterface {
    id: number;
    title: string;
    price: string;
    checked: boolean;
}

export default function My() {
    const isDark = useTheme();
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

    return (<div className="wrapper flex flex-col justify-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Мои кошельки</Header>

        {/* <!-- My wallet --> */}
        <section className="select-wallet h-full flex">
            <div className="container h-full pt-3 flex flex-col gap-2">
                <div className="text text-[15px]">Мои кошельки</div>
                <button className="w-full flex items-center justify-center text-center md btn-secondary">
                    <img src={isDark ? "./assets/images/plus-icon-dark.svg" : "./assets/images/plus-icon.svg"} className="shrink-0" alt="" />
                    <span>Добавить кошелек</span>
                </button>
                <ul className="add-wallet__list w-full flex flex-col gap-2">
                    {waletList.map((data, index) => (
                        <li key={index} className="add-wallet__card p-3 relative overflow-hidden">
                            <input type="checkbox" checked={data.checked} name="addWallet" onChange={() => { }} />
                            <div className="mb-3 flex items-center justify-between">
                                <div>
                                    <h3 className="mb-1 font-medium">{data.title}</h3>
                                    <p className="text-[15px]">{data.price}</p>
                                </div>
                                <div className="icon flex items-center justify-center shrink-0 rounded-full">
                                    <span className="rounded-full shrink-0"></span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
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