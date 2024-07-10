import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "greeting-section",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./greeting-section.component.html",
  styleUrl: "./greeting-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingSectionComponent {}
