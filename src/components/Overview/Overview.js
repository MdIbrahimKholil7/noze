import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
const Overview = () => {
    return (
        <div>
            <div className='flex gap-4 flex-col md:flex-row items-start lg:items-center active-drop'>
                <div className='flex items-center'>
                    <h1 className='text-[#654a9b] overview'>Overview</h1>
                    <span className='ml-4 chevron lg:hidden block'><BiChevronDown/></span>
                </div>
                <div>
                    <button className='text-[#b9b0e4] mr-4 mb-3 lg:mb-0 font-[400] block lg:inline'>Specs</button>
                    <button className='text-[#b9b0e4] font-[400] block lg:inline'>FAQS</button>
                </div>
            </div>
        </div>
    );
};

export default Overview;