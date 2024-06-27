import { TestBed } from "@angular/core/testing";

import { NgxProgressbarService } from "./ngx-progressbar.service";

describe("NgxProgressbarService", () => {
  let service: NgxProgressbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProgressbarService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
