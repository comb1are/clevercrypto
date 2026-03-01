import IMG from "../../../assets/images";
import Header from "../../../components/Header";
import MainBtn from "../../../components/UI/MainBtn";
import Alert from "../../../components/UI/Alert";
import IconIndex71 from "../../../components/Icons/IconIndex71";
import IconIndex72 from "../../../components/Icons/IconIndex72";
import IconIndex73 from "../../../components/Icons/IconIndex73";
import IconIndex74 from "../../../components/Icons/IconIndex74";
import IconIndex75 from "../../../components/Icons/IconIndex75";
import { useTheme } from "../../../hooks/useTheme";
import { useSliderObserver } from "../../../hooks/useSliderObserver";

const STATISTIC_CARDS = [
    { id: 1, title: 'Оборот за сутки', value: '24 491 940,54 ₽', alert: { value: '+104 549 ₽', percent: '7%', type: 'teal', icon: <IconIndex75 /> } },
    { id: 2, title: 'Средний чек', value: '3 291 ₽', alert: { value: '-104 549 ₽', percent: '7%', type: 'red', icon: <IconIndex74 /> } },
    { id: 3, title: 'Оборот за сутки', value: '24 491 940,54 ₽', alert: { value: '+104 549 ₽', percent: '7%', type: 'teal', icon: <IconIndex73 /> } },
    { id: 4, title: 'Средний чек', value: '3 291 ₽', alert: { value: '-104 549 ₽', percent: '7%', type: 'red', icon: <IconIndex72 /> } },
];

const REVIEWS_LIST = [
    { id: 1, name: 'username', rating: '4.5', text: 'Potter ipsum wand elf parchment wingardium. Mellow veil stunning inches ministry-of-magic again goblet stunning. Ground troll dervish daisies bedroom fawkes tonight teacup creature.', date: '4 дек. 2024', avatar: IMG.reviewLogo1 },
    { id: 2, name: 'username', rating: '4.5', text: 'Potter ipsum wand elf parchment wingardium. Mellow veil stunning inches ministry-of-magic again goblet stunning. Ground troll dervish daisies bedroom fawkes tonight teacup creature.', date: '4 дек. 2024', avatar: IMG.reviewLogo1 },
    { id: 3, name: 'username', rating: '4.5', text: 'Potter ipsum wand elf parchment wingardium. Mellow veil stunning inches ministry-of-magic again goblet stunning. Ground troll dervish daisies bedroom fawkes tonight teacup creature.', date: '4 дек. 2024', avatar: IMG.reviewLogo1 },
    { id: 4, name: 'username', rating: '4.5', text: 'Potter ipsum wand elf parchment wingardium. Mellow veil stunning inches ministry-of-magic again goblet stunning. Ground troll dervish daisies bedroom fawkes tonight teacup creature.', date: '4 дек. 2024', avatar: IMG.reviewLogo1 },
    { id: 5, name: 'username', rating: '4.5', text: 'Potter ipsum wand elf parchment wingardium. Mellow veil stunning inches ministry-of-magic again goblet stunning. Ground troll dervish daisies bedroom fawkes tonight teacup creature.', date: '4 дек. 2024', avatar: IMG.reviewLogo1 },
    { id: 6, name: 'username', rating: '4.5', text: 'Potter ipsum wand elf parchment wingardium. Mellow veil stunning inches ministry-of-magic again goblet stunning. Ground troll dervish daisies bedroom fawkes tonight teacup creature.', date: '4 дек. 2024', avatar: IMG.reviewLogo1 },
];

export default function BusinessStore() {
    const isDark = useTheme();
    const { activeIndex, sliderRef, cardsRef } = useSliderObserver();

    return (<div className="flex flex-col min-h-screen pb-[100px]">
        <Header type="inner" leftLink="/business" leftLinkIcon="">Профиль магазина</Header>

        <section className="flex-1 flex mt-4">
            <div className="container px-4 flex flex-col h-full w-full">

                <div className="w-full flex flex-col items-center gap-4">
                    <div className="text-center flex flex-col items-center">
                        <img src={IMG.businessLogo2} width="80" height="80" alt="" className="shrink-0 rounded-full object-cover" />
                        <h3 className="font-medium text-[22px] leading-tight mt-2 pt-1 text-(--text-main)">FunPay</h3>
                        <p className="text-base text-(--grey)">funpay.com</p>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <MainBtn to="/business/invoicing" theme="neutral" className="w-full font-medium justify-center flex py-[14px] bg-(--text-main) text-(--bg-main) rounded-2xl">Выставить счёт</MainBtn>
                        <MainBtn to="/business/settings" theme="secondary" className="w-full flex justify-center gap-2 py-[14px] bg-(--btn-secondary-bg) text-(--text-main) rounded-2xl transition-colors hover:bg-white/10">
                            <img src={isDark ? IMG.settingsDark : IMG.settings} alt="" className="shrink-0" />
                            <span>Настройки магазина</span>
                        </MainBtn>
                    </div>
                </div>

                <div className="mt-8 mb-6 relative">
                    <div className="font-medium font-nagel text-2xl leading-none mb-4 text-(--text-main)">Статистика</div>

                    <div ref={sliderRef} className="-mx-4 flex w-full overflow-x-auto snap-x snap-mandatory gap-3 pb-2 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {STATISTIC_CARDS.map((card, index) => (
                            <div key={card.id} ref={(el) => { cardsRef.current[index] = el; }} className="shrink-0 w-full snap-center transition-opacity duration-300">
                                <div className="flex flex-col items-start gap-3 p-4 border border-(--grey) rounded-2xl h-full">
                                    <p className="text-(--grey)">{card.title}</p>
                                    <h3 className="font-medium text-2xl text-(--text-main)">{card.value}</h3>

                                    {card.alert.type === 'teal' ? (
                                        <Alert type="teal" className="py-1 px-3 gap-2 flex items-center rounded-full mt-auto text-sm">
                                            <span>{card.alert.value}</span>
                                            {card.alert.icon}
                                            <span className="font-medium">{card.alert.percent}</span>
                                        </Alert>
                                    ) : (
                                        <Alert type="red" className="py-1 px-3 gap-2 flex items-center rounded-full mt-auto text-sm">
                                            <span>{card.alert.value}</span>
                                            {card.alert.icon}
                                            <span className="font-medium">{card.alert.percent}</span>
                                        </Alert>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-1.5 mt-2 mb-2">
                        {STATISTIC_CARDS.map((card, index) => (
                            <div
                                key={`dot-${card.id}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-(--title-color) w-4" : "bg-(--25-opacity) w-1.5"}`}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <div className="font-medium font-nagel text-2xl leading-none mb-4 text-(--text-main) flex items-center gap-2">
                        Отзывы <span className="text-(--grey) text-lg">14 429</span>
                    </div>

                    <ul className="flex flex-col gap-3">
                        {REVIEWS_LIST.map((review) => (
                            <li key={review.id} className="bg-(--btn-secondary-bg) rounded-2xl p-4 flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <img src={review.avatar} width="34" height="34" className="shrink-0 w-[34px] h-[34px] rounded-full object-cover" alt="" />
                                        <div className="text-sm font-medium text-(--text-main)">{review.name}</div>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-[#FFB524]/10 px-2 py-1 rounded-full">
                                        <IconIndex71 />
                                        <div className="text-sm font-medium text-[#FFB524]">
                                            {review.rating}<span className="text-white/50">/5</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-(--grey) leading-relaxed">{review.text}</p>
                                <div className="text-xs text-(--grey) mt-1">{review.date}</div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    </div>)
}