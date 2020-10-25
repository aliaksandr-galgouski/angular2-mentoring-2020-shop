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
import { CartItemModel } from '../../models';
//#endregion

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() item: CartItemModel;

  @Output() remove = new EventEmitter<CartItemModel>();
  @Output() increaseQuantity = new EventEmitter<CartItemModel>();
  @Output() dicreaseQuantity = new EventEmitter<CartItemModel>();

  onRemove(): void {
    this.remove.emit(this.item);
  }

  onIncreaseQuantity(): void {
    this.increaseQuantity.emit(this.item);
  }

  onDicreaseQuantity(): void {
    this.dicreaseQuantity.emit(this.item);
  }
}
