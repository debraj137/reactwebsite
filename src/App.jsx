import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />

            </Switch>
            <Footer />

        </React.Fragment>
    );
};

export default App;