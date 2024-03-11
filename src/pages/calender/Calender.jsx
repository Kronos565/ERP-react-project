import React, { useContext, useState } from 'react'
import Calendar from 'react-calendar'
import Navbar from '../../components/navbar/Navbar'
import { CloseButton } from 'react-bootstrap';
import { MyContext } from '../../context/MyContext';

export default function Calender() {

  const {orders} = useContext(MyContext);

    // this state and fuction using to show popup for create new product.
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [date, setDate] = useState("");
    const [dueOrders, setDueOrders] = useState([]);

    const changeDate = (e) => {
      setDate(e);
  
      // Convert selected date to a comparable Date object
      const selectedDate = new Date(e);
      selectedDate.setHours(0, 0, 0, 0);
  
      // Filter orders based on the condition
      const filterOrders = orders.filter((order) => {
          // Convert orderDate string to Date object for comparison
          const orderDate = new Date(order.orderDate);
          orderDate.setDate(orderDate.getDate() + 3);
          orderDate.setHours(0, 0, 0, 0);
  
          // Compare timestamps of selectedDate and orderDate
          return orderDate.getTime() === selectedDate.getTime();
      });
  
      // Update state or do whatever you need with filterOrders
      setDueOrders(filterOrders);
      setIsOpenPopup(true);
  };

      
  return (
    <div>
        <Navbar/>
            <div className='m-5'>
            {isOpenPopup ? (
          <div className="d-flex align-items-center justify-content-center position-relative">
            <div className="position-absolute top-0 z-3 w-75 border border-2 rounded p-3 bg-light">
            <div className="text-end">
                  <CloseButton className='mb-4' onClick={()=>{setIsOpenPopup(false)}} />
                </div>
                <div className='my-4 fw-bold fs-4 text-center'>
                {date.toLocaleDateString()}
                </div>
            <table class="table border">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Order Date</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  {dueOrders.map((order)=>(
        <tr key={order.orderId}>
        <th scope="row">{order.orderId}</th>
        <td>{order.customerName}</td>
        <td>{order.orderDate}</td>
        <td>{order.status}</td>
      </tr>
  ))}
  </tbody>
</table>
            </div>
          </div>
        ) : (
          <></>
        )}
      <Calendar onClickDay={changeDate}/>
    </div>
    </div>
  )
}
