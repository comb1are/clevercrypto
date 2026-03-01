import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

export default function BusinessSettings() {
    return (<div className="flex flex-col min-h-screen pb-[100px]">
        <Header type="inner" leftLink="/business" leftLinkIcon="">Настройки магазина</Header>

        <section className="flex-1 flex mt-4">
            <div className="container px-4 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-8 w-full">
                    {/* Аватар */}
                    <div className="flex flex-col items-center gap-4 w-full">
                        <div className="shrink-0 rounded-full overflow-hidden w-[80px] h-[80px]">
                            <img src={IMG.businessLogo2} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="relative">
                            <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10" />
                            <MainBtn theme="link" size="sm" className="relative z-5 text-[#367DF0] px-[20px] py-[9px] bg-(--blue-bg)  rounded-[18px] text-sm">Загрузить аватар</MainBtn>
                        </div>
                    </div>

                    {/* Поля ввода */}
                    <div className="w-full flex flex-col gap-6">
                        <div className="w-full flex flex-col">
                            <p className="text-(--grey) mb-1.5 text-sm">ID магазина</p>
                            <input type="text" placeholder="Введите ID магазина" className="w-full text-base px-4 py-[14px] bg-(--btn-secondary-bg) rounded-2xl outline-none text-(--text-main) placeholder-(--grey)" />
                        </div>

                        <div className="w-full flex flex-col">
                            <p className="text-(--grey) mb-1.5 text-sm">API token</p>
                            <input type="text" placeholder="Введите API token" className="w-full text-base px-4 py-[14px] bg-(--btn-secondary-bg) rounded-2xl outline-none text-(--text-main) placeholder-(--grey)" />
                        </div>

                        <div className="w-full flex flex-col">
                            <p className="text-(--grey) mb-1.5 text-sm">Ссылка для уведомлений</p>
                            <input type="text" placeholder="Введите ссылку для уведомлений" className="w-full text-base px-4 py-[14px] bg-(--btn-secondary-bg) rounded-2xl outline-none text-(--text-main) placeholder-(--grey)" />
                        </div>

                        <div className="w-full flex flex-col">
                            <p className="text-(--grey) mb-1.5 text-sm">Ссылка перенаправления</p>
                            <input type="text" placeholder="Введите ссылку перенаправления" className="w-full text-base px-4 py-[14px] bg-(--btn-secondary-bg) rounded-2xl outline-none text-(--text-main) placeholder-(--grey)" />
                        </div>
                    </div>
                </div>

                <div className="w-full mt-auto pt-4">
                    <MainBtn theme="neutral" className="w-full font-medium justify-center text-center py-[14px] bg-(--text-main) text-(--bg-main) rounded-2xl">Сохранить изменения</MainBtn>
                </div>
            </div>
        </section>
    </div>)
}