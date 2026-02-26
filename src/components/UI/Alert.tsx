import clsx from "clsx";

interface AlertProps {
    type?: "teal" | "gray" | "warning" | "red" | "success" | "error" | "white";
    className?: string;
    children: React.ReactNode;
}

export default function Alert({ type = "teal", className = "", children }: AlertProps) {
    const typeClasses: Record<NonNullable<AlertProps["type"]>, string> = {
        teal: "bg-[#1aa179]/12 text-[#1aa179]",
        success: "bg-[#1aa179]/12 text-[#1aa179]",
        red: "bg-[#b02a37]/12 text-[#b02a37]",
        error: "bg-[#b02a37]/12 text-[#b02a37]",
        white: "bg-(--bg-main) border-[1.5px] border-[#e9ecef] rounded-[18px] text-(--main-dark)",
        warning: "bg-(--orange-bg) text-[#FFC107]",
        gray: "bg-(--btn-secondary-bg) text-[#ADB5BD]",
    };

    return (
        <div
            className={clsx(
                "flex items-center px-4 py-1 leading-[1.37] tracking-[0.03em] rounded-2xl",
                typeClasses[type] || typeClasses.teal,
                className
            )}
        >
            {children}
        </div>
    );
}