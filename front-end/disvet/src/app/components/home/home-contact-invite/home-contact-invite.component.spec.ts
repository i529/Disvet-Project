import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContactInviteComponent } from './home-contact-invite.component';

describe('HomeContactInviteComponent', () => {
  let component: HomeContactInviteComponent;
  let fixture: ComponentFixture<HomeContactInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContactInviteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContactInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
