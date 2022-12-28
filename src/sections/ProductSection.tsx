import React from "react";
import {
  DeleteRequestCard,
  GetRequestCard,
  PatchRequestCard,
  PostRequests,
  RouteInfo,
} from "../components";
import {
  ProductInputArray,
  initialProductState,
  ProductParamField,
} from "../data";

const PRODUCT_ENDPOINT: string = process.env.REACT_APP_API_PRODUCTS_ENDPOINT!;

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
        inputArray={ProductInputArray}
        product={true}
      />
      <GetRequestCard
        title="Products"
        subtitle="Get all products by sending a get request to the endpoint"
        endpoint={PRODUCT_ENDPOINT}
        products={true}
      />
      <GetRequestCard
        title="product"
        subtitle="Get a product by sending a get request to the endpoint"
        endpoint={PRODUCT_ENDPOINT}
        inputArray={[ProductParamField]}
        product={true}
      />
      <PatchRequestCard
        title="Update product"
        subtitle="Update a product by sending a patch request and data to the endpoint"
        endpoint={PRODUCT_ENDPOINT}
        initialState={initialProductState}
        inputArray={ProductInputArray}
        paramField={ProductParamField}
        product={true}
      />
      <DeleteRequestCard
        endpoint={PRODUCT_ENDPOINT}
        title="product"
        subtitle="Delete a product by sending a delete request to the endpoint"
        inputArray={[ProductParamField]}
        product={true}
      />
    </section>
  );
};

export default ProductSection;
