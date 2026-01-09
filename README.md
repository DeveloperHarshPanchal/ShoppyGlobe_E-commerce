# 🛒 ShoppyGlobe – React E-commerce Application
Links

GitHub Repository: https://github.com/DeveloperHarshPanchal/ShoppyGlobe_E-commerce

ShoppyGlobe is a basic e-commerce web application built using **React + Vite**.  
The project demonstrates core React concepts such as component structure, routing, Redux state management, API data fetching, lazy loading, and responsive UI design.

---

## 📌 Project Objective

To build a functional e-commerce application that allows users to:
- Browse products
- View product details
- Add/remove products from cart
- Manage cart quantities
- Checkout and place an order

---

## 🚀 Tech Stack

- **React** (with Vite)
- **Redux Toolkit**
- **React Router (createBrowserRouter)**
- **JavaScript (ES6+)**
- **CSS**
- **DummyJSON API**

---

- Custom hook (`useFetchProducts`)
- Error handling for failed API calls

### 🛍️ Cart Functionality (Redux)
- Add items to cart
- Remove items from cart
- Increase/decrease quantity (minimum 1)
- Centralized cart state using Redux

### 🔍 Search Feature
- Search products using Redux-managed state

### 🧭 Routing
- Home (`/`)
- Product Details (`/product/:id`)
- Cart (`/cart`)
- Checkout (`/checkout`)
- 404 Not Found page for invalid routes

### ⚡ Performance Optimization
- Code splitting using `React.lazy`
- `Suspense` for lazy-loaded components
- Lazy loading for images

### 🎨 Styling
- Clean and responsive UI
- Works across different screen sizes

---

## 🧾 Checkout Flow

1. User fills in dummy checkout form
2. Cart summary is displayed
3. Clicking **Place Order**:
 - Shows "Order placed"
 - Empties the cart
 - Redirects to Home page

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone <YOUR_GITHUB_REPO_LINK>
2️⃣ Navigate to Project Folder
cd shoppyglobe

3️⃣ Install Dependencies
npm install

4️⃣ Run the Application
npm run dev

