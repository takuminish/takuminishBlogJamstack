/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhenLtSmComponent } from './WhenLtSm.component';

describe('WhenLtSmComponent', () => {
  let component: WhenLtSmComponent;
  let fixture: ComponentFixture<WhenLtSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenLtSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenLtSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
