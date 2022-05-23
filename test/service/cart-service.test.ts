import { when } from 'jest-when';
import CartConverter from '../../src/converter/cart-converter';
import CartService from '../../src/service/cart-service';
import { prepareLocalStorageCartData, prepareCartData } from '../helper/cart-test-data-helpers';

jest.mock('../../src/converter/cart-converter');

describe('Go to checkout tests', () => {
  /**
   * jsdom test environment throws exception in case of changed location during test execution.
   * This function instantiates custom writable location object with predefined origin URL.
   */
  function prepareDomEnvironmentWithLocation() {
    global.window = Object.create(window);
    const url = 'http://localhost';
    Object.defineProperty(window, 'location', {
      value: {
        origin: url,
      },
      writable: true,
    });
  }

  beforeAll(() => {
    prepareDomEnvironmentWithLocation();
  });

  test('Go to checkout when default store location path was not set', () => {
    const cartService = new CartService(1002);
    cartService.goToCheckout();
    expect(window.location.href).toBe('http://localhost/store#!/~/cart');
  });

  test('Go to checkout when default store location path was not set with custom store location path', () => {
    const cartService = new CartService(1002);
    cartService.goToCheckout('/products');
    expect(window.location.href).toBe('http://localhost/products#!/~/cart');

    cartService.goToCheckout('/products/');
    expect(window.location.href).toBe('http://localhost/products#!/~/cart');

    cartService.goToCheckout('products');
    expect(window.location.href).toBe('http://localhost/products#!/~/cart');

    cartService.goToCheckout('products/');
    expect(window.location.href).toBe('http://localhost/products#!/~/cart');
  });

  test('Go to checkout when default store location path was set', () => {
    let cartService = new CartService(1002, '/default-store-location');
    cartService.goToCheckout();
    expect(window.location.href).toBe('http://localhost/default-store-location#!/~/cart');

    cartService = new CartService(1002, '/default-store-location/');
    cartService.goToCheckout();
    expect(window.location.href).toBe('http://localhost/default-store-location#!/~/cart');

    cartService = new CartService(1002, 'default-store-location');
    cartService.goToCheckout();
    expect(window.location.href).toBe('http://localhost/default-store-location#!/~/cart');

    cartService = new CartService(1002, 'default-store-location/');
    cartService.goToCheckout();
    expect(window.location.href).toBe('http://localhost/default-store-location#!/~/cart');
  });

  test('Go to checkout when default store location path was set with custom store location path', () => {
    const cartService = new CartService(1002, '/default-store-location');
    cartService.goToCheckout('/products');
    expect(window.location.href).toBe('http://localhost/products#!/~/cart');

    cartService.goToCheckout('/products/');
    expect(window.location.href).toBe('http://localhost/products#!/~/cart');

    cartService.goToCheckout('products');
    expect(window.location.href).toBe('http://localhost/products#!/~/cart');

    cartService.goToCheckout('products/');
    expect(window.location.href).toBe('http://localhost/products#!/~/cart');
  });

  test('Go to checkout without location in DOM environment, nothing should heppen', () => {
    // @ts-ignore
    const windowSpy = jest.spyOn(window, 'window', 'get').mockImplementation(() => ({ location: undefined }));
    const cartService = new CartService(1002);
    cartService.goToCheckout();
    expect(window.location).toBe(undefined);
    windowSpy.mockRestore();
  });
});

describe('Get cart tests', () => {
  test('Get cart when there is no record in local storage', () => {
    const cartService = new CartService(1002);
    const cart = cartService.get();
    expect(cart).toEqual(Promise.resolve({}));
  });

  test('Get cart when there is no local storage in DOM environment', () => {
    // @ts-ignore
    const windowSpy = jest.spyOn(window, 'window', 'get').mockImplementation(() => ({ localStorage: undefined }));
    const cartService = new CartService(1002);
    const cart = cartService.get();
    expect(cart).toEqual(Promise.resolve({}));
    windowSpy.mockRestore();
  });

  test('Get cart positive', () => {
    const localStorageCartKey = 'PSecwid__1002PScart';
    const localStorageCart = prepareLocalStorageCartData();
    global.localStorage.setItem(localStorageCartKey, JSON.stringify(localStorageCart));

    const expectedCart = prepareCartData();
    const cartConverterSpy = jest.spyOn(CartConverter.prototype, 'toCart');
    when(cartConverterSpy)
      .calledWith(localStorageCart)
      .mockReturnValue(expectedCart);

    const cartService = new CartService(1002);
    const cartPromise = cartService.get();
    jest.mocked(CartConverter, true).mockClear();
    return cartPromise.then((cart) => {
      expect(cart).toBe(expectedCart);
    });
  });
});
