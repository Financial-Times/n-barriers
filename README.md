# Styling for Responsive paywall barriers à la Next FT. (`next-product`).

<a href="https://docs.google.com/forms/d/e/1FAIpQLSf5InA7UJK9yNBCzidFKI_WNkfbl6of1eRlIACRspGXUcBx8A/viewform?usp=pp_url&entry.78759464=n-barriers" target="_blank">
  <img src="https://i.imgur.com/UmScdZ4.png" alt="Yak button" border="0" align="right" width="150" title="Report a yak shaving incident for this repository">
</a>

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
