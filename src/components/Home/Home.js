import React from 'react';
import Banner from '../HomeComponents/Banner';
import Headline from '../HomeComponents/Headline';
import Conquere from '../HomeComponents/Conquere';
import Mold from '../HomeComponents/Mold';
import Matter from '../HomeComponents/Matter/Matter';
const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner/>
            <Headline/>
           <Conquere/>
           <Mold/>
           <Matter/>
        </div>
    );
};

export default Home;