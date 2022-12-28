//  put the array of data for each route in this file to map through when ready
import uuid from "react-uuid";
import {
  Body,
  InputInterface,
  orderSchema,
  productSchema,
  sessionSchema,
} from "./types";
// USER DATA
export const createUserInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: "john@email.com",
    label: "email",
    id: "email",
    required: true,
    key: uuid(),
  },
  {
    type: "password",
    placeholder: "password",
    label: "Password",
    id: "password",
    required: true,
    key: uuid(),
  },
  {
    type: "password",
    placeholder: "confirm password",
    label: "Password confirm",
    id: "passwordConfirmation",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "john868",
    label: "username",
    id: "username",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "John",
    label: "First Name",
    id: "firstName",
    required: false,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "Doe",
    label: "Last Name",
    id: "lastName",
    required: false,
    key: uuid(),
  },
];

export const UserParamField: InputInterface = {
  type: "text",
  placeholder: ":/id",
  label: "Param",
  id: "param",
  required: true,
  key: uuid(),
};

export const patchUserInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: "john@email.com",
    label: "email",
    id: "email",
    required: false,
    key: uuid(),
  },
  {
    type: "password",
    placeholder: "password",
    label: "Password",
    id: "password",
    required: false,
    key: uuid(),
  },
  {
    type: "password",
    placeholder: "confirm password",
    label: "Password confirm",
    id: "passwordConfirmation",
    required: false,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "john868",
    label: "username",
    id: "username",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "John",
    label: "First Name",
    id: "firstName",
    required: false,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "Doe",
    label: "Last Name",
    id: "lastName",
    required: false,
    key: uuid(),
  },
];

export const paramInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: "param",
    label: "Param",
    id: uuid(),
    required: true,
    key: uuid(),
  },
];

// SESSION DATA
export const sessionInitialState: sessionSchema = {
  email: "",
  password: "",
};

export const sessionInputArray: InputInterface[] = [
  {
    type: "email",
    placeholder: "email",
    label: "Email",
    id: "email",
    required: true,
    key: uuid(),
  },
  {
    type: "password",
    placeholder: "password",
    label: "Password",
    id: "password",
    required: true,
    key: uuid(),
  },
];

// PRODUCT DATA
export const ProductInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: "title",
    label: "Title",
    id: "title",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "description",
    label: "Description",
    id: "desc",
    required: true,
    key: uuid(),
  },
  {
    type: "number",
    placeholder: "price",
    label: "Price",
    id: "price",
    required: true,
    key: uuid(),
  },
];

export const initialProductState: productSchema = {
  title: "",
  desc: "",
  price: 0,
};

export const ProductParamField: InputInterface = {
  type: "text",
  placeholder: ":/productId",
  label: "Param",
  id: "param",
  required: true,
  key: uuid(),
};

// CART DATA
export const initialCartState: Body = {
  products: [
    {
      product_id: "",
      quantity: 0,
    },
  ],
};

export const createCartInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: "product_id",
    label: "Product Id",
    id: "product_id",
    required: true,
    key: uuid(),
  },
  {
    type: "number",
    placeholder: "quantity",
    label: "Quantity",
    id: "quantity",
    required: true,
    key: uuid(),
  },
];

export const CartParamsField: InputInterface = {
  type: "text",
  placeholder: ":/cartId",
  label: "Param",
  id: "param",
  required: true,
  key: uuid(),
};

export const updateCartInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: "product_id",
    label: "Product Id",
    id: "product_id",
    required: true,
    key: uuid(),
  },
  {
    type: "number",
    placeholder: "quantity",
    label: "Quantity",
    id: "quantity",
    required: true,
    key: uuid(),
  },
];

// ORDER DATA
export const initialOrderState: orderSchema = {
  isCompleted: false,
};

export const createOrderInputArray: InputInterface[] = [
  {
    type: "checkbox",
    placeholder: "isCompleted",
    label: "Order Status",
    id: "isCompleted",
    required: true,
    key: uuid(),
  },
];
export const updateOrderInputArray: InputInterface[] = [
  {
    type: "checkbox",
    placeholder: "isCompleted",
    label: "Order Status",
    id: "isCompleted",
    required: true,
    key: uuid(),
  },
];

export const updateOrderParamField: InputInterface = {
  type: "text",
  placeholder: ":/orderId",
  label: "Param",
  id: "param",
  required: true,
  key: uuid(),
};