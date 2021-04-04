import React from 'react';
import {CardMedia, Card, Typography, CardContent} from "@material-ui/core";

const Profile = ({image, name, text}) => {

    return <Card>
        <div className="profile-card">
            <CardMedia component="img" image={image} title={text}/>
            <CardContent>
                <Typography component="h5" variant="h5">{name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{text}</Typography>
            </CardContent>
        </div>
    </Card>;
}

const Whoarewe = props => {


    const profiles = [
        {
            image: "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1610904859050-GZPHECIWJGAVPBA456SW/ke17ZwdGBToddI8pDm48kMG0E-tUfUxlWwQnnagUgmlZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-uNp3MZLdlvMDnwUM19q3mRhWFjwSjHHdMViu5WjoAASg/unnamed.jpg?format=500w",
            name: "Seyeon Rah",
            text: "American Protege Romantic Music Competition 2020 1st Place, BAMA 2nd place, Great Composer 1st place "
        },
        {
            image: "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1610905041659-583VIV7XBYVFR3D4PY2K/ke17ZwdGBToddI8pDm48kMG0E-tUfUxlWwQnnagUgmlZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-uNp3MZLdlvMDnwUM19q3mRhWFjwSjHHdMViu5WjoAASg/unnamed-1.jpg?format=500w",
            name: "Edward Kang",
            text: "American Protege Romantic Music Competition 2020 First Place, BAMA US Open Music Competition Chamber First Place"
        },
        {
            image: "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1610905102755-YPJF6T3KHKIMDONTR5WN/ke17ZwdGBToddI8pDm48kMG0E-tUfUxlWwQnnagUgmlZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-uNp3MZLdlvMDnwUM19q3mRhWFjwSjHHdMViu5WjoAASg/unnamed-2.jpg?format=500w",
            name: "Jenny Kim",
            text: "AYM"
        },
        {
            image: "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1610905159366-RP59RXFZHSDN5G7FDO21/ke17ZwdGBToddI8pDm48kMG0E-tUfUxlWwQnnagUgmlZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-uNp3MZLdlvMDnwUM19q3mRhWFjwSjHHdMViu5WjoAASg/unnamed-3.jpg?format=500w",
            name: "Anna Bae",
            text: "2020 VOCE competition 3rd place, San Francisco International Innovative Competition 3rd place, BAMA US internation open music competition 1st place"
        },
        {
            image: "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1610905213006-LA2FHAL4TYIBDS3NM9BQ/ke17ZwdGBToddI8pDm48kH9HJoPeUoO2krnw1ab_N6dZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-v13BZkxyUCWyDjsjlcX4oYPN4ixT1aRBRzx7hH0HA02w/unnamed-4.jpg?format=500w",
            name: "Melody Yoon",
            text: "San Jose Youth Symphony (SJYS) Chamber Ensemble"
        },
    ];

    return (
        <div className="profile-grid">
            {profiles.map((i) => {
                return <Profile key={i.image} image={i.image} name={i.name} text={i.text}/>
            })}
        </div>
    );
};

Whoarewe.propTypes = {};

export default Whoarewe;