import React from 'react';
import Watch from '../Watch/Watch';

const Detail = (props) => {
    return (
        <div>
            <h3>Price: {props.price}</h3>
            <Watch></Watch> 
        </div>
    );
};

export default Detail;