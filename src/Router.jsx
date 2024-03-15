import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop";
import App from "./App";

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
