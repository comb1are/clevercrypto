import React, { useState, useEffect, useRef, useCallback } from "react";
import { IMaskInput } from "react-imask";
import AuthLayout from "./AuthLayout";
import IMG from "../assets/images";
import MainBtn from "../components/UI/MainBtn";

type Status = "" | "password";

export default function Login() {
    const [status, setStatus] = useState<Status>("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isPhone, setIsPhone] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+7[\d\s()-]*$/;

    // Automatic detection of email or phone
    const handleLoginInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setEmail(val);
        const phoneDetected = phoneRegex.test(val);
        setIsPhone(phoneDetected);

        if (phoneDetected) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, []);
    

    // Email/phone verification
    useEffect(() => {
        const validPhone = phone.length === 15;
        const validEmail = emailRegex.test(email);
        setBtnDisabled(!(validPhone || validEmail));
    }, [email, phone]);

    return <AuthLayout>
        { status == 'password' ? (
            <PasswordStep password={password} setPassword={setPassword} />
        ) : (
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
        )}
    </AuthLayout>;
}

/* STEP 1: Email or phone step */
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
            <h2 className="auth-title">Вход <br /> в аккаунт</h2>
            <p>Введите Email или номер телефона для входа</p>

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
                <MainBtn onClick={onNext} disabled={btnDisabled} theme="neutral" className="fw-medium" >Продолжить</MainBtn>
                <MainBtn to="/register" theme="space" className="gap-3">Создать аккаунт</MainBtn>
            </div>
        </div>
    );
}

/* STEP 2: Password entry step */
interface PasswordStepProps {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

function PasswordStep({ password, setPassword }: PasswordStepProps) {
    return (
        <div className="container d-flex flex-column row-gap-3">
            <h2 className="auth-title">Введите <br /> пароль</h2>
            <p>Введите пароль для авторизации</p>

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                className="px-4 fs-6 form-inp"
            />

            <div className="d-flex flex-column w-100 auth-btns">
                <MainBtn disabled={password.length <= 5} theme="neutral" className="fw-medium" >Войти</MainBtn>
            </div>
        </div>
    );
}