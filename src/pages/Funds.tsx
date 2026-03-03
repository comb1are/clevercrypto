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
import { useGetWalletByIdQuery } from "../store/api/walletApi";
import { useAppSelector } from "../store/hooks";
import FullScreenLoader from "../components/FullScreenLoader";
import DataErrorScreen from "../components/DataErrorScreen";

export default function Funds() {
    const isDark = useTheme();
    const [phone, setPhone] = useState<string>('');
    const { activeIndex, sliderRef, cardsRef } = useSliderObserver();
    const userId = useAppSelector((state) => state.auth.userId);
    const { data: wallet, isLoading, isError, refetch } = useGetWalletByIdQuery(userId!, { skip: !userId });

    const coins = wallet?.coins ?? [];

    if (isLoading) return <FullScreenLoader message="Загрузка кошелька..." />;
    if (isError) return <DataErrorScreen message="Не удалось загрузить данные" onRetry={refetch} />;

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
                                {coins.map((coin, index) => (
                                    <div
                                        key={coin.symbol}
                                        ref={(el) => { cardsRef.current[index] = el; }}
                                        className="shrink-0 snap-center w-full"
                                    >
                                        <div className="bg-(--btn-secondary-bg) p-4 rounded-2xl">
                                            <h3 className="flex items-center gap-2 mb-4 text-base text-(--text-main)">
                                                <img src={IMG.cryptoBitcoin} className="w-6 h-6 shrink-0" alt={coin.name} />
                                                {coin.name}
                                                <span className="text-sm text-(--grey)">{coin.address.slice(0, 6)}...{coin.address.slice(-4)}</span>
                                            </h3>
                                            <div className="flex justify-between items-end">
                                                <h2 className="font-medium font-nagel text-4xl leading-none flex items-end gap-2 text-(--text-main)">
                                                    {coin.balance}
                                                    <span className="font-normal font-nebulas text-lg text-(--grey)">{coin.symbol}</span>
                                                </h2>
                                                <p className="text-base font-nebulas text-(--grey)">≈${coin.balance.toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center gap-1.5 mt-1">
                                {coins.map((coin, index) => (
                                    <div
                                        key={`dot-${coin.symbol}`}
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
                        <MainBtn className="w-full font-medium py-[14px] rounded-2xl bg-(--bg-green) text-black">
                            Отправить
                        </MainBtn>
                    </div>
                </div>
            </section>
        </div>
    );
}