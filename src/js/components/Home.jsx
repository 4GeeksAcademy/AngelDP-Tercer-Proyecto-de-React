import React, { useState, useEffect } from "react";
import TrafficLight from './TrafficLight'


const Home = () => {

	const [ color, setColor ] = useState("red");

	const colorChange = (newColor) => {
		setColor(newColor);
	};

	const buttonColor = () => {

		switch(color){

			case "red":
				setColor("yellow");
				break;

			case "yellow":
				setColor("green");
				break;

			case "green":
				setColor("red")
				break;
		}

	}

	return (

		<div className="d-flex justify-content-center">

			<TrafficLight 
				
				color={color}
				colorChange={colorChange}
			/>

			<div className="mt-5 p-5">
				<button type="button" className="btn btn-primary" onClick={buttonColor}>
					Change Color
				</button>
			</div>
			
			
		</div>
		
	);
};

export default Home;