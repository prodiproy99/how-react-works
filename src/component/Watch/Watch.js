import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseStep = () =>{
        const newSteps = steps + 1;
        setSteps(newSteps);
    }

useEffect( () =>{
    console.log(steps);
}, [steps])

    return (
        <div style={{border: "2px solid red", color: 'red'}}>
            <h2>This is my watch </h2>
            <h2>My current steps: {steps}</h2>
            <button onClick={increaseStep}>Do Steps...</button>
            <Display name="Roy" steps={steps}></Display>
        </div>
    );
};

export default Watch;