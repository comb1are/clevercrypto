import { useTheme } from "../../hooks/useTheme";
import { Link } from "react-router-dom";
import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

export default function Import() {
    const isDark = useTheme();
    return (<div className="wrapper flex flex-col justify-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Импорт кошелька</Header>

        {/* <!-- Import wallet --> */}
        <section className="import-wallet h-full flex">
            <div className="container h-full pt-3 flex flex-col justify-between gap-3">
                <div className="w-full flex flex-col gap-4">
                    <div className="import-wallet__card w-full flex flex-col gap-2">
                        <p>Название кошелька</p>
                        <input type="text" className="px-4 text-[15px] form-inp" placeholder="Введите название кошелька" />
                    </div>
                    <div className="import-wallet__card w-full flex flex-col gap-2">
                        <p>Seed-фраза</p>
                        <input type="text" className="px-4 text-[15px] form-inp" placeholder="Введите seed-фразу" />
                        <Link to={'#'} className="w-full flex items-center">
                            <img src={IMG.shield} alt="" />
                            <span>Введите seed-фразу из мобильного приложения Trust Wallet</span>
                        </Link>
                    </div>
                </div>
                <MainBtn theme="neutral" className="font-medium">
                    <img src={isDark ? IMG.importIconDark : IMG.importIcon} alt="" className="shrink-0" />
                    <span>Импортировать</span>
                </MainBtn>
            </div>
        </section>
        {/* <!-- Import wallet end --> */}
    </div>)
}