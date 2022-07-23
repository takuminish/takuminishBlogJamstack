/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhenLtLgComponent } from './WhenLtLg.component';

describe('WhenLtLgComponent', () => {
  let component: WhenLtLgComponent;
  let fixture: ComponentFixture<WhenLtLgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenLtLgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenLtLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
