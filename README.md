Styling for Responsive paywall barriers à la Next FT. (`next-product`).

### Why style via a bower component?

So that other apps can serve the barrier. See fast ft and the inline barrier when trying to read more content.

Other apps can fetch `ft.com/products?fragment=true` to get an html fragment version of the barrier and import the styles via this component so that they have the supporting css.

Also see inline barriers on the article page.
