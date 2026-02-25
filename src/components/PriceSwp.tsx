import IMG from "../assets/images";

export default function PriceSwp() {
    return (
        <div className="flex w-full overflow-x-auto snap-x snap-mandatory gap-3 pb-4 px-4 -mx-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="shrink-0 snap-center w-[100%]">
                    <div className="bg-(--bg-secondary) p-4 rounded-[18px]">
                        <h3 className="flex items-center gap-2 mb-3 text-base leading-[1.37] tracking-[0.03em] text-(--title-color)">
                            <img src={IMG.cryptoBitcoin} width="24" alt="" />
                            Bitcoin
                            <span className="text-[14px] leading-[1.43] tracking-[0.04em] text-(--grey)">bc1qm...3scw</span>
                        </h3>
                        <div className="flex justify-between items-end">
                            <h2 className="font-medium font-nagel text-[38px] leading-none flex items-end gap-2 text-(--title-color)">
                                1.4919
                                <span className="font-normal font-nebulas text-[18px] leading-[1.33] tracking-[0.03em] text-(--grey)">BTC</span>
                            </h2>
                            <p className="text-base font-nebulas leading-[1.37] tracking-[0.03em] text-(--grey)">≈$124 492,24</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}