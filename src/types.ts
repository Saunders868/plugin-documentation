import { AnyAction } from "redux";

// REDUX TYPES
export interface sessionType {
  accessToken: string;
  refreshToken: string;
}

// ACTION TYPES
export interface actionType extends AnyAction {
  type: string;
}

export type payloadType = {
  data: object;
};

export type dataType = {
  data: {};
};

// ACTION CREATOR TYPES
export interface actionCreatorType {
  type: string;
}

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
