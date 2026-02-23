import MainBtn from "./UI/MainBtn"

export default function Footer() {
    return (
        <footer className="pt-[10px] shrink-0 relative z-10 w-full mb-8">
            <div className="px-4 w-full flex flex-col gap-[10px]">
                <MainBtn to="/register" className="font-medium text-base leading-tight bg-[var(--bg-green)] text-[var(--black)] text-center py-[14.5px] rounded-2xl ">Создать аккаунт</MainBtn>
                <MainBtn to="/login" className="text-center text-base bg-[var(--intro-btn-bg)] text-[var(--text-main)]  py-[14.5px] rounded-2xl ">Войти в аккаунт</MainBtn>
            </div>
        </footer>
    )
}