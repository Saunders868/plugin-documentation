import React from "react";
import {
  DeleteRequestCard,
  GetRequestCard,
  PatchRequestCard,
  PostRequests,
  RouteInfo,
} from "../components";
import {
  createProductInputArray,
  initialPatchProductState,
  initialProductState,
  paramInputArray,
  updateProductInputArray,
} from "../data";

const PRODUCT_ENDPOINT: string = process.env.REACT_APP_API_PRODUCTS_ENDPOINT!;

const initialParamState = {
  productId: "",
};

const ProductSection = () => {
  return (
    <section>
      <RouteInfo
        routeType="Product"
        routeEndpoint={process.env.REACT_APP_API_PRODUCTS_ENDPOINT!}
        routeExplaination="These routes are protected routes, and so a user needs to be logged in before you are able to access them. They handle the creation, fecthing, updating, and deleting of products."
      />
      <PostRequests
        title="Create Product"
        subtitle="Create a product by sending a post request and some data to the endpoint"
        endpoint={PRODUCT_ENDPOINT}
        initialState={initialProductState}
        inputArray={createProductInputArray}
      />
      <GetRequestCard
        title="Products"
        subtitle="Get all products by sending a get request to the endpoint"
        endpoint={PRODUCT_ENDPOINT}
        initialState={initialParamState}
      />
      <GetRequestCard
        title="product"
        subtitle="Get a product by sending a get request to the endpoint"
        endpoint={`${PRODUCT_ENDPOINT}/:productId`}
        inputArray={paramInputArray}
        initialState={initialParamState}
        product={true}
      />
      <PatchRequestCard
        title="Update product"
        subtitle="Update a product by sending a patch request and data to the endpoint"
        endpoint={`${PRODUCT_ENDPOINT}/:productId`}
        initialState={initialPatchProductState}
        inputArray={updateProductInputArray}
        paramObject={initialParamState}
      />
      <DeleteRequestCard
        endpoint={`${PRODUCT_ENDPOINT}/:productId`}
        title="product"
        subtitle="Delete a product by sending a delete request to the endpoint"
        inputArray={paramInputArray}
      />
    </section>
  );
};

export default ProductSection;
