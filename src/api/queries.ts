import {gql} from "@apollo/client";

export const GET_FOURTH_SEASON_EPISODES =  gql`
	query {
		 episodes(filter: { episode: "S04" }) {
		 info {
				count
		 }
		 results {
			 name,
			 episode,
				air_date
		 }
	 }
	}
`