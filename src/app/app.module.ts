import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HeaderComponent } from './presentation/components/Header/Header.component';
import { SharedModule } from './presentation/components/shared/Shared.module';
import { ProfileRepository } from './domain/repositories/profilerepository/profile.repository';
import { ProfileRepositoryImpl } from './infra/repositories/profilerepository/profile.repository';

/**
 * AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    SharedModule
  ],
  providers:
    [{ provide: ProfileRepository, useClass: ProfileRepositoryImpl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
