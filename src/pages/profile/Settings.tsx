import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

export default function ProfileSettings() {
    return (<div className="wrapper flex flex-col justify-between p-0 h-screen overflow-y-auto pb-[100px]">
        <Header type="inner" leftLink="/profile" leftLinkIcon="">Основные настройки</Header>

        {/* <!-- Profile settings --> */}
        <section className="h-full flex flex-col pt-3 px-4">
            <div className="container h-full flex flex-col justify-between gap-3 mx-auto">
                <div className="flex flex-col items-center gap-3">
                    <div className="shrink-0 rounded-full overflow-hidden w-[80px] h-[80px]">
                        <img src={IMG.avatar} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="relative px-[20px] py-[9px] mt-2 rounded-[18px] text-[#367DF0] bg-blue-600/12">
                        <input type="file" onChange={() => { }} name="" id="" className="absolute top-0  left-0 w-full h-full opacity-0 cursor-pointer z-10" />
                        <MainBtn theme="link" size="sm">Загрузить аватар</MainBtn>
                    </div>
                    <div className="w-full">
                        <label className="mb-2 block text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Имя</label>
                        <input type="text" onChange={() => { }} value="Alex" className="px-4 text-base tracking-[0.02em] text-(--text-main) h-[48px] bg-(--intro-btn-bg) caret-[#007aff] w-full border-none rounded-[18px] focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label className="mb-2 block text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Фамилия</label>
                        <input type="text" onChange={() => { }} value="Bathory" className="px-4 text-base tracking-[0.02em] text-(--text-main) h-[48px] bg-(--intro-btn-bg) caret-[#007aff] w-full border-none rounded-[18px] focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label className="mb-2 block text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Telegram</label>
                        <input type="text" onChange={() => { }} value="@kaste777" className="px-4 text-base tracking-[0.02em] text-(--text-main) h-[48px] bg-(--intro-btn-bg) caret-[#007aff] w-full border-none rounded-[18px] focus:outline-none" />
                    </div>
                </div>
                <MainBtn theme="neutral" className="font-medium mt-auto mb-4 py-[14px] rounded-[18px] bg-(--text-main) text-(--bg-main) tracking-[4%]">Сохранить изменения</MainBtn>
            </div>
        </section>
        {/* <!-- Profile settings end --> */}
    </div>)
}