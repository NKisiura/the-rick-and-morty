import { inject, Injectable } from "@angular/core";
import { catchError, EMPTY, finalize, map, of, switchMap, tap } from "rxjs";
import { ComponentStore } from "@ngrx/component-store";
import { LocalStorageService } from "@shared/services";
import { EntityType } from "@shared/types/entity";
import { FAVOURITE_ENTITY_LS_KEY_MAP } from "@favourites/constants";

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
      map(({ entityId, entityType }) => ({
        entityId,
        localStorageKey: FAVOURITE_ENTITY_LS_KEY_MAP[entityType],
      })),
      tap(({ entityId, localStorageKey }) => {
        this.patchState({
          entityId,
          localStorageKey,
        });
      }),
      switchMap(({ entityId, localStorageKey }) => {
        return of(
          this.localStorageService.getItem<number[]>(localStorageKey!) || [],
        ).pipe(
          tap((entityFavouriteIdList) => {
            this.patchState({
              isFavourite: entityFavouriteIdList.includes(entityId!),
            });
          }),
        );
      }),
    );
  });

  public readonly toggleEntityFavouriteStateRequested = this.effect<void>(
    (trigger$) => {
      return trigger$.pipe(
        tap(() => {
          this.patchState({ isSaving: true });
        }),
        map(() => this.state()),
        switchMap(({ entityId, isFavourite, localStorageKey }) => {
          return of(
            this.localStorageService.getItem<number[]>(localStorageKey!) || [],
          ).pipe(
            tap((entityFavouriteIdList) => {
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
