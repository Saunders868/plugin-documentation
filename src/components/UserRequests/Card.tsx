import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { makeRequest } from "../../slices/loadErrorSlice";
// import { useAppDispatch, useAppSelector } from "../hooks";
// import { addData } from "../slices/dataSlice";
import { formType, InputInterface } from "../../types";

import useAxios from "../../utils/Axios";
import CreateUserInput from "./CreateUserInput";
import Spinner from "../Spinner";

// try defining the form types in types file first, then passig the type down as props, then rendering different inputs based on the types and getting back different data based on each as well

type componentProps = {
  method: string;
};

const initialState: formType = {
  email: "",
  password: "",
  passwordConfirmation: "",
  username: "",
  firstName: "",
  lastName: "",
};

const userInputArray: InputInterface[]  = [
  {
    type: "text",
    placeholder: "john@email.com",
    label: "email",
    id: "email",
    required: true,
    // use uuidv4 to create id
    key: "user_1",
  },
  {
    type: "password",
    placeholder: "password",
    label: "Password",
    id: "password",
    required: true,
    // use uuidv4 to create id
    key: "user_2",
  },
  {
    type: "password",
    placeholder: "confirm password",
    label: "Password confirm",
    id: "passwordConfirmation",
    required: true,
    // use uuidv4 to create id
    key: "user_3",
  },
  {
    type: "text",
    placeholder: "john868",
    label: "username",
    id: "username",
    required: true,
    // use uuidv4 to create id
    key: "user_4",
  },
  {
    type: "text",
    placeholder: "John",
    label: "First Name",
    id: "firstName",
    required: true,
    // use uuidv4 to create id
    key: "user_5",
  },
  {
    type: "text",
    placeholder: "Doe",
    label: "Last Name",
    id: "lirstName",
    required: true,
    // use uuidv4 to create id
    key: "user_6",
  },
];

const Card: FC<componentProps> = ({
  method,
}: componentProps) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<formType>(initialState);

  // need to make seperate input component for this post request card

  const { data, load } = useAxios(
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(makeRequest(true));

    setTimeout(() => {
      dispatch(makeRequest(false));
    }, 1000);
  };

  useEffect(() => {}, []);
  // use load state to render a spinner instead of the card | Dont need error state
  if (load) {
    return <Spinner />
  };
  return (
    <div className="card">
      <h2 className="card-heading">{method}</h2>
      <h3 className="card-subheading">
        <span className="card-desc">create user</span> <br /> Create a user by
        sending a post request to the endpoint -{" "}
        {process.env.REACT_APP_API_USERS_ENDPOINT}
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {/* create input array */}
        {userInputArray.map((input) => (
          <CreateUserInput
          key={input.key}
          setFormData={setFormData}
          formData={formData}
          required={input.required}
          type={input.type}
          placeholder={input.placeholder}
          label={input.label}
          id={input.id}
        />
        ))}
        {/* <CreateUserInput
          setFormData={setFormData}
          formData={formData}
          required
          type="email"
          placeholder="john@email.com"
          label="email"
          id="email"
        />
        <CreateUserInput
          setFormData={setFormData}
          formData={formData}
          required
          placeholder="password"
          type="password"
          label="password"
          id="password"
        />
        <CreateUserInput
          setFormData={setFormData}
          formData={formData}
          required
          placeholder="confirm password"
          type="password"
          label="password Confirm"
          id="passwordConfirmation"
        />
        <CreateUserInput
          setFormData={setFormData}
          formData={formData}
          required
          placeholder="john868"
          type="text"
          label="username"
          id="username"
        />
        <CreateUserInput
          required={false}
          setFormData={setFormData}
          formData={formData}
          placeholder="John"
          type="text"
          label="First Name"
          id="firstName"
        />
        <CreateUserInput
          required={false}
          setFormData={setFormData}
          formData={formData}
          placeholder="Doe"
          type="text"
          label="Last Name"
          id="lastName"
        /> */}
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
