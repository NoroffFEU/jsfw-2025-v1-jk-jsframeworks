# Online Shop – React & Next.js

This project is a fully functional online shop built with Next.js (React) and TypeScript. The application fetches products from a REST API and allows users to browse products, view detailed information, search and sort products, manage a shopping cart, complete a checkout flow, and send messages through a validated contact form.

The application is responsive and works across desktop, tablet, and mobile devices.

## Features

### Product Listing

- Fetches products from the API endpoint:

```bash
GET /online-shop
```

- Displays products in a responsive grid layout.

- Each product card includes:
  - Product image
  - Title
  - Rating
  - Price
  - Discounted price (if available)
  - Discount badge showing percentage.

### Product Details Page

- Clicking a product navigates to a detailed product page.

- Fetches data from:

```bash
GET /online-shop/<id>
```

- Displays:
  - Product image
  - Title
  - Description
  - Original price and discounted price
  - Rating
  - Reviews
  - Includes an Add to Cart button.0

### Search Functionality

- Users can search for products from the homepage.

- Matching products appear dynamically in a dropdown list.

- Clicking a search result navigates directly to the product page.

### Sorting

- Products can be sorted by:
  - Price (low → high)
  - Price (high → low)
  - Rating
  - Title

### Shopping Cart

- The cart system allows users to:
  - Add products to the cart
  - View cart item count in the header
  - Adjust product quantities
  - Remove items from the cart
  - See the total cost update dynamically.
