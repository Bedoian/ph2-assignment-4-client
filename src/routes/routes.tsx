import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddProduct from "../pages/admin/AddProduct";
import UpdateProduct from "../pages/admin/UpdateProduct";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import CustomerDashboard from "../pages/Customer/CustomerDashboard";
import AllProducts from "../pages/universal/AllProducts";
import ProductDetails from "../pages/universal/ProductDetails";
import Home from "../pages/universal/Home";
import CheckOut from "../pages/Customer/CheckOut";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/all-products',
        element: <AllProducts />
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />
      }
    ]
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: 'dash-board',
        element: <AdminDashboard />
      },
      {
        path: 'add-product',
        element: <AddProduct />
      },
      {
        path: 'update-product',
        element: <UpdateProduct />
      },
    ]
  },
  {
    path: '/customer',
    element: <App />,
    children: [
      {
        path: 'dash-board',
        element: <CustomerDashboard />
      },
      {
        path: 'check-out/:id',
        element: <CheckOut />
      }
    ]
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
]);