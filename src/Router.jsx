import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop";
import App from "./App";

const Router = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);
  return <RouterProvider router={Router} />;
};

export default Router;
