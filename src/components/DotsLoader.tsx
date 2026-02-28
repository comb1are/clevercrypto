import React from 'react';

export default function DotsLoader() {
    return (
        <div className="flex items-center justify-center w-fit h-6 shrink-0 text-[#367DF0]">
            <svg
                width="26"
                height="6"
                viewBox="0 0 26 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >

                <circle cx="3" cy="3" r="3" fill="currentColor" className="animate-dots" />
                <circle cx="13" cy="3" r="3" fill="currentColor" className="animate-dots" style={{ animationDelay: '0.2s' }} />
                <circle cx="23" cy="3" r="3" fill="currentColor" className="animate-dots" style={{ animationDelay: '0.4s' }} />
            </svg>
        </div>
    );
}