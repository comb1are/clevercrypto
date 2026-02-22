import { useState } from "react";
import Header from "../../components/Header";
import IMG from "../../assets/images";

interface CryptoListInterface {
    id: number;
    img: string;
    title: string;
    subtitle: string;
    selected: boolean;
}

export default function BusinessIncluded () {
    const [cryptoList, setCryptoList] = useState<CryptoListInterface []>([
        { id: 1, img: IMG.cryptoBitcoin, title: 'Bitcoin', subtitle: '', selected: true },
        { id: 2, img: IMG.cryptoEthereum, title: 'Ethereum', subtitle: '', selected: true },
        { id: 3, img: IMG.cryptoTether, title: 'Tether', subtitle: '', selected: true },
        { id: 4, img: IMG.cryptoTrc20, title: 'USDT', subtitle: 'TRC-20', selected: true },
        { id: 5, img: IMG.cryptoBitcoin, title: 'USDT', subtitle: 'ERC-20', selected: true },
        { id: 6, img: IMG.cryptoErc20, title: 'USDT', subtitle: 'BNB-20', selected: false },
        { id: 7, img: IMG.cryptoLitecoin, title: 'Litecoin', subtitle: '', selected: true },
        { id: 8, img: IMG.cryptoBinancecoin, title: 'Binance Coin', subtitle: '', selected: false },
        { id: 9, img: IMG.cryptoUsdcoin, title: 'USD Coin', subtitle: '', selected: false },
        { id: 10, img: IMG.cryptAvax, title: 'Avax', subtitle: '', selected: false },
        { id: 11, img: IMG.cryptoRipple, title: 'Ripple', subtitle: '', selected: false },
    ])

    const toggleSelect = (id: number) => {
        setCryptoList((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/business" leftLinkIcon="">Включенные платежи</Header>

        {/* <!-- Included payments --> */}
        <section className="included-payment h-full d-flex pt-3">
            <div className="container h-full d-flex flex-column gap-2">
                {cryptoList.map((data, index) => (
                    <div key={index} className="payment-card d-flex align-items-center justify-content-between rounded-pill">
                        <div className="d-flex align-items-center gap-3">
                            <img src={data.img} width="28" className="object-fit-cover" alt="" />
                            <h3 className="fs-6 fw-medium">
                                {data.title} {data.subtitle && ( <span> {data.subtitle}</span> )}
                            </h3>
                        </div>
                        <div className="form-checkbox flex-shrink-0 rounded-pill position-relative overflow-hidden">
                            <input
                                type="checkbox"
                                onChange={() => toggleSelect(data.id)}
                                checked={data.selected}
                                className="position-absolute start-0 top-0 w-100 h-100"
                            />
                            <span className="rounded-pill position-absolute"></span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        {/* <!-- Included payments end --> */}
    </div>)
}