import Header from '../components/Header';
import IMG from '../assets/images';
import Footer from '../components/Footer';
import { useTheme } from '../hooks/useTheme';

export default function Intro() {
    const isDark = useTheme();

    return (<div className="py-6 pb-10 flex flex-col justify-between min-h-screen">
        <Header> </Header>

        <main className="flex-1">

            <section className="h-full">
                <div className="px-4 w-full relative h-full">
                    <h2 className="font-medium font-nagel text-[54px] leading-none text-[var(--title-color)] cursor-pointer select-none">Платите криптой мгновенно</h2>
                    <img src={isDark ? IMG.homeBgCardLight : IMG.homeBgCard} alt="" className="-z-10 -right-[108px] -top-[17px] w-[500px] min-w-[500px] absolute pointer-events-none" />
                </div>
            </section>

        </main>

        <Footer />
    </div>)
}