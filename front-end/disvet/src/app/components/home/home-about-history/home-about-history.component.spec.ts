import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutHistoryComponent } from './home-about-history.component';

describe('HomeAboutHistoryComponent', () => {
  let component: HomeAboutHistoryComponent;
  let fixture: ComponentFixture<HomeAboutHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAboutHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAboutHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
