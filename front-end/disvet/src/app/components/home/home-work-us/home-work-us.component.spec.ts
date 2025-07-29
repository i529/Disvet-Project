import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkUsComponent } from './home-work-us.component';

describe('HomeWorkUsComponent', () => {
  let component: HomeWorkUsComponent;
  let fixture: ComponentFixture<HomeWorkUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWorkUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWorkUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
