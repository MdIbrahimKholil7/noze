import React, { useEffect, useRef } from 'react';
import video from '../../assets/video-5.mp4'
const Conquere = () => {

    const videoRef=useRef(null)
    console.log(videoRef.current)
    useEffect(()=>{
        videoRef.current.play()
    },[])
    return (
        <div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content justify-between w-full  p-5 flex-col lg:flex-row-reverse gap-4">
                    <div class="text-center lg:text-left lg:w-[550px]">
                        <h1 class="text-5xl font-[500]">Сonquer the Virus</h1>
                        <p class="py-6">Сonquer the Virus
                            Noze tracks the airborne markers (VOCs) associated with the Coronavirus family. Our AI uses that information to deliver a real-time risk index that will not only tell you if your space is prone to spreading the virus, but whether there’s a chance the virus is actually in the air.</p>
                    </div>
                    <div>
                       <video ref={videoRef} class="lg:w-[454px]" src={video} autoplay loop muted="muted" playsinline="" controlslist="nodownload" ></video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conquere;