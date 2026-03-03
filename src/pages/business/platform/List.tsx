import { useState } from "react";
import { Link } from "react-router-dom";
import IMG from "../../../assets/images";
import Header from "../../../components/Header";
import IconList62 from "../../../components/Icons/IconList62";
import IconList63 from "../../../components/Icons/IconList63";
import IconList64 from "../../../components/Icons/IconList64";
import IconList65 from "../../../components/Icons/IconList65";
import IconList66 from "../../../components/Icons/IconList66";
import IconList67 from "../../../components/Icons/IconList67";
import IconList68 from "../../../components/Icons/IconList68";
import IconList69 from "../../../components/Icons/IconList69";
import clsx from "clsx";
import { useGetPlatformsQuery } from "../../../store/api/businessApi";
import DotsLoader from "../../../components/DotsLoader";

const NAV_TABS = [
    { id: 'all', label: 'Все' },
    { id: 'pending', label: 'Ждут проверки', count: 5 },
    { id: 'approved', label: 'Одобренные' },
    { id: 'blocked', label: 'Заблокированные' },
];


const ICON_RIGHT_POOL = [<IconList68 />, <IconList66 />, <IconList65 />, <IconList64 />, <IconList63 />, <IconList62 />];
const ICON_LEFT_POOL = [<IconList69 />, <IconList67 />];

const LOGO_MAP: Record<string, string> = {
    'OZON': IMG.businessLogo1,
    'FunPay': IMG.businessLogo2,
    'Kupikod': IMG.businessLogo3,
};

export default function BusinessPlatformList() {
    const [activeTab, setActiveTab] = useState(NAV_TABS[0].id);
    const { data: platforms, isLoading, isError } = useGetPlatformsQuery();

    const platformList = platforms ?? [];

    const filteredPlatforms = activeTab === 'all'
        ? platformList
        : platformList.filter(platform => platform.status === activeTab);

    return (<div className="flex flex-col min-h-screen pb-[100px]">
        <Header type="inner" leftLink="/business" rightLinkType="search">Список площадок</Header>

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

                {isLoading && (
                    <div className="flex items-center justify-center py-10">
                        <DotsLoader />
                    </div>
                )}

                {isError && (
                    <div className="text-center py-10 text-[#FF4D4F]">Ошибка загрузки данных</div>
                )}

                {!isLoading && !isError && (
                    <div className="flex flex-col gap-2 w-full">
                        {filteredPlatforms.length > 0 ? filteredPlatforms.map((platform, index) => (
                            <Link key={platform.id} to={'#'} className="w-full flex items-center justify-between p-3 gap-3 bg-(--btn-profile-bg) rounded-2xl hover:bg-white/10 transition-colors">
                                <img src={LOGO_MAP[platform.name] ?? IMG.businessLogo3} alt={platform.name} className="shrink-0 rounded-full w-10 h-10 object-cover" />

                                <div className="flex flex-col items-start gap-1 flex-1">
                                    <div className="flex items-center gap-2 text-base text-(--text-main)">
                                        <b className="font-medium text-lg">{platform.name}</b>
                                        <span className="text-(--grey)">{platform.domain}</span>
                                    </div>

                                    {platform.status === 'approved' && platform.percent && (
                                        <div className="flex items-center gap-2">
                                            {ICON_LEFT_POOL[index % ICON_LEFT_POOL.length]}
                                            <b className="text-base font-medium text-(--text-main)">{platform.percent}%</b>
                                            <span className="text-sm text-(--grey)">Выдач</span>
                                        </div>
                                    )}

                                    {platform.status === 'approved' && !platform.percent && (
                                        <div className="flex items-center gap-1.5 bg-[#1AA179]/10 px-3 py-1 rounded-full">
                                            <img src={IMG.checkGreen} alt="" className="shrink-0 w-4 h-4" />
                                            <span className="text-sm text-[#1AA179] font-medium">Заявка одобрена</span>
                                        </div>
                                    )}

                                    {platform.status === 'blocked' && (
                                        <div className="flex items-center gap-1.5 bg-[#FF4D4F]/10 px-3 py-1 rounded-full">
                                            <img src={IMG.timesRed} alt="" className="shrink-0 w-4 h-4" />
                                            <span className="text-sm text-[#FF4D4F] font-medium">Заявка отлонена</span>
                                        </div>
                                    )}

                                    {platform.status === 'pending' && (
                                        <div className="flex items-center gap-1.5 bg-(--border-secondary) px-3 py-1 rounded-full">
                                            <span className="text-sm text-(--grey) font-medium">Ожидает проверки</span>
                                        </div>
                                    )}
                                </div>

                                <div className="shrink-0 text-[#ADB5BD]">
                                    {ICON_RIGHT_POOL[index % ICON_RIGHT_POOL.length]}
                                </div>
                            </Link>
                        )) : <p className="text-sm text-(--grey) text-center py-2">Нет площадок</p>}
                    </div>
                )}

            </div>
        </section>
    </div>)
}