import React, { useState, useEffect } from 'react';
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from 'react-redux';
import newRequest from "../../utils/newRequest.js";
import OrderCard from '../../components/orderCard/orderCard';

const Orders = () => {
  const currentUser = useSelector((state) => state?.auth?.currentUser) || "";
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      console.log("User not logged in");
    }
  }, [currentUser]);

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      newRequest.get('/orders')
        .then((res) => {
          const sortedOrders = res.data.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            // Sort in reverse order (latest orders first)
            return dateB - dateA;
          });

          // Update the sorted data in state
          setSortedData(sortedOrders);

          return sortedOrders;
        })
  });

  if (!currentUser) {
    return <div>Error: User not logged in</div>;
  }

  return (
    <div className="orders">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Error loading orders. Check network or try logging in again."
      ) : (
        <div className="container">
          <div className="title">
            <h1>My Orders</h1>
          </div>
          <table>
            <thead>
              <tr>
                {currentUser?.isSeller ? <th>Buyer</th> : <th>Seller</th>}
                <th>Price</th>
                <th className='tx_ref'>Trans. Ref.</th>
                <th>Time</th>
                <th></th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((order) => (
                <tr key={order._id}>
                  <OrderCard singleOrder={order} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Orders;
