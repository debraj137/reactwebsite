import React from 'react';
import Common from "./Common";
import web from "../src/images/2.svg"


const About=()=>{
    return (
        <React.Fragment>
        <Common name='For more info contact the' imgsrc={web} visit="/contact" btname="Contact Now"/>
        </React.Fragment>
    );
};

export default About;