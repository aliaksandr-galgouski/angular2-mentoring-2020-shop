//#region Angular imports
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
//#endregion
//#region Model imports
import { ProductModel } from '../../models';
//#endregion

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product: ProductModel;

  @Output() buy = new EventEmitter<number>();

  onBuy(): void {
    this.buy.emit(this.product.id);
  }
}
