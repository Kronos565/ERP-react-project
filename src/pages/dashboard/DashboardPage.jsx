import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { IoMdCart } from "react-icons/io";
import { BsBorderWidth } from "react-icons/bs";
import { FaArrowRight, FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyContext";


export default function DashboardPage() {

  const {orders} = useContext(MyContext);
  const {products} = useContext(MyContext);

  const navigate = useNavigate();

  return (
    
    <div>
      <Navbar />
      
      <div className="d-flex g-2 align-items-center justify-content-center m-5">
        <div
          role="button"
          onClick={() => {
            navigate("/product");
          }}
          className="d-flex justify-content-between border border-2 rounded p-3 m-3"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title fw-bold">Totel Products</h5>
            <p className="m-2">{products.length}</p>
          </div>
          <div>
            <IoMdCart className="fw-bold fs-1" />
          </div>
        </div>

        <div
          role="button"
          onClick={() => {
            navigate("/order");
          }}
          className="d-flex justify-content-between border border-2 rounded p-3 m-3"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title fw-bold">Totel Orders</h5>
            <p className="m-2">{orders.length}</p>
          </div>
          <div>
            <BsBorderWidth className="fw-bold fs-1" />
          </div>
        </div>

        <div
          role="button"
          onClick={() => {
            navigate("/calender");
          }}
          className="d-flex justify-content-between border border-2 rounded p-3 m-3"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title fw-bold">Calender</h5>
            <p className="m-2"><FaArrowRight /></p>
          </div>
          <div>
            <FaRegCalendarAlt className="fw-bold fs-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
