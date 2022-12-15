import React, { useEffect, useState } from "react";
import { FC } from "react";
import { patchUserInputArray } from "../../data";
import { useAppDispatch } from "../../hooks";
import { makeRequest } from "../../slices/loadErrorSlice";
import { formType } from "../../types";

import useAxios from "../../utils/Axios";
import Spinner from "../Spinner";
import CreateUserInput from "./CreateUserInput";

const initialState: formType = {
  email: "",
  password: "",
  passwordConfirmation: "",
  username: "",
  firstName: "",
  lastName: "",
  param: ""
};

const Card: FC = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<formType>(initialState);
  
  // get load state from store
  const { data, load } = useAxios(
    process.env.REACT_APP_API_USERS_ENDPOINT!,
    // this needs to be passed in through component or globel state
    formData,
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
      <h2 className="card-heading">Patch</h2>
      <h3 className="card-subheading">
        <span className="card-desc">Update User</span> <br />Update a user by sending a patch request and data to the endpoint -{" "}
        {process.env.REACT_APP_API_USERS_ENDPOINT}/:id
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {patchUserInputArray.map((input) => (
          <CreateUserInput
            key={input.key}
            setFormData={setFormData}
            formData={formData}
            required={input.required}
            placeholder={input.placeholder}
            type={input.type}
            label={input.label}
            id={input.id}
          />
        ))}
        <div>
          <button className="btn" type="submit">
            update
          </button>
        </div>
      </form>

      {data ? <div className="card-response">{dataToDisplay}</div> : null}
    </div>
  );
};

export default Card;
