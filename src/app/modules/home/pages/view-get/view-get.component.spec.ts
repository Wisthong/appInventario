import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGetComponent } from './view-get.component';

describe('ViewGetComponent', () => {
  let component: ViewGetComponent;
  let fixture: ComponentFixture<ViewGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
