/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhenLtMdComponent } from './WhenLtMd.component';

describe('WhenLtMdComponent', () => {
  let component: WhenLtMdComponent;
  let fixture: ComponentFixture<WhenLtMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenLtMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenLtMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
