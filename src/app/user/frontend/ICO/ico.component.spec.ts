import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICOComponent } from './ico.component';

describe('ICOComponent', () => {
  let component: ICOComponent;
  let fixture: ComponentFixture<ICOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
