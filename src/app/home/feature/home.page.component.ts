import { ChangeDetectionStrategy, Component } from "@angular/core";
import { GreetingSectionComponent } from "@home/ui/greeting-section/greeting-section.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [GreetingSectionComponent],
  templateUrl: "./home.page.component.html",
  styleUrl: "./home.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
