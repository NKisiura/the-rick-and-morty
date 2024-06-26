import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [],
  templateUrl: "./home.page.component.html",
  styleUrl: "./home.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
