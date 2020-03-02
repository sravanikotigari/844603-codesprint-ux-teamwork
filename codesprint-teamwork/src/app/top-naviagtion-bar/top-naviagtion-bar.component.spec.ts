import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNaviagtionBarComponent } from './top-naviagtion-bar.component';

describe('TopNaviagtionBarComponent', () => {
  let component: TopNaviagtionBarComponent;
  let fixture: ComponentFixture<TopNaviagtionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNaviagtionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNaviagtionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
