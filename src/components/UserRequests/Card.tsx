import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { makeRequest } from "../../slices/loadErrorSlice";
// import { useAppDispatch, useAppSelector } from "../hooks";
// import { addData } from "../slices/dataSlice";
import { formType } from "../../types";

import useAxios from "../../utils/Axios";
import Input from "../Input";

// try defining the form types in types file first, then passig the type down as props, then rendering different inputs based on the types and getting back different data based on each as well

type componentProps = {
  method: string;
  // payload: userType | sessionSchema | cartSchema | orderSchema | productSchema;
  payloadSchema: string;
};

// post will need to be different for create user
const tryState = {
  email: "",
  password: "",
  passwordConfirmation: "",
  username: "",
  firstName: "",
  lastName: "",
};

// payload in formData gotten from input are not of correct type

const Card: FC<componentProps> = ({
  method,
  payloadSchema,
}: componentProps) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<formType>({
    email: "",
    password: "",
    passwordConfirmation: "",
    username: "",
    firstName: "",
    lastName: "",
  });

  // use load state to render a spinner instead of the card | Dont need error state
  // get load state from store
  const { data, error, load } = useAxios(
    process.env.REACT_APP_API_USERS_ENDPOINT!,
    // this needs to be passed in through component or globel state
    {
      email: {
        address: formData.email,
      },
      password: formData.password,
      passwordConfirmation: formData.passwordConfirmation,
      username: formData.username,
      profile: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
    },
    "post",
    null
  );

  const dataToDisplay = JSON.stringify(data);

  // console.log(formData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(makeRequest(true));

    setTimeout(() => {
      dispatch(makeRequest(false));
    }, 1000);
  };

  useEffect(() => {}, []);
  return (
    <div className="card">
      <h2 className="card-heading">{method}</h2>
      <h3 className="card-subheading">
        <span className="card-desc">create user</span> <br /> Create a user by
        sending a post request to the endpoint -{" "}
        {process.env.REACT_APP_API_USERS_ENDPOINT}
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {/* every input will need to change depending on the request. the number of inputs will also need to change */}
        <Input
          setFormData={setFormData}
          formData={formData}
          required
          type="email"
          placeholder="john@email.com"
          label="email"
          id="email"
        />
        <Input
          setFormData={setFormData}
          formData={formData}
          required
          placeholder="password"
          type="password"
          label="password"
          id="password"
        />
        <Input
          setFormData={setFormData}
          formData={formData}
          required
          placeholder="confirm password"
          type="password"
          label="password Confirm"
          id="passwordConfirmation"
        />
        <Input
          setFormData={setFormData}
          formData={formData}
          required
          placeholder="john868"
          type="text"
          label="username"
          id="username"
        />
        <Input
          required={false}
          setFormData={setFormData}
          formData={formData}
          placeholder="John"
          type="text"
          label="First Name"
          id="firstName"
        />
        <Input
          required={false}
          setFormData={setFormData}
          formData={formData}
          placeholder="Doe"
          type="text"
          label="Last Name"
          id="lastName"
        />
        <div>
          <button className="btn" type="submit">
            submit
          </button>
        </div>
      </form>

      {data ? <div className="card-response">{dataToDisplay}</div> : null}
    </div>
  );
};

export default Card;
