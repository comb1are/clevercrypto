import { useState } from "react";
import Header from "../../components/Header";
import IMG from "../../assets/images";

const INITIAL_CRYPTO_LIST = [
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
];

export default function BusinessIncluded() {
    const [selectedIds, setSelectedIds] = useState<number[]>(
        INITIAL_CRYPTO_LIST.filter(c => c.selected).map(c => c.id)
    );

    const toggleSelect = (id: number) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    return (<div className="flex flex-col min-h-screen pb-[100px]">
        <Header type="inner" leftLink="/business" leftLinkIcon="">Включенные платежи</Header>

        <section className="flex-1 mt-4">
            <div className="container px-4 flex flex-col gap-2">
                {INITIAL_CRYPTO_LIST.map((data) => (
                    <div key={data.id} className="flex items-center justify-between bg-(--btn-secondary-bg) p-3 rounded-full">
                        <div className="flex items-center gap-3">
                            <img src={data.img} className="w-10 h-10 object-cover rounded-full shrink-0" alt="" />
                            <h3 className="text-base font-medium text-(--text-main)">
                                {data.title} {data.subtitle && (<span className="text-(--grey)"> {data.subtitle}</span>)}
                            </h3>
                        </div>
                        <label className="shrink-0 relative cursor-pointer w-[50px] h-[30px] rounded-full overflow-hidden flex items-center bg-[#2B2D31] has-checked:bg-[#1AA179] transition-colors">
                            <input
                                type="checkbox"
                                onChange={() => toggleSelect(data.id)}
                                checked={selectedIds.includes(data.id)}
                                className="absolute opacity-0 w-0 h-0 peer"
                                aria-label={`Toggle ${data.title}`}
                            />
                            <span className="w-6 h-6 rounded-full bg-white absolute left-1 shadow-sm transition-transform peer-checked:translate-x-5"></span>
                        </label>
                    </div>
                ))}
            </div>
        </section>
    </div>)
}