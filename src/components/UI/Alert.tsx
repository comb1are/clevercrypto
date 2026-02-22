import clsx from "clsx";

interface AlertProps {
    type?: "teal" | "gray" | "warning" | "red" | "success" | "error";
    className?: string;
    children: React.ReactNode;
}

export default function Alert ({type = "teal", className = "", children}: AlertProps) {
    return (<div className={clsx(
        " d-flex align-items-center",
        className,
        'alert-' + type
    )}>
        {children}
    </div>)
}