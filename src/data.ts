//  put the array of data for each route in this file to map through when ready
import uuid  from 'react-uuid';
import { InputInterface, sessionSchema } from './types';
// USER DATA
export const createUserInputArray: InputInterface[]  = [
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
    id: "lirstName",
    required: false,
    key: uuid(),
  },
];

export const patchUserInputArray: InputInterface[]  = [
  {
    type: "text",
    placeholder: ":/id",
    label: "Param",
    id: "param",
    required: true,
    key: uuid(),
  },
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
    id: "lirstName",
    required: false,
    key: uuid(),
  },
];

export const paramInputArray: InputInterface[] = [
  {
    type: "text",
    placeholder: "param",
    label: "Param",
    id: "param",
    required: true,
    key: uuid(),
  },
]

// SESSION DATA
export const sessionInitialState: sessionSchema = {
  email: "",
  password: "",
};

export const sessionInputArray: InputInterface[]  = [
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