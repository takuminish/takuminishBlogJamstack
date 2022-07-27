import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * ヘッダーのコンポーネント
 */
@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class HeaderComponent {

  // environment
  get environment() {
    return environment
  }

  /**
   * コンストラクタ
   */
  constructor() { }
}
