import React from "react";

class Concert extends React.Component {
    render() {
        return (
            <div>
                Event: {this.props.concert.name}
                Artist: {this.props.concert.artist} 
                Date: {this.props.concert.date}
            </div>
        );
    }
}

export default Concert;