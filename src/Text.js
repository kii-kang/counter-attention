import React, { useEffect, useRef, useState } from 'react';
import './index.css';

const Text = (props) => {
    const paragraphRef = useRef(null);
    const [imgFocused, setImgFocused] = useState(null);
    const images = [
        { word: "taiwan park", image: "/images/taiwan.jpg" },
        { word: "gondii", image: "/images/gondii.jpg" },
        { word: "aslap", image: "/images/aslap.jpg" }
    ];
    const handleScroll = () => {
        const paragraph = paragraphRef.current;
        if (paragraph) {
            const rect = paragraph.getBoundingClientRect();
            const keywordElements = Array.from(paragraph.querySelectorAll("span.keyword"));
            keywordElements.forEach((el, index) => {
                const keywordRect = el.getBoundingClientRect();
                console.log(rect.top, keywordRect.top)
                const distance = keywordRect.top - rect.top;
                const imageElement = document.getElementById(`image-${index}`);
                if (!imageElement) return;
                console.log("distance", distance)
                if (distance < window.innerHeight - 200 && distance > 200) {
                    setImgFocused(images[index]);
                    imageElement.style.visibility = "visible";
                    imageElement.style.opacity = 0.9;
                } else {
                    setImgFocused(null);
                    imageElement.style.opacity = 0;
                    setTimeout(() => {
                        imageElement.style.visibility = "hidden";
                    }, 1000); 
                }
            });
        }
    };

    useEffect(() => {
        const scrollBox = paragraphRef.current;
        if (scrollBox) {
            scrollBox.addEventListener("scroll", handleScroll);
            return () => {
                scrollBox.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);
    
    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image.image;
        });
    }, []);

    return (
        <div>
            <div
                ref={paragraphRef}
                className={`fixed top-0 left-1/2 -translate-x-1/2 text-[2.5rem] m-auto max-w-[1000px] p-2 font-[TimesNewRoman] overflow-y-scroll overflow-x-clip h-full scroll-snap-y-mandatory ${
                props.isMobile ? 'w-[calc(100%-120px)]' : 'w-[calc(100%-200px)]'
            }`}>
                <div className="p-0 m-0 text-justify leading-relaxed tracking-wide">
                    <span>
                    {/* MAKE GREATER FRICTION AND WEIGHT. RESIST SMOOTHNESS AND LIGHTNESS. RESIST SEAMLESSNESS. CREATE LONGER LATENCY. */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <center>✴</center>
                    <br />
                    When I first arrived in Taipei, I spent my time sitting and listening to birds in parks distributed across the city. Birdcalls saturate the air, an ecology of presence and recognition. They are signals, meant to attract, to warn, to communicate—each species crafting its own delicate grammar of attention. These calls are ephemeral and organic, </span><span className="keyword">woven into the shifting rhythms of nature.</span><span>
                    <br />
                    <br />
                    <center>✴</center>
                    <br />
                    On the last day at RightsCon, everyone was startled to see a zoombomber streaming horrendous imagery on the screen, hijacking the senses of all the participants. This cacophony of pornographic, violent, and absurd imagery is, in a way, an accurate representation of the digital apparatus we are exposed to on a daily basis. Here, attention is no longer a fleeting act of exchange but a currency extracted, measured, and fed into the vast cybernetic apparatus of surveillance and control. Unlike the calls of birds, the digital attention economy reshapes our perception itself, designing smooth, frictionless, and seamless corridors where thoughts are not formed but directed.
                    <br />
                    <br />
                    <center>✴</center>
                    <br />
                    Attention autonomy is a fundamental human rights problem. The United Nations emphasizes that individuals must retain control over their attention and the data generated from it. Yet this principle is persistently eroded by platforms engineered to extract and commoditize human focus.
                    Jonathan Beller writes, "Perception is increasingly bound to production." We involuntarily contribute to capital production even as spectators. Images manifest indexicalities that sit on unstable ground, making them prone to manipulation. The media environment conditions viewers into a state of sensorial delirium—a psychological operation targeting the subconscious, much like </span>
                    <i><span className="keyword">Toxoplasma Gondii</span></i>
                    <span>, the parasitic organism that alters a rat's brain to suppress its fear of predators, leading it to an inevitable death. The attention economy functions similarly, directing perception and emotion in ways that serve commercial and political interests while eroding our agencies.
                    <br />
                    <br />
                    <center>✴</center>
                    <br />
                    The attention-manipulating apparatus is deeply rooted in a psychology that reduces human emotions into vectors, behavioral predictions, and marketable data points. This apparatus does not simply observe human behavior—it reshapes it. In this process, autonomy is constantly diminished as frictionless digital experiences train users to become passive participants in an economy that thrives on engineered compulsion. A new form of information manipulation is unfolding before our eyes and ears.
                    <br />
                    <br />
                    <center>✴</center>
                    <br />
                    Counter-attention is a response to this pervasive manipulation. It goes beyond counter-surveillance, focusing instead on the way surveillance algorithms interact directly with our senses. I call this mode of resistance <i>attention hacking</i>. The real battleground is not merely privacy, but the ability to maintain cognitive agency in a system designed to preempt independent thought.
                    Attention hacking is also a mode of dissent—an act of resistance against the manufactured consent embedded in commercially and politically driven algorithms. Just as traditional hacking subverts technical systems by finding exploits and inefficiencies, attention hacking seeks to create friction within the seamless flows of the attention economy. This friction manifests in artistic interventions, critical design practices, and alternative models of engagement that demand slowness, ambiguity, and deliberation.
                    <br />
                    <br />
                    <center>✴</center>
                    <br />
                    The Counter-Attention Archive documents and archives the work of scholars and artists who seek to decelerate the algorithms of the attention economy. By indexing projects that disrupt algorithmic dominance—whether through speculative design, subversive performance, or political action—the archive situates these efforts within a broader political and historical landscape.
                    The Counter-Attention Archive also provides an overview of the attention economy's historical and political dimensions, revealing how seemingly apolitical technological developments are, in fact, deeply enmeshed in structures of power. The military origins of predictive behavior modeling, the rise of algorithmic governance—each of these developments underscores the political stakes of the digital attention regime.
                    Artists and activists have long experimented with strategies of refusal, developing counter-practices that resist the default settings of digital engagement. From experimental web interfaces that introduce deliberate lag to speculative platforms that randomize algorithmic outputs, these projects collectively gesture toward new models of interaction—ones that prioritize autonomy over extraction, ambiguity over determinism.
                    <br />
                    <br />
                    <center>✴</center>
                    <br />
                    Time frame matters. The sound playing in the background is a piece by John Cage entitled <i><span className="keyword">As Slow As Possible</span></i>, which began inside Halberstadt Cathedral in 2001 and is scheduled to end on September 4th, 2640. 

                    <span onClick={() => {
                        const audio = new Audio('/asfap.mp3');
                        audio.play();
                    }} className='media-span cursor-pointer'> Compare this with a version compressed into 36 seconds: ASFSP. </span>
                    
                    While both contain the same underlying structure, the latter collapses temporality, eliminating the depth of perception—reflection of the sound from the walls, resonance and reverberation in the space—that emerge throughout the duration.
                    In the attention economy, speed and compression dominate. The constant demand for instant engagement, rapid processing, and seamless integration leaves little room for contemplation. Yet, resistance lies in expanding time—refusing to conform to the demand for immediate consumption. Cage's work embodies a radical slowness that challenges the very premise of efficiency-driven perception. Similarly, the fight for attention autonomy must involve rejecting the compressed temporality of algorithmic mediation.
                    To resist the accelerationist imperative of the attention economy, we must embrace friction as an ethical and political stance. Friction slows the rate of capture, introducing space for critical engagement and self-directed perception. Slowness, hesitation, and interruption become tools of resistance, countering the engineered urgency of algorithmic engagement.
                    <br />
                    <br />
                    <br />
                    <center>✴</center>
                    <br />
                    <center><span className='font-sans font-semibold'>MAKE GREATER FRICTION AND WEIGHT. <br/> RESIST SMOOTHNESS AND LIGHTNESS. <br/>RESIST SEAMLESSNESS. <br/>CREATE LONGER LATENCY.</span></center>
                    <br/>
                    <center>✴</center>
                    <br />
                    <br />
                </span>
                </div>
            </div>
            <div className=''>
                {images.map((keyword, index) => (
                    <img
                        key={index}
                        id={`image-${index}`}
                        src={keyword.image}
                        alt={keyword.word}
                        className="pointer-events-none min-w-[300px] w-[50%] max-w-[600px] max-h-[800px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity invisible duration-1000"
                    />
                ))}
            </div>
        </div>
    );
};

export default Text;