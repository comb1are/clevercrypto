import IMG from '../assets/images';
import clsx from "clsx";
import MainBtn from './UI/MainBtn';
import { useTheme } from '../hooks/useTheme';

type HeaderProps = {
    type?: "" | "inner";
    className?: string;
    leftLink?: string;
    leftLinkIcon?: '' | 'arrow' | 'hidden';
    rightLinkType?: '' | 'settings' | 'search';
    children: React.ReactNode;
};

export default function Header({
    type = "",
    className = "",
    leftLink = "#",
    leftLinkIcon = '',
    rightLinkType = '',
    children
}: HeaderProps) {
    const isDark = useTheme();

    return (
        <header className={clsx(
            'shrink-0 pb-4',
            type == 'inner' && 'border-b border-[var(--header-border)]',
            className
        )}>
            {type == 'inner' ? (
                <div className="px-4 w-full flex items-center justify-between">
                    <div className="w-10 h-10 flex items-center justify-center">
                        {leftLinkIcon !== 'hidden' && (
                            <MainBtn to={leftLink} theme='secondary' className='!w-10 !h-10 !p-0 bg-[var(--btn-secondary-bg)]'>
                                {leftLinkIcon === 'arrow' ? (
                                    <img src={isDark ? IMG.arrowLeftDark : IMG.arrowLeft} alt="" />
                                ) : (
                                    <img src={isDark ? IMG.timesDark : IMG.times} alt="" />
                                )}
                            </MainBtn>
                        )}
                    </div>
                    <h2 className="font-medium text-base text-center leading-[1.37] tracking-[0.003rem] text-[var(--title-color)]">{children}</h2>
                    <div className="w-10 h-10 flex items-center justify-center">
                        {rightLinkType === 'settings' ? (
                            <MainBtn to='#' theme='secondary' className='!w-10 !h-10 !p-0 bg-[var(--btn-secondary-bg)]'>
                                <img src={isDark ? IMG.settingsDark : IMG.settings} alt="" />
                            </MainBtn>
                        ) : rightLinkType === 'search' ? (
                            <MainBtn to='#' theme='secondary' className='!w-10 !h-10 !p-0 bg-[var(--btn-secondary-bg)]'>
                                <img src={isDark ? IMG.searchIconDark : IMG.searchIcon} alt="" />
                            </MainBtn>
                        ) : (<></>)}
                    </div>
                </div>
            ) : (
                <div className="px-4 w-full">
                    <a href="/" className="block">
                        <img src={isDark ? IMG.logoLight : IMG.logo} alt="Promo" className="rounded-lg" />
                    </a>
                </div>
            )}
        </header>
    )
}