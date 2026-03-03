import IMG from "../assets/images"
import { useSliderObserver } from "../hooks/useSliderObserver";
import BottomNav from "../components/BottomNav"
import Header from "../components/Header"
import Alert from "../components/UI/Alert";
import { Link } from "react-router-dom";
import IconHome5 from "../components/Icons/IconHome5";
import IconHome6 from "../components/Icons/IconHome6";
import IconHome7 from "../components/Icons/IconHome7";
import IconHome8 from "../components/Icons/IconHome8";
import IconHome9 from "../components/Icons/IconHome9";
import IconHome10 from "../components/Icons/IconHome10";
import IconHome11 from "../components/Icons/IconHome11";
import IconHome12 from "../components/Icons/IconHome12";
import IconHome13 from "../components/Icons/IconHome13";
import IconHome14 from "../components/Icons/IconHome14";
import IconHome15 from "../components/Icons/IconHome15";
import IconHome16 from "../components/Icons/IconHome16";
import { useTheme } from "../hooks/useTheme";
import { useGetWalletByIdQuery } from "../store/api/walletApi";
import { useAppSelector } from "../store/hooks";
import FullScreenLoader from "../components/FullScreenLoader";
import DataErrorScreen from "../components/DataErrorScreen";

// ДОБАВЛЕНО: Словарь иконок, чтобы не рендерить везде Биткоин
const COIN_ICONS: Record<string, string> = {
    'BTC': IMG.cryptoBitcoin,
    'ETH': IMG.cryptoEthereum,
    'USDT': IMG.cryptoTether,
    'BNB': IMG.cryptoBinancecoin,
    'TRX': IMG.cryptoTrc20,
};

