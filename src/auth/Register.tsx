import React, { useState, useEffect, useRef, useCallback } from "react";
import { IMaskInput } from "react-imask";
import AuthLayout from "./AuthLayout";
import IMG from "../assets/images";
import MainBtn from "../components/UI/MainBtn";
import IMask from "imask";

type Status = "" | "password" | "smsCode";

export default function Login() {
    const [status, setStatus] = useState<Status>("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [smsCode, setSmsCode] = useState("");
    const [isPhone, setIsPhone] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+7[\d\s()-]*$/;

    const handleLoginInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setEmail(val);
        const phoneDetected = phoneRegex.test(val);
        setIsPhone(phoneDetected);

        if (phoneDetected) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, []);

    useEffect(() => {
        const validPhone = phone.length === 15;
        const validEmail = emailRegex.test(email);
        setBtnDisabled(!(validPhone || validEmail));
    }, [email, phone]);

    return (
        <AuthLayout>
            {{
                "": (
                    <EmailStep
                        email={email}
                        phone={phone}
                        isPhone={isPhone}
                        onEmailChange={handleLoginInput}
                        onPhoneChange={setPhone}
                        inputRef={(el) => { inputRef.current = el; }}
                        btnDisabled={btnDisabled}
                        onNext={() => setStatus("password")}
                    />
                ),
                "password": (
                    <PasswordStep
                        password={password}
                        setPassword={setPassword}
                        onNext={() => setStatus("smsCode")}
                    />
                ),
                "smsCode": (
                    <SMSCodeStep
                        smsCode={smsCode}
                        setSmsCode={setSmsCode}
                    />
                ),
            }[status]}
        </AuthLayout>
    );
}

/* STEP 1 */
interface EmailStepProps {
    email: string;
    phone: string;
    isPhone: boolean;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPhoneChange: (val: string) => void;
    inputRef?: (el: HTMLInputElement | null) => void;
    btnDisabled: boolean;
    onNext: () => void;
}

function EmailStep({
    email,
    phone,
    isPhone,
    onEmailChange,
    onPhoneChange,
    inputRef,
    btnDisabled,
    onNext,
}: EmailStepProps) {
    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-nagel font-medium text-[48px] leading-none text-(--text-main)">Создать <br /> аккаунт</h2>
            <p className="text-base tracking-[0.02em] text-(--additional-gray-600)">Введите Email или номер телефона</p>

            {!isPhone ? (
                <input
                    type="text"
                    value={email}
                    onChange={onEmailChange}
                    className="w-full h-12 px-4 bg-(--bg-secondary) border border-(--border-secondary) rounded-2xl text-(--main-dark) text-base tracking-[0.02em] outline-none caret-blue-500 placeholder-[#6c757d]"
                    placeholder="Email или номер телефона"
                />
            ) : (
                <div className="relative w-full h-12 bg-(--bg-secondary) border border-(--border-secondary) rounded-2xl z-10 flex items-center">
                    <span className="absolute left-[23px] top-[7px] py-[6px] pr-4 flex items-center gap-2 text-[--text-main] text-base tracking-[0.02em] z-[-1] border-r border-[#dee2e6]">
                        <img src={IMG.flagRu} alt="flag" className="w-5 h-5 shrink-0 rounded-full" />
                        +7
                    </span>
                    <IMaskInput
                        inputRef={inputRef}
                        mask="(000) 000-00-00"
                        definitions={{ 0: /\d/ }}
                        value={phone}
                        onAccept={(val: any) => onPhoneChange(String(val))}
                        placeholder="(___) ___-__-__"
                        className="w-full h-full pl-[101px] pr-5 text-(--text-main) text-base tracking-[0.02em] bg-transparent outline-none caret-blue-500 placeholder-[#6c757d]"
                    />
                </div>
            )}

            <div className="flex flex-col w-full gap-3 mt-4">
                <MainBtn onClick={onNext} disabled={btnDisabled} className={`font-medium py-4 transition-colors duration-200 text-(--bg-main) text-center rounded-2xl ${btnDisabled ? 'bg-(--btn-active)' : 'bg-(--btn-main)'}`}>Продолжить</MainBtn>
            </div>
        </div>
    );
}

/* STEP 2 */
interface PasswordStepProps {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    onNext: () => void;
}

function PasswordStep({ password, setPassword, onNext }: PasswordStepProps) {
    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-nagel font-medium text-[48px] leading-none text-(--text-main)">Придумайте <br /> пароль</h2>
            <p className="text-base tracking-[0.02em] text-(--additional-gray-600)">Придумайте пароль для входа в аккаунт</p>

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                className="w-full h-12 px-4 bg-(--bg-secondary) border border-(--border-secondary) rounded-2xl text-(--main-dark) text-base tracking-[0.02em] outline-none caret-blue-500 placeholder-[#6c757d]"
            />

            <div className="flex flex-col w-full gap-3 mt-4">
                <MainBtn disabled={password.length <= 5} onClick={onNext} className={`font-medium py-4 transition-colors duration-200 text-(--bg-main) text-center rounded-2xl ${password.length <= 5 ? 'bg-(--btn-active)' : 'bg-(--btn-main)'}`}>Продолжить</MainBtn>
            </div>
        </div>
    );
}

/* STEP 3 — SMS code verification */
interface SMSCodeStepProps {
    smsCode: string;
    setSmsCode: React.Dispatch<React.SetStateAction<string>>;
}

function SMSCodeStep({ smsCode, setSmsCode }: SMSCodeStepProps) {
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        inputRefs.current.forEach((input) => {
            IMask(input, { mask: "0" }); // numeric mask
        });
    }, []);

    const handleChange = (index: number, value: string) => {
        const newValues = [...inputRefs.current.map((input) => input.value)];
        newValues[index] = value;
        const fullCode = newValues.join("");
        setSmsCode(fullCode);
        setIsComplete(fullCode.length === inputRefs.current.length && !newValues.includes(""));

        // move to next input automatically
        if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !inputRefs.current[index].value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-nagel font-medium text-[48px] leading-none text-(--text-main)">Введите <br /> код-пароль</h2>
            <p className="text-base tracking-[0.02em] text-(--additional-gray-600)">Прислали СМС на ваш телефон</p>

            <div className="flex w-full gap-3">
                {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex-1">
                        <input
                            ref={(el) => {
                                if (el) inputRefs.current[i] = el;
                            }}
                            type="text"
                            maxLength={1}
                            placeholder="0"
                            className="w-full h-12 bg-(--bg-secondary) border border-(--border-secondary) rounded-2xl text-(--main-dark) text-base tracking-[0.02em] outline-none caret-blue-500 placeholder-[#6c757d] text-center"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                        />
                    </div>
                ))}
            </div>

            <div className="flex flex-col w-full gap-3 mt-4">
                <MainBtn
                    disabled={!isComplete}
                    className={`font-medium py-4 transition-colors duration-200 text-(--bg-main) text-center rounded-2xl ${!isComplete ? 'bg-(--btn-active)' : 'bg-(--btn-main)'}`}
                    onClick={() => { console.log(smsCode) }}
                >
                    Продолжить
                </MainBtn>
            </div>
        </div>
    );
}
