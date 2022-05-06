/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhenGtXsComponent } from './WhenGtXs.component';

describe('WhenGtXsComponent', () => {
  let component: WhenGtXsComponent;
  let fixture: ComponentFixture<WhenGtXsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenGtXsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenGtXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
