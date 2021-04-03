import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {Link} from "react-router-dom";

const Layout = ({children}) => {

    const {user, isAuthenticated, isLoading, loginWithRedirect, logout} = useAuth0();

    return (
        <div className="container">
            <div className="header">
                <div className="logo"/>
                <div className="nav">
                    <Link to="/home">Home</Link>
                    <Link to="/whoarewe">Who are we</Link>
                    <Link to="/monthlynewsletter">Monthly newsletter</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/photogallery">Photo gallery</Link>
                    <Link to="/donate">Donate</Link>
                    <Link to="/contactus">Contact us</Link>
                </div>
                <div className="profNav">
                    {!isLoading && isAuthenticated && <>
                        <img className="profile" title={user.name} src={user.picture} alt={user.name}/>
                        <div className="button" onClick={() => logout({returnTo: window.location.origin})}>Log Out</div>
                    </>}
                    {!isLoading && !isAuthenticated && <>
                        {!isAuthenticated && <div className="button"
                                                  onClick={() => loginWithRedirect({redirectUri: window.location.href})}>
                            Log In
                        </div>}
                    </>}
                </div>
            </div>

            <div className="content">
                {children}
            </div>

            <div className="footer small-margin-top">
                <div>Mail us to 1166 Quail Creek Circle, San Jose CA 95120</div>
                <div className="small-margin-left">
                    |  &nbsp;Contact us at
                    <a href="mailto:almadenyouth@gmail.com">almadenyouth@gmail.com</a>
                </div>
            </div>
        </div>
    );
};

Layout.propTypes = {};

export default Layout;