export default function Home() {
    const isDark = useTheme();
    const { activeIndex, sliderRef, cardsRef } = useSliderObserver();
    const selectedWalletId = useAppSelector((state) => state.walletState.selectedWalletId);

    // ИСПРАВЛЕНО: передаем 0, если ID нет, чтобы TS не ругался на null!
    const { data: wallet, isLoading, isError, refetch } = useGetWalletByIdQuery(
        selectedWalletId ?? 0,
        { skip: !selectedWalletId }
    );

    const coins = wallet?.coins ?? [];

    // ИСПРАВЛЕНО: Безопасное суммирование (чтобы строки не склеивались в "01.28")
    const totalBalance = coins.reduce((acc, coin) => acc + (Number(coin.balance) || 0), 0);

    if (isLoading) return <FullScreenLoader message="Загрузка кошелька..." />;
    if (isError) return <DataErrorScreen message="Не удалось загрузить данные кошелька" onRetry={refetch} />;

    // ДОБАВЛЕНО: Защита, если кошелек вообще не выбран (юзер только зарегался)
    // Верстка сохранена в твоем стиле
    if (!selectedWalletId) {
        return (
            <div className="pb-10 flex flex-col min-h-screen">
                <Header type="inner" leftLinkIcon="hidden" rightLinkType="settings">
                    Мой кошелёк
                </Header>
                <BottomNav />
                <main className="flex-1 flex flex-col items-center justify-center px-4">
                    <p className="text-[#6C757D] text-center">Кошелек не выбран. Перейдите в список кошельков.</p>
                </main>
            </div>
        );
    }

    return (<div className="pb-10 flex flex-col min-h-screen">
        <Header type="inner" leftLinkIcon="hidden" rightLinkType="settings">
            Мой кошелёк #{selectedWalletId || '...'}
        </Header>

        <BottomNav />

        <main>

            <section className="relative">
                <img src={IMG.Eclipse} className="absolute left-1/2 top-[185px] z-[-1] h-[465px] w-[588px] translate-x-[calc(-50%+5px)]"></img>
                <div>
                    <div className="overal-balance py-4 flex flex-col items-center gap-3">
                        <p className="text-base text-center text-[#ADB5BD] tracking-[3%]">Общий баланс</p>
                        {/* ИСПРАВЛЕНО: Выводим реальный баланс вместо хардкода 42 482.59 */}
                        <h3 className="font-medium text-5xl text-center font-nagel">${totalBalance.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
                        <Alert type="teal" className="gap-2 text-base text-center rounded-full">
                            <span>+$149</span>
                            <IconHome16 />
                            <span>4%</span>
                        </Alert>
                    </div>
                    <div className="grid grid-cols-4 gap-2 mb-4 navigation mx-3 rounded-[24px] p-3">
                        <div>
                            <Link to="/withdraw" className="w-full flex flex-col items-center text-center gap-2">
                                <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) py-4 px-6 rounded-[18px]">
                                    {isDark ? <IconHome14 /> : <IconHome15 />}
                                </div>
                                <span>Пополнить</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/funds" className="w-full flex flex-col items-center text-center gap-2">
                                <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) py-4 px-6 rounded-[18px]">
                                    {isDark ? <IconHome12 /> : <IconHome13 />}
                                </div>
                                <span>Отправить</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/withdraw" className="w-full flex flex-col items-center text-center gap-2">
                                <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) py-4 px-6 rounded-[18px]">
                                    {isDark ? <IconHome10 /> : <IconHome11 />}
                                </div>
                                <span>Вывести</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/wallet" className="w-full flex flex-col items-center text-center gap-2">
                                <div className="icon flex items-center justify-center w-full bg-(--btn-secondary-bg) py-4 px-6 rounded-[18px]">
                                    {isDark ? <IconHome8 /> : <IconHome9 />}
                                </div>
                                <span>Сделки</span>
                            </Link>
                        </div>
                    </div>
                    <div
                        ref={sliderRef}
                        className="flex w-full overflow-x-auto snap-x snap-mandatory gap-3 pb-3 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {coins.slice(0, 5).map((coin, index) => (
                            <div key={coin.symbol} ref={(el) => { cardsRef.current[index] = el; }} className="shrink-0 snap-center w-full">
                                <div className="relative flex rounded-[18px] bg-(--bg-main) items-center gap-5 px-4 py-3">
                                    <img
                                        src={isDark ? IMG.alertWhiteIcon1Dark : IMG.alertWhiteIcon1}
                                        alt=""
                                    />
                                    <div className="flex flex-col pr-8">
                                        <h3 className="text-(--text-main) tracking-[4%] text-sm">Транзакция в процессе</h3>
                                        {/* ИСПРАВЛЕНО: Безопасный toFixed (иначе ломается, если баланс — это строка) */}
                                        <p className="text-[#6C757D] text-sm">${Number(coin.balance).toLocaleString()} • {Number(coin.balance).toFixed(4)} {coin.symbol}</p>
                                        <Link to="#" className="mt-1 items-center gap-1 text-blue-400 tracking-[4%] text-sm">
                                            <span>Перейти</span>
                                        </Link>
                                    </div>
                                    <button className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-(--intro-btn-bg)">
                                        {isDark ? <IconHome6 /> : <IconHome7 />}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-1.5 mt-1 mb-4">
                        {coins.slice(0, 5).map((coin, index) => (
                            <div
                                key={`dot-${coin.symbol}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-(--title-color) w-4" : "bg-(--25-opacity) w-1.5"}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-3 py-2 bg-(--bg-main) rounded-t-4xl pt-5">
                <div className="flex items-start gap-4 mb-2 bg-(--btn-secondary-bg) p-3 rounded-[18px]">
                    <div className="w-full flex items-center gap-3">
                        <img src={IMG.operationMonthIcon1} className="shrink-0" alt="" />
                        <div>
                            <p className="mb-1 text-[#6C757D]">Операции за месяц</p>
                            <h3 className="font-medium text-2xl">$124 492.24</h3>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <Link to="#">
                            <IconHome5 />
                        </Link>
                    </div>
                </div>
                <div className="overflow-hidden relative flex items-center justify-between mb-2 bg-(--btn-secondary-bg) rounded-[18px] p-4">
                    <div
                        className="absolute right-40 top-0 bottom-0 w-[70%] opacity-25 blur-[30px] rotate-180"
                        style={{ background: 'radial-gradient(52.48% 62.82% at 79.71% 66.24%, #7FFF47 20%, #F9FF20 55%, #FFDAC0 80%, #FC76E3 100%)' }}
                    />
                    <div className="flex items-center gap-4 relative z-1">
                        <img src={IMG.cleverCardLogo1} className="shrink-0" alt="" />
                        <div>
                            <h3 className="font-medium text-lg">Clever</h3>
                            <p className="text-[#6C757D]">$1,00</p>
                        </div>
                    </div>
                    <div className="text-right relative z-1">
                        <h4 className="text-lg text-(--btn-main) tracking-[3%]">4 491 CLV</h4>
                        <p className="text-[#6C757D]">$4 491,52</p>
                    </div>
                </div>


                <ul className="flex flex-col gap-4 pb-6">
                    {coins.map((coin) => (
                        <li key={coin.symbol} className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {/* ИСПРАВЛЕНО: Подтягиваем правильную иконку, класс оставлен твой */}
                                <img src={COIN_ICONS[coin.symbol] || IMG.cryptoBitcoin} className="shrink-0" alt="" />
                                <div>
                                    <h3 className="font-medium text-lg tracking-[3%]">{coin.name}</h3>
                                    {/* ИСПРАВЛЕНО: Безопасный toLocaleString */}
                                    <p className="text-[#6C757D]">≈${Number(coin.balance).toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <h4 className="text-lg text-(--btn-main) tracking-[3%]">{coin.balance} {coin.symbol}</h4>
                                <p className="text-[#6C757D]">${Number(coin.balance).toLocaleString()}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

        </main>
    </div>)
}