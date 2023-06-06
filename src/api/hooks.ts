import {GET_FOURTH_SEASON_EPISODES} from "./queries";
import {useQuery} from "@apollo/client";

export const useFourthSeasonEpisodes = () => {
	const {error,loading,data} = useQuery(GET_FOURTH_SEASON_EPISODES)

	return {error,loading,data}
}