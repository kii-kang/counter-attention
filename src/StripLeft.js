import React from 'react';
import './index.css';
const StripLeft = () => {
    return (
        <div className="fixed pointer-events-non w-fit h-fit -rotate-90 origin-top-left left-0 translate-y-[100vh] text-center m-0 leading-none flex-col">
            <div className="strip text-[3rem] -m-2 tracking-widest">
                {Array(10).fill("COUNTER ATTENTION ARCHIVE").join(" ")}
            </div>
            <div className="strip text-[1.5rem] -m-1 tracking-[0.092em]">
                {Array(20).fill("COUNTER ATTENTION ARCHIVE").join(" ")}
            </div>
            <div className="strip text-[1rem] -m-1 tracking-[0.09em]">
                {Array(30).fill("COUNTER ATTENTION ARCHIVE").join(" ")}
            </div>
            <div className="strip text-[0.75rem] -m-0.5 tracking-[0.09em]">
                {Array(40).fill("COUNTER ATTENTION ARCHIVE").join(" ")}
            </div>
            <div className="strip text-[0.6rem] m-0 tracking-[0.09em]">
                {Array(50).fill("COUNTER ATTENTION ARCHIVE").join(" ")}
            </div>
        </div>
    );
};

export default StripLeft;