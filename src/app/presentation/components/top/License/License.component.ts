import { AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { License } from 'src/app/domain/model/resource-model/license.model';

@Component({
  selector: 'app-License',
  templateUrl: './License.component.html',
  styleUrls: ['./License.component.scss']
})
export class LicenseComponent implements OnInit, OnChanges {

  /** 資格一覧 */
  @Input() licenses: License[] = [];

  /** 非IT系資格一覧 */
  public notTechnologyLicenses: License[] = [];

  /** IT系資格一覧 */
  public technologyLicenses: License[] = [];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.notTechnologyLicenses = this.licenses.filter(l => !l.isITLicense)
    this.technologyLicenses = this.licenses.filter(l => l.isITLicense);
  }
}
