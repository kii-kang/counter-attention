import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Papa from 'papaparse';
import './index.css';

const Archive = ({}) => {
      const [gridItems, setGridItems] = useState([]);
      const gridContainerRef = useRef();
      const [columnsCount, setColumnsCount] = useState(Math.min(5, Math.floor(gridContainerRef.innerWidth / 200)));
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
                setColumnsCount(Math.floor(gridContainerRef.innerWidth / 200));
            };
            window.addEventListener('resize', handleResize);
        }, []);
    return (
        <div
            className="flex w-full justify-center items-center min-h-screen"
        >
            <div
                className={`grid gap-4 w-[calc(100%-160px)] max-w-[1000px] p-5`}
                style={{
                    gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`
                }}
                ref={gridContainerRef}
            >
                {gridItems.map((item, index) => (
                    <div
                        key={index}
                        className="border border-[#efefef] relative bg-white pb-[100%]"
                    >
                        <div className="absolute text-sm text-justify tracking-tight flex mx-auto h-full w-full p-2.5 flex-col justify-center items-center">
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