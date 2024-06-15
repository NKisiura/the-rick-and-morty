export interface Episode {
  readonly id: number;
  readonly name: string;
  readonly airDate: Date;
  readonly episode: string;
  readonly characterIds: number[];
  readonly url: string;
  readonly created: Date;
}

export interface EpisodeResponse {
  readonly id: number;
  readonly name: string;
  readonly air_date: string;
  readonly episode: string;
  readonly characters: string[];
  readonly url: string;
  readonly created: string;
}
