import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import Home from "./components/Home";
import Whoarewe from "./components/Whoarewe";
import MonthlyNewsLetter from "./components/MonthlyNewsLetter";
import Events from "./components/Events";
import PhotoGallery from "./components/PhotoGallery";
import Donate from "./components/Donate";
import ContactUs from "./components/ContactUs";

export default function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/whoarewe">
                        <Whoarewe/>
                    </Route>
                    <Route path="/monthlynewsletter">
                        <MonthlyNewsLetter/>
                    </Route>
                    <Route path="/events">
                        <Events/>
                    </Route>
                    <Route path="/photogallery">
                        <PhotoGallery/>
                    </Route>
                    <Route path="/donate">
                        <Donate/>
                    </Route>
                    <Route path="/contactus">
                        <ContactUs/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}