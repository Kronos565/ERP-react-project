import { useState } from "react";
import Calender from "../pages/calender/Calender";
import DashboardPage from "../pages/dashboard/DashboardPage";
import OrderMangement from "../pages/order management/OrderMangement";
import ProductManagement from "../pages/product management/ProductManagement";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const productData = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    category: "Category A",
    quantity: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    category: "Category B",
    quantity: 50,
  },
  {
    id: 3,
    name: "Product 3",
    price: 5.99,
    category: "Category A",
    quantity: 200,
  },
];

const orderData = [
  {
    orderId: 1,
    customerName: "John Doe",
    orderDate: "2024-03-10",
    status: "Pending",
  },
  {
    orderId: 2,
    customerName: "Jane Smith",
    orderDate: "2024-03-11",
    status: "Shipped",
  },
  {
    orderId: 3,
    customerName: "Michael Johnson",
    orderDate: "2024-03-12",
    status: "Delivered",
  },
];

function App() {
  const [products, setProducts] = useState(productData);
  const [orders, setOrders] = useState(orderData);

  return (
    <div>
      <MyContext.Provider value={{ products, setProducts, orders, setOrders }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<DashboardPage />} />
            <Route path="/dashboard" exact element={<DashboardPage />} />
            <Route path="/product" element={<ProductManagement />} />
            <Route path="/order" element={<OrderMangement />} />
            <Route path="/calender" element={<Calender />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
