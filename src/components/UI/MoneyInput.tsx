import { useState } from "react";
import { IMaskInput } from "react-imask";

export default function MoneyInput() {
    const [amount, setAmount] = useState<string | any>('')

    return (
        <div className="form-price relative">
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
                className="relative w-full px-4 text-base bg-transparent text-(--main-dark) outline-none"
            />
            <p className="px-3 absolute right-0 top-1/2 -translate-y-1/2 flex items-center text-base text-(--additional-gray-600) pointer-events-none">BTC</p>
        </div>
    )
}