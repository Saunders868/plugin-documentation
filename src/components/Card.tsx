import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addData } from "../slices/dataSlice";
import { dataType, globalStateType, userType } from "../types";

import APICall from "../utils/Axios";
import Input from "./Input";

// try defining the form types in types file first, then passig the type down as props, then rendering different inputs based on the types and getting back different data based on each as well

type componentProps = {
  method: string;
  // payload: userType | sessionSchema | cartSchema | orderSchema | productSchema;
  payloadSchema: string;
};

// payload in formData gotten from input are not of correct type

const Card: FC<componentProps> = ({
  method,
  payloadSchema,
}: componentProps) => {
  const dispatch = useAppDispatch();

  const responseData: dataType = useAppSelector(
    (state: globalStateType) => state.data
  );
  const dataToDisplay = JSON.stringify(responseData);
  const [formData, setFormData] = useState<userType>({
    email: {
      address: "",
    },
    password: "",
    passwordConfirmation: "",
    username: "",
    profile: {
      firstName: "",
      lastName: "",
    },
  });

  console.log(formData);

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    APICall(
      process.env.REACT_APP_API_USERS_ENDPOINT!,
      // this needs to be passed in through component or globel state
      {
        email: {
          address: formData.email.address,
        },
        password: formData.password,
        passwordConfirmation: formData.passwordConfirmation,
        username: formData.username,
        profile: {
          firstName: formData.profile?.firstName,
          lastName: formData.profile?.lastName,
        },
      },
      "post",
      null
    );
  };

  useEffect(() => {
    dispatch(
      addData({
        formData,
      })
    );
  }, [formData, dispatch]);
  return (
    <div className="h-auto w-full constrain mb-10 p-6 md:p-10 rounded-lg border border-gray-200 shadow-md bg-white">
      <h2 className="primary-text font-semibold uppercase mb-2">{method}</h2>
      <h3 className="secondary-text mb-4">
        <span className="font-semibold capitalize">create user</span> <br />{" "}
        Create a user by sending a post request to the endpoint -{" "}
        {process.env.REACT_APP_API_USERS_ENDPOINT}
      </h3>
      <form className="grid gap-6 mb-6 lg:grid-cols-2 ">
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
          <button className="btn" type="submit" onClick={() => handleSubmit}>
            submit
          </button>
        </div>
      </form>

      {responseData ? <div>{dataToDisplay}</div> : null}
    </div>
  );
};

export default Card;
