export interface LocationLite {
  readonly id: number | null;
  readonly name: string;
}

export interface LocationLiteResponse {
  readonly name: string;
  readonly url: string;
}
