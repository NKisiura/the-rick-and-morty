import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-location-list",
  standalone: true,
  imports: [],
  templateUrl: "./location-list.page.component.html",
  styleUrl: "./location-list.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListPageComponent {}
