import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { IoMdCart } from "react-icons/io";
import { BsBorderWidth } from "react-icons/bs";
import { FaArrowRight, FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyContext";

export default function DashboardPage() {
  const { orders } = useContext(MyContext);
  const { products } = useContext(MyContext);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="d-flex flex-wrap justify-content-center m-3">
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
            <IoMdCart className="fw-bold fs-1" />
          </div>
        </div>

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
            <BsBorderWidth className="fw-bold fs-1" />
          </div>
        </div>

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
              <FaArrowRight />
            </p>
            <FaRegCalendarAlt className="fw-bold fs-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
