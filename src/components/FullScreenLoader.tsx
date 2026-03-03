import DotsLoader from './DotsLoader';

interface FullScreenLoaderProps {
    
    message?: string;
}


export default function FullScreenLoader({ message = 'Загрузка данных...' }: FullScreenLoaderProps) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-(--bg-main)">
            <div className="flex flex-col items-center gap-4">
                
                <div className="relative flex items-center justify-center w-16 h-16">
                    <div
                        className="absolute w-16 h-16 rounded-full opacity-20"
                        style={{
                            background: 'linear-gradient(135deg, #367DF0, #1AA179)',
                            animation: 'pulse 1.5s ease-in-out infinite',
                        }}
                    />
                    <div
                        className="absolute w-10 h-10 rounded-full opacity-40"
                        style={{
                            background: 'linear-gradient(135deg, #367DF0, #1AA179)',
                            animation: 'pulse 1.5s ease-in-out infinite 0.3s',
                        }}
                    />
                    <DotsLoader />
                </div>

                <p className="text-sm text-(--grey) animate-pulse">{message}</p>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.2; }
                    50% { transform: scale(1.3); opacity: 0.1; }
                }
            `}</style>
        </div>
    );
}
