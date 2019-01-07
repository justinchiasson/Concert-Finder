import React from "react";

import icon from '../assets/images/concerticon.png';

class Filter extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getConcerts} style={{ textAlign: 'center' }}>

                Hello {this.props.name}, please enter your location:
                <div style={{paddingTop:'1%'}}>
                    <img src={icon} alt={"icon"} height={"30"} style={{verticalAlign:'middle'}} />
                    <input type="text" name="location" disabled={this.props.isSearchDisabled} placeholder="Your city..." />
                </div>
            </form>
        );
    }
}

export default Filter;