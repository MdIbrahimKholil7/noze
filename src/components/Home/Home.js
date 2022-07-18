import React from 'react';
import Banner from '../HomeComponents/Banner';
import Headline from '../HomeComponents/Headline';
import Conquere from './Conquere/Conquere';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner/>
            <Headline/>
           <Conquere/>
        </div>
    );
};

export default Home;