export interface EpisodesListInterface {
	episodes:{
		info:{
			count:number,
			__typename:string
		},
		results: EpisodeInterface[]
	}
}

export interface EpisodeInterface {
	air_date: string,
	episode: string,
	name: string,
	__typename: string
}