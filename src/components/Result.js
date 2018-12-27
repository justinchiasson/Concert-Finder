import React from "react";

import Concert from "./Concert";

class Result extends React.Component {

    render() {
        var events = this.props.events;
        var eventsList = ['No concerts found!'];

        if (events !== undefined && events.length !== 0) {
            eventsList = events.map(function(event, index){
                return <Concert key={index} concert={event} />;
            });
        }

        return (
            <div>
                <img />
                <h3>There are {events && events.length} concerts with your favourite artists near you: </h3>
                <ul>{eventsList}</ul>
            </div>
        );
    }
}

export default Result;