import { inject, Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { LocalStorageService } from "@shared/services";
import { EntityType } from "@shared/types/entity";
import { catchError, EMPTY, finalize, of, switchMap, tap } from "rxjs";

const LS_KEY_MAP: Record<EntityType, string> = {
  [EntityType.CHARACTER]: "FAVOURITE_CHARACTERS",
  [EntityType.EPISODE]: "FAVOURITE_EPISODES",
  [EntityType.LOCATION]: "FAVOURITE_LOCATIONS",
};

interface EntityFavouriteToggleState {
  readonly entityId: number | null;
  readonly isFavourite: boolean;
  readonly localStorageKey: string | null;
  readonly isSaving: boolean;
}

const initialState: EntityFavouriteToggleState = {
  entityId: null,
  isFavourite: false,
  localStorageKey: null,
  isSaving: false,
};

@Injectable()
export class EntityFavouriteToggleStore extends ComponentStore<EntityFavouriteToggleState> {
  private readonly localStorageService = inject(LocalStorageService);

  constructor() {
    super(initialState);
  }

  // ------------------------- SELECTORS -------------------------

  public readonly isFavourite = this.selectSignal(
    ({ isFavourite }) => isFavourite,
  );
  public readonly isSaving = this.selectSignal(({ isSaving }) => isSaving);

  // ------------------------- EFFECTS -------------------------

  public readonly entityFavouriteStateRequested = this.effect<{
    entityId: number;
    entityType: EntityType;
  }>((entityData$) => {
    return entityData$.pipe(
      tap(({ entityId, entityType }) => {
        const localStorageKey = LS_KEY_MAP[entityType];
        const entityFavouriteIdList =
          this.localStorageService.getItem<number[]>(localStorageKey) || [];

        this.patchState({
          entityId,
          localStorageKey,
          isFavourite: entityFavouriteIdList.includes(entityId),
        });
      }),
    );
  });

  public readonly toggleEntityFavouriteStateRequested = this.effect<void>(
    (trigger$) => {
      return trigger$.pipe(
        tap(() => {
          this.patchState({ isSaving: true });
        }),
        switchMap(() => {
          return of(this.state()).pipe(
            tap(({ entityId, isFavourite, localStorageKey }) => {
              const entityFavouriteIdList =
                this.localStorageService.getItem<number[]>(localStorageKey!) ||
                [];

              const updatedEntityFavouriteIdList = isFavourite
                ? entityFavouriteIdList.filter((id) => id !== entityId)
                : [...entityFavouriteIdList, entityId];

              this.localStorageService.setItem(
                localStorageKey!,
                updatedEntityFavouriteIdList,
              );
              this.patchState({ isFavourite: !isFavourite });
            }),
            catchError((error) => {
              console.log(`Error toggling entity favourite state: ${error}`);
              return EMPTY;
            }),
            finalize(() => {
              this.patchState({ isSaving: false });
            }),
          );
        }),
      );
    },
  );
}
