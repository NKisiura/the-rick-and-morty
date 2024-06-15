export interface Location {
  readonly id: number;
  readonly name: string;
  readonly type: string;
  readonly dimension: string;
  readonly residentIds: number[];
  readonly url: string;
  readonly created: Date;
}

export interface LocationResponse {
  readonly id: number;
  readonly name: string;
  readonly type: string;
  readonly dimension: string;
  readonly residents: string[];
  readonly url: string;
  readonly created: string;
}
