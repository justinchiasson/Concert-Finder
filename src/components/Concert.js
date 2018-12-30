import React from "react";

class Concert extends React.Component {
    render() {
        return (
            <div>
                Event: {this.props.concert.name + " "}
                Venue: {this.props.concert._embedded.venues[0].name + "  "} 
                Date: {this.props.concert.dates.start.localDate}
            </div>
        );
    }
}

export default Concert;