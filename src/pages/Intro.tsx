import Header from '../components/Header';
import IMG from '../assets/images';
import Footer from '../components/Footer';

export default function Intro () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header> </Header>

        <main className="h-full">

            <section className="home h-100">
                <div className="container position-relative h-100">
                    <h2 className="home-title cursor-pointer">Платите криптой мгновенно</h2>
                    <img src={IMG.homeBgCard} alt="" className="main-img position-absolute" />
                    <img src={IMG.homeBgCardLight} alt="" className="main-img position-absolute light-img" />
                </div>
            </section>

        </main>

        <Footer />
    </div>)
}