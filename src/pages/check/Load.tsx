import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";
import DotsLoader from "../../components/DotsLoader";

export default function Load() {
    return (
        <div className="wrapper flex min-h-screen flex-col justify-between bg-(--bg-main)">
            <Header type="inner" leftLink="/home" leftLinkIcon="">Проверка AML</Header>

            <section className="check-aml flex flex-1 flex-col px-4 pb-6 pt-4">


                <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
                    <div className="flex bg-blue-500/12 p-4 items-center justify-center rounded-2xl bg-(--bg-card)">
                        <DotsLoader />
                    </div>
                    <h2 className="text-[28px] font-medium leading-none text-(--text-main)">Идёт проверка AML</h2>
                    <p className=" text-(--grey)">Вы можете закрыть это окно — проверка продолжится в фоне</p>
                </div>

                <MainBtn className="w-full bg-(--btn-third-bg) py-[14px] rounded-[18px] text-center">
                    Закрыть
                </MainBtn>

            </section>
        </div>
    );
}