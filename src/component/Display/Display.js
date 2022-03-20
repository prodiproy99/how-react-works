import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border: "2px solid red", color: 'red'}}>
            <h1>Name: {props.name}</h1>
            <h1>Steps: {props.steps}</h1>
            <Dial steps= {props.steps}></Dial>
        </div>
    );
};

export default Display;