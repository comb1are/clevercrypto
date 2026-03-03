interface DataErrorScreenProps {
    
    message?: string;
    
    onRetry?: () => void;
}


export default function DataErrorScreen({
    message = 'Не удалось загрузить данные',
    onRetry,
}: DataErrorScreenProps) {
    return (
        <div className="flex flex-col items-center justify-center flex-1 min-h-[60vh] px-6 gap-4">
            
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FF4D4F]/10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#FF4D4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-lg font-medium text-(--text-main)">Произошла ошибка</h3>
                <p className="text-sm text-(--grey) max-w-[280px]">{message}</p>
            </div>

            {onRetry && (
                <button
                    onClick={onRetry}
                    className="flex items-center gap-2 px-6 py-3 mt-2 font-medium text-white bg-[#367DF0] rounded-[14px] transition-all hover:bg-[#2B6AD9] active:scale-95"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4V10H7M23 20V14H17M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14L18.36 18.36A9 9 0 0 1 3.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Повторить попытку
                </button>
            )}
        </div>
    );
}
