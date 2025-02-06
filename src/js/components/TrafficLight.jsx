import React from 'react';
import './TrafficLight.css';

const TrafficLight = (props) => {

    
    return (

        <div className=''>
            <div className='myTrafficLight'>
                <div 
                    className={`colorRed ${props.color === 'red' ? 'on' : ''}`}
                    onClick={() => props.colorChange('red')}
                ></div>
                <div 
                    className={`colorYellow ${props.color === 'yellow' ? 'on' : ''}`}
                    onClick={() => props.colorChange('yellow')}
                ></div>
                <div 
                    className={`colorGreen ${props.color === 'green' ? 'on' : ''}`}
                    onClick={() => props.colorChange('green')}
                ></div>
            </div>
        </div> 

    );
};
export default TrafficLight;