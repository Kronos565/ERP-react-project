// Import necessary modules and components
import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { IoMdCart } from "react-icons/io";
import { BsBorderWidth } from "react-icons/bs";
import { FaArrowRight, FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyContext";

// Dashboard page component displaying summary information
export default function DashboardPage() {
  // Access orders and products data from the context
  const { orders } = useContext(MyContext);
  const { products } = useContext(MyContext);

  // Use navigate hook for navigation
  const navigate = useNavigate();

  return (
    <div>
      {/* Render the Navbar component for navigation */}
      <Navbar />

      <div className="d-flex flex-wrap justify-content-center m-3">
        {/* Card for displaying total products */}
        <div
          role="button"
          onClick={() => {
            navigate("/product");
          }}
          className="card border rounded p-3 m-3 col-md-4 col-lg-3"
        >
          <div className="card-body">
            <h5 className="card-title fw-bold">Total Products</h5>
            <p className="m-2">{products.length}</p>
            {/* Icon representing total products */}
            <IoMdCart className="fw-bold fs-1" />
          </div>
        </div>

        {/* Card for displaying total orders */}
        <div
          role="button"
          onClick={() => {
            navigate("/order");
          }}
          className="card border rounded p-3 m-3 col-md-4 col-lg-3"
        >
          <div className="card-body">
            <h5 className="card-title fw-bold">Total Orders</h5>
            <p className="m-2">{orders.length}</p>
            {/* Icon representing total orders */}
            <BsBorderWidth className="fw-bold fs-1" />
          </div>
        </div>

        {/* Card for navigating to the calendar */}
        <div
          role="button"
          onClick={() => {
            navigate("/calendar");
          }}
          className="card border rounded p-3 m-3 col-md-4 col-lg-3"
        >
          <div className="card-body">
            <h5 className="card-title fw-bold">Calendar</h5>
            <p className="m-2">
              {/* Arrow icon for indicating navigation */}
              <FaArrowRight />
            </p>
            {/* Icon representing the calendar */}
            <FaRegCalendarAlt className="fw-bold fs-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
