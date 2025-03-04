import React from 'react';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
    return (
        <React.Fragment>
           <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="bn" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bolder">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-primary">Read More</NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Card;