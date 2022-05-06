/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhenGtLgComponent } from './WhenGtLg.component';

describe('WhenGtLgComponent', () => {
  let component: WhenGtLgComponent;
  let fixture: ComponentFixture<WhenGtLgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenGtLgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenGtLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
