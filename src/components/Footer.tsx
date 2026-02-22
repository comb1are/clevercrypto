import MainBtn from "./UI/MainBtn"

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container d-flex flex-column">
                <MainBtn to="/register" className="fw-medium fs-6 lh-sm">Создать аккаунт</MainBtn>
                <MainBtn to="/login" theme="secondary" className="text-center fs-6">Войти в аккаунт</MainBtn>
            </div>
        </footer>
    )
}