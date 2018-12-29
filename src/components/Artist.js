import React from "react";

class Artist extends React.Component {
    render() {
        return (
            <div>
                {this.props.artist.name}
                {this.props.artist.artist}
            </div>
        );
    }
}

export default Artist;