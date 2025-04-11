import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Papa from 'papaparse';
import './index.css';

const Archive = (props) => {
      const [gridItems, setGridItems] = useState([]);
      const gridContainerRef = useRef();
      const [columnsCount, setColumnsCount] = useState(4);
        useEffect(() => {
            fetch('./contents.tsv')
            .then(response => response.text())
            .then(csvData => {
                Papa.parse(csvData, {
                header: true,
                complete: (results) => {
                    const shuffledData = [...results.data];
                    for (let i = shuffledData.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
                    }
                    setGridItems(shuffledData);
                    console.log(results.data)
                }
                });
            })
            .catch(error => console.error('Error loading CSV:', error));
        }, []);

        useEffect(() => {
            const handleResize = () => {
                if (gridContainerRef.current) {
                    setColumnsCount(props.isMobile ? 2 : Math.min(4, Math.floor(gridContainerRef.current?.offsetWidth / 200)));
                    setColumnsCount(Math.max(2, Math.min(4, Math.floor(gridContainerRef.current?.offsetWidth / 200))));
                }
            };
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
    return (
        <div
            className="flex w-full justify-center items-center"
        >
            <div
                className={`grid gap-4 ${props.isMobile ? 'w-[calc(100%-80px)]' : 'w-[calc(100%-160px)]'} max-w-[1000px] p-5 overflow-y-auto`}
                style={{
                    gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`,
                    maxHeight: '100vh'
                }
                }
                ref={gridContainerRef}
            >
                {gridItems.map((item, index) => (
                    <div
                        key={index}
                        className={`border border-[#efefef] relative bg-white pb-[100%] aspect-square ${item.url ? 'cursor-pointer' : ''}`}
                        onClick={() => {
                            if (item.url) {
                                window.open(item.url, '_blank', 'noopener,noreferrer');
                            }
                        }}
                    >
                        <div className="absolute text-sm text-justify tracking-tight flex mx-auto h-full w-full p-2.5 flex-col justify-center items-center ">
                            {item.img ? (
                                <>
                                    <img
                                        src={process.env.PUBLIC_URL + "/images/" + item.img}
                                        alt={item.title || `Item ${index}`}
                                        className="max-w-full max-h-full object-contain m-auto"
                                    />
                                    <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-75 p-1 flex items-center justify-center text-center text-xs opacity-0 hover:opacity-100 transition-opacity duration-200">
                                        <b>
                                            {item.title}
                                            {item.author ? `, ${item.author}` : ''}
                                        </b>
                                    </div>
                                </>
                            ) : (
                                <b className="flex items-center h-full">
                                    {item.title}
                                    {item.author ? `, ${item.author}` : ''}
                                </b>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Archive;