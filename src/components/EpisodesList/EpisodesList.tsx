import React from 'react';
import "./episodesList.scss";
import {EpisodeInterface} from "../../interfaces/interfaces";
import {useFourthSeasonEpisodes} from "../../api/hooks";
import Episode from "../Episode/Episode";
import loader from '../../assets/loader.gif'
function EpisodesList() : React.JSX.Element {

	const {error, data, loading} = useFourthSeasonEpisodes();
	
	return (
		<ul className="Episodes-List" data-testid="episodes-list">
			{loading && <li className="loader"><img src={loader} alt="loader"/></li>}
			{error && <li className="error">Oops... Something's gone wrong :(</li>}
			{data && data.episodes.results.map((episode:EpisodeInterface,index:number) => {
				return <Episode key={index} episode={episode}/>
			})}
		</ul>
	);
}
export default EpisodesList;