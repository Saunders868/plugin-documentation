import React, { useState } from "react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addData } from "../slices/dataSlice";
import { loading } from "../slices/loadErrorSlice";
import { loggedIn } from "../slices/sessionSlice";
import {
  cartSchema,
  InputInterface,
  orderSchema,
  productSchema,
  sessionSchema,
  sessionType,
} from "../types";

import { axiosCall } from "../utils/Axios";
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
  login,
}: componentProps) => {
  const dispatch = useAppDispatch();

  const data: any = useAppSelector((state) => state.data);
  const load: boolean = useAppSelector((state) => state.loadError.loading);
  const tokens: sessionType = useAppSelector((state) => state.session);

  const [formData, setFormData] = useState<
    sessionSchema | productSchema | cartSchema | orderSchema
  >(initialState);
  

  const dataToDisplay = JSON.stringify(data);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    dispatch(loading(true));

    if (login) {
      const dataAxios: sessionType = await axiosCall("post", tokens, endpoint, formData);
      dispatch(loggedIn(dataAxios));
      console.log("Login",dataAxios);
      
    }

    const dataAxios: any = await axiosCall("post", tokens, endpoint, formData);
    dispatch(addData(dataAxios));

    dispatch(loading(false));
  };

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

      {dataToDisplay ? <div className="card-response">{dataToDisplay}</div> : null}
    </div>
  );
};

export default Card;
