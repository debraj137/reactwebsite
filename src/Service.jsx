import React from 'react';
import Card from "../src/Card";
import Sdata from "../src/Sdata";
const Service=()=>{
    return (
        <React.Fragment>
        <div className="my-5">
            <h1 className="text-center font-weight-bolder">Our Service</h1>
        </div>
        <div className="col-10 mx-auto">
            <div className="row gy-4">
                <div className="container-fluid mb-5">
                    <div className="row gy-4">            
                        {Sdata.map((val,index)=>{
                            return <Card key={index} imgsrc={val.imgsrc} title={val.title}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
};

export default Service;