import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

export default function ProfileSettings () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/profile" leftLinkIcon="">Основные настройки</Header>

        {/* <!-- Profile settings --> */}
        <section className="profile-settings h-full d-flex pt-3">
            <div className="container h-full d-flex flex-column justify-content-between gap-3">
                <div className="d-flex flex-column align-items-center gap-3">
                    <div className="avatar-logo flex-shrink-0 rounded-circle overflow-hidden">
                        <img src={IMG.avatar} className="w-100 h-100 object-fit-cover" alt="" />
                    </div>
                    <div className="select-logo position-relative">
                        <input type="file" onChange={() => {}} name="" id="" className="position-absolute top-0 start-0 w-100 h-100 opacity-0" />
                        <MainBtn theme="link" size="sm">Загрузить аватар</MainBtn>
                    </div>
                    <div className="w-100">
                        <label className="mb-2">Имя</label>
                        <input type="text" onChange={() => {}} value="Alex" className="px-4 fs-6 form-inp border-0" />
                    </div>
                    <div className="w-100">
                        <label className="mb-2">Bathory</label>
                        <input type="text" onChange={() => {}} value="Alex" className="px-4 fs-6 form-inp border-0" />
                    </div>
                    <div className="w-100">
                        <label className="mb-2">Telegram</label>
                        <input type="text" onChange={() => {}} value="@kaste777" className="px-4 fs-6 form-inp border-0" />
                    </div>
                </div>
                <MainBtn theme="neutral" className="fw-medium">Сохранить изменения</MainBtn>
            </div>
        </section>
        {/* <!-- Profile settings end --> */}
    </div>)
}