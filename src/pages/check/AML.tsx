import IMG from "../../assets/images";
import Header from "../../components/Header";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";
import IconAML32 from "../../components/Icons/IconAML32";
import { useSliderObserver } from "../../hooks/useSliderObserver";
import { useTheme } from "../../hooks/useTheme";
import { useGetWalletByIdQuery } from "../../store/api/walletApi";
import { useAppSelector } from "../../store/hooks";
import FullScreenLoader from "../../components/FullScreenLoader";
import DataErrorScreen from "../../components/DataErrorScreen";


const MOCK_HISTORY = [
    { id: 'h-1', name: 'Bitcoin', address: 'bc1qm...3scw', date: '12 сен. 2025', percent: 14 },
    { id: 'h-2', name: 'Bitcoin', address: 'bc1qm...3scw', date: '12 сен. 2025', percent: 42 },
    { id: 'h-3', name: 'Bitcoin', address: 'bc1qm...3scw', date: '12 сен. 2025', percent: 36 },
    { id: 'h-4', name: 'Bitcoin', address: 'bc1qm...3scw', date: '12 сен. 2025', percent: 75 },
];

export default function AML() {
    const isDark = useTheme();
    const { activeIndex, sliderRef, cardsRef } = useSliderObserver();
    const userId = useAppSelector((state) => state.auth.userId);
    const { data: wallet, isLoading, isError, refetch } = useGetWalletByIdQuery(userId!, { skip: !userId });

    const coins = wallet?.coins ?? [];

    if (isLoading) return <FullScreenLoader message="Загрузка AML..." />;
    if (isError) return <DataErrorScreen message="Не удалось загрузить данные" onRetry={refetch} />;

    return (<div className="flex flex-col min-h-screen pb-10">
        <Header type="inner" leftLink="/home" leftLinkIcon="arrow">Проверка AML</Header>

        <section className="flex flex-col flex-1 mt-4">
            <div className="container px-4 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <Alert type="gray" className="flex items-center gap-3 py-[10px]">
                            <img src={isDark ? IMG.warningGrayDark : IMG.warningGray} className="shrink-0 w-6 h-6" alt="" />
                            <p className="text-(--text-main)">Выберите кошелек для проверки AML</p>
                        </Alert>
                        <div className="-mx-4 flex flex-col">

                            <div
                                ref={sliderRef}
                                className="flex w-full overflow-x-auto snap-x snap-mandatory gap-3 pb-3 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                            >
                                {coins.map((coin, index) => (
                                    <div key={coin.symbol} ref={(el) => { cardsRef.current[index] = el; }} className="shrink-0 snap-center w-full">
                                        <div className="bg-(--btn-secondary-bg) p-4 rounded-[18px]">
                                            <h3 className="flex items-center gap-2 mb-4 text-base text-(--text-main)">
                                                <img src={IMG.cryptoBitcoin} width="24" alt="" />
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
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-(--text-main) w-4" : "bg-(--grey) opacity-50 w-1.5"}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between py-2 mb-2 rounded-[18px] bg-(--btn-secondary-bg) px-5">
                            <p className="text-base font-medium text-(--text-main)">Осталось 9 проверок</p>
                            <MainBtn theme="neutral" size="sm" className="w-auto font-medium py-2 px-3 flex items-center gap-2 bg-(--text-main) text-(--bg-main) rounded-[14px] transition-colors ">
                                <img src={isDark ? IMG.addIconDark : IMG.addIcon} className="shrink-0 w-4 h-4" alt="" />
                                Добавить
                            </MainBtn>
                        </div>
                        <div className="flex flex-col mt-2 bg-(--btn-secondary-bg) py-5 px-4 rounded-3xl">
                            <h3 className="font-medium leading-none text-(--text-main) mb-3 text-lg">История проверок</h3>
                            <ul className="flex flex-col gap-3">
                                {MOCK_HISTORY.map((item) => (
                                    <li key={item.id} className="flex items-center justify-between rounded-[18px] mt-4">
                                        <div className="flex items-center gap-3">
                                            <img src={IMG.cryptoBitcoin} width="40" height="40" className="rounded-full object-cover shrink-0 w-10 h-10" alt="" />
                                            <div className="flex flex-col gap-1">
                                                <h4 className="flex items-center gap-2 text-(--text-main)">
                                                    {item.name}
                                                    <span className="text-(--grey)">{item.address}</span>
                                                </h4>
                                                <p className="text-sm text-(--grey)">{item.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <b className="font-medium text-base text-(--text-main)">{item.percent}%</b>
                                            <IconAML32 percent={item.percent} emptyColor={isDark ? "#343A40" : "#C4C4C4"} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button type="button" className="w-full text-center text-(--grey) mt-2 py-1">Показать больше</button>
                        </div>
                    </div>
                </div>

                <div className="w-full pt-4">
                    <MainBtn to="/check/load" className="w-full flex items-center justify-center font-medium bg-(--text-main) text-[#282828] py-[14px] rounded-[18px]">Проверить AML</MainBtn>
                </div>
            </div>
        </section>
    </div>)
}