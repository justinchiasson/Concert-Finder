import React from "react";

import Concert from "./Concert";

class Result extends React.Component {
    render() {
        return (
            <div>
                <img />
                <h3>(Number) of your favourite concerts near you: </h3>
                <ul><Concert /><Concert /><Concert /></ul>
            </div>
        );
    }
}

export default Result;