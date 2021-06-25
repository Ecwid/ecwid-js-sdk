[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Ecwid Ecommerce SDK

The Ecwid widget significantly slows down page speed of the sites on which it is installed. For many of our partners page speed is a crutial competitive factor. Existing [Storefront JavaScript API](https://api-docs.ecwid.com/reference/overview) requires the whole Ecwid widget loaded to be used and does not provide the ability to invoke operations in 'headless' mode.

Ecwid Ecommerce SDK by [Ecwid](https://www.ecwid.com/) is a lightweight JavaScript library which does not require Ecwid widget for interacting with Ecwid API to manage online store data. 

## Installation

### NPM

Make sure you have [npm](https://www.npmjs.com/) installed.
```bash
npm install @ecwid/sdk
```

## Usage

### SDK iniialization

```javascript
import Ecommerce from "@ecwid/sdk";

const ecommerce = new Ecommerce({
	storeId: 1002,
	storeLocationPath: '/store' // optional
});
```

### Cart operations

#### Get cart data in current store

```javascript
const cart = ecommerce.cart.get()
	.then((result) => console.log(result))
	.catch((error) => console.err(error))
```

#### Navigate to checkout page with current cart data

```javascript
ecommerce.cart.goToCheckout();
```

## Development

### Run tests

```bash
npm run test
```

## Roadmap

In future releases SDK will be able to manage:
- products and categories data;
- cart data (extended);
- customers data;
- storefront pages;
- storefront appearance.

## License

This project is [Apache2.0](LICENSE) licensed.
