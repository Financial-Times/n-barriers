#Styling for Responsive paywall barriers à la Next FT. (`next-product`).

## Why style via a bower component?

So that other apps can serve the barrier. See FastFT and the inline barrier when trying to read more content.

Other apps can fetch `ft.com/products?fragment=true` to get a HTML fragment version of the barrier and import the styles via this component so that they have the supporting CSS.

## Running
```sh
make install
```

## Building
```sh
make build
```

## Verifying SCSS with Stylelint
```sh
make verify
```

## Running the demo app
```sh
make .env run
```
The app is at `localhost:5005`.
