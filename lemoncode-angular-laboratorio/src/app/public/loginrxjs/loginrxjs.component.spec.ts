import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginrxjsComponent } from './loginrxjs.component';

describe('LoginrxjsComponent', () => {
  let component: LoginrxjsComponent;
  let fixture: ComponentFixture<LoginrxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginrxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginrxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
