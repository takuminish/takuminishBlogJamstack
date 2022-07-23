import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/model/resource-model/product.model';

/**
 * 成果物のコンポーネント
 */
@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.scss']
})
export class ProductComponent {


  /** 成果物一覧 */
  @Input() products: Product[] = []

  /**
   * コンストラクタ
   */
  constructor() { }

}
