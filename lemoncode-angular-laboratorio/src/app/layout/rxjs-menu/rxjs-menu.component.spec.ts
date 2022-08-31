import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMenuComponent } from './rxjs-menu.component';

describe('RxjsMenuComponent', () => {
  let component: RxjsMenuComponent;
  let fixture: ComponentFixture<RxjsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
