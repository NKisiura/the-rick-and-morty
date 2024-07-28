import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-favourites",
  standalone: true,
  imports: [],
  templateUrl: "./favourites.page.component.html",
  styleUrl: "./favourites.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouritesPageComponent {}
