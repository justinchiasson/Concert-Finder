import React from "react";

class Filter extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getConcerts} style={{textAlign:'center'}}>
                <img />
                Hello {this.props.name}, please enter your location: 
                <input type="text" name="location" disabled={this.props.isSearchDisabled} placeholder="Your city..."/>
            </form>
        );
    }
}

export default Filter;