import { useState } from "react";
import IMG from "../../assets/images";
import Header from "../../components/Header";
import Alert from "../../components/UI/Alert";
import MainBtn from "../../components/UI/MainBtn";

interface PayListInterface {
    id: number;
    amount: string;
    price: string;
    discount: string;
    selected: boolean;
}

export default function ProfilePayment () {
    const [payList, setPayList] = useState<PayListInterface []>([
        { id: 1, amount: '2 000', price: '100 ₽', discount: '140 ₽', selected: true },
        { id: 2, amount: '20 000', price: '1000 ₽', discount: '1 440 ₽', selected: false },
        { id: 3, amount: '50 000', price: '2 400 ₽', discount: '3 000 ₽', selected: false },
        { id: 4, amount: '100 000', price: '4 800 ₽', discount: '5 400 ₽', selected: false },
    ])

    const handleSelect = (id: number) => {
        setPayList((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, selected: true }
                    : { ...item, selected: false }
            )
        );
    };    

    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/profile" leftLinkIcon="">Приобрести платежи</Header>

        {/* <!-- Profile payment --> */}
        <section className="check-aml h-full d-flex">
            <div className="container h-full d-flex flex-column justify-content-between pt-3 gap-2">
                <div className="d-flex flex-column gap-3">
                    <Alert type="gray">
                        <img src={IMG.warningGray} className="flex-shrink-0" alt="" />
                        <img src={IMG.warningGrayDark} className="flex-shrink-0 dark-icon" alt="" />
                        <p>Выберите количество платежей</p>
                    </Alert>
                    <ul className="d-flex flex-column gap-3">
                        {payList.map((data, index) => (
                            <li key={index} className="pay-card overflow-hidden position-relative d-flex align-items-start justify-content-between">
                                <input
                                    type="radio"
                                    checked={data.selected}
                                    onChange={() => handleSelect(data.id)} 
                                    name="pay"
                                    className="position-absolute start-0 top-0 w-100 h-100" 
                                />
                                <div className="pay-card__left d-flex align-items-start">
                                    <img src={IMG.payDoc2} className="flex-shrink-0" alt="" />
                                    <img src={IMG.payDoc2Dark} className="flex-shrink-0 dark-icon" alt="" />
                                    <div>
                                        <h3 className="d-flex align-items-end gap-2 fw-medium lh-1">
                                            {data.amount}
                                            <span className="fs-6 fw-normal">платежей</span>
                                        </h3>
                                        <div className="price d-flex align-items-center gap-2 fs-6 fw-medium">
                                            <del className="fw-normal">{data.discount}</del>
                                            <span>{data.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="icon d-flex align-items-center justify-content-center rounded-pill">
                                    <span className="rounded-pill"></span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <MainBtn theme="primary" className="fw-medium">Выбрать и оплатить</MainBtn>
            </div>
        </section>
        {/* <!-- Profile payment end --> */}
    </div>)
}