/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhenGtMdComponent } from './WhenGtMd.component';

describe('WhenGtMdComponent', () => {
  let component: WhenGtMdComponent;
  let fixture: ComponentFixture<WhenGtMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenGtMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenGtMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
