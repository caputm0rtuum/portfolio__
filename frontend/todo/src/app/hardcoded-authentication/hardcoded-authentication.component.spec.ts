import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardcodedAuthenticationComponent } from './hardcoded-authentication.component';

describe('HardcodedAuthenticationComponent', () => {
  let component: HardcodedAuthenticationComponent;
  let fixture: ComponentFixture<HardcodedAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardcodedAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardcodedAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
