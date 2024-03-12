// Import necessary modules from React and React Router
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import components for different pages
import Calender from "../pages/calender/Calender";
import DashboardPage from "../pages/dashboard/DashboardPage";
import OrderMangement from "../pages/order management/OrderMangement";
import ProductManagement from "../pages/product management/ProductManagement";

// Import CSS file for styling
import "./App.css";

// Import context for managing state across components
import { MyContext } from "../context/MyContext";

// Sample data for products and orders
const productData = [
  // Product 1
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    category: "Category A",
    quantity: 100,
  },
  // Product 2
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    category: "Category B",
    quantity: 50,
  },
  // Product 3
  {
    id: 3,
    name: "Product 3",
    price: 5.99,
    category: "Category A",
    quantity: 200,
  },
];

const orderData = [
  // Order 1
  {
    orderId: 1,
    customerName: "John Doe",
    orderDate: "2024-03-10",
    status: "Pending",
  },
  // Order 2
  {
    orderId: 2,
    customerName: "Jane Smith",
    orderDate: "2024-03-11",
    status: "Shipped",
  },
  // Order 3
  {
    orderId: 3,
    customerName: "Michael Johnson",
    orderDate: "2024-03-12",
    status: "Delivered",
  },
];

// Main App component
function App() {
  // State for managing products and orders using React Hooks
  const [products, setProducts] = useState(productData);
  const [orders, setOrders] = useState(orderData);

  return (
    <div>
      {/* Provide state using context to all components */}
      <MyContext.Provider value={{ products, setProducts, orders, setOrders }}>
        {/* Set up routes for different pages using React Router */}
        <BrowserRouter>
          <Routes>
            {/* Route for the home and dashboard page */}
            <Route path="/" exact element={<DashboardPage />} />
            <Route path="/dashboard" exact element={<DashboardPage />} />

            {/* Route for the product management page */}
            <Route path="/product" element={<ProductManagement />} />

            {/* Route for the order management page */}
            <Route path="/order" element={<OrderMangement />} />

            {/* Route for the calendar page */}
            <Route path="/calender" element={<Calender />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

// Export the App component as the default export
export default App;
