import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista2Component } from './vista2.component';

describe('Vista2Component', () => {
  let component: Vista2Component;
  let fixture: ComponentFixture<Vista2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vista2Component]
    });
    fixture = TestBed.createComponent(Vista2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
