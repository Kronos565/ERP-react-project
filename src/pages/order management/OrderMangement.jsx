import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { MdDelete } from "react-icons/md";
import { MyContext } from "../../context/MyContext";

export default function OrderMangement() {
  const { orders } = useContext(MyContext);
  const { setOrders } = useContext(MyContext);

  const [isOpen, setIsOpen] = useState();

  const toggleDropdown = (Id) => {
    if (isOpen) {
      setIsOpen();
    } else {
      setIsOpen(Id);
    }
  };

  const handileDeleteOrder = (Id) => {
    // Filter out the order with the given Id
    const newData = orders.filter((order) => order.orderId !== Id);
    // Update the orders state with the new filtered array
    setOrders(newData);
    alert(`Deleted order with ID: ${Id}`);
  };

  const handileUpdateStatus = (newStatus, orderId) => {
    console.log("newStatus", newStatus, orderId);
    // Find the index of the product to be updated
    const orderIndex = orders.findIndex((order) => order.orderId === orderId);

    // Make a copy of the orders array
    const updatedOrders = [...orders];
    updatedOrders[orderIndex].status = newStatus;

    setOrders(updatedOrders);
    setIsOpen(null);
  };

  return (
    <div>
      <Navbar />
      <div className="m-5">
        <div className="table-responsive">
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
              {orders.map((order) => (
                <tr key={order.orderId}>
                  <th scope="row">{order.orderId}</th>
                  <td>{order.customerName}</td>
                  <td>{order.orderDate}</td>
                  <td>
                    {" "}
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
                              handileUpdateStatus("Deliverd", order.orderId);
                            }}
                          >
                            Deliverd
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
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
