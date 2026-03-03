import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";
import { useTheme } from "../../hooks/useTheme";

export default function ProfileSecurity() {
    const isDark = useTheme();

    return (<div className="wrapper flex flex-col justify-between p-0 h-screen overflow-y-auto pb-[100px]">
        <Header type="inner" leftLink="/profile" leftLinkIcon="">Безопасность</Header>

        
        <section className="h-full flex flex-col pt-3 px-4">
            <div className="container h-full mx-auto w-full">
                <div className="font-nagel text-[24px] text-(--title-color) mb-3 pb-1 leading-none">Смена пароля</div>
                <div className="flex flex-col gap-3 mb-3 pb-1">
                    <div>
                        <label className="block mb-2 text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Текущий пароль</label>
                        <input type="password" placeholder="Введите текущий пароль" className="px-4 text-base tracking-[0.02em] text-(--text-main) h-[48px] bg-(--intro-btn-bg) caret-[#007aff] w-full border-none rounded-[18px] focus:outline-none" />
                    </div>
                    <div>
                        <label className="block mb-2 text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Новый пароль</label>
                        <input type="password" placeholder="Введите новый пароль" className="px-4 text-base tracking-[0.02em] text-(--text-main) h-[48px] bg-(--intro-btn-bg) caret-[#007aff] w-full border-none rounded-[18px] focus:outline-none" />
                    </div>
                    <div>
                        <label className="block mb-2 text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Повторите новый пароль</label>
                        <input type="password" placeholder="Повторите новый пароль" className="px-4 text-base tracking-[0.02em] text-(--text-main) h-[48px] bg-(--intro-btn-bg) caret-[#007aff] w-full border-none rounded-[18px] focus:outline-none" />
                    </div>
                </div>
                <MainBtn theme="neutral" className="font-medium mt-auto mb-4 py-[14px] rounded-[18px] bg-(--text-main) text-(--bg-main) tracking-[4%] w-full">Сменить пароль</MainBtn>

                <div className="font-nagel text-[24px] text-(--title-color) mb-3 pb-1 leading-none mt-4">Двухфакторная аутентификация</div>
                <div className="flex flex-col gap-5 border border-(--header-border) rounded-[24px] py-5 px-4 mb-4">
                    <label className="block text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">Как поставить?</label>
                    <div>
                        <h4 className="flex items-center gap-3 text-base font-medium leading-[1.37] tracking-[0.03em] text-(--title-color)">
                            <span className="flex items-center justify-center shrink-0 bg-(--intro-btn-bg) rounded-[12px] w-[34px] h-[34px] text-(--grey)">1</span>
                            Установите Google Authenticator
                        </h4>
                        <p className="text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey) pl-[46px] mt-[2px]">Выберите версию под своё устройство и установите приложение</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <MainBtn theme="secondary" size="md" className="w-full flex items-center justify-center gap-2 h-[40px] px-5 rounded-[14px] bg-(--intro-btn-bg) text-(--grey) hover:text-(--title-color) transition-colors font-medium">
                            <img src={isDark ? IMG.androidIconDark : IMG.androidIcon} className="shrink-0" alt="" />
                            <span>Скачать на Android</span>
                        </MainBtn>
                        <MainBtn theme="secondary" size="md" className="w-full flex items-center justify-center gap-2 h-[40px] px-5 rounded-[14px] bg-(--intro-btn-bg) text-(--grey) hover:text-(--title-color) transition-colors font-medium">
                            <img src={isDark ? IMG.AppleIconDark : IMG.AppleIcon} className="shrink-0" alt="" />
                            <span>Скачать на IOS</span>
                        </MainBtn>
                    </div>
                    <div>
                        <h4 className="flex items-center gap-3 text-base font-medium leading-[1.37] tracking-[0.03em] text-(--title-color)">
                            <span className="flex items-center justify-center shrink-0 bg-(--intro-btn-bg) rounded-[12px] w-[34px] h-[34px] text-(--grey)">2</span>
                            Запустите Google Authenticator
                        </h4>
                        <p className="text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey) pl-[46px] mt-[2px]">Нажмите «+», чтобы добавить аккаунт — отсканируйте QR-код или введите ключ</p>
                    </div>
                    <div>
                        <h4 className="flex items-center gap-3 text-base font-medium leading-[1.37] tracking-[0.03em] text-(--title-color)">
                            <span className="flex items-center justify-center shrink-0 bg-(--intro-btn-bg) rounded-[12px] w-[34px] h-[34px] text-(--grey)">3</span>
                            Введите 6-значный код из Google Authenticator
                        </h4>
                    </div>
                    <input type="text" placeholder="Введите 6-значный код из приложения" className="px-4 text-base tracking-[0.02em] text-(--text-main) h-[48px] bg-(--intro-btn-bg) caret-[#007aff] w-full border-none rounded-[18px] focus:outline-none" inputMode="numeric" pattern="[0-9]*" />
                    <MainBtn theme="neutral" className="font-medium w-full py-[14px] rounded-[18px] bg-(--text-main) text-(--bg-main) tracking-[4%] mt-3">Подключить Google Authenticator</MainBtn>
                </div>
            </div>
        </section>
        
    </div>)
}