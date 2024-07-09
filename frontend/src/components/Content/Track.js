import React, { useState, useEffect } from 'react';
import './OrderStatus.css'; // Import CSS file for styling

// Static data to simulate order details
const staticOrder = {
  orderId: '12345',
  name: 'Coding Toy-1',
  email: 'user@example.com',
  orderTime: '2024-06-22T10:30:00Z',
  status: 'Pending'
};
// Function to calculate progress percentage based on status
const calculateProgressPercentage = (status) => {
  switch (status) {
    case 'Pending':
      return 0;
    case 'Processing':
      return 25;
    case 'Shipped':
      return 50;
    case 'Delivered':
      return 75;
    case 'Cancelled':
      return 100;
    default:
      return 0;
  }
};

const OrderStatus = ({ orderId }) => {
  const [order, setOrder] = useState(staticOrder);
  const [status, setStatus] = useState('');

  useEffect(() => {
    console.log(`Received orderId: ${orderId}`); // Debugging log
    console.log(`Static orderId: ${staticOrder.orderId}`); // Debugging log

    // Simulate fetching order details with static data
    if (orderId && orderId === staticOrder.orderId) {
      console.log('Order found, setting order details.'); // Debugging log
      setOrder(staticOrder);
      setStatus(staticOrder.status);
    } else {
      console.log('Order not found.'); // Debugging log
    }
  }, [orderId]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const updateStatus = () => {
    // Simulate updating order status
    if (order) {
      const updatedOrder = { ...order, status };
      setOrder(updatedOrder);
      alert('Order status updated successfully');
    }
  };

  if (!order) {
    return <div>Loading order details...</div>;
  }

  // Determine the progress percentage based on status
  const progressPercentage = calculateProgressPercentage(order.status);

  return (
    <div className="order-status-container">
      <h2>Order Status for Order ID: {orderId}</h2>
      <p>Product: {order.name}</p>
      <p>Email: {order.email}</p>
      <p>Order Time: {new Date(order.orderTime).toLocaleString()}</p>
      <p>Current Status: {order.status}</p>

      {/* Graphical Progress Bar */}
      <div className="progress-bar">
        <div className="progress-line" style={{ width: `${progressPercentage}%` }}>
          <div className="progress-dot"></div>
        </div>
        <div className="progress-steps">
          <div className={`progress-step ${order.status === 'Pending' ? 'active' : ''}`}>Pending</div>
          <div className={`progress-step ${order.status === 'Processing' ? 'active' : ''}`}>Processing</div>
          <div className={`progress-step ${order.status === 'Shipped' ? 'active' : ''}`}>Shipped</div>
          <div className={`progress-step ${order.status === 'Delivered' ? 'active' : ''}`}>Delivered</div>
          <div className={`progress-step ${order.status === 'Cancelled' ? 'active' : ''}`}>Cancelled</div>
        </div>
      </div>

      {/* Status Selection */}
      <select value={status} onChange={handleStatusChange}>
        <option value="Pending">Pending</option>
        <option value="Processing">Processing</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>
      <button onClick={updateStatus}>Update Status</button>
    </div>
  );
};


export default OrderStatus;