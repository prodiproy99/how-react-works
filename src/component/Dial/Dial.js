import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: "2px solid red", color: 'red'}}>
            <h3>So far step today{props.steps}</h3>
        </div>
    );
};

export default Dial;