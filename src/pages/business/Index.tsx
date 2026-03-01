import { useState } from "react";
import { Link } from "react-router-dom";
import IMG from "../../assets/images";
import BottomNav from "../../components/BottomNav";
import MainBtn from "../../components/UI/MainBtn";
import IconIndex27 from "../../components/Icons/IconIndex27";
import IconIndex28 from "../../components/Icons/IconIndex28";
import IconIndex29 from "../../components/Icons/IconIndex29";
import IconIndex30 from "../../components/Icons/IconIndex30";
import IconIndex31 from "../../components/Icons/IconIndex31";
import { useTheme } from "../../hooks/useTheme";
import clsx from "clsx";

// 1. Добавил поле status в данные, иначе табы бессмысленны
const NAV_TABS = [
    { id: 'all', label: 'Все' },
    { id: 'pending', label: 'Ждут проверки', count: 5 },
    { id: 'approved', label: 'Одобренные' },
    { id: 'blocked', label: 'Заблокированные' },
];

const PLATFORMS = [
    { id: 'p1', name: 'OZON', domain: 'ozon.ru', status: 'approved', logo: IMG.businessLogo1, icon: <IconIndex31 /> },
    { id: 'p2', name: 'FunPay', domain: 'funpay.com', status: 'pending', logo: IMG.businessLogo2, icon: <IconIndex30 /> },
];

const STORES = [
    { id: 's1', name: 'Kupikod', domain: 'kupikod.com', badge: 'Цифровые товары', isDot: true, status: 'blocked', logo: IMG.businessLogo3, icon: <IconIndex29 /> },
    { id: 's2', name: 'FunPay', domain: 'funpay.com', badge: 'Цифровые товары', isDot: false, status: 'approved', logo: IMG.businessLogo2, icon: <IconIndex28 /> },
    { id: 's3', name: 'FunPay', domain: 'funpay.com', badge: 'Цифровые товары', isDot: false, status: 'pending', logo: IMG.businessLogo2, icon: <IconIndex27 /> },
];

export default function Business() {
    const isDark = useTheme();

    // 2. Стейт для табов
    const [activeTab, setActiveTab] = useState(NAV_TABS[0].id);

    // 3. Логика фильтрации (фильтруем оба массива)
    const filterData = (items: any[]) => {
        if (activeTab === 'all') return items;
        return items.filter(item => item.status === activeTab);
    };

    const filteredPlatforms = filterData(PLATFORMS);
    const filteredStores = filterData(STORES);

    return (
        <div className="flex flex-col min-h-screen pb-[100px]">
            <BottomNav />

            <section className="relative pt-6 flex-1 bg-(--bg-main)">
                <div className="container px-4 mx-auto">
                    <h2 className="font-medium font-nagel text-2xl leading-none mb-4 text-(--text-main)">Магазины и площадки</h2>

                    {/* ТАБЫ */}
                    <div className="-mx-4 flex flex-col mb-4 border-b border-(--border-secondary)">
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

                    <div className="flex flex-col gap-6 w-full">

                        <div className="flex flex-col gap-3 w-full">
                            <label className=" text-(--grey)">Площадки</label>


                            <MainBtn theme="secondary" size="md" className="w-full flex items-center justify-center gap-2 bg-(--btn-secondary-bg) text-(--text-main) hover:opacity-80 rounded-[14px] py-2">
                                <img src={isDark ? IMG.plusIconDark : IMG.plusIcon} alt="Add" className="shrink-0 w-5 h-5" />
                                <span className="font-medium">Добавить</span>
                            </MainBtn>

                            <div className="flex flex-col gap-2">
                                {filteredPlatforms.length > 0 ? filteredPlatforms.map((platform) => (
                                    <Link key={platform.id} to={'#'} className="w-full flex items-center justify-between p-3 gap-3 bg-(--btn-profile-bg) rounded-2xl hover:opacity-80 transition-opacity">
                                        <img src={platform.logo} alt={platform.name} className="shrink-0 rounded-full w-10 h-10 object-cover" />
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 text-base text-(--text-main)">
                                                <b className="font-medium text-lg">{platform.name}</b>
                                                <span className="text-(--grey)">{platform.domain}</span>
                                            </div>
                                        </div>
                                        <div className="shrink-0 text-(--grey)">
                                            {platform.icon}
                                        </div>
                                    </Link>
                                )) : <p className="text-sm text-(--grey) text-center py-2">Нет площадок</p>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 w-full">
                            <label className=" text-(--grey)">Магазины</label>
                            <MainBtn theme="secondary" size="md" className="w-full flex items-center justify-center gap-2 bg-(--btn-secondary-bg) text-(--text-main) hover:opacity-80 rounded-[14px] py-2">
                                <img src={isDark ? IMG.plusIconDark : IMG.plusIcon} alt="Add" className="shrink-0 w-5 h-5" />
                                <span className="font-medium">Добавить</span>
                            </MainBtn>

                            <div className="flex flex-col gap-2">
                                {filteredStores.length > 0 ? filteredStores.map((store) => (
                                    <Link key={store.id} to={'#'} className="w-full flex items-center justify-between p-3 gap-3 bg-(--btn-profile-bg) rounded-2xl hover:opacity-80 transition-opacity">
                                        <img src={store.logo} alt={store.name} className="shrink-0 rounded-full w-10 h-10 object-cover" />
                                        <div className="flex-1 flex flex-col items-start gap-1">
                                            <div className="flex items-center gap-2 text-base text-(--text-main)">
                                                <b className="font-medium text-lg">{store.name}</b>
                                                <span className="text-(--grey)">{store.domain}</span>
                                                {store.status === 'blocked' && (
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#DC3545] shrink-0 ml-1"></div>
                                                )}
                                            </div>
                                            {store.badge && (
                                                <span className="bg-[#367DF0]/10 text-xs font-medium text-[#367DF0] px-3 py-1 rounded-full">
                                                    {store.badge}
                                                </span>
                                            )}
                                        </div>
                                        <div className="shrink-0 text-(--grey)">
                                            {store.icon}
                                        </div>
                                    </Link>
                                )) : <p className="text-sm text-(--grey) text-center py-2">Нет магазинов</p>}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}