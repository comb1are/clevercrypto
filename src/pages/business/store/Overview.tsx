import IMG from "../../../assets/images";
import Header from "../../../components/Header";
import Alert from "../../../components/UI/Alert";
import MainBtn from "../../../components/UI/MainBtn";
import IconOverview83 from "../../../components/Icons/IconOverview83";
import IconOverview84 from "../../../components/Icons/IconOverview84";
import IconOverview85 from "../../../components/Icons/IconOverview85";
import IconOverview86 from "../../../components/Icons/IconOverview86";
import IconBank2 from "../../../components/Icons/IconBank2";
import { useTheme } from "../../../hooks/useTheme";
export default function BusinessStoreOverview() {

    const isDark = useTheme();
    return (<div className="flex flex-col min-h-screen pb-[100px]">
        <Header type="inner" leftLink="/business">Обзор магазина</Header>

        <section className="relative pt-4 flex-1">
            <div className="container px-4">

                <Alert type="red" className="mb-3 flex items-center gap-3 rounded-[14px] p-3 text-sm">
                    <img src={IMG.alertCircle} alt="" className="shrink-0 mt-0.5" />
                    <p className="text-[#FF4D4F]">Будьте бдительны! На магазин недавно был открыт спор. <a href="#" className="text-blue-500">Посмотреть детали спора...</a></p>
                </Alert>

                <div className="flex flex-col items-start gap-4 p-4 mb-5 bg-(--btn-secondary-bg) rounded-2xl">
                    <div className="flex items-center gap-3">
                        <img src={IMG.businessLogo2} width="44" alt="" className="shrink-0 rounded-full w-11 h-11 object-cover" />
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-base text-(--text-main)">
                                <b className="font-medium text-lg">FunPay</b>
                                <span className="text-(--grey)">funpay.com</span>
                            </div>
                            <div className="text-sm text-(--grey)">ID: #194205</div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <h4 className="text-sm font-medium text-(--text-main)">Описание</h4>
                        <p className="text-sm text-(--grey) leading-relaxed">Potter ipsum wand elf parchment wingardium. Mellow veil stunning inches ministry-of-magic again goblet stunning</p>
                    </div>

                    <div className="flex items-center justify-start gap-2 w-full">
                        <Alert type="red" className="flex items-center px-2 py-1 rounded-full">
                            <img src={IMG.errorIcon || IMG.timesRedCircle} height="16" alt="" className="shrink-0 w-4 h-4" />
                            <span className="text-sm text-[#FF4D4F] ">Заблокирован</span>
                        </Alert>
                        <span className=" text-sm bg-(--blue-bg) text-blue-500 px-3 py-1 rounded-full">Цифровые товары</span>
                    </div>

                    <MainBtn theme="neutral" className="w-full justify-center flex items-center gap-2 py-[14px] bg-(--btn-third-bg) text-(--text-main) rounded-2xl mt-1">
                        <img src={IMG.storeReviewCardBtnIcon} alt="" className="shrink-0" />
                        <span className="font-medium">Изменить процентную ставку</span>
                    </MainBtn>

                    <MainBtn theme="neutral" className="w-full justify-center flex items-center gap-2 py-[14px] bg-(--btn-third-bg) text-(--text-main) rounded-2xl font-medium">Разблокировать магазин</MainBtn>
                </div>

                <div className="font-medium font-nagel text-2xl leading-none mb-4 text-(--text-main)">Статистика</div>

                <div className="flex flex-col gap-2 w-full mb-6">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-(--btn-secondary-bg) rounded-2xl p-4 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-sm text-(--text-main)">
                                <img src={IMG.statisticaCardIcon1} alt="" className="shrink-0" />
                                <p>Общ. конверсия</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IconOverview86 />
                                <b className="font-medium text-lg text-(--text-main)">70%</b>
                            </div>
                        </div>
                        <div className="bg-(--btn-secondary-bg) rounded-2xl p-4 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-sm text-(--text-main)">
                                <img src={IMG.statisticaCardIcon2} alt="" className="shrink-0" />
                                <p>Криптовалюта</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IconOverview85 />
                                <b className="font-medium text-lg text-(--text-main)">70%</b>
                            </div>
                        </div>
                        <div className="bg-(--btn-secondary-bg) rounded-2xl p-4 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-sm text-(--text-main)">
                                <img src={IMG.statisticaCardIcon3} alt="" className="shrink-0" />
                                <p>Оплата картой</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IconOverview84 />
                                <b className="font-medium text-lg text-(--text-main)">70%</b>
                            </div>
                        </div>
                        <div className="bg-(--btn-secondary-bg) rounded-2xl p-4 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-sm text-(--text-main)">
                                <img src={IMG.statisticaCardIcon4} alt="" className="shrink-0" />
                                <p>СБП</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IconOverview83 />
                                <b className="font-medium text-lg text-(--text-main)">70%</b>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-3 pr-3 pl-4 bg-(--btn-secondary-bg) rounded-2xl mt-2">
                        <p className="text-base text-(--text-main)">Оценки</p>
                        <div className="flex gap-2">
                            <Alert type="teal" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full">
                                <img src={IMG.likeGreen} height="16" alt="" className="shrink-0" />
                                <span className="text-sm font-medium">2 451</span>
                            </Alert>
                            <Alert type="red" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full">
                                <img src={IMG.alertRed} height="16" alt="" className="shrink-0" />
                                <span className="text-sm font-medium">1</span>
                            </Alert>
                        </div>
                    </div>

                    <MainBtn to="#" className="py-2 w-full justify-center flex items-center gap-2 bg-[#DC35451A] text-[#DC3545] hover:bg-[#DC3545]/20 rounded-2xl mt-1 transition-colors">
                        <img src={IMG.alertRed} alt="" className="shrink-0" />
                        <span className="font-medium">Открыть спор</span>
                    </MainBtn>
                </div>

                <div className="font-medium font-nagel text-2xl leading-none mb-4 text-(--text-main)">Открытые споры</div>

                <div className="flex flex-col items-start gap-3 p-4 bg-(--btn-secondary-bg) rounded-2xl mb-4">
                    <div className="flex items-center gap-3 w-full">
                        <img src={IMG.businessLogo3} width="34" height="34" alt="" className="object-cover rounded-full shrink-0 w-[34px] h-[34px]" />
                        <h3 className="text-base font-medium text-(--text-main)">Kupikod</h3>
                        <div className="ml-auto bg-(--intro-btn-bg) px-2 py-1 rounded-full flex gap-1 items-center">
                            <img src={IMG.bank1} alt="" className="shrink-0 h-4" />
                            <IconBank2 className="shrink-0 h-4 " {...(isDark ? { fill: "#fff" } : "")} />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 py-1">
                        <img src={IMG.alertRed} height="16" alt="" className="shrink-0" />
                        <span className="text-sm font-medium text-[#FF4D4F]">Платеж не зачислен</span>
                    </div>
                    <p className="w-full  text-(--grey) leading-relaxed">Potter ipsum wand elf parchment wingardium. Mellow veil stunning inches ministry-of-magic again goblet stunning. Ground troll dervish daisies bedroom fawkes tonight teacup creature.</p>
                    <ul className="w-full flex items-center justify-between  pt-3 mt-1 text-(--grey)">
                        <li>4 дек. 2024</li>
                        <li>ID: #194205</li>
                    </ul>
                </div>

            </div>
        </section>
    </div>)
}