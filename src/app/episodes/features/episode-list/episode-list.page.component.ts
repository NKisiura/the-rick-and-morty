import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { EpisodeListStore } from "./episode-list.store";
import { PaginationComponent } from "@shared/components";
import { EpisodesFilter } from "@episodes/types";
import { ActivatedRoute, Router } from "@angular/router";
import { EpisodeCardComponent, EpisodesFilterComponent } from "@episodes/ui";

@Component({
  selector: "app-episode-list.page",
  standalone: true,
  imports: [EpisodeCardComponent, EpisodesFilterComponent, PaginationComponent],
  providers: [EpisodeListStore],
  templateUrl: "./episode-list.page.component.html",
  styleUrl: "./episode-list.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeListPageComponent implements OnInit {
  private readonly episodesListStore = inject(EpisodeListStore);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  public episodes = this.episodesListStore.episodes;
  public episodesLoading = this.episodesListStore.episodesLoading;
  public error = this.episodesListStore.error;

  public episodesFilter = this.episodesListStore.episodesFilter;
  public currentPage = this.episodesListStore.currentPage;
  public pagesCount = this.episodesListStore.pagesCount;

  ngOnInit(): void {
    this.initEpisodes();
  }

  private initEpisodes(): void {
    const { page, ...params } = this.activatedRoute.snapshot.queryParams;
    this.updateEpisodes({ ...params, page: +page || 1 });
  }

  public handlePageChange(pageNumber: number): void {
    this.updateEpisodes({ ...this.episodesFilter(), page: pageNumber });
  }

  public handleFilterChange(filter: EpisodesFilter): void {
    this.updateEpisodes({ ...filter, page: 1 });
  }

  private updateEpisodes(filter: EpisodesFilter): void {
    this.episodesListStore.setFilter(filter);
    this.episodesListStore.getEpisodesByFilter(this.episodesFilter());
    this.router.navigate([], { queryParams: this.episodesFilter() });
  }
}
