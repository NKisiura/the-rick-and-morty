export interface LocationLite {
  readonly id: number | null;
  readonly name: string;
}

export interface LocationLiteDTO {
  readonly name: string;
  readonly url: string;
}
