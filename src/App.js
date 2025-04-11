import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Text from './Text';
import StripLeft from './StripLeft';
import StripRight from './StripRight';
import Archive from './Archive';
function App() {
  const [imgFocused, setImgFocused] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    { word: "gondii", image: "/images/gondii.jpg" },
    { word: "aslap", image: "/images/aslap.jpg" }
  ];
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
  // const handleMouseMove = (e) => {
  //   const rect = e.target.getBoundingClientRect();
  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;
  //   const distance = Math.sqrt(Math.pow(x - rect.width / 2, 2) + Math.pow(y - rect.height / 2, 2));
  //   const maxDistance = Math.sqrt(Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2));
  //   const blur = Math.max(0, 5 - (distance / maxDistance) * 5);
  //   setBlurAmount(blur);
  // };
  useEffect(() => {
    setIsMobile(isMobileDevice());
    if (isMobileDevice()) console.log("mobile device detected.")
}, []);
return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        {/* <div className="textbox fixed flex-col min-w-screen min-h-screen"> */}
          <StripLeft isMobile={isMobile}/>
          <StripRight isMobile={isMobile} />
          <div className="fixed h-full left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 flex flex-col sm:flex-row justify-center items-center">
            <Routes>
              <Route path="/" element={
                <nav className="flex h-full flex-col sm:flex-row justify-center items-center">
                  <Link to="/index" className="hover:underline text-[5rem] sm:mr-6">INDEX</Link>
                  <Link to="/text" className="hover:underline text-[5rem] sm:ml-6">TEXT</Link>
                  <div className='fixed bottom-0 w-full inline-block left-1/2 -translate-x-1/2 m-auto bg-black text-white bg-clip-text text-sm text-center mt-4 '> 
                This project was developed under 
                <a href="https://community-privacy.github.io/" target='blank' rel='noreferrer' className='underline'> Community Privacy Residency (2025)</a> &lt;3 
              </div>
                </nav>
              } />
              <Route path="/text" element={<Text isMobile={isMobile}/>} />
              <Route path="/index" element={<Archive isMobile={isMobile}/>} />
            </Routes>
          </div>
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;


    // <div className="App justify-center items-center min-h-screen" onMouseMove={handleMouseMove}>
    // <div className="App textbox flex-col w-full h-fit" onMouseMove={handleMouseMove}>
    //   <StripLeft />
    //   <Text />
    //   <StripRight />
      {/* <div
        className="absolute top-0 left-0 w-full h-full p-1 -z-10 grid gap-[5px] opacity-25 pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(auto-fill, 20px)`,
          gridTemplateRows: `repeat(auto-fill, 20px)`,
        }}
      >
        {Array.from({ length: Math.ceil(window.innerWidth / 20) * Math.ceil(window.innerHeight / 20) }).map((_, index) => (
          // <span key={index} role="img" aria-label="eye" className="text-base">
          //   👁️
          // </span>
          <Eye key={index} className="w-full h-full" />
        ))}
      </div> */}
      {/* <div className="absolute -rotate-90 translate-y-full left-0 top-0 text-center mx-auto font-semibold leading-none">
        <div className="text-[3rem] text-justify m-0 p-0 tracking-widest ">
          {Array(1).fill("COUNTER ATTENTION INDEX").join(" ")}
        </div>
        <div className="text-[1.5rem] text-justify m-0 p-0 tracking-[0.092em]">
          {Array(2).fill("COUNTER ATTENTION INDEX").join(" ")}
        </div>
        <div className="tmext-[1rem] text-justify m-0 p-0 tracking-[0.09em]">
          {Array(3).fill("COUNTER ATTENTION INDEX").join(" ")}
        </div>
        <div className="text-[0.75rem] text-justify m-0 p-0 tracking-[0.09em]">
          {Array(4).fill("COUNTER ATTENTION INDEX").join(" ")}
        </div>
        <div className="text-[0.6rem] text-justify m-0 p-0 tracking-[0.09em]">
          {Array(5).fill("COUNTER ATTENTION INDEX").join(" ")}
        </div>
      </div> */}
      
      {/* <div className={`grid grid-cols-4 gap-2.5 justify-center items-center mx-auto max-w-[800px] pt-5`} style={{ filter: `blur(${blurAmount}px)` }}>
        {gridItems.map((item, index) => (
          <div key={index} className="border border-[#ddd] rounded-lg relative bg-white pb-[100%]">
            <div className="absolute text-xs inset-0 flex mx-auto h-full w-full p-2.5 flex-col justify-center items-center">
              {item.img ? (
                <>
                  <img 
                    src={process.env.PUBLIC_URL + "/images/" + item.img} 
                    alt={item.title || `Item ${index}`}
                    className="max-w-full max-h-full object-contain m-auto"
                  />
                  <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-75 p-1 flex items-center justify-center text-center text-xs opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <b>{item.title}{item.author ? `, ${item.author}` : ''}</b>
                  </div>
                </>
              ) : <b className="flex items-center h-full">{item.title}{item.author ? `, ${item.author}` : ''}</b>}
            </div>
          </div>
        ))}
      </div> */}
      
      {/* <div className="text-center mt-5 w-full max-w-[800px] min-w-[800px] mx-auto font-semibold leading-none"
      style={{ filter: `blur(1px)` }}
      // style={{ filter: `blur(${(5-blurAmount)/2}px)` }}
      >
        <div className="text-[0.6rem] text-justify m-0 p-0 tracking-[0.09em]">
          {Array(5).fill("COUNTER ATTENTION INDEX").join(" ")}
        </div>
        <div className="text-[0.75rem] text-justify m-0 p-0 tracking-[0.09em]">
          {Array(4).fill("COUNTER ATTENTION INDEX").join(" ")}
        </div>
        <div className="tmext-[1rem] text-justify m-0 p-0 tracking-[0.09em]">
          {Array(3).fill("COUNTER ATTENTION INDEX").join(" ")}
        </div>
        <div className="text-[1.5rem] text-justify m-0 p-0 tracking-[0.092em]">
          {Array(2).fill("COUNTER ATTENTION INDEX").join(" ")}
        </div>
        <div className="text-[3rem] text-justify m-0 p-0 tracking-widest ">
          {Array(1).fill("COUNTER ATTENTION INDEX").join(" ")}
        </div>
      </div> */}
