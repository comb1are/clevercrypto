import { useState } from "react";
import { IMaskInput } from "react-imask";

export default function MoneyInput({ className }: { className?: string }) {
    const [amount, setAmount] = useState<string | any>('')

    return (
        <div className={`form-price relative ${className}`}>
            <IMaskInput
                mask={Number}
                scale={2}
                thousandsSeparator={'\u202F'}
                radix=","
                mapToRadix={['.']}
                normalizeZeros={true}
                padFractionalZeros={true}
                value={amount}
                onAccept={(val: unknown) => setAmount(String(val))}
                placeholder="0,00"
                className="relative w-full text-base bg-transparent text-(--main-dark) outline-none"
            />
            <p className="px-3 absolute right-0 top-1/2 -translate-y-1/2 flex items-center text-base text-(--additional-gray-600) pointer-events-none before:content-[''] before:absolute before:left-[-10%] before:top-[-25%] before:w-[1px] before:h-[145%] before:bg-[#343A40]">BTC</p>
        </div>
    )
}