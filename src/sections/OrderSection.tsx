import React from "react";
import {
  DeleteRequestCard,
  GetRequestCard,
  PatchRequestCard,
  PostRequests,
  RouteInfo,
} from "../components";
import {
  createOrderInputArray,
  initialOrderState,
  updateOrderParamField,
} from "../data";

const ORDER_ENDPOINT: string = process.env.REACT_APP_API_ORDERS_ENDPOINT!;

const OrderSection = () => {
  return (
    <section>
      <RouteInfo
        routeType="Order"
        routeEndpoint={ORDER_ENDPOINT}
        routeExplaination="These routes handle everything order related. However, some of the routes are restricted to admin users only, and all routes need a user to be signed in before then can be used. You can create a order, update an order (mark as completed, or incomplete), and delete an order."
      />
      <PostRequests
        title="Create Order"
        subtitle="Create an order by sending a post request and some data to the endpoint"
        endpoint={ORDER_ENDPOINT}
        initialState={initialOrderState}
        inputArray={createOrderInputArray}
        order={true}
      />
      <GetRequestCard
        endpoint={ORDER_ENDPOINT}
        title="orders"
        subtitle="Get all orders by sending a get request to the endpoint"
        orders={true}
      />
      <GetRequestCard
        endpoint={ORDER_ENDPOINT}
        title="order"
        subtitle="Get a order by sending a get request to the endpoint"
        inputArray={[updateOrderParamField]}
        order={true}
      />
      <PatchRequestCard
        title="Update order"
        subtitle="Update a order by sending a patch request and data to the endpoint"
        endpoint={ORDER_ENDPOINT}
        initialState={initialOrderState}
        inputArray={createOrderInputArray}
        paramField={updateOrderParamField}
        order={true}
      />
      <DeleteRequestCard
        endpoint={ORDER_ENDPOINT}
        title="order"
        subtitle="Delete a order by sending a delete request to the endpoint"
        inputArray={[updateOrderParamField]}
        order={true}
      />
    </section>
  );
};

export default OrderSection;
