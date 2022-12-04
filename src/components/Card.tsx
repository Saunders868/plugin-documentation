import React, { useEffect, useState } from "react";
// @ts-ignore
import APICall from "../utils/Axios.tsx";
// @ts-ignore
import Input from "./Input.tsx";

type CardProps = {
  method: string;
};

const Card = ({ method }: CardProps) => {
  const [formData, setFormData] = useState<object>({
    email: "",
    password: "",
    passwordConfirm: "",
    username: "",
    firstName: "",
    lastName: "",
  });

  const [displayData, setdisplayData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    const { data, error, loaded } = APICall(
      process.env.REACT_APP_API_USERS_ENDPOINT!,
      {
        email: {
          address: "",
        },
        password: "",
        passwordConfirmation: "",
        username: "abiel868",
        profile: {
          firstName: "Abiel",
          lastName: "Saunders",
        },
      },
       "post",
       null
    );

    setdisplayData(data)
    
  };

  useEffect(() => {
    // console.log(formData);

    // const makeCall = async () => {
    //   const res = await axios.post(
    //     `${process.env.REACT_APP_API_GENERAL_URI}${process.env.REACT_APP_API_USERS_ENDPOINT}`,
    //     {
    //       email: {
    //         address: "kodi@email.com",
    //       },
    //       password: "password",
    //       passwordConfirmation: "password",
    //       username: "kodi868",
    //       profile: {
    //         firstName: "Nekoda",
    //         lastName: "Saunders",
    //       },
    //     },
    //   );
    //   console.log(res);
    // };

    // makeCall();
  }, []);
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
          placeholder="john@email.com"
          label="email"
          id="email"
        />
        <Input
          setFormData={setFormData}
          formData={formData}
          required
          placeholder="password"
          label="password"
          id="password"
        />
        <Input
          setFormData={setFormData}
          formData={formData}
          required
          placeholder="confirm password"
          label="password Confirm"
          id="passwordConfirm"
        />
        <Input
          setFormData={setFormData}
          formData={formData}
          required
          placeholder="john868"
          label="username"
          id="username"
        />
        <Input
          setFormData={setFormData}
          formData={formData}
          placeholder="John"
          label="First Name"
          id="firstName"
        />
        <Input
          setFormData={setFormData}
          formData={formData}
          placeholder="Last"
          label="Last Name"
          id="lastName"
        />
      </form>

      <div>
        {displayData}
      </div>
    </div>
  );
};

export default Card;
