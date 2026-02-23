import IMG from "../../assets/images";
import Header from "../../components/Header";
import MainBtn from "../../components/UI/MainBtn";
import IconDevices47 from "../../components/Icons/IconDevices47";
import IconDevices48 from "../../components/Icons/IconDevices48";
import IconDevices49 from "../../components/Icons/IconDevices49";

export default function ProfileDevices () {
    return (<div className="wrapper d-flex flex-column justify-content-between">
        <Header type="inner" leftLink="/profile" leftLinkIcon="">Активные сессии</Header>

        {/* <!-- Profile devices --> */}
        <section className="profile-devices h-full d-flex pt-3">
            <div className="container h-full d-flex flex-column gap-4">
                <div className="w-100 d-flex flex-column gap-3">
                    <h3 className="fw-medium fs-6">Это устройство</h3>
                    <div className="device-card d-flex align-items-center justify-content-between gap-3">
                        <div className="device-card__text d-flex align-items-center">
                            <img src={IMG.windowsIcon} width="40" alt="" className="flex-shrink-0" />
                            <img src={IMG.windowsIcon} width="40" alt="" className="flex-shrink-0 dark-icon" />
                            <div>
                                <div className="device-card__name fw-medium fs-6">Windows 11</div>
                                <p>Krasnodar, Russia • Текущий</p>
                            </div>
                        </div>
                        <button className="d-flex align-items-center justify-content-center flex-shrink-0">
                            <IconDevices49 />
                        </button>
                    </div>
                    <MainBtn theme="red" size="md">
                        <img src={IMG.minusRed} className="flex-shrink-0" alt="" />
                        <span>Завершить все другие сессии</span>
                    </MainBtn>
                </div>
                <div className="w-100 d-flex flex-column gap-3">
                    <h3 className="fw-medium fs-6">Это устройство</h3>
                    <div className="device-card d-flex align-items-center justify-content-between gap-3">
                        <div className="device-card__text d-flex align-items-center">
                            <img src={IMG.androidIconPng} width="40" alt="" className="flex-shrink-0" />
                            <img src={IMG.androidIconPng} width="40" alt="" className="flex-shrink-0 dark-icon" />
                            <div>
                                <div className="device-card__name fw-medium fs-6">Andriod</div>
                                <p>Krasnodar, Russia • 16:30</p>
                            </div>
                        </div>
                        <button className="d-flex align-items-center justify-content-center flex-shrink-0">
                            <IconDevices48 />
                        </button>
                    </div>
                    <div className="device-card d-flex align-items-center justify-content-between gap-3">
                        <div className="device-card__text d-flex align-items-center">
                            <img src={IMG.appleIconPng} width="40" alt="" className="flex-shrink-0" />
                            <img src={IMG.appleIconDarkPng} width="40" alt="" className="flex-shrink-0 dark-icon" />
                            <div>
                                <div className="device-card__name fw-medium fs-6">IOS</div>
                                <p>Krasnodar, Russia • 12:16</p>
                            </div>
                        </div>
                        <button className="d-flex align-items-center justify-content-center flex-shrink-0">
                            <IconDevices47 />
                        </button>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Profile devices end --> */}
    </div>)
}