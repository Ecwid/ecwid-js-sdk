import { localStorage } from 'reactive-localstorage';
import { Cart } from '../type/cart';
import CartService from './cart-service';
import { getCartKey } from '../helper/local-storage-helpers';
import ActionsHolder from './actions-holder';

/**
 * Ecommerce SDK event service. Allows to subscribe to store events
 * and execute custom functions with them.
 * @class
 */
class EventService {
  private readonly cartService: CartService;

  private readonly localStorageCartKey: string;

  readonly onCartChanged: ActionsHolder<Cart>;

  constructor(storeId: number, cartService: CartService) {
    this.localStorageCartKey = getCartKey(storeId);
    this.cartService = cartService;
    this.onCartChanged = new ActionsHolder();
    this.subscribeOnCartChangedEvent();
  }

  private subscribeOnCartChangedEvent() {
    localStorage.on('change', (key: string) => {
      if (key !== this.localStorageCartKey) {
        return;
      }
      this.cartService.get()
        .then((cart) => this.onCartChanged.get().forEach((action) => action.execute(cart)));
    });
  }
}

export default EventService;
