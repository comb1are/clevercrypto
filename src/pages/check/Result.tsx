import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";
import IconResult36 from "../../components/Icons/IconResult36";
import IconResult37 from "../../components/Icons/IconResult37";
import IconResult38 from "../../components/Icons/IconResult38";
import IconResult39 from "../../components/Icons/IconResult39";

const RISK_DATA = [
    {
        id: 'low',
        icon: <IconResult38 />,
        label: 'Минимальный риск',
        color: 'bg-[#20C997]',
        items: [
            { id: 'ex', name: 'Обменники', percent: '23.4%', amount: '$12 582.12', width: '23.4%' },
            { id: 'ot', name: 'Другое', percent: '10.2%', amount: '$4 218.64', width: '10.2%' },
        ],
    },
    {
        id: 'mid',
        icon: <IconResult37 />,
        label: 'Средний риск',
        color: 'bg-[#FFC107]',
        items: [
            { id: 'us', name: 'Unnamed Service', percent: '66.2%', amount: '$4 187.70', width: '66.22%' },
        ],
    },
    {
        id: 'high',
        icon: <IconResult36 />,
        label: 'Высокий риск',
        color: 'bg-[#DC3545]',
        items: [
            { id: 'ca', name: 'Казино', percent: '21.2%', amount: '$4 187.70', width: '21.2%' },
        ],
    },
];

export default function Result() {
    return (<div className="flex flex-col min-h-screen pb-10">
        <Header type="inner" leftLink="/home" leftLinkIcon="">Результаты AML</Header>

        <section className="flex flex-col flex-1 mt-4">
            <div className="container px-4 flex flex-col flex-1 justify-between gap-4">
                <div className="pt-4 flex flex-col gap-3 w-full">
                    <div className="flex items-center flex-col relative">
                        <IconResult39 />
                        <div className="text-center absolute bottom-0 left-1/2 -translate-x-1/2">
                            <h3 className="font-medium leading-none text-(--text-main) text-2xl">42%</h3>
                            <p className="text-(--grey) text-sm">Средний риск</p>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center gap-2">
                        <img src={IMG.cryptoBitcoin} width="24" className="shrink-0" alt="" />
                        <b className="text-base font-medium text-(--text-main)">Bitcoin</b>
                        <p className="text-base text-(--grey)">bc1qm...3scw</p>
                    </div>
                    <ul className="flex flex-col gap-2 w-full">
                        {RISK_DATA.map((risk) => (
                            <li key={risk.id} className="px-3 bg-(--btn-secondary-bg) rounded-[18px] p-4 flex flex-col gap-3 w-full">
                                <p className="flex items-center gap-2 text-(--text-main)">
                                    {risk.icon}
                                    <span className="text-sm">{risk.label}</span>
                                </p>
                                {risk.items.map((item) => (
                                    <div key={item.id}>
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="flex items-center gap-2 font-medium text-base text-(--text-main)">
                                                {item.name}
                                                <span className="text-(--grey)">{item.percent}</span>
                                            </h3>
                                            <h3 className="font-medium text-base text-(--text-main)">{item.amount}</h3>
                                        </div>
                                        <div className="rounded-full overflow-hidden relative w-full h-1.5 bg-(--intro-btn-bg)">
                                            <span className={`absolute left-0 top-0 h-full rounded-full ${risk.color}`} style={{ width: item.width }}></span>
                                        </div>
                                    </div>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
                <MainBtn className="w-full bg-(--btn-secondary-bg) text-(--text-main) py-[14px] rounded-[18px] text-center font-medium">Закрыть</MainBtn>
            </div>
        </section>
    </div>)
}