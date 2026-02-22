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
        <div className="container d-flex flex-column row-gap-3">
            <h2 className="auth-title">Создать <br /> аккаунт</h2>
            <p>Введите Email или номер телефона</p>

            {!isPhone ? (
                <input
                    type="text"
                    value={email}
                    onChange={onEmailChange}
                    className="px-4 fs-6 form-inp"
                    placeholder="Email или номер телефона"
                />
            ) : (
                <div className="position-relative form-tel">
                    <span className="position-absolute gap-2 d-flex align-items-center justify-content-center fs-6">
                        <img src={IMG.flagRu} alt="flag" />
                        +7
                    </span>
                    <IMaskInput
                        inputRef={inputRef}
                        mask="(000) 000-00-00"
                        definitions={{ 0: /\d/ }}
                        value={phone}
                        onAccept={(val: any) => onPhoneChange(String(val))}
                        placeholder="(___) ___-__-__"
                        className="position-relative h-100 w-100 start-0 top-0 fs-6"
                    />
                </div>
            )}

            <div className="d-flex flex-column w-100 auth-btns">
                <MainBtn onClick={onNext} disabled={btnDisabled} theme="neutral" className="fw-medium">Продолжить</MainBtn>
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
        <div className="container d-flex flex-column row-gap-3">
            <h2 className="auth-title">Придумайте <br /> пароль</h2>
            <p>Придумайте пароль для входа в аккаунт</p>

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                className="px-4 fs-6 form-inp"
            />

            <div className="d-flex flex-column w-100 auth-btns">
                <MainBtn disabled={password.length <= 5} onClick={onNext} theme="neutral" className="fw-medium">Продолжить</MainBtn>
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
        <div className="container d-flex flex-column row-gap-3">
            <h2 className="auth-title">Введите <br /> код-пароль</h2>
            <p>Прислали СМС на ваш телефон</p>

            <div className="row check-code w-100">
                {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="col-3">
                        <input
                            ref={(el) => {
                                if (el) inputRefs.current[i] = el;
                            }}
                            type="text"
                            maxLength={1}
                            placeholder="0"
                            className="form-inp text-center"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                        />
                    </div>
                ))}
            </div>

            <div className="d-flex flex-column w-100 auth-btns">
                <MainBtn
                    disabled={!isComplete}
                    theme="neutral"
                    className="check-code__submit fw-medium"
                    onClick={() => {console.log(smsCode)}}
                >
                    Продолжить
                </MainBtn>
            </div>
        </div>
    );
}
