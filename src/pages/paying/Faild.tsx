import IMG from "../../assets/images";
import MainBtn from "../../components/UI/MainBtn";
import IconFaild43 from "../../components/Icons/IconFaild43";

export default function PayingFaild () {
    return (<div className="wrapper pt-0 d-flex flex-column">
        {/* <!-- Payment result --> */}
        <section className="payment-result h-full d-flex">
            <div className="container h-full d-flex flex-column align-items-center justify-content-center gap-3 position-relative">
                <div className="circle-bg position-absolute rounded-circle"></div>
                <img src={IMG.paymentFaildCard} width="48" alt="" />
                <h2 className="fw-medium lh-1 text-center">Ошибка при оплате</h2>
                <p className="fs-6 text-center">Произошла неизвестная ошибка при оплате. Попробуйте вернуться позже или написать в тех.поддержку</p>
                <div className="btns position-absolute start-0 bottom-0 w-100 px-3 d-flex flex-column">
                    <MainBtn theme="secondary" className="text-center">
                        <img src={IMG.supportLogo} alt="" className="flex-shrink-0" />
                        <span>Написать в поддержку</span>
                    </MainBtn>
                    <MainBtn to="#" theme="neutral" className="fw-medium">
                        <IconFaild43 />
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