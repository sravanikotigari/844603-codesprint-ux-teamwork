import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppointComponent } from './update-appoint.component';

describe('UpdateAppointComponent', () => {
  let component: UpdateAppointComponent;
  let fixture: ComponentFixture<UpdateAppointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAppointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
