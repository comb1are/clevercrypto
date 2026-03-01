import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import IMG from "../../../assets/images";
import IconList76 from "../../../components/Icons/IconList76";
import IconList77 from "../../../components/Icons/IconList77";
import IconList78 from "../../../components/Icons/IconList78";
import IconList79 from "../../../components/Icons/IconList79";
import IconList80 from "../../../components/Icons/IconList80";
import IconList81 from "../../../components/Icons/IconList81";
import IconList82 from "../../../components/Icons/IconList82";
import IconAML32 from "../../../components/Icons/IconAML32";
import { useTheme } from "../../../hooks/useTheme";
import clsx from "clsx";

const NAV_TABS = [
    { id: 'all', label: 'Все' },
    { id: 'pending', label: 'Ждут проверки', count: 5 },
    { id: 'approved', label: 'Одобренные' },
    { id: 'blocked', label: 'Заблокированные' },
];

const STORES_LIST = [
    { id: 's1', type: 'simple', name: 'Kupikod', domain: 'kupikod.com', badge: 'Цифровые товары', status: 'approved', logo: IMG.businessLogo3, hasError: false, iconRight: <IconList82 /> },
    { id: 's2', type: 'simple', name: 'Kupikod', domain: 'kupikod.com', badge: 'Цифровые товары', status: 'blocked', logo: IMG.businessLogo3, hasError: true, iconRight: <IconList81 /> },
    { id: 's3', type: 'simple', name: 'FunPay', domain: 'funpay.com', badge: 'Цифровые товары', status: 'blocked', logo: IMG.businessLogo2, hasError: true, iconRight: <IconList80 /> },
    { id: 's4', type: 'detailed', name: 'Kupikod', domain: 'kupikod.com', badge: 'Цифровые товары', status: 'approved', logo: IMG.businessLogo3, percent: 70, conversionIcon: <IconList78 />, iconRight: <IconList79 /> },
    { id: 's5', type: 'detailed', name: 'Kupikod', domain: 'kupikod.com', badge: 'Цифровые товары', status: 'pending', logo: IMG.businessLogo3, percent: 70, conversionIcon: <IconList76 />, iconRight: <IconList77 /> },
];

export default function BusinessStoreList() {
    const isDark = useTheme();
    const [activeTab, setActiveTab] = useState(NAV_TABS[0].id);

    const filteredStores = activeTab === 'all'
        ? STORES_LIST
        : STORES_LIST.filter(store => store.status === activeTab);

    return (<div className="flex flex-col min-h-screen pb-[100px]">
        <Header type="inner" leftLink="/business" rightLinkType="search">Список магазинов</Header>

        <section className="relative pt-4 flex-1">
            <div className="container px-4">

                <div className="-mx-4 flex flex-col mb-4">
                    <ul className="flex items-center gap-2 py-2 px-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {NAV_TABS.map((tab) => {
                            const isActive = activeTab === tab.id;

                            return (
                                <li key={tab.id} className="shrink-0">
                                    <button
                                        onClick={() => setActiveTab(tab.id)}
                                        className={clsx(
                                            "flex items-center gap-1.5 px-3 py-[7px] rounded-full transition-colors",
                                            isActive ? "bg-(--btn-third-bg) text-(--text-main)" : "text-(--grey) hover:text-(--text-main)"
                                        )}
                                    >
                                        {tab.label}
                                        {tab.count && (
                                            <span className="flex items-center justify-center rounded-full font-medium w-5 h-5 bg-red-500 text-white text-xs">
                                                {tab.count}
                                            </span>
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    {filteredStores.length > 0 ? filteredStores.map((store) => {
                        if (store.type === 'simple') {
                            return (
                                <Link key={store.id} to={'#'} className="w-full flex items-center justify-between p-3 gap-3 bg-(--btn-third-bg) rounded-2xl hover:bg-white/10 transition-colors">
                                    <img src={store.logo} alt={store.name} className="shrink-0 rounded-full w-10 h-10 object-cover" />

                                    <div className="flex flex-col items-start gap-1 flex-1">
                                        <div className="flex items-center gap-2 text-base text-(--text-main)">
                                            <b className="font-medium text-lg">{store.name}</b>
                                            <span className="text-(--grey)">{store.domain}</span>
                                            {store.hasError && (
                                                <img src={IMG.errorIcon || IMG.timesRedCircle} alt="Error" className="shrink-0 w-4 h-4 ml-1" />
                                            )}
                                        </div>
                                        <span className="bg-(--blue-bg) text-sm text-[#367DF0] px-3 py-1 rounded-full">{store.badge}</span>
                                    </div>

                                    <div className="shrink-0 text-[#ADB5BD]">
                                        {store.iconRight}
                                    </div>
                                </Link>
                            );
                        } else {
                            return (
                                <Link key={store.id} to={'#'} className="w-full flex flex-col gap-3 p-4 bg-(--btn-third-bg) rounded-2xl hover:bg-white/10 transition-colors">
                                    <div className="w-full flex items-center justify-between gap-3">
                                        <img src={store.logo} alt={store.name} className="shrink-0 rounded-full w-10 h-10 object-cover" />
                                        <div className="flex flex-col items-start gap-1 flex-1">
                                            <div className="flex items-center gap-2 text-base text-(--text-main)">
                                                <b className="font-medium text-lg">{store.name}</b>
                                                <span className="text-(--grey)">{store.domain}</span>
                                            </div>
                                            <span className="bg-(--blue-bg) text-sm text-[#367DF0] px-3 py-1 rounded-full">{store.badge}</span>
                                        </div>
                                        <div className="shrink-0 text-[#ADB5BD]">
                                            {store.iconRight}
                                        </div>
                                    </div>

                                    <div className="w-full flex items-center justify-between border-t border-(--border-secondary) pt-3">
                                        <div className="text-sm text-(--text-main)">Конверсия оплаты</div>
                                        <div className="flex items-center gap-2">
                                            <IconAML32 percent={store.percent as number} emptyColor={isDark ? "#343A40" : "#E9ECEF"} reverse={true} />
                                            <b className="text-base font-medium text-(--text-main)">{store.percent} %</b>
                                        </div>
                                    </div>
                                </Link>
                            );
                        }
                    }) : <p className="text-sm text-(--grey) text-center py-2">Нет магазинов</p>}
                </div>

            </div>
        </section>
    </div>)
}