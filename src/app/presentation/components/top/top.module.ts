import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileRepository } from 'src/app/domain/repositories/profilerepository/profile.repository';
import { ProfileRepositoryImpl } from 'src/app/infra/repositories/profilerepository/profile.repository';
import { SharedModule } from '../shared/Shared.module';
import { ExperienceComponent } from './Experience/Experience.component';
import { LicenseComponent } from './License/License.component';
import { ProductComponent } from './Product/Product.component';
import { ProfileComponent } from './Profile/Profile.component';
import { SkillComponent } from './Skill/Skill.component';
import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';

@NgModule({
    declarations: [
        TopComponent,
        ProfileComponent,
        ExperienceComponent,
        SkillComponent,
        LicenseComponent,
        ProductComponent
    ],
    imports: [CommonModule, TopRoutingModule, SharedModule],
    exports: [
        TopComponent,
        ProfileComponent,
        ExperienceComponent,
        SkillComponent,
        LicenseComponent,
        ProductComponent
    ],

})
export class TopModule { }
