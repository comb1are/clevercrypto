import { useTheme } from "../../hooks/useTheme";
import { Link } from "react-router-dom";
import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";
import { useState } from "react";

interface WalletInterface {
    id: number,
    img: string,
    title: string,
    subtitle: string,
    amount: string,
    price: string,
}

export default function WalletId() {
    const isDark = useTheme();
    const [walletList] = useState<WalletInterface[]>([
        { id: 1, img: IMG.cryptoBitcoin, title: "Bitcoin", subtitle: "≈$124 492,24", amount: '1.4919 BTC', price: '$181 319,56' },
        { id: 2, img: IMG.cryptoLitecoin, title: "Litecoin", subtitle: "≈$96,75", amount: '3,31 LTC', price: '$320,00' },
        { id: 3, img: IMG.cryptoBitcoin, title: "Bitcoin", subtitle: "≈$124 492,24", amount: '1.4919 BTC', price: '$181 319,56' },
        { id: 4, img: IMG.cryptoLitecoin, title: "Litecoin", subtitle: "≈$96,75", amount: '3,31 LTC', price: '$320,00' },
    ])

    return (<div className="flex flex-col min-h-screen pb-10">
        <Header type="inner" leftLink="/wallet/my" leftLinkIcon="arrow">Мой кошелек #1</Header>

        {/* <!-- Wallet ID --> */}
        <section className="flex flex-col flex-1 mt-4">
            <div className="container px-4 flex flex-col flex-1 justify-between gap-3">
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-(--grey) text-sm">Название кошелька</label>
                        <div className="bg-(--bg-card) rounded-[18px] py-3 pr-2 pl-4 text-[15px] bg-(--intro-btn-bg) text-(--text-main)">Мой кошелек #1</div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-(--grey) text-sm">Обзор кошелька</label>
                        <ul className="bg-(--bg-card) rounded-[18px] bg-(--intro-btn-bg) p-3 flex flex-col gap-4">
                            {walletList.map((data, index) => (
                                <li key={index} className="w-full flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img src={data.img} className="shrink-0 w-10 h-10 object-contain rounded-full" alt="" />
                                        <div>
                                            <h3 className="font-medium text-[16px] text-(--text-main)">{data.title}</h3>
                                            <p className="text-[14px] text-(--grey)">{data.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <h4 className="font-medium text-[16px] text-(--text-main)">{data.amount}</h4>
                                        <p className="text-[14px] text-(--grey)">{data.price}</p>
                                    </div>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Link to={'#'} className="block w-full text-center text-(--grey) transition-colors">Показать больше</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3 mt-4">
                    <MainBtn className="w-full bg-(--red-bg) text-(--red) hover:text-red-500 rounded-[18px] py-[14px] flex items-center justify-center gap-3 transition-colors">
                        <img src={IMG.deleteIcon} alt="" className="shrink-0" />
                        <span className="tracking-[0.04em] text-[#DC3545]">Удалить кошелёк</span>
                    </MainBtn>
                    <MainBtn to="/wallet/export" className="w-full bg-(--btn-secondary-bg) text-(--text-main) hover:bg-white/10 rounded-[18px] py-[14px] flex items-center justify-center gap-3 transition-colors">
                        <img src={isDark ? IMG.exportIconDark : IMG.exportIcon} alt="" className="shrink-0" />
                        <span className="tracking-[0.04em]">Экспорт кошелька</span>
                    </MainBtn>
                </div>
            </div>
        </section>
        {/* <!-- Wallet ID end --> */}
    </div>)
}