// Import necessary modules and components
import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { MdDelete } from "react-icons/md";
import { MyContext } from "../../context/MyContext";

// Order Management component for handling orders
export default function OrderMangement() {
  // Access orders and setOrders function from the context
  const { orders, setOrders } = useContext(MyContext);

  // State for managing dropdown visibility
  const [isOpen, setIsOpen] = useState();

  // Function to toggle dropdown visibility based on order Id
  const toggleDropdown = (Id) => {
    if (isOpen) {
      setIsOpen();
    } else {
      setIsOpen(Id);
    }
  };

  // Function to handle order deletion
  const handileDeleteOrder = (Id) => {
    // Filter out the order with the given Id
    const newData = orders.filter((order) => order.orderId !== Id);

    // Update the orders state with the new filtered array
    setOrders(newData);
    alert(`Deleted order with ID: ${Id}`);
  };

  // Function to handle updating order status
  const handileUpdateStatus = (newStatus, orderId) => {
    // Find the index of the order to be updated
    const orderIndex = orders.findIndex((order) => order.orderId === orderId);

    // Make a copy of the orders array
    const updatedOrders = [...orders];
    updatedOrders[orderIndex].status = newStatus;

    // Update the orders state with the updated array and close the dropdown
    setOrders(updatedOrders);
    setIsOpen(null);
  };

  return (
    <div>
      {/* Render the Navbar component for navigation */}
      <Navbar />
      <div className="m-5">
        <div className="table-responsive">
          {/* Table for displaying orders */}
          <table className="table border">
            <thead>
              <tr className="rounded-top">
                <th className="bg-primary rounded-top" scope="col">
                  ID
                </th>
                <th className="bg-primary rounded-top" scope="col">
                  Customer Name
                </th>
                <th className="bg-primary rounded-top" scope="col">
                  Order Date
                </th>
                <th className="bg-primary rounded-top" scope="col">
                  Status
                </th>
                <th className="bg-danger rounded-top" scope="col">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Map through orders and render each row */}
              {orders.map((order) => (
                <tr key={order.orderId}>
                  <th scope="row">{order.orderId}</th>
                  <td>{order.customerName}</td>
                  <td>{order.orderDate}</td>
                  <td>
                    {/* Dropdown for updating order status */}
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        onClick={() => {
                          toggleDropdown(order.orderId);
                        }}
                        aria-expanded={
                          isOpen === order.orderId ? "true" : "false"
                        }
                      >
                        {order.status}
                      </button>
                      {/* Dropdown menu with status options */}
                      <ul
                        className={
                          "dropdown-menu" +
                          (isOpen === order.orderId ? " show" : "")
                        }
                      >
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => {
                              handileUpdateStatus("Confirmed", order.orderId);
                            }}
                          >
                            Confirmed
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => {
                              handileUpdateStatus("Shipped", order.orderId);
                            }}
                          >
                            Shipped
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => {
                              handileUpdateStatus("Delivered", order.orderId);
                            }}
                          >
                            Delivered
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                  {/* Delete button */}
                  <td role="button" className="text-danger text-center fs-5">
                    <MdDelete
                      onClick={() => {
                        handileDeleteOrder(order.orderId);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
