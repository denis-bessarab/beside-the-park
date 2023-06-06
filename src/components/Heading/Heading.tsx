import React from 'react';
import "./heading.scss";
import rickAndMortyImg from "../../assets/rick-and-morty.png";
function Heading() : React.JSX.Element {

	return (
		<div id="heading">
			<h2>Episodes of the <span>4th</span><br/>season of the series</h2>
			<h1>Rick and Morty</h1>
			<img src={rickAndMortyImg} alt="rick-and-morty"/>
		</div>
	);
}

export default Heading;