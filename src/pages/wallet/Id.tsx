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

export default function WalletId () {
    const [walletList] = useState<WalletInterface []>([
        { id: 1, img: IMG.cryptoBitcoin, title: "Bitcoin", subtitle: "≈$124 492,24", amount: '1.4919 BTC', price: '$181 319,56' },
        { id: 2, img: IMG.cryptoLitecoin, title: "Litecoin", subtitle: "≈$96,75", amount: '3,31 LTC', price: '$320,00' },
        { id: 3, img: IMG.cryptoBitcoin, title: "Bitcoin", subtitle: "≈$124 492,24", amount: '1.4919 BTC', price: '$181 319,56' },
        { id: 4, img: IMG.cryptoLitecoin, title: "Litecoin", subtitle: "≈$96,75", amount: '3,31 LTC', price: '$320,00' },
    ])

    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Мой кошелек #1</Header>

        {/* <!-- Wallet ID --> */}
        <section className="wallet-id h-full d-flex">
            <div className="container h-full pt-3 d-flex flex-column justify-content-between gap-3">
                <div className="w-100 d-flex flex-column gap-4">
                    <div className="w-100 d-flex flex-column gap-2">
                        <label>Название кошелька</label>
                        <div className="wallet-name py-3 pe-2 ps-4 fs-6">Мой кошелек #1</div>
                    </div>
                    <div className="w-100 d-flex flex-column gap-2">
                        <label>Обзор кошелька</label>
                        <ul className="crypto-list p-3 d-flex flex-column gap-4">
                            {walletList.map((data, index) => (
                                <li key={index} className="crypto-card w-100 d-flex align-items-center justify-content-between">
                                    <div className="crypto-card__left d-flex align-items-center">
                                        <img src={data.img} className="flex-shrink-0" alt="" />
                                        <div>
                                            <h3 className="fw-medium">{data.title}</h3>
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
                                <Link to={'#'} className="more-link w-100 text-center fs-6">Показать больше</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-100 d-flex flex-column wallet-id__btns">
                    <MainBtn theme="red">
                        <img src={IMG.deleteIcon} alt="" className="flex-shrink-0" />
                        <span>Удалить кошелёк</span>
                    </MainBtn>
                    <MainBtn theme="secondary">
                        <img src={IMG.exportIcon} alt="" className="flex-shrink-0" />
                        <img src={IMG.exportIconDark} alt="" className="flex-shrink-0 dark-icon" />
                        <span>Экспорт кошелька</span>
                    </MainBtn>
                </div>
            </div>
        </section>
        {/* <!-- Wallet ID end --> */}
    </div>)
}