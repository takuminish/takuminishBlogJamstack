import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { TopComponent } from './top/top.component';
import { ProfileComponent } from './top/Profile/Profile.component';
import { WhenLtMdComponent } from './shared/layout/WhenLtMd/WhenLtMd.component';
import { WhenGtLgComponent } from './shared/layout/WhenGtLg/WhenGtLg.component';
import { WhenGtMdComponent } from './shared/layout/WhenGtMd/WhenGtMd.component';
import { WhenGtSmComponent } from './shared/layout/WhenGtSm/WhenGtSm.component';
import { WhenGtXsComponent } from './shared/layout/WhenGtXs/WhenGtXs.component';
import { WhenLtLgComponent } from './shared/layout/WhenLtLg/WhenLtLg.component';
import { WhenLtSmComponent } from './shared/layout/WhenLtSm/WhenLtSm.component';
import { WhenLtXlComponent } from './shared/layout/WhenLtXl/WhenLtXl.component';
import { ExperienceComponent } from './top/Experience/Experience.component';
import { SkillComponent } from './top/Skill/Skill.component';
import { LicenseComponent } from './top/License/License.component';
import { ProductComponent } from './top/Product/Product.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ProfileComponent,
    ExperienceComponent,
    SkillComponent,
    LicenseComponent,
    ProductComponent,
    WhenLtMdComponent,
    WhenGtLgComponent,
    WhenGtMdComponent,
    WhenGtSmComponent,
    WhenGtXsComponent,
    WhenLtLgComponent,
    WhenLtSmComponent,
    WhenLtXlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
