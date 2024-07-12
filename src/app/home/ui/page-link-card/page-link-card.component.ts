import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";
import { PageLinkCard } from "@home/types";

@Component({
  selector: "page-link-card",
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: "./page-link-card.component.html",
  styleUrl: "./page-link-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLinkCardComponent {
  public pageLinkCard = input.required<PageLinkCard>();
}
