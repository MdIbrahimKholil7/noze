import React from 'react';
import img from '../../assets/NOZE-Hero-1.png'
const Banner = () => {
    return (
        <div>
            <div>
                <div class="hero min-h-screen bg-base-100">
                    <div class="hero-content gap-32 flex-col lg:flex-row w-full justify-between max-w-7xl mx-auto lg:px-20">

                        <div>
                            <h1 class="text-5xl font-bold">There’s something</h1>
                            <h1 class="text-5xl font-bold">new in the air</h1>
                            <p class="py-6">NOZE is an AI powered air quality monitor that works to keep you safe. Breathe easy.</p>
                            <button class="btn btn-primary">Join the waitlist</button>
                        </div>
                        <div>
                            <img  src={img} class="max-w-[400px] rounded-lg shadow-2xl" alt='nozHeroImg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;