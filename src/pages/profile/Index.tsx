import IMG from "../../assets/images";
import BottomNav from "../../components/BottomNav";
import MainBtn from "../../components/UI/MainBtn";
import { Link } from "react-router-dom";
import clsx from "clsx";
import IconIndex50 from "../../components/Icons/IconIndex50";
import { useTheme } from "../../hooks/useTheme";
import { useGetUserQuery } from "../../store/api/userApi";

const LINK_LIST = [
    { id: 1, title: 'Основные настройки', to: '/profile/settings', icon: IMG.profileLink1 },
    { id: 2, title: 'Настройка API', to: '#', icon: IMG.profileLink2 },
    { id: 3, title: 'Безопасность', to: '/profile/security', icon: IMG.profileLink3 },
    { id: 4, title: 'Активные сессии', to: '/profile/devices', icon: IMG.profileLink4 },
    { id: 5, title: 'KYC верификация', to: '#', icon: IMG.profileLink5 },
    { id: 6, title: 'Реферальная программа', to: '#', icon: IMG.profileLink6 },
    { id: 7, title: 'Тарифы', to: '/profile/tarifs', icon: IMG.profileLink7 },
];

export default function Profile() {
    const isDark = useTheme();
    const { data: user } = useGetUserQuery();

    const displayName = user
        ? `${user.firstName} ${user.lastName}`.trim() || user.email
        : '...';

    return (<div className="p-0 h-screen overflow-y-auto pb-[100px]">
        <BottomNav />

        <section className="relative pt-6">
            <div className="absolute left-1/2 -translate-x-1/2"></div>
            <div className="flex flex-col items-center mx-auto px-4">
                <img src={IMG.avatar} alt="Avatar" className="rounded-full mb-3 w-[80px] h-[80px]" />
                <div className="w-full flex flex-col items-center mb-3">
                    <h2 className="font-medium font-nagel text-2xl leading-none text-center">{displayName}</h2>
                    <MainBtn to="#" theme="linear" size="sm" className="w-auto px-3 py-2 mb-4 mt-4 text-black font-medium bg-btn-glow rounded-[18px]">Обновить тариф</MainBtn>
                </div>
                <div className="w-full flex flex-col gap-3 p-5 mb-2 bg-(--btn-profile-bg) border border-(--btn-border-bg) rounded-3xl">
                    <div>
                        <div className="text flex items-center justify-between mb-3">
                            <h3 className="font-medium text-(--text-main)">Лимит платежей</h3>
                            <div className="flex items-center gap-2">
                                <h4 className="text-base font-medium text-(--text-main)">
                                    464 000<span className="text-(--grey)">/500 000</span>
                                </h4>
                                <img src={IMG.warningIcon} className="shrink-0" alt="Warning" />
                            </div>
                        </div>
                        <div className="line relative rounded-full overflow-hidden h-[10px] bg-(--intro-btn-bg)">
                            <span style={{ width: "92.8%" }} className="absolute left-0 top-0 h-full bg-[#E53935]"></span>
                        </div>
                    </div>
                    <MainBtn theme="secondary" size="md" to="/profile/payment" className="text-center w-full p-[10px] bg-(--intro-btn-bg) rounded-[14px] mt-2 flex items-center justify-center gap-3">
                        <img src={isDark ? IMG.plusIconDark : IMG.plusIcon} className="shrink-0" alt="Plus" />
                        <span>Приобрести платежи</span>
                    </MainBtn>
                </div>
                <ul className="link-list flex flex-col gap-2 mb-4 w-full px-5 py-3 bg-(--btn-profile-bg) border border-(--btn-border-bg) rounded-3xl">
                    {LINK_LIST.map((data, idx) => (
                        <li key={data.id} className="flex flex-col gap-2 border-b py-2 border-(--btn-border-bg) last:border-0">
                            <Link to={data.to} className="link-item text-base flex items-center justify-between gap-4 text-(--text-main)">
                                <span className="flex items-center gap-3">
                                    <img src={data.icon} alt={data.title} className="shrink-0" />
                                    {data.title}
                                </span>
                                <IconIndex50 />
                            </Link>
                            <div className={clsx(
                                'link-line w-full shrink-0',
                                idx + 1 === LINK_LIST.length && 'hidden'
                            )}></div>
                        </li>
                    ))}
                </ul>
                <Link to={'#'} className="log-out text-base flex items-center w-full gap-3 p-5 bg-(--btn-profile-bg) border border-(--btn-border-bg) rounded-3xl">
                    <img src={IMG.logOut} alt="Log out" className="shrink-0" />
                    <span>Выйти из аккаунта</span>
                </Link>
            </div>
        </section>
    </div>)
}