import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const domain = "cbf.auth0.com";

const Profile = () => {
    const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    const getUserMetadata = async () => {

        const accessToken = await getAccessTokenSilently({
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const resp = await metadataResponse.json();
        console.log(resp);

    };

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <button onClick={getUserMetadata}>Show token</button>
            </div>
        )
    );
};

export default Profile;