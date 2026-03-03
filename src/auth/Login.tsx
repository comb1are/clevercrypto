import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IMaskInput } from "react-imask";
import AuthLayout from "./AuthLayout";
import IMG from "../assets/images";
import MainBtn from "../components/UI/MainBtn";
import { useLoginMutation } from "../store/api/authApi";
import { loginSchema } from "../store/validation/schemas";

type Status = "" | "password";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const [status, setStatus] = useState<Status>("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isPhone, setIsPhone] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [login, { isLoading: isLoginLoading }] = useLoginMutation();
    const [validationError, setValidationError] = useState<string | null>(null);

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

    const handleLogin = async () => {
        setValidationError(null);
        const credential = isPhone ? `+7${phone}` : email;

        const result = loginSchema.safeParse({ email: credential, password });
        if (!result.success) {
            setValidationError((result.error as any).errors?.[0]?.message ?? 'Ошибка валидации');
            return;
        }

        try {
            await login(result.data).unwrap();
            const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/home';
            navigate(from, { replace: true });
        } catch (err: any) {
            const msg = err?.data?.detail ?? err?.data?.message ?? 'Неверный email или пароль';
            setValidationError(String(msg));
        }
    };

    return <AuthLayout>
        {status == 'password' ? (
            <PasswordStep
                password={password}
                setPassword={setPassword}
                onLogin={handleLogin}
                isLoading={isLoginLoading}
                validationError={validationError}
            />
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
            <h2 className="font-nagel font-medium text-[48px] leading-none text-main ">Вход <br /> в аккаунт</h2>
            <p className="text-base tracking-[0.02em] text-(--grey) ">Введите Email или номер телефона для входа</p>

            {!isPhone ? (
                <input
                    type="text"
                    value={email}
                    onChange={onEmailChange}
                    className="w-full h-12 px-4 bg-(--bg-secondary) border border-(--border-secondary) rounded-2xl text-(--main-dark) text-base tracking-[0.02em] outline-none caret-blue-500 placeholder-[text-(--grey)]"
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
                        className="w-full h-full pl-[101px] pr-5 text-(--text-main) text-base tracking-[0.02em] bg-transparent outline-none caret-blue-500 placeholder-[#text-(--grey)]"
                    />
                </div>
            )}

            <div className="flex flex-col w-full gap-3 mt-4">
                <MainBtn onClick={onNext} disabled={btnDisabled} className={`font-medium py-4 transition-colors duration-200 text-(--bg-main) text-center rounded-2xl ${btnDisabled ? 'bg-(--btn-active)' : 'bg-(--btn-main)'}`} >Продолжить</MainBtn>
                <MainBtn to="/register" theme="space" className="font-medium py-4 text-center rounded-2xl text-[rgba(173, 181, 189, 1)]">Создать аккаунт</MainBtn>
            </div>
        </div>
    );
}


interface PasswordStepProps {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    onLogin: () => void;
    isLoading: boolean;
    validationError: string | null;
}

function PasswordStep({ password, setPassword, onLogin, isLoading, validationError }: PasswordStepProps) {
    const canSubmit = password.length > 5 && !isLoading;

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-nagel font-medium text-[48px] leading-none text-(--text-main)">Введите <br /> пароль</h2>
            <p className="text-base tracking-[0.02em] text-(--grey)">Введите пароль для авторизации</p>

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                className="w-full h-12 px-4 bg-(--bg-secondary) border border-(--border-secondary) rounded-2xl text-base tracking-[0.02em] outline-none caret-blue-500 placeholder-[#text-(--grey)]"
                onKeyDown={(e) => { if (e.key === 'Enter' && canSubmit) onLogin(); }}
            />

            <div className="flex flex-col w-full gap-3 mt-4">
                <MainBtn
                    disabled={!canSubmit}
                    onClick={onLogin}
                    className={`font-medium py-4 transition-colors duration-200 text-(--bg-main) text-center rounded-2xl ${!canSubmit ? 'bg-(--btn-active)' : 'bg-(--btn-main)'}`}
                >
                    {isLoading ? 'Загрузка...' : 'Войти'}
                </MainBtn>
                {validationError && (
                    <p className="text-sm text-[#DC3545] text-center">{validationError}</p>
                )}
            </div>
        </div>
    );
}