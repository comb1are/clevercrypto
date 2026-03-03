import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { Link, useNavigate } from "react-router-dom";
import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";
import { useCreateWalletMutation } from "../../store/api/walletApi";

export default function Import() {
    const isDark = useTheme();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [words, setWords] = useState("");
    const [createWallet, { isLoading }] = useCreateWalletMutation();
    const [error, setError] = useState("");

    const handleImport = async () => {
        if (!words) {
            setError("Введите seed-фразу");
            return;
        }
        try {
            await createWallet({ words }).unwrap();
            navigate("/wallet/my");
        } catch (err: any) {
            setError(err?.message || err?.data?.message || err?.data?.detail || "Ошибка создания кошелька");
        }
    };

    return (<div className="flex flex-col min-h-screen pb-10">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Импорт кошелька</Header>

        <section className="import-wallet flex-1 flex px-3 mt-4">
            <div className="container flex flex-col justify-start gap-3 w-full">
                <div className="w-full flex flex-col gap-4">
                    <div className="import-wallet__card w-full flex flex-col gap-2 text-(--grey)">
                        <p>Название кошелька</p>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="px-4 bg-(--intro-btn-bg) rounded-[18px] p-3 form-inp text-(--text-main)"
                            placeholder="Введите название кошелька"
                        />
                    </div>
                    <div className="import-wallet__card w-full flex flex-col gap-2 text-(--grey)">
                        <p>Seed-фраза</p>
                        <input
                            type="text"
                            value={words}
                            onChange={(e) => setWords(e.target.value)}
                            className="px-4 bg-(--intro-btn-bg) rounded-[18px] p-3 form-inp text-(--text-main)"
                            placeholder="Введите seed-фразу"
                        />
                        <Link to={'#'} className="w-full flex items-center gap-3 bg-(--btn-secondary-bg) px-3 rounded-[18px] text-sm py-3 justify-center ">
                            <img src={IMG.shield} alt="" />
                            <span className="text-[#ADB5BD]">Введите seed-фразу из мобильного приложения Trust Wallet</span>
                        </Link>
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                </div>
            </div>
        </section>

        <div className="px-4 mt-auto">
            <MainBtn
                theme="neutral"
                disabled={isLoading || !words}
                onClick={handleImport}
                className={`w-full font-medium ${isLoading || !words ? 'bg-(--btn-active)' : 'bg-(--text-main) text-(--bg-main)'} flex justify-center items-center gap-3 py-3 rounded-[18px]`}
            >
                <img src={isDark ? IMG.importIconDark : IMG.importIcon} alt="" className="shrink-0" />
                <span>{isLoading ? 'Загрузка...' : 'Импортировать'}</span>
            </MainBtn>
        </div>
    </div>)
}