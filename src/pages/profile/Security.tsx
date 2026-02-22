import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

export default function ProfileSecurity () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/profile" leftLinkIcon="">Безопасность</Header>

        {/* <!-- Profile security --> */}
        <section className="profile-security h-full d-flex pt-3">
            <div className="container h-full">
                <div className="fw-medium lh-1 mb-3 pb-1 title">Смена пароля</div>
                <div className="d-flex flex-column gap-3 mb-3 pb-1">
                    <div>
                        <label className="mb-2">Текущий пароль</label>
                        <input type="password" placeholder="Введите текущий пароль" className="px-4 fs-6 border-0 form-inp" />
                    </div>
                    <div>
                        <label className="mb-2">Новый пароль</label>
                        <input type="password" placeholder="Введите новый пароль" className="px-4 fs-6 border-0 form-inp" />
                    </div>
                    <div>
                        <label className="mb-2">Повторите новый пароль</label>
                        <input type="password" placeholder="Повторите новый пароль" className="px-4 fs-6 border-0 form-inp" />
                    </div>
                </div>
                <MainBtn theme="neutral" className="mb-4 fw-medium">Сменить пароль</MainBtn>
                <div className="fw-medium lh-1 mb-3 pb-1 title">Двухфакторная аутентификация</div>
                <div className="two-factor d-flex flex-column">
                    <label>Как поставить?</label>
                    <div className="text">
                        <h4 className="d-flex align-items-center fs-6 fw-medium">
                            <span className="d-flex align-items-center justify-content-center flex-shrink-0">1</span>
                            Установите Google Authenticator
                        </h4>
                        <p>Выберите версию под своё устройство и установите приложение</p>
                    </div>
                    <div className="d-flex flex-column btns">
                        <MainBtn theme="secondary" size="md">
                            <img src={IMG.androidIcon} className="flex-shrink-0" alt="" />
                            <img src={IMG.androidIconDark} className="flex-shrink-0 dark-icon" alt="" />
                            <span>Скачать на Android</span>
                        </MainBtn>
                        <MainBtn theme="secondary" size="md">
                            <img src={IMG.AppleIcon} className="flex-shrink-0" alt="" />
                            <img src={IMG.AppleIconDark} className="flex-shrink-0 dark-icon" alt="" />
                            <span>Скачать на IOS</span>
                        </MainBtn>
                    </div>
                    <div className="text">
                        <h4 className="d-flex align-items-center fs-6 fw-medium">
                            <span className="d-flex align-items-center justify-content-center flex-shrink-0">2</span>
                            Запустите Google Authenticator
                        </h4>
                        <p>Нажмите «+», чтобы добавить аккаунт — отсканируйте QR-код или введите ключ</p>
                    </div>
                    <div className="text">
                        <h4 className="d-flex align-items-center fs-6 fw-medium">
                            <span className="d-flex align-items-center justify-content-center flex-shrink-0">3</span>
                            Введите 6-значный код из Google Authenticator
                        </h4>
                    </div>
                    <input type="number" placeholder="Введите 6-значный код из приложения" className="px-4 fs-6 border-0 form-inp" inputMode="numeric" pattern="[0-9]*" />
                    <MainBtn theme="neutral" className="fw-medium">Подключить Google Authenticator</MainBtn>
                </div>
            </div>
        </section>
        {/* <!-- Profile security end --> */}
    </div>)
}