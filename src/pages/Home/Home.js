import React from 'react';
import Banner from '../../components/Banner/Banner';
import Featured from '../../components/Featured/Featured';
import Introduction from '../../components/Introduction/Introduction';
import NFT from '../../components/NFT/NFT';
import Premium from '../../components/Premium/Premium';
import RoadMap from '../../components/RoadMap/RoadMap';
import Stramer from '../../components/Streamer/Stramer';

const Home = () => {
    return (
        <div id='home'>
            <Banner/>
            <Introduction/>
            <Stramer/>
            <RoadMap/>
            <NFT/>
            <Featured/>
            <Premium/>
        </div>
    );
};

export default Home;