import IMG from '../assets/images';
import clsx from "clsx";
import MainBtn from './UI/MainBtn';

type HeaderProps = {
    type?: "" | "inner";
    className?: string;
    leftLink?: string;
    leftLinkIcon?: '' | 'arrow' | 'hidden';
    rightLinkType?: '' |'settings' | 'search';
    children: React.ReactNode;
};

export default function Header ({ 
    type = "",
    className = "", 
    leftLink = "#",
    leftLinkIcon = '',
    rightLinkType = '',
    children
}: HeaderProps) {
    return (
        <header className={clsx(
            'header pb-4 flex-shrink-0',
            type == 'inner' && 'main-header',
            className
        )}>
            { type == 'inner' ? (
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="header-left d-flex align-items-center justify-content-center">
                        { leftLinkIcon !== 'hidden' && (
                            <MainBtn to={leftLink} theme='secondary' className='header-btn'>
                                { leftLinkIcon === 'arrow' ? (
                                    <>
                                        <img src={IMG.arrowLeft} alt="" />
                                        <img src={IMG.arrowLeftDark} alt="" className='dark-img'/>
                                    </>
                                ) : (
                                    <>
                                        <img src={IMG.times} alt="" />
                                        <img src={IMG.timesDark} alt="" className="dark-img" />
                                    </>
                                )}
                            </MainBtn>
                        )}
                    </div>
                    <h2 className="fw-medium fs-6 text-center">{children}</h2>
                    <div className="header-right d-flex align-items-center justify-content-center">
                        { rightLinkType === 'settings' ? (
                            <MainBtn to='#' theme='secondary' className='header-btn'>
                                <img src={IMG.settings} alt="" />
                                <img src={IMG.settingsDark} alt="" className="dark-img" />
                            </MainBtn>
                        ) : rightLinkType === 'search' ? (
                            <MainBtn to='#' theme='secondary' className='header-btn'>
                                <img src={IMG.searchIcon} alt="" />
                                <img src={IMG.searchIconDark} alt="" className="dark-img" />
                            </MainBtn>
                        ) : (<></>)}
                    </div>
                </div>
            ) : (
                <div className="container">
                    <a href="/" className="header-logo">
                        <img src={IMG.logo} alt="" />
                        <img src={IMG.logoLight} alt="" className="light-img" />
                    </a>
                </div>
            )}
        </header>
    )
}