//  put the array of data for each route in this file to map through when ready
import uuid from "react-uuid";
import { cartSchema, InputInterface, productSchema, sessionSchema } from "./types";
// USER DATA
export const createUserInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: "john@email.com",
    label: "email",
    id: "email__user",
    required: true,
    key: uuid(),
  },
  {
    type: "password",
    placeholder: "password",
    label: "Password",
    id: "password__user",
    required: true,
    key: uuid(),
  },
  {
    type: "password",
    placeholder: "confirm password",
    label: "Password confirm",
    id: "passwordConfirmation__user",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "john868",
    label: "username",
    id: "username__user",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "John",
    label: "First Name",
    id: "firstName__user",
    required: false,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "Doe",
    label: "Last Name",
    id: "lirstName__user",
    required: false,
    key: uuid(),
  },
];

export const patchUserInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: ":/id",
    label: "Param",
    id: "param__user__update",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "john@email.com",
    label: "email",
    id: "email__user__update",
    required: true,
    key: uuid(),
  },
  {
    type: "password",
    placeholder: "password",
    label: "Password",
    id: "password__user__update",
    required: true,
    key: uuid(),
  },
  {
    type: "password",
    placeholder: "confirm password",
    label: "Password confirm",
    id: "passwordConfirmation__user__update",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "john868",
    label: "username",
    id: "username__user__update",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "John",
    label: "First Name",
    id: "firstName__user__update",
    required: false,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "Doe",
    label: "Last Name",
    id: "lirstName__user__update",
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
    id: "email__session",
    required: true,
    key: uuid(),
  },
  {
    type: "password",
    placeholder: "password",
    label: "Password",
    id: "password__session",
    required: true,
    key: uuid(),
  },
];

// PRODUCT DATA
export const createProductInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: "title",
    label: "Title",
    id: "title__product",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "description",
    label: "Description",
    id: "description__product",
    required: true,
    key: uuid(),
  },
  {
    type: "number",
    placeholder: "price",
    label: "Price",
    id: "price__product",
    required: true,
    key: uuid(),
  },
];

export const initialProductState: productSchema = {
  title: "",
  desc: "",
  price: 0,
};

export const initialPatchProductState: productSchema = {
  title: "",
  desc: "",
  price: 0,
  param: "",
};

export const updateProductInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: ":/productId",
    label: "Param",
    id: "param__product__update",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "title",
    label: "Title",
    id: "title__product__update",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "description",
    label: "Description",
    id: "description__product__update",
    required: true,
    key: uuid(),
  },
  {
    type: "number",
    placeholder: "price",
    label: "Price",
    id: "price__product__update",
    required: true,
    key: uuid(),
  },
];

// CART DATA
export const initialCartState: cartSchema = [
  {
    product_id: "",
    quantity: 0,
  },
];

export const createCartInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: "product_id",
    label: "Product Id",
    id: "product_id__cart",
    required: true,
    key: uuid(),
  },
  {
    type: "number",
    placeholder: "quantity",
    label: "Quantity",
    id: "quantity__cart",
    required: true,
    key: uuid(),
  }
]

export const initialPatchCartState: cartSchema = [
  {
    product_id: "",
    quantity: 0,
  },
]

export const updateCartInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: ":/productId",
    label: "Param",
    id: "param__cart__update",
    required: true,
    key: uuid(),
  },
  {
    type: "text",
    placeholder: "product_id",
    label: "Product Id",
    id: "product_id__cart__update",
    required: true,
    key: uuid(),
  },
  {
    type: "number",
    placeholder: "quantity",
    label: "Quantity",
    id: "quantity__cart__update",
    required: true,
    key: uuid(),
  }
]