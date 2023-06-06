import React from "react";
import {EpisodeInterface} from "../../interfaces/interfaces";
import "./episode.scss";

function Episode(props:EpisodeInterface):React.JSX.Element {
	return (
		<li className="episode-component">
			<h2 className="episode">{props.episode}</h2>
			<div className="name-air-date-container">
				<h2 className="name">{props.name}</h2>
				<h2 className="air-date">{props.air_date}</h2>
			</div>
		</li>
	)
}

export default Episode;