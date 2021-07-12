[![Ecwid](https://github.com/Ecwid/ecwid-js-sdk/blob/main/img/logo.png?raw=true)](https://ecwid.com)

[![build](https://github.com/Ecwid/ecwid-js-sdk/actions/workflows/build.yml/badge.svg)](https://github.com/Ecwid/ecwid-js-sdk/actions/workflows/build.yml)
[![npm (scoped)](https://img.shields.io/npm/v/@ecwid/sdk)](https://www.npmjs.com/package/@ecwid/sdk)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@ecwid/sdk)](https://www.npmjs.com/package/@ecwid/sdk)
[![codecov](https://codecov.io/gh/Ecwid/ecwid-js-sdk/branch/main/graph/badge.svg?token=Y972AFJMBM)](https://codecov.io/gh/Ecwid/ecwid-js-sdk)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Ecwid Ecommerce SDK

Ecwid Ecommerce SDK allows you to add Ecwid buying experience to any platform or application: Site Builder, POS, Website, App, etc. It is a lightweight JavaScript library which does not require Ecwid widget for interacting with Ecwid API to manage online store data. It is taking on Storefront JavaScript API functions and allows you to optimize your integrations with Ecwid for performance and flexibility.

For full API documentation, visit [API docs page](https://ecwid.github.io/ecwid-js-sdk/). 

## Installation

### NPM

Make sure you have [npm](https://www.npmjs.com/) installed.
```bash
npm install @ecwid/sdk
```

## Usage

### SDK initialization

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
	.catch((error) => console.error(error))
```
Cart model in result object:
```json
{
    "cartId": "XXXXXXX-XXXXXX-XXXXXX-XXXX",
    "productsQuantity": 1,
    "items": [
        {
            "product": {
                "price": 99.99,
                "name": "Example",
                "id": 1000001,
                "sku": "00001"
            },
            "quantity": 1
        }
    ]
}
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
