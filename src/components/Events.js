import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";

const Events = props => {

    const events = [
        {
            id: "eRXU1n_S7RI",
            title: "2020 Fall Virtual Benefit Concert"
        },
        {
            id: "_Yzhougjyfw",
            title: "Beneficiary: Equal Rights Initiative"
        },
        {
            id: "EIsfmtmYD0I",
            title: "2020 Summer Virtual Concert",
        },
    ]

    return (
        <div className="event">
            {events.map(e => {
                return <Card>
                    <div>
                        <iframe
                            src={`https://www.youtube.com/embed/${e.id}?autoplay=0&mute=1&wmode=opaque&frameborder=0`}/>
                    </div>
                    <CardContent>
                        <Typography component="h6" variant="h6">
                            {e.title}
                        </Typography>
                    </CardContent>
                </Card>
            })}

        </div>
    );
};

Events.propTypes = {};

export default Events;