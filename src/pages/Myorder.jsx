import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "../context/AppContext";

export const MyOrder = () => {
  const boxIcon = "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/boxIcon.svg";
  const { user } = useAppContext();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await axios.get('/api/order/user', { userId: user._id });
        if (data.success) {
          setOrders(data.order);
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    if (user?._id) {
      fetchOrder();
    }
  }, [user]);

  return (
    <div className="md:p-10 p-4 space-y-4">
      <h2 className="text-lg font-medium">Orders List</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800"
          >
            <div className="flex gap-5">
              <img className="w-12 h-12 object-cover opacity-60" src={boxIcon} alt="boxIcon" />
              <div>
                {order.items.map((item, idx) => (
                  <p key={idx} className="font-medium">
                    {item.product?.name}{" "}
                    <span className={`text-indigo-500 ${item.quantity < 2 && "hidden"}`}>x {item.quantity}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="text-sm">
              <p className="mb-1 font-medium">
                {order.address?.street}
              </p>
              <p>
                {order.address?.city}, {order.address?.state}, {order.address?.zipcode}
              </p>
              <p>{order.address?.country}</p>
            </div>

            <p className="font-medium text-base my-auto text-black/70">${order.amount}</p>

            <div className="flex flex-col text-sm">
              <p>Method: {order.paymentType}</p>
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
