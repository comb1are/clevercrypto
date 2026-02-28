import { useState } from "react"
import IMG from "../../assets/images"
import MainBtn from "../../components/UI/MainBtn";
import Offcanvas from "../../components/UI/Offcanvas";
import IconByCrypto41 from "../../components/Icons/IconByCrypto41";
import { useTheme } from "../../hooks/useTheme";

interface CryptoListInterface {
    id: number;
    icon: string;
    title: string;
    subtitle: string;
    selected: boolean;
}

export default function PayingByCrypto() {
    const isDark = useTheme();
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [cryptoList, setCryptoList] = useState<CryptoListInterface[]>([
        { id: 1, icon: IMG.paymentCrypto1, title: 'Clever', subtitle: '', selected: true },
        { id: 2, icon: IMG.paymentCrypto2, title: 'Ethereum', subtitle: '', selected: false },
        { id: 3, icon: IMG.paymentCrypto3, title: 'Bitcoin', subtitle: '', selected: false },
        { id: 4, icon: IMG.paymentCrypto4, title: 'USDT', subtitle: 'TRC-20', selected: false },
        { id: 5, icon: IMG.paymentCrypto5, title: 'USDT', subtitle: 'ERC-20', selected: false },
        { id: 6, icon: IMG.paymentCrypto6, title: 'USDT', subtitle: 'BNB-20', selected: false },
        { id: 7, icon: IMG.paymentCrypto7, title: 'USD Coin', subtitle: '', selected: false },
        { id: 8, icon: IMG.paymentCrypto8, title: 'Tron', subtitle: '', selected: false },
        { id: 9, icon: IMG.paymentCrypto9, title: 'Litecoin', subtitle: '', selected: false },
    ])

    const handleSelectCrypto = (id: number) => {
        setCryptoList(prev =>
            prev.map(item => ({
                ...item,
                selected: item.id === id,
            }))
        );
    };

    return (<div className="flex flex-col min-h-screen pb-10">
        {/* <!-- Paying --> */}
        <section className="flex flex-col flex-1 mt-4">
            <div className="container px-4 flex flex-col flex-1 justify-between gap-4">
                <div className="w-full flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-3 mb-1">
                        <div className="flex items-center gap-2">
                            <a href="#" className="flex items-center justify-center bg-(--btn-secondary-bg) rounded-full w-[40px] h-[40px] p-0 transition-colors hover:bg-white/10">
                                <img src={isDark ? IMG.arrowLeftDark : IMG.arrowLeft} alt="" />
                            </a>
                            <div className="flex items-center -space-x-2 relative">
                                <img src={IMG.payLogo1} width={40} height={40} alt="" className="shrink-0 rounded-full w-[40px] h-[40px] relative z-2 border-2 border-(--bg-main)" />
                                <img src={IMG.payLogo2} width={40} height={40} alt="" className="shrink-0 rounded-full w-[40px] h-[40px] relative z-1 border-2 border-(--bg-main)" />
                            </div>
                            <h2 className="font-medium leading-none text-(--text-main) text-lg pl-1">Funpay</h2>
                        </div>
                        <p className="text-sm text-(--grey)">#451940</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className=" text-(--grey)">Выберите валюту для оплаты</label>
                        <div className="flex items-center gap-3 pl-4 bg-(--intro-btn-bg)  rounded-[18px] h-[52px]">
                            <button className="h-full shrink-0 flex items-center justify-center">
                                <img src={isDark ? IMG.searchIcon2Dark : IMG.searchIcon2} alt="" />
                            </button>
                            <input type="text" placeholder="Найти монету..." className="w-full text-sm pr-4 bg-transparent outline-none text-(--text-main) placeholder:text-(--grey)" />
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {cryptoList.map((data, index) => (
                                <div key={index} className={`flex flex-col w-full h-full relative border border-(--border-secondary) rounded-[24px] p-4 gap-3 transition-colors overflow-hidden`}>
                                    {index === 0 && (
                                        <div className="w-[102px] h-[102px] bg-[#367DF01F] rounded-full blur-[20px] absolute -top-[30px] -left-[30px] z-0 pointer-events-none"></div>
                                    )}
                                    <div className="w-full flex items-center justify-between relative z-5">
                                        <img src={data.icon} width={28} alt="" className="shrink-0 w-7 h-7 rounded-full" />
                                        <div className={`flex items-center justify-center shrink-0 rounded-full w-6 h-6 border border-(--border-secondary) transition-colors ${data.selected ? 'border-[#367DF0]' : ''}`}>
                                            {data.selected && <span className={`w-3 h-3 rounded-full block bg-[#367DF0]`}></span>}
                                        </div>
                                    </div>

                                    <div className="flex flex-col relative z-5 flex-1">
                                        <div className="flex items-center gap-1">
                                            {index === 0 && <IconByCrypto41 fill={isDark ? '#E7E7E7' : '#E7E7E7'} />}
                                            <h3 className="font-nagel font-medium text-[16px] leading-none text-(--text-main) truncate">
                                                {data.title} {data.subtitle && <span className="text-(--grey) text-base ml-1">{data.subtitle}</span>}
                                            </h3>
                                        </div>
                                    </div>
                                    <input
                                        type="radio"
                                        name="selectCountry"
                                        checked={data.selected}
                                        onChange={() => handleSelectCrypto(data.id)}
                                        className="absolute cursor-pointer inset-0 z-10 w-full h-full opacity-0"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-3 mt-auto pt-4">
                    <MainBtn theme="neutral" className="w-full flex items-center justify-center font-medium bg-(--bg-green) text-(--bg-main) py-3 rounded-[18px]">Перейти к оплате</MainBtn>
                    <button
                        className="w-full flex items-center justify-center gap-2 bg-(--btn-third-bg) text-(--text-main) py-3 rounded-[18px]"
                        type="button"
                        onClick={() => setIsDetailModalOpen(true)}
                    >
                        <img src={isDark ? IMG.warningCircleGrayDark : IMG.warningCircleGray} alt="" className="shrink-0" />
                        <span className="text-sm font-medium tracking-[0.04em]">Детали платежа</span>
                    </button>
                </div>
            </div>
        </section>
        {/* <!-- Paying end --> */}

        <Offcanvas className="details-modal" id="detailModal" isOpen={isDetailModalOpen} onClose={() => setIsDetailModalOpen(false)}>
            <div className="container px-4 flex flex-col gap-4">
                <h2 className="font-medium leading-none text-(--text-main) text-lg tracking-[0.04em]">Детали платежа</h2>
                <ul className="flex flex-col gap-4">
                    <li className="flex items-center justify-between gap-3">
                        <p className="text-sm text-(--grey)">Продавец</p>
                        <div className="flex items-center gap-2">
                            <img src={IMG.businessLogo2} width={22} height={22} alt="" className="rounded-full w-[22px] h-[22px]" />
                            <h3 className="text-sm text-[#367DF0]">FunPay</h3>
                        </div>
                    </li>
                    <li className="flex items-center justify-between gap-3">
                        <p className="text-sm text-(--grey)">Страховой депозит</p>
                        <div className="flex items-center gap-2">
                            <img src={IMG.paymentCrypt1} width={22} height={22} alt="" className="rounded-full w-[22px] h-[22px]" />
                            <h3 className="text-sm text-(--text-main)">120.50 CLV</h3>
                        </div>
                    </li>
                    <li className="flex items-center justify-between gap-3">
                        <p className="text-sm text-(--grey)">Номер заказа</p>
                        <h3 className="text-sm shrink-0 text-(--text-main)">#124624</h3>
                    </li>
                </ul>
                <div className="w-full flex flex-col gap-3 mt-2">
                    <MainBtn to="#" theme="link" className="w-full flex items-center justify-center gap-2 bg-(--blue-bg) text-[#367DF0] py-[14px] rounded-[18px] transition-colors hover:bg-[#367DF0]/20">
                        <img src={IMG.messageIcon} alt="" className="shrink-0" />
                        <span className="font-medium tracking-[0.04em]">Написать продавцу</span>
                    </MainBtn>
                    <MainBtn to="#" theme="red" className="w-full flex items-center justify-center gap-2 bg-[#DC35451A] text-[#DC3545] py-[14px] rounded-[18px] transition-colors hover:bg-[#DC3545]/20">
                        <img src={IMG.alertRed} width={24} height={24} alt="" className="shrink-0 w-[24px] h-[24px]" />
                        <span className="font-medium tracking-[0.04em]">Открыть спор</span>
                    </MainBtn>
                    <button
                        className="w-full flex items-center justify-center text-center bg-(--btn-secondary-bg) text-(--text-main) py-[14px] rounded-[18px] transition-colors hover:bg-white/10"
                        type="button"
                        onClick={() => setIsDetailModalOpen(false)}
                    >
                        <span className="font-medium tracking-[0.04em]">Закрыть</span>
                    </button>
                </div>
            </div>
        </Offcanvas>
    </div>)
}