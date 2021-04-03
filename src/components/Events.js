import React from 'react';

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
                return <div className="event-block">
                    <div>
                        <iframe
                            src={`https://www.youtube.com/embed/${e.id}?autoplay=0&mute=1&wmode=opaque&frameborder=0`}/>
                    </div>
                    <div className="event-title">{e.title}</div>
                </div>
            })}

        </div>
    );
};

Events.propTypes = {};

export default Events;