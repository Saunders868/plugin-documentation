// REDUX TYPES
export interface sessionType {
  accessToken: string;
  refreshToken: string;
}

export interface loadErrorType {
  loading: boolean;
  error: boolean;
  makeRequest: boolean;
}

export type dataType = {
  data: {} | [];
};

// GLOBAL STATE TYPE
export interface globalStateType {
  user: any;
  session: any;
  data: any;
  loadError: any;
}

// FORM TYPE
export type formType = {
  email: string;
  password: string;
  passwordConfirmation: string;
  username: string;
  firstName: string;
  lastName: string;
  param?: string;
};

// USER TYPES
type profileType = {
  firstName: string;
  lastName: string;
};

type emailType = {
  address: string;
};

export type userType = {
  email: emailType;
  password: string;
  passwordConfirmation: string;
  username: string;
  profile?: profileType;
};

// SESSION TYPES
export type sessionSchema = {
  email: string;
  password: string;
};

// PRODUCT TYPES
export type productSchema = {
  title: string;
  desc: string;
  price: number;
  param?: string;
};

// CART TYPES
export type cartSchema = [
  {
    product_id: string;
    quantity: number;
  }
];

// ORDER TYPES
export type orderSchema = {
  isCompleted: boolean;
};

// POST CARD TYPES
export interface InputInterface {
  type: string;
  placeholder: string;
  label: string;
  id: string;
  required: boolean;
  key: string;
}
