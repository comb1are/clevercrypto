import { useState } from "react";
import IMG from "../../assets/images";
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

    return (<div className="flex flex-col min-h-screen pb-10">
        <Header type="inner" leftLink="/home" leftLinkIcon="arrow">Мои кошельки</Header>

        {/* <!-- My wallet --> */}
        <section className="flex-1 flex mt-4">
            <div className="container px-4 flex flex-col gap-2 w-full">
                <div className="text-(--grey)">Мои кошельки</div>
                <MainBtn theme="secondary" className="w-full py-[10px] flex items-center justify-center gap-3 text-center bg-(--btn-secondary-bg) text-(--text-main) rounded-[18px] hover:bg-white/10 transition-colors">
                    <img src={isDark ? IMG.plusIconDark : IMG.plusIcon} className="shrink-0" alt="" />
                    <span className="font-medium tracking-[0.04em]">Добавить кошелек</span>
                </MainBtn>
                <ul className="w-full flex flex-col gap-2">
                    {waletList.map((data, index) => (
                        <li key={index} className="bg-(--btn-secondary-bg) rounded-[18px] p-3 relative overflow-hidden">
                            <input
                                type="radio"
                                className="absolute cursor-pointer inset-0 z-10 w-full h-[50%] opacity-0 peer"
                                checked={data.checked}
                                name="addWallet"
                                onChange={() => handleCheck(data.id)}
                            />
                            <div className="mb-3 flex items-center justify-between relative z-5">
                                <div>
                                    <h3 className="mb-1 font-medium text-[18px] text-(--text-main)">{data.title}</h3>
                                    <p className="text-(--grey)">{data.price}</p>
                                </div>
                                <div className={`flex items-center justify-center shrink-0 rounded-full w-[24px] h-[24px]  transition-colors border border-(--grey) ${data.checked ? 'border-[#367DF0]' : ''}`}>
                                    <span className={`rounded-full shrink-0 w-[14px] h-[14px] transition-colors ${data.checked ? 'bg-[#367DF0]' : 'bg-transparent'}`}></span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 relative z-5">
                                <MainBtn to="/wallet/id" theme="link" className="w-full flex items-center justify-center py-0 h-[40px] text-center rounded-[14px] bg-(--btn-third-bg)">Редактировать</MainBtn>
                                <MainBtn to="" theme="link" className={`w-full flex items-center justify-center text-center py-0 h-[40px] rounded-[14px] bg-(--blue-bg) text-[#367DF0] ${data.checked ? 'hidden' : ''}`}>Выбрать</MainBtn>
                            </div>

                            {/* Selected state border highlight */}
                            < div className={`absolute inset-0 rounded-[18px] pointer-events-none transition-colors ${data.checked ? '' : ''}`}></div>
                        </li>
                    ))}
                </ul>
            </div >
        </section >
        {/* <!-- My wallet end --> */}
    </div >)
}