import React from 'react';
import { NavLink } from 'react-router-dom';


const Common=(props)=>{
    return (
        <React.Fragment>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        {props.name} <strong className="brand_name">Coder</strong>
                                    </h1>
                                    <h2 className="my-3">We are a team of talented developer making website</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn_get_started">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1 header_img">
                                    <img src={props.imgsrc} className="img-fluid animiated" alt="WWW" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Common;