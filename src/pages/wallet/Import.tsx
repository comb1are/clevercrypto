import { Link } from "react-router-dom";
import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

export default function Import () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Импорт кошелька</Header>

        {/* <!-- Import wallet --> */}
        <section className="import-wallet h-full d-flex">
            <div className="container h-full pt-3 d-flex flex-column justify-content-between gap-3">
                <div className="w-100 d-flex flex-column gap-4">
                    <div className="import-wallet__card w-100 d-flex flex-column gap-2">
                        <p>Название кошелька</p>
                        <input type="text" className="px-4 fs-6 form-inp" placeholder="Введите название кошелька" />
                    </div>
                    <div className="import-wallet__card w-100 d-flex flex-column gap-2">
                        <p>Seed-фраза</p>
                        <input type="text" className="px-4 fs-6 form-inp" placeholder="Введите seed-фразу" />
                        <Link to={'#'} className="w-100 d-flex align-items-center">
                            <img src={IMG.shield} alt="" />
                            <span>Введите seed-фразу из мобильного приложения Trust Wallet</span>
                        </Link>
                    </div>
                </div>
                <MainBtn theme="neutral" className="fw-medium">
                    <img src={IMG.importIcon} alt="" className="flex-shrink-0" />
                    <img src={IMG.importIconDark} alt="" className="flex-shrink-0 dark-icon" />
                    <span>Импортировать</span>
                </MainBtn>
            </div>
        </section>
        {/* <!-- Import wallet end --> */}
    </div>)
}