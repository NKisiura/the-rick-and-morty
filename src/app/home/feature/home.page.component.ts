import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./home.page.component.html",
  styleUrl: "./home.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
