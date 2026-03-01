import { Link } from "react-router-dom";
import Header from "../../components/Header";
import IMG from "../../assets/images";
import IconCreated23 from "../../components/Icons/IconCreated23";
import IconCreated24 from "../../components/Icons/IconCreated24";
import IconCreated25 from "../../components/Icons/IconCreated25";
import IconCreated26 from "../../components/Icons/IconCreated26";
import { useTheme } from "../../hooks/useTheme";

export default function BusinessCreated() {
    const isDark = useTheme();

    return (<div className="flex flex-col min-h-screen">
        <Header type="inner" leftLink="/business" leftLinkIcon="" className="border-0"> </Header>

        <section className="flex-1 flex flex-col justify-center h-full">
            <div className="container px-4 h-full flex flex-col items-center flex-1 justify-between py-6">

                <div className="flex flex-col items-center gap-3 text-center mt-auto mb-10 w-full">
                    <img src={IMG.successCheck} width="48" alt="" className="mb-2" />
                    <h2 className="font-medium font-nagel text-3xl leading-none text-(--text-main)">Ваш счёт успешно создан!</h2>
                    <p className="text-base text-(--grey) max-w-[280px]">Поделитесь ссылкой или QR-кодом, чтобы принять оплату</p>
                </div>

                <div className="mb-10 w-full flex justify-center">
                    <div className="bg-white p-4 rounded-3xl w-[200px] h-[200px] flex items-center justify-center">
                        <img src={IMG.accountCreatedQrCode} alt="QR Code" className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="w-full mt-auto mb-6">
                    <input
                        type="text"
                        readOnly
                        className="w-full px-4 py-[14px] text-sm md:text-base border-0 bg-(--intro-btn-bg) text-(--text-main) rounded-[18px] mb-3 outline-none"
                        value="https://4clever.io/pay?hash=9545b30095572b2e373d8740b71f791a"
                    />

                    <div className="grid grid-cols-2 gap-2 w-full">
                        <Link to={'#'} className="w-full flex flex-col items-center text-center gap-2">
                            <div className="flex items-center justify-center w-full bg-(--intro-btn-bg) text-(--text-main) py-4 rounded-[18px] transition-colors hover:bg-white/10 relative">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity peer-hover:opacity-100">
                                    <IconCreated26 />
                                </div>
                                <div className="flex items-center justify-center">
                                    {isDark ? <IconCreated25 /> : <IconCreated26 />}
                                </div>
                            </div>
                            <span className="text-(--text-main) text-sm font-medium">Скопировать</span>
                        </Link>

                        <Link to={'#'} className="w-full flex flex-col items-center text-center gap-2">
                            <div className="flex items-center justify-center w-full bg-(--intro-btn-bg) text-(--text-main) py-4 rounded-[18px] transition-colors hover:bg-white/10 relative">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity peer-hover:opacity-100">
                                    <IconCreated24 />
                                </div>
                                <div className="flex items-center justify-center">
                                    {isDark ? <IconCreated23 /> : <IconCreated24 />}
                                </div>
                            </div>
                            <span className="text-(--text-main) text-sm font-medium">Поделиться</span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    </div>)
}