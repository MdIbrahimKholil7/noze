import React, { useEffect, useRef } from 'react';
import video from '../../assets/video3.mp4'
const Mold = () => {
    const videoRef = useRef(null)
    console.log(videoRef.current)
    useEffect(() => {
        videoRef.current.play()
    }, [])
    return (
        <div>
            <div>
                <div class="hero min-h-screen bg-base-100">
                    <div class="grid lg:grid-cols-2 grid-cols-1 p-5 gap-16">

                        <div class="text-center lg:text-left lg:w-[550px]">
                            <h1 class="text-5xl font-[500]">Break the Mold</h1>
                            <p class="py-6 text-[18px] font-serif pr-0 lg:pr-12 mt-12">NOZE monitors the air for spores and other markers associated with the most common types of indoor mold. Our mold index will tell you if it's likely that there’s mold around and whether your space is in danger of being a breeding ground.</p>
                        </div>
                        <div>
                            <video ref={videoRef} class="lg:w-[454px]" src={video} autoplay loop muted="muted" playsinline="" controlslist="nodownload" ></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mold;