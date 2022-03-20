import React from 'react';
import Detail from '../Detail/Detail';

const Device = (props) => {
    return (
        <div>
            <h1>My Phone Name: {props.name}</h1>
            <Detail price= {props.price}></Detail>
        </div>
    );
};

export default Device;