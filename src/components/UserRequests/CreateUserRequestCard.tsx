import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { makeRequest } from "../../slices/loadErrorSlice";
import { formType } from "../../types";

import useAxios from "../../utils/Axios";
import CreateUserInput from "./CreateUserInput";
import Spinner from "../Spinner";
import { createUserInputArray } from "../../data";

const initialState: formType = {
  email: "",
  password: "",
  passwordConfirmation: "",
  username: "",
  firstName: "",
  lastName: "",
};

const Card: FC = () => {
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
      <h2 className="card-heading">POST</h2>
      <h3 className="card-subheading">
        <span className="card-desc">create user</span> <br /> Create a user by
        sending a post request to the endpoint -{" "}
        {process.env.REACT_APP_API_USERS_ENDPOINT}
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {/* create input array */}
        {createUserInputArray.map((input) => (
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
