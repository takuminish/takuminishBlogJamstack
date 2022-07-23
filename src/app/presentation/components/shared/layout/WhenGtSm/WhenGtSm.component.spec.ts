/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhenGtSmComponent } from './WhenGtSm.component';

describe('WhenGtSmComponent', () => {
  let component: WhenGtSmComponent;
  let fixture: ComponentFixture<WhenGtSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenGtSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenGtSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
