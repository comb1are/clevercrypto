import IMG from "../../assets/images";
import MainBtn from "../../components/UI/MainBtn";
import IconSuccess46 from "../../components/Icons/IconSuccess46";

export default function PayingSuccess () {
    return (<div className="wrapper pt-0 d-flex flex-column">
        {/* <!-- Payment result --> */}
        <section className="payment-result h-full d-flex">
            <div className="container h-full d-flex flex-column align-items-center justify-content-center gap-3 position-relative">
                <div className="circle-bg position-absolute rounded-circle"></div>
                <img src={IMG.paymentSuccessCard} width="48" alt="" />
                <h2 className="fw-medium lh-1 text-center">Оплата успешно прошла</h2>
                <p className="fs-6 text-center">
                    На ваш кошелёк зачислено: <b className="fw-medium">440.54 USDT</b>
                </p>
                <div className="btns position-absolute start-0 bottom-0 w-100 px-3">
                    <MainBtn to="#" theme="neutral" className="fw-medium">
                        <IconSuccess46 />
                        <span>Вернуться в магазин</span>
                    </MainBtn>
                </div>
            </div>
        </section>
        {/* <!-- Payment result end --> */}

        <section className="payment-result__foot">
            <div className="container">
                <MainBtn theme="space" className="gap-3">
                    <img src={IMG.warningSpace} alt="" className="flex-shrink-0" />
                    <span>Открыть спор</span>
                </MainBtn>
            </div>
        </section>
    </div>)
}