import React from "react";

import Artist from "./Artist";

class TopArtists extends React.Component {
    render() {
        var artists = this.props.artists;
        var artistList = ['No artists found!'];

        // if user's top artists are found, map them to Artist components
        if (artists !== undefined && artists.length !== 0) {
            artistList = artists.map(function(artist, index){
                return <Artist key={index} artist={artist} />;
            });
        }

        return (
            <div style={{padding:'13%', paddingTop:'5%'}}>
                <h3>Your top artists on Spotify:</h3>
                {artistList}
            </div>
        );
    }
}

export default TopArtists;