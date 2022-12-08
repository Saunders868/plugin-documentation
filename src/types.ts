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
  data: object;
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
};

// CART TYPES
export type cartSchema = {
  products: [
    {
      product_id: string;
      quantity: number;
    }
  ];
};

// ORDER TYPES
export type orderSchema = {
  isCompleted: boolean;
};
