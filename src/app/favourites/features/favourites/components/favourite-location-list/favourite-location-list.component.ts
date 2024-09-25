import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  imports: [],
  templateUrl: "./favourite-location-list.component.html",
  styleUrl: "./favourite-location-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteLocationListComponent {}
