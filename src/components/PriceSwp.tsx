import IMG from "../assets/images";

export default function PriceSwp() {
    return (
        <div className="d-flex overflow-auto gap-3 pb-2">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: "90%" }}>
                    <div className="funds-card p-3">
                        <h3 className="d-flex align-items-center gap-2 mb-3 fs-6">
                            <img src={IMG.cryptoBitcoin} width="24" alt="" />
                            Bitcoin
                            <span>bc1qm...3scw</span>
                        </h3>
                        <div className="d-flex justify-content-between align-items-end">
                            <h2 className="fw-medium lh-1 d-flex align-items-end gap-2">
                                1.4919
                                <span className="fw-normal">BTC</span>
                            </h2>
                            <p className="fs-6">≈$124 492,24</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}