import { useState } from "react";
import IMG from "../../assets/images";
import { useTheme } from "../../hooks/useTheme";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

const WALLET_LIST = [
    { id: 1, title: 'Мой кошелек #1', price: '~$42 482.59' },
    { id: 2, title: 'Для funpay', price: '~$42 482.59' },
    { id: 3, title: 'Для себя', price: '~$42 482.59' },
];

export default function My() {
    const isDark = useTheme();
    const [selectedId, setSelectedId] = useState<number>(WALLET_LIST[0].id);

    return (<div className="flex flex-col min-h-screen pb-10">
        <Header type="inner" leftLink="/home" leftLinkIcon="arrow">Мои кошельки</Header>

        <section className="flex-1 flex mt-4">
            <div className="container px-4 flex flex-col gap-2 w-full">
                <div className="text-(--grey)">Мои кошельки</div>
                <MainBtn to="/wallet/import" theme="secondary" className="w-full py-[10px] flex items-center justify-center gap-3 text-center bg-(--btn-secondary-bg) text-(--text-main) rounded-[18px] hover:bg-white/10 transition-colors">
                    <img src={isDark ? IMG.plusIconDark : IMG.plusIcon} className="shrink-0" alt="" />
                    <span className="font-medium tracking-[0.04em]">Добавить кошелек</span>
                </MainBtn>
                <ul className="w-full flex flex-col gap-2">
                    {WALLET_LIST.map((data) => {
                        const isSelected = selectedId === data.id;
                        return (
                            <li key={data.id} className="bg-(--btn-secondary-bg) rounded-[18px] p-3 relative overflow-hidden">
                                <input
                                    type="radio"
                                    className="absolute cursor-pointer inset-0 z-10 w-full h-[50%] opacity-0 peer"
                                    checked={isSelected}
                                    name="addWallet"
                                    onChange={() => setSelectedId(data.id)}
                                />
                                <div className="mb-3 flex items-center justify-between relative z-5">
                                    <div>
                                        <h3 className="mb-1 font-medium text-lg text-(--text-main)">{data.title}</h3>
                                        <p className="text-(--grey)">{data.price}</p>
                                    </div>
                                    <div className={`flex items-center justify-center shrink-0 rounded-full w-6 h-6 transition-colors border border-(--grey) ${isSelected ? 'border-[#367DF0]' : ''}`}>
                                        <span className={`rounded-full shrink-0 w-3.5 h-3.5 transition-colors ${isSelected ? 'bg-[#367DF0]' : 'bg-transparent'}`}></span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 relative z-5">
                                    <MainBtn to="/wallet/id" theme="link" className="w-full flex items-center justify-center py-0 h-10 text-center rounded-[14px] bg-(--btn-third-bg)">Редактировать</MainBtn>
                                    <MainBtn to="" theme="link" className={`w-full flex items-center justify-center text-center py-0 h-10 rounded-[14px] bg-(--blue-bg) text-[#367DF0] ${isSelected ? 'hidden' : ''}`}>Выбрать</MainBtn>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    </div>)
}