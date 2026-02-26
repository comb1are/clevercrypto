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

    return (<div className="wrapper flex flex-col justify-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Мой кошелек #1</Header>

        {/* <!-- Wallet ID --> */}
        <section className="wallet-id h-full flex">
            <div className="container h-full pt-3 flex flex-col justify-between gap-3">
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <label>Название кошелька</label>
                        <div className="wallet-name py-3 pr-2 pl-4 text-[15px]">Мой кошелек #1</div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label>Обзор кошелька</label>
                        <ul className="crypto-list p-3 flex flex-col gap-4">
                            {walletList.map((data, index) => (
                                <li key={index} className="crypto-card w-full flex items-center justify-between">
                                    <div className="crypto-card__left flex items-center">
                                        <img src={data.img} className="shrink-0" alt="" />
                                        <div>
                                            <h3 className="font-medium">{data.title}</h3>
                                            <p>{data.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="crypto-card__right text-end">
                                        <h4>{data.amount}</h4>
                                        <p>{data.price}</p>
                                    </div>
                                </li>
                            ))}
                            <li>
                                <Link to={'#'} className="more-link w-full text-center text-[15px]">Показать больше</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex flex-col wallet-id__btns">
                    <MainBtn theme="red">
                        <img src={IMG.deleteIcon} alt="" className="shrink-0" />
                        <span>Удалить кошелёк</span>
                    </MainBtn>
                    <MainBtn theme="secondary">
                        <img src={isDark ? IMG.exportIconDark : IMG.exportIcon} alt="" className="shrink-0" />
                        <span>Экспорт кошелька</span>
                    </MainBtn>
                </div>
            </div>
        </section>
        {/* <!-- Wallet ID end --> */}
    </div>)
}