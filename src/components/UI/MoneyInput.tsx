import { useState } from "react";
import { IMaskInput } from "react-imask";

export default function MoneyInput () {
    const [amount, setAmount] = useState<string | any>('')

    return (
        <div className="form-price position-relative">
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
                className="position-relative w-100 px-4 fs-6"
            />
            <p className="px-3 position-absolute position-absolute end-0 top-50 translate-middle-y d-flex align-items-center fs-6">BTC</p>
        </div>
    )
}