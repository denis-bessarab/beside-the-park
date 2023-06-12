import React from "react";
import {EpisodePropsInterface} from "../../interfaces/interfaces";
import "./episode.scss";

function Episode(props:EpisodePropsInterface):React.JSX.Element {
	return (
		<li className="episode-component">
			<h2 className="episode">{props.episode.episode}</h2>
			<div className="name-air-date-container">
				<h2 className="name">{props.episode.name}</h2>
				<h2 className="air-date">{props.episode.air_date}</h2>
			</div>
		</li>
	)
}

export default Episode;