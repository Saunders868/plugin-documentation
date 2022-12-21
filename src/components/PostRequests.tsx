import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useAppDispatch } from "../hooks";
import { makeRequest } from "../slices/loadErrorSlice";
import { loggedIn } from "../slices/sessionSlice";
import {
  cartSchema,
  InputInterface,
  orderSchema,
  productSchema,
  sessionSchema,
} from "../types";

import useAxios from "../utils/Axios";
import Input from "./Input";
import Spinner from "./Spinner";

type componentProps = {
  initialState: any;
  inputArray: InputInterface[];
  title: string;
  subtitle: string;
  endpoint: string;
  login?: boolean;
};

const Card: FC<componentProps> = ({
  initialState,
  inputArray,
  title,
  subtitle,
  endpoint,
  login
}: componentProps) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<
    sessionSchema | productSchema | cartSchema | orderSchema
  >(initialState);

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

    // if (login) {
      // dispatch(loggedIn(token))
    // }

    setTimeout(() => {
      dispatch(makeRequest(false));
    }, 1000);
  };

  useEffect(() => {}, []);

  // use load state to render a spinner instead of the card | Dont need error state
  if (load) {
    return <Spinner />;
  }

  return (
    <div className="card">
      <h2 className="card-heading">post</h2>
      <h3 className="card-subheading">
        <span className="card-desc">{title}</span> <br />
        {subtitle} - {endpoint}
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {inputArray.map((input) => (
          <Input
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
            submit
          </button>
        </div>
      </form>

      {data ? <div className="card-response">{dataToDisplay}</div> : null}
    </div>
  );
};

export default Card;
