import React from 'react';
import Common from './Common';
import web from "../src/images/1.svg"

const Home=()=>{
    return (
        <React.Fragment>
            <Common name='Take your business to the next level with' imgsrc={web} visit="/service" btname="Get Started"/>
        </React.Fragment>
    );
};

export default Home;