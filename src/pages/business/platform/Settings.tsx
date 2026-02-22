import IMG from "../../../assets/images";
import Header from "../../../components/Header";
import MainBtn from "../../../components/UI/MainBtn";

export default function BusinessPlatformSettings () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/business" leftLinkIcon="">Настройки площадки</Header>

        {/* <!-- Profile settings --> */}
        <section className="profile-settings h-full d-flex pt-3">
            <div className="container h-full d-flex flex-column justify-content-between gap-3">
                <div className="d-flex flex-column align-items-center gap-3">
                    <div className="avatar-logo flex-shrink-0 rounded-circle overflow-hidden">
                        <img src={IMG.businessLogo2} className="w-100 h-100 object-fit-cover" alt="" />
                    </div>
                    <div className="select-logo position-relative">
                        <input type="file" name="" id="" className="position-absolute top-0 start-0 w-100 h-100 opacity-0" />
                        <MainBtn theme="link" size="sm">Загрузить аватар</MainBtn>
                    </div>
                    <div className="w-100">
                        <label className="mb-2">ID</label>
                        <input type="text" placeholder="Введите ID магазина" className="px-4 fs-6 form-inp border-0" />
                    </div>
                    <div className="w-100">
                        <label className="mb-2">API Token</label>
                        <input type="text" placeholder="Введите API token" className="px-4 fs-6 form-inp border-0" />
                    </div>
                    <div className="w-100">
                        <label className="mb-2">Ссылка для уведомлений</label>
                        <input type="text" placeholder="Введите ссылку для уведомлений" className="px-4 fs-6 form-inp border-0" />
                    </div>
                    <div className="w-100">
                        <label className="mb-2">Ссылка для перенаправления после оплаты</label>
                        <input type="text" placeholder="Введите ссылку перенаправления" className="px-4 fs-6 form-inp border-0" />
                    </div>
                </div>
                <MainBtn theme="neutral" className="fw-medium">Сохранить изменения</MainBtn>
            </div>
        </section>
        {/* <!-- Profile settings end --> */}
    </div>)
}