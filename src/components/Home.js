import React from 'react';
import './Home.css';
import { cardsInfo } from './constants';
import Banner from './Banner';
import Card from './Card';


function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
               {cardsInfo.map((card, i) => (
                   <Card key={i} {...card} />
               ))}
            </div>
        </div>
    )
}

export default Home