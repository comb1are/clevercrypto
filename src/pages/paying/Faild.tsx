import IMG from "../../assets/images";
import MainBtn from "../../components/UI/MainBtn";
import IconFaild43 from "../../components/Icons/IconFaild43";

export default function PayingFaild() {
    return (<div className="flex flex-col min-h-screen">
        {/* <!-- Payment result --> */}
        <section className="flex flex-col flex-1 pb-32 items-center justify-center relative">
            <div className="container px-4 flex flex-col items-center justify-center gap-3 relative w-full h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] rounded-full -z-10 bg-[radial-gradient(41.76%_41.76%_at_50%_50%,rgba(220,53,69,0.45)_0%,rgba(220,53,69,0)_100%)] pointer-events-none"></div>
                <img src={IMG.paymentFaildCard} width={48} height={48} alt="" className="w-12 h-12" />
                <h2 className="font-medium leading-none text-center font-nagel text-[32px] text-(--text-main)">Ошибка при оплате</h2>
                <p className="text-sm text-center text-(--grey) leading-[137%] tracking-[0.03em]">Произошла неизвестная ошибка при оплате. Попробуйте вернуться позже или написать в тех.поддержку</p>
                <div className="absolute left-0 bottom-0 w-full px-4 mb-4 flex flex-col gap-3">
                    <MainBtn className="w-full flex items-center justify-center gap-2 bg-(--btn-secondary-bg) text-(--text-main) py-[14px] rounded-[18px] transition-colors hover:bg-white/10">
                        <img src={IMG.supportLogo} alt="" className="shrink-0 w-6 h-6" />
                        <span className="font-medium tracking-[0.04em]">Написать в поддержку</span>
                    </MainBtn>
                    <MainBtn to="#" className="w-full flex items-center justify-center font-medium gap-2 bg-(--text-main) text-(--bg-main) py-[14px] rounded-[18px]">
                        <IconFaild43 />
                        <span className="font-medium tracking-[0.04em]">Вернуться в магазин</span>
                    </MainBtn>
                </div>
            </div>
        </section>
        {/* <!-- Payment result end --> */}

        <section className="w-full pb-8">
            <div className="container px-4">
                <MainBtn className="w-full flex items-center justify-center gap-3 bg-(--btn-third-bg) text-(--text-main) py-3 rounded-[18px]">
                    <img src={IMG.warningSpace} alt="" className="shrink-0 w-6 h-6" />
                    <span className="font-medium tracking-[0.04em]">Открыть спор</span>
                </MainBtn>
            </div>
        </section>
    </div>)
}