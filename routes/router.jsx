import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const App = lazy(() => import("../src/App"));
const ProductList = lazy(() => import("../components/ProductList"));
const ProductDetail = lazy(() => import("../components/ProductDetail"));
const Cart = lazy(() => import("../components/Cart"));
const Checkout = lazy(() => import("../components/Checkout"));
const NotFound = lazy(() => import("../components/NotFound"));

const withSuspense = (element) => (
  <Suspense fallback={<div className="loader">Loading...</div>}>
    {element}
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(<App />),
    errorElement: withSuspense(<NotFound />),
    children: [
      {
        index: true,
        element: withSuspense(<ProductList />),
      },
      {
        path: "products/:id",
        element: withSuspense(<ProductDetail />),
      },
      {
        path: "cart",
        element: withSuspense(<Cart />),
      },
      {
        path: "checkout",
        element: withSuspense(<Checkout />),
      },
    ],
  },
]);

export default router;
