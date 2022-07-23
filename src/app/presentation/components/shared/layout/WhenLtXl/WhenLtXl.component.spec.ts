/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhenLtXlComponent } from './WhenLtXl.component';

describe('WhenLtXlComponent', () => {
  let component: WhenLtXlComponent;
  let fixture: ComponentFixture<WhenLtXlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenLtXlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenLtXlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
