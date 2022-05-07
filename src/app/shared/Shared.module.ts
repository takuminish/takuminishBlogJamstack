import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhenLtMdComponent } from './layout/WhenLtMd/WhenLtMd.component';
import { WhenGtLgComponent } from './layout/WhenGtLg/WhenGtLg.component';
import { WhenGtMdComponent } from './layout/WhenGtMd/WhenGtMd.component';
import { WhenGtSmComponent } from './layout/WhenGtSm/WhenGtSm.component';
import { WhenGtXsComponent } from './layout/WhenGtXs/WhenGtXs.component';
import { WhenLtLgComponent } from './layout/WhenLtLg/WhenLtLg.component';
import { WhenLtSmComponent } from './layout/WhenLtSm/WhenLtSm.component';
import { WhenLtXlComponent } from './layout/WhenLtXl/WhenLtXl.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WhenLtMdComponent,
    WhenGtLgComponent,
    WhenGtMdComponent,
    WhenGtSmComponent,
    WhenGtXsComponent,
    WhenLtLgComponent,
    WhenLtSmComponent,
    WhenLtXlComponent
  ],
  exports: [
    WhenLtMdComponent,
    WhenGtLgComponent,
    WhenGtMdComponent,
    WhenGtSmComponent,
    WhenGtXsComponent,
    WhenLtLgComponent,
    WhenLtSmComponent,
    WhenLtXlComponent
  ]
})
export class SharedModule { }
