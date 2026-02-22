import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";

export default function BusinessInvoicing () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/business" leftLinkIcon="">Выставление счёта</Header>

        {/* <!-- Business Invoicing --> */}
        <section className="invoicing h-full d-flex">
            <div className="container h-full d-flex flex-column justify-content-between pt-3 gap-4">
                <div className="w-100 d-flex flex-column gap-3">
                    <div className="w-100">
                        <label className="mb-2">Номер заказа</label>
                        <input type="text" className="px-4 fs-6 border-0 form-inp" placeholder="Введите номер заказа" />
                    </div>
                    <div className="w-100">
                        <label className="mb-2">Сумма платежа</label>
                        <div className="form-price position-relative">
                            <input type="text" placeholder="10" className="position-relative w-100 px-4 fs-6" inputMode="numeric" pattern="[0-9]*" />
                            <p className="px-3 position-absolute position-absolute end-0 top-50 translate-middle-y d-flex align-items-center fs-6">USDT</p>
                        </div>
                    </div>
                    <div className="w-100">
                        <label className="mb-2">Редирект URL</label>
                        <input type="url" className="px-4 fs-6 border-0 form-inp" placeholder="https://example.com" />
                    </div>
                    <div className="w-100">
                        <label className="mb-2">Проверять со скидкой</label>
                        <div className="form-price position-relative">
                            <input type="text" placeholder="0" className="position-relative w-100 px-4 fs-6" inputMode="numeric" pattern="[0-9]*" />
                            <p className="px-3 position-absolute position-absolute end-0 top-50 translate-middle-y d-flex align-items-center fs-6">%</p>
                        </div>
                    </div>
                </div>
                <MainBtn theme="primary" className="fw-medium">Создать счёт</MainBtn>
            </div>
        </section>
        {/* <!-- Business Invoicing end --> */}
    </div>)
}