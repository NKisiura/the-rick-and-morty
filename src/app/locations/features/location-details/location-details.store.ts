import { inject, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { ComponentStore } from "@ngrx/component-store";
import { BackendErrorResponse } from "@shared/types/http";
import { CharactersApiService } from "@characters/services";
import { LocationsApiService } from "@locations/services";
import { Character } from "@characters/types";
import { Location } from "@locations/types";

interface LocationDetailsState {
  readonly locationLoading: boolean;
  readonly location: Location | null;
  readonly locationError: BackendErrorResponse | null;

  readonly charactersLoading: boolean;
  readonly characters: Character[] | null;
  readonly charactersError: BackendErrorResponse | null;
}

const initialState: LocationDetailsState = {
  locationLoading: false,
  location: null,
  locationError: null,

  charactersLoading: false,
  characters: null,
  charactersError: null,
};

@Injectable()
export class LocationDetailsStore extends ComponentStore<LocationDetailsState> {
  private readonly locationsApiService = inject(LocationsApiService);
  private readonly charactersApiService = inject(CharactersApiService);

  constructor() {
    super(initialState);
  }

  // ------------------------- SELECTORS -------------------------

  public readonly location = this.selectSignal(({ location }) => location);
  public readonly locationLoading = this.selectSignal(
    ({ locationLoading }) => locationLoading,
  );
  public readonly locationError = this.selectSignal(
    ({ locationError }) => locationError,
  );

  public readonly characters = this.selectSignal(
    ({ characters }) => characters,
  );
  public readonly charactersLoading = this.selectSignal(
    ({ charactersLoading }) => charactersLoading,
  );
  public readonly charactersError = this.selectSignal(
    ({ charactersError }) => charactersError,
  );

  // ------------------------- EFFECTS -------------------------

  public readonly locationWithCharactersByIdRequested = this.effect<number>(
    (locationId$) => {
      return locationId$.pipe(
        tap(() => this.patchState({ locationLoading: true })),
        switchMap((locationId) =>
          this.locationsApiService.getLocationById(locationId).pipe(
            tapResponse(
              (location) => {
                this.locationByIdSucceeded(location);

                if (!location.residentIds.length) return;
                this.locationCharactersByIdListRequested(location.residentIds);
              },
              ({ error }: HttpErrorResponse) => {
                this.locationByIdFailed(error);
              },
            ),
          ),
        ),
      );
    },
  );

  private readonly locationCharactersByIdListRequested = this.effect<number[]>(
    (characterIdList$) => {
      return characterIdList$.pipe(
        tap(() => this.patchState({ charactersLoading: true })),
        switchMap((characterIdList) =>
          this.charactersApiService.getCharactersByIdList(characterIdList).pipe(
            tapResponse(
              (characters) => {
                this.locationCharactersSucceeded(characters);
              },
              ({ error }: HttpErrorResponse) => {
                this.locationCharactersFailed(error);
              },
            ),
          ),
        ),
      );
    },
  );

  // ------------------------- UPDATERS -------------------------

  private readonly locationByIdSucceeded = this.updater(
    (state, location: Location): LocationDetailsState => ({
      ...state,
      locationLoading: false,
      location: location,
      locationError: null,
    }),
  );

  private readonly locationByIdFailed = this.updater(
    (state, error: BackendErrorResponse): LocationDetailsState => ({
      ...state,
      locationLoading: false,
      location: null,
      locationError: error,
    }),
  );

  private readonly locationCharactersSucceeded = this.updater(
    (state, characters: Character[]): LocationDetailsState => ({
      ...state,
      charactersLoading: false,
      characters: characters,
      charactersError: null,
    }),
  );

  private readonly locationCharactersFailed = this.updater(
    (state, error: BackendErrorResponse): LocationDetailsState => ({
      ...state,
      charactersLoading: false,
      characters: null,
      charactersError: error,
    }),
  );
}
