import { useState } from "react";
import IMG from "../assets/images";
import Header from "../components/Header";
import MainBtn from "../components/UI/MainBtn";
import { IMaskInput } from "react-imask";
import { useSliderObserver } from "../hooks/useSliderObserver";
import MoneyInput from "../components/UI/MoneyInput";
import IconFunds3 from "../components/Icons/IconFunds3";
import IconFunds4 from "../components/Icons/IconFunds4";
import { useTheme } from "../hooks/useTheme";

const MOCK_WALLETS = [
    { id: 'btc-1', name: 'Bitcoin', crypto: '1.4919', fiat: '124 492,24', ticker: 'BTC', address: 'bc1qm...3scw' },
    { id: 'eth-1', name: 'Ethereum', crypto: '14.50', fiat: '45 000,00', ticker: 'ETH', address: '0x123...abcd' },
    { id: 'usdt-1', name: 'USDT', crypto: '1050.00', fiat: '1 050,00', ticker: 'USDT', address: 'T987...wxyz' },
    { id: 'sol-1', name: 'Solana', crypto: '45.2', fiat: '4 520,00', ticker: 'SOL', address: 'Sol1...9999' },
    { id: 'ton-1', name: 'TON', crypto: '500', fiat: '1 200,00', ticker: 'TON', address: 'EQ12...3456' },
];

export default function Funds() {
    const isDark = useTheme();
    const [phone, setPhone] = useState<string>('');
    const { activeIndex, sliderRef, cardsRef } = useSliderObserver();

    return (
        <div className="flex flex-col min-h-screen pb-10">
            <Header type="inner" leftLink="/home" leftLinkIcon="arrow">
                Кошелёк
            </Header>

            <section className="flex flex-col flex-1 mt-4 bg-(--bg-main) rounded-t-3xl">
                <div className="container px-4 flex flex-col flex-1 justify-between pt-4">
                    <div className="flex flex-col gap-6">

                        <div className="-mx-4">
                            <div
                                ref={sliderRef}
                                className="flex w-full overflow-x-auto snap-x snap-mandatory gap-3 pb-3 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                            >
                                {MOCK_WALLETS.map((wallet, index) => (
                                    <div
                                        key={wallet.id}
                                        ref={(el) => { cardsRef.current[index] = el; }}
                                        className="shrink-0 snap-center w-full"
                                    >
                                        <div className="bg-(--btn-secondary-bg) p-4 rounded-2xl">
                                            <h3 className="flex items-center gap-2 mb-4 text-base text-(--text-main)">
                                                <img src={IMG.cryptoBitcoin} className="w-6 h-6 shrink-0" alt={wallet.name} />
                                                {wallet.name}
                                                <span className="text-sm text-(--grey)">{wallet.address}</span>
                                            </h3>
                                            <div className="flex justify-between items-end">
                                                <h2 className="font-medium font-nagel text-4xl leading-none flex items-end gap-2 text-(--text-main)">
                                                    {wallet.crypto}
                                                    <span className="font-normal font-nebulas text-lg text-(--grey)">{wallet.ticker}</span>
                                                </h2>
                                                <p className="text-base font-nebulas text-(--grey)">≈${wallet.fiat}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center gap-1.5 mt-1">
                                {MOCK_WALLETS.map((wallet, index) => (
                                    <div
                                        key={`dot-${wallet.id}`}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-(--text-main) w-4" : "bg-(--grey) opacity-50 w-1.5"
                                            }`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="mb-2 text-sm text-(--grey)">Кому перевести</p>
                            <div className="relative flex items-center bg-(--btn-secondary-bg) px-4 py-3 rounded-2xl">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-base text-(--text-main)">
                                    <img src={IMG.flagRu} className="w-5 h-auto shrink-0" alt="RU" />
                                    +7
                                </span>
                                <IMaskInput
                                    mask="(000) 000-00-00"
                                    definitions={{ '0': /[0-9]/ }}
                                    value={phone}
                                    onAccept={(val: string) => setPhone(val)}
                                    placeholder="(000) 000-00-00"
                                    className="w-full bg-transparent outline-none text-base pl-[60px] text-(--text-main) placeholder:text-(--grey)"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-(--grey)">Сумма перевода</p>
                            <MoneyInput className="bg-(--btn-secondary-bg) py-3 px-6 rounded-2xl" />
                            <ul className="flex items-center flex-wrap gap-2 mt-1">
                                <li className="flex items-center rounded-full px-3 py-2 gap-1 text-sm text-(--text-main) bg-(--btn-secondary-bg) cursor-pointer hover:opacity-80 transition-opacity">
                                    {isDark ? <IconFunds3 /> : <IconFunds4 />}
                                    В долларах
                                </li>
                                <li className="flex items-center rounded-full px-3 py-2 text-sm text-(--text-main) bg-(--btn-secondary-bg) cursor-pointer hover:opacity-80 transition-opacity">
                                    Max
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 pb-4">
                        <MainBtn className="w-full font-medium py-[14px] rounded-2xl bg-[#1AA179] text-black">
                            Отправить
                        </MainBtn>
                    </div>
                </div>
            </section>
        </div>
    );
}