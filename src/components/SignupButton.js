import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const SignupButton = () => {
    const {loginWithRedirect} = useAuth0();
    return (
        <div className="button-sec" onClick={() => loginWithRedirect({screen_hint: "signup"})}>Sign Up</div>
    );
};

export default SignupButton;