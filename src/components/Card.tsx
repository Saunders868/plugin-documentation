import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { loggedIn } from "../slices/userSlice";
import { userType } from "../types";

// import APICall from "../utils/Axios";
import Input from "./Input";

type CardProps = {
  method: string;
};

const Card = ({ method }: CardProps) => {
  const dispatch = useAppDispatch();

  const data: userType = useAppSelector((state) => state.user);
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

    //   const { data, error, loaded } = APICall(
    //     process.env.REACT_APP_API_USERS_ENDPOINT!,
    //     {
    //       email: {
    //         address: formData.email.address,
    //       },
    //       password: formData.password,
    //       passwordConfirmation: formData.passwordConfirmation,
    //       username: formData.username,
    //       profile: {
    //         firstName: formData.profile?.firstName,
    //         lastName: formData.profile?.lastName,
    //       },
    //     },
    //      "post",
    //      null
    //   );
  };

  useEffect(() => {
    dispatch(
      loggedIn({
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
      })
    );
  }, [formData, dispatch]);
  return (
    <div className="h-auto w-full max-w-7xl m-4 mb-10 py-5 rounded-lg border-gray-50 bg-yellow-500">
      <h2 className="font-serif text-4xl m-8 md:text-7xl text-transform: capitalize;">
        {method}
      </h2>

      <form className="grid gap-6 mb-6 m-8 lg:grid-cols-2 overflow-y-scroll h-64">
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
          placeholder="Last"
          type="text"
          label="Last Name"
          id="lastName"
        />

        <button type="submit" onClick={() => handleSubmit}>
          submit
        </button>
      </form>

      <div>
        <p>
          Email:
          <span>{data.email.address}</span>
        </p>
        <p>
          Username:
          <span>{data.username}</span>
        </p>
        <p>
          Password:
          <span>{data.password}</span>
        </p>
        <p>
          Password Confirmation:
          <span>{data.passwordConfirmation}</span>
        </p>
        <p>
          First Name:
          <span>{data.profile?.firstName}</span>
        </p>
        <p>
          Last Name:
          <span>{data.profile?.lastName}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
