import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { EpisodeListStore } from "./episode-list.store";
import {
  ErrorMessageComponent,
  LoaderComponent,
  LoadMoreButtonComponent,
  PaginationComponent,
} from "@shared/components";
import { EpisodesFilter } from "@episodes/types";
import { EpisodeCardComponent, EpisodesFilterComponent } from "@episodes/ui";

@Component({
  selector: "app-episode-list",
  standalone: true,
  imports: [
    EpisodeCardComponent,
    EpisodesFilterComponent,
    PaginationComponent,
    LoaderComponent,
    ErrorMessageComponent,
    LoadMoreButtonComponent,
  ],
  providers: [EpisodeListStore],
  templateUrl: "./episode-list.page.component.html",
  styleUrl: "./episode-list.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeListPageComponent implements OnInit {
  private readonly episodesListStore = inject(EpisodeListStore);

  public episodes = this.episodesListStore.episodes;
  public episodesLoading = this.episodesListStore.episodesLoading;
  public hasLoadedEpisodes = this.episodesListStore.hasLoadedEpisodes;
  public error = this.episodesListStore.error;

  public initialFilter = this.episodesListStore.initialFilter;

  public currentPage = this.episodesListStore.currentPage;
  public pagesCount = this.episodesListStore.pagesCount;
  public isLastPage = this.episodesListStore.isLastPage;

  ngOnInit(): void {
    this.handleFilterChange(this.initialFilter());
  }

  public handleShowMore(): void {
    this.episodesListStore.nextPageRequested();
  }

  public handlePageChange(pageNumber: number): void {
    this.episodesListStore.pageChanged(pageNumber);
  }

  public handleFilterChange(filter: EpisodesFilter): void {
    this.episodesListStore.filterUpdated(filter);
  }
}
