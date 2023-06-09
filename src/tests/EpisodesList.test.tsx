import {render, screen} from '@testing-library/react';
import EpisodesList from "../components/EpisodesList/EpisodesList";
import {MockedProvider} from "@apollo/client/testing";
import {GET_FOURTH_SEASON_EPISODES} from "../api/queries";

const mocks = [
	{
		request: {
			query: GET_FOURTH_SEASON_EPISODES,
		},
		result: {
			data: {
				episodes: {
					info:{
						count:1,
						__typename:'Episodes'
					},
					results: [
						{
							air_date: '2023-01-01',
							episode: '1',
							name: 'Episode 1',
							__typename: 'Episode'
						},
					]
				}
			}
		}
	}
]
test('Episodes List and Episode components renders correctly', async () => {
	render(
		<MockedProvider mocks={mocks}>
			<EpisodesList/>
		</MockedProvider>
	)
	expect(screen.getByTestId('episodes-list')).toBeInTheDocument();
	expect(await screen.findByText("Episode 1")).toBeInTheDocument();
});
