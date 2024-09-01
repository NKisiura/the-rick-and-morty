import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from "@angular/core";
import { NgClass } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { EntityType } from "@shared/types/entity";
import { EntityFavouriteToggleStore } from "./entity-favourite-toggle.store";

@Component({
  selector: "entity-favourite-toggle",
  standalone: true,
  imports: [FaIconComponent, NgClass],
  providers: [EntityFavouriteToggleStore],
  templateUrl: "./entity-favourite-toggle.component.html",
  styleUrl: "./entity-favourite-toggle.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityFavouriteToggleComponent implements OnInit {
  private readonly entityFavouriteToggleStore = inject(
    EntityFavouriteToggleStore,
  );

  public readonly starIcon = faStar;

  public entityId = input.required<number>();
  public entityType = input.required<EntityType>();

  public isFavourite = this.entityFavouriteToggleStore.isFavourite;
  public isSaving = this.entityFavouriteToggleStore.isSaving;

  ngOnInit(): void {
    this.entityFavouriteToggleStore.entityFavouriteStateRequested({
      entityId: this.entityId(),
      entityType: this.entityType(),
    });
  }

  public toggleFavouriteState(): void {
    this.entityFavouriteToggleStore.toggleEntityFavouriteStateRequested();
  }
}
