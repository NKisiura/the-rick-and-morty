import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-location-details",
  standalone: true,
  imports: [],
  templateUrl: "./location-details.page.component.html",
  styleUrl: "./location-details.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationDetailsPageComponent {}
