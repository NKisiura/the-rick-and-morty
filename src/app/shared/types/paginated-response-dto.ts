export interface PaginatedResponseDTO<T> {
  readonly info: Info;
  readonly results: T[];
}

interface Info {
  readonly count: number;
  readonly pages: number;
  readonly next: string | null;
  readonly prev: string | null;
}
