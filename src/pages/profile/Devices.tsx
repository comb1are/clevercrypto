import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";
import IconDevices47 from "../../components/Icons/IconDevices47";
import IconDevices48 from "../../components/Icons/IconDevices48";
import IconDevices49 from "../../components/Icons/IconDevices49";
import { useTheme } from "../../hooks/useTheme";

export default function ProfileDevices() {
    const isDark = useTheme();

    return (<div className="wrapper flex flex-col justify-between p-0 h-screen overflow-y-auto pb-[100px]">
        <Header type="inner" leftLink="/profile" leftLinkIcon="">Активные сессии</Header>

        {/* <!-- Profile devices --> */}
        <section className="h-full flex flex-col pt-3 px-4">
            <div className="container h-full flex flex-col gap-4 mx-auto">
                <div className="w-full flex flex-col gap-3">
                    <h3 className="font-medium text-base text-(--text-main)">Это устройство</h3>
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-[12px]">
                            <img src={IMG.windowsIcon} width="40" alt="" className="shrink-0" />
                            <div>
                                <div className="font-medium text-base leading-[1.37] tracking-[0.03em] text-(--text-main) mb-[2px]">Windows 11</div>
                                <p className="text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Krasnodar, Russia • Текущий</p>
                            </div>
                        </div>
                        <button className="flex items-center justify-center shrink-0">
                            <IconDevices49 />
                        </button>
                    </div>
                    <MainBtn theme="red" size="md" className="flex bg-(--red-bg) text-[#DC3545] items-center justify-center py-[9px] mt-2 rounded-2xl gap-2">
                        <img src={IMG.minusRed} className="shrink-0" alt="" />
                        <span>Завершить все другие сессии</span>
                    </MainBtn>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h3 className="font-medium text-base text-(--text-main)">Другие устройства</h3>
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-[12px]">
                            <img src={IMG.androidIconPng} width="40" alt="" className="shrink-0" />
                            <div>
                                <div className="font-medium text-base leading-[1.37] tracking-[0.03em] text-(--text-main) mb-[2px]">Android</div>
                                <p className="text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Krasnodar, Russia • 16:30</p>
                            </div>
                        </div>
                        <button className="flex items-center justify-center shrink-0">
                            <IconDevices48 />
                        </button>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-[12px]">
                            <img src={isDark ? IMG.appleIconDarkPng : IMG.appleIconPng} width="40" alt="" className="shrink-0" />
                            <div>
                                <div className="font-medium text-base leading-[1.37] tracking-[0.03em] text-(--text-main) mb-[2px]">IOS</div>
                                <p className="text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Krasnodar, Russia • 12:16</p>
                            </div>
                        </div>
                        <button className="flex items-center justify-center shrink-0">
                            <IconDevices47 />
                        </button>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Profile devices end --> */}
    </div>)
}