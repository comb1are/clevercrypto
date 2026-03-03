import IMG from "../../assets/images";
import MainBtn from "../../components/UI/MainBtn";
import IconSuccess46 from "../../components/Icons/IconSuccess46";
import { useTheme } from "../../hooks/useTheme";

export default function PayingSuccess() {
    const isDark = useTheme();
    return (<div className="flex flex-col min-h-screen">
        
        <section className="flex flex-col flex-1 pb-24 items-center justify-center relative">
            <div className="container px-4 flex flex-col items-center justify-center gap-3 relative w-full h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] rounded-full -z-10 bg-[radial-gradient(41.76%_41.76%_at_50%_50%,rgba(26,161,121,0.45)_0%,rgba(26,161,121,0)_100%)] pointer-events-none"></div>
                <img src={IMG.paymentSuccessCard} width={48} height={48} alt="" className="w-12 h-12" />
                <h2 className="font-medium leading-none text-center font-nagel text-[32px] text-(--text-main)">Оплата успешно прошла</h2>
                <p className="text-sm text-center text-(--grey) leading-[137%] tracking-[0.03em]">
                    На ваш кошелёк зачислено: <b className="font-medium text-(--text-main)">440.54 USDT</b>
                </p>


            </div>
        </section>
        

        <section className="w-full pb-8">
            <div className="w-full px-4 mb-4">
                <MainBtn to="/home" className="w-full flex items-center justify-center font-medium gap-2 bg-(--bg-main) text-(--text-main) py-[14px] rounded-[18px]">
                    {isDark ? <IconSuccess46 fill="#282828" /> : <IconSuccess46 />}
                    <span className="font-medium tracking-[0.04em]">Вернуться в магазин</span>
                </MainBtn>
            </div>
            <div className="container px-4">
                <MainBtn className="w-full flex items-center justify-center gap-3 bg-(--btn-third-bg) text-(--text-main) py-3 rounded-[18px]">
                    <img src={IMG.warningSpace} alt="" className="shrink-0 w-6 h-6" />
                    <span className="font-medium tracking-[0.04em]">Открыть спор</span>
                </MainBtn>
            </div>
        </section>
    </div>)
}