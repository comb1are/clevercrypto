import clsx from "clsx";

interface OffcanvasInterface {
    className?: string;
    id?: string;
    children?: React.ReactNode;
}

export default function Offcanvas ({
    className = '',
    id = '',
    children,
}: OffcanvasInterface) {
    return (<div
        className={clsx(
            'offcanvas offcanvas-bottom border-0 main-modal',
            className
        )}
        tabIndex={-1}
        id={id}
        aria-labelledby={`${id}Label`}
    >
        <div className="offcanvas-body">
            {children}
        </div>
    </div>)
}