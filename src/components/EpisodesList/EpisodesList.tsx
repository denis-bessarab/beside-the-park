import React, {useEffect, useState} from 'react';
import "./episodesList.scss";
import {EpisodesListInterface} from "../../interfaces/interfaces";
import {useFourthSeasonEpisodes} from "../../api/hooks";
import Episode from "../Episode/Episode";
function EpisodesList() : React.JSX.Element {

	const [episodesList,setEpisodesList] = useState<EpisodesListInterface>()

	const response = useFourthSeasonEpisodes();

	useEffect(() => {
		setEpisodesList(response.data)
	},[response.data])

	return (
		<ul className="Episodes-List" data-testid="episodes-list">
			{episodesList?.episodes.results.map((episode,index) => {
				return <Episode key={index} air_date={episode.air_date} episode={episode.episode} name={episode.name} __typename={episode.__typename}/>
			})}
		</ul>
	);
}
export default EpisodesList;