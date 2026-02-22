import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

export default function Load () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Проверка AML</Header>

        {/* <!-- Check AML --> */}
        <section className="check-aml h-full d-flex">
            <div className="container h-full d-flex flex-column justify-content-between">
                <div className="load-page d-flex flex-column justify-content-center align-items-center gap-3 text-center h-full">
                    <div className="load rounded-4 d-flex align-items-center justify-content-center">
                        <div className="load-dot rounded-circle"></div>
                        <div className="load-dot rounded-circle"></div>
                        <div className="load-dot rounded-circle"></div>
                    </div>
                    <h2 className="fw-medium lh-1">Идёт проверка AML</h2>
                    <p className="fs-6">Вы можете закрыть это окно — проверка продолжится на фоне</p>
                </div>
                <MainBtn theme="secondary" className="text-center">Закрыть</MainBtn>
            </div>
        </section>
        {/* <!-- Check AML end --> */}
    </div>)
}