import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NgxProgressbarComponent } from "./ngx-progressbar.component";

describe("NgxProgressbarComponent", () => {
  let component: NgxProgressbarComponent;
  let fixture: ComponentFixture<NgxProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxProgressbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
