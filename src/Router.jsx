import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./cart/Cart";
import Home from "./home/Home";
import Shop from "./shop/Shop";
import App from "./app/App";

const Router = () => {
  const Router = createBrowserRouter([
    {
      element: <App />,
      children: [
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <Cart /> },
      ],
    },
    {
      path: "/",
      element: <Home />,
      index: true,
    },
  ]);
  return <RouterProvider router={Router} />;
};

export default Router;
