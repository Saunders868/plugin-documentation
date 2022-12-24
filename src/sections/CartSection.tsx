import React from "react";
import {
  DeleteRequestCard,
  GetRequestCard,
  PatchRequestCard,
  PostRequests,
  RouteInfo,
} from "../components";
import { createCartInputArray, initialCartState, initialPatchCartState, paramInputArray, updateCartInputArray, updateCartParamsField } from "../data";

const CART_ENDPOINT: string = process.env.REACT_APP_API_CARTS_ENDPOINT!;

const initialParamState = {
  cartId: "",
};

const CartSection = () => {
  return (
    <section>
      <RouteInfo
        routeType="Cart"
        routeEndpoint={CART_ENDPOINT}
        routeExplaination="These routes handle everything cart related. However, some of the routes are restricted to admin users only, and all routes need a user to be signed in before then can be used. You can create a cart, update a cart (add products to cart), and delete a cart. All items added to the cart need to be already existing products. Here are a few: "
      />
      <PostRequests
        title="Create Cart"
        subtitle="Create a cart by sending a post request and some data to the endpoint"
        endpoint={CART_ENDPOINT}
        initialState={initialCartState}
        inputArray={createCartInputArray}
      />
      <GetRequestCard
        endpoint={CART_ENDPOINT}
        title="carts"
        subtitle="Get all carts by sending a get request to the endpoint"
        initialState={initialParamState}
      />
      <GetRequestCard
        endpoint={CART_ENDPOINT}
        title="cart"
        subtitle="Get a cart by sending a get request to the endpoint"
        inputArray={paramInputArray}
        initialState={initialParamState}
      />
      <PatchRequestCard
        title="Update product"
        subtitle="Update a product by sending a patch request and data to the endpoint"
        endpoint={`${CART_ENDPOINT}/:cartId`}
        initialState={initialPatchCartState}
        inputArray={updateCartInputArray}
        paramField={updateCartParamsField}
      />
      <DeleteRequestCard
        endpoint={`${CART_ENDPOINT}/:id`}
        title="cart"
        subtitle="Delete a cart by sending a delete request to the endpoint"
        inputArray={paramInputArray}
      />
    </section>
  );
};

export default CartSection;
