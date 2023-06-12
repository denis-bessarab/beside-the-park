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
				return <Episode key={index} air_date={episode.air_date} episode={episode.episode} name={episode.name} __typename={episode.__typename}/>
			})}
		</ul>
	);
}
export default EpisodesList;