import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

export default function BusinessInvoicing() {
    return (<div className="flex flex-col min-h-screen pb-[100px]">
        <Header type="inner" leftLink="/business" leftLinkIcon="">Выставление счёта</Header>

        <section className="flex-1 flex mt-4">
            <div className="container px-4 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-8 w-full">
                    <div className="w-full flex  flex-col">
                        <p className="text-(--grey) mb-1.5 text-sm">Номер заказа</p>
                        <input type="text" className="w-full text-base px-4 py-[14px] bg-(--btn-secondary-bg) rounded-2xl outline-none text-(--text-main) placeholder-(--grey)" placeholder="Введите номер заказа" />
                    </div>
                    <div className="w-full relative flex flex-col">
                        <p className="text-(--grey) mb-1.5 text-sm">Сумма платежа</p>
                        <div className="w-full relative flex">
                            <input type="text" placeholder="0" className="w-full px-4 py-[14px] pr-[100px] text-base bg-(--btn-secondary-bg) text-(--text-main) placeholder-(--grey) rounded-2xl outline-none" inputMode="numeric" pattern="[0-9]*" />
                            <p className="px-4 absolute right-0 top-1/2 -translate-y-1/2 h-[70%] flex items-center text-base text-(--text-main) before:content-[''] before:w-px before:h-full before:bg-(--border-secondary) before:mr-4">USDT</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-between ">
                        <p className="text-(--grey) mb-1.5 text-sm">Редирект URL</p>
                        <input type="url" className="w-full text-base px-4 py-[14px] bg-(--btn-secondary-bg) rounded-2xl border-0 outline-none text-(--text-main) placeholder-(--grey)" placeholder="https://example.com" />
                    </div>
                    <div className="w-full mt-2">
                        <p className="text-sm text-(--grey) mb-1.5">Продавать со скидкой</p>
                        <div className="relative w-full">
                            <input type="text" placeholder="0" className="w-full px-4 py-[14px] pr-[80px] text-base bg-(--btn-secondary-bg) text-(--text-main) placeholder-(--grey) rounded-2xl outline-none" inputMode="numeric" pattern="[0-9]*" />
                            <p className="px-4 absolute right-0 top-1/2 -translate-y-1/2 h-[70%] flex items-center text-base text-(--text-main) before:content-[''] before:w-px before:h-full before:bg-(--border-secondary) before:mr-4">%</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-auto pt-4">
                    <MainBtn to="/business/created" theme="primary" className="w-full font-medium justify-center text-center py-[14px] bg-(--bg-green) text-[#282828] rounded-2xl">Создать счёт</MainBtn>
                </div>
            </div>
        </section>
    </div>)
}