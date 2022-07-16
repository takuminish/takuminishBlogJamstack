/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhenXsComponent } from './WhenXs.component';

describe('WhenXsComponent', () => {
  let component: WhenXsComponent;
  let fixture: ComponentFixture<WhenXsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhenXsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
