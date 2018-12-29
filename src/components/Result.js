import React from "react";

import Concert from "./Concert";

class Result extends React.Component {

    render() {
        var events = this.props.events;
        var eventsList = ['No concerts found!'];

        // if concerts are found, map them to Concert components
        if (events !== undefined && events.length !== 0) {
            eventsList = events.map(function(event, index){
                return <Concert key={index} concert={event} />;
            });
        }

        return (
            <div style={{padding:'13%', paddingTop:'5%'}}>
                <h3>There are {events && events.length} concerts with your favourite artists near you: </h3>
                {eventsList}
            </div>
        );
    }
}

export default Result;