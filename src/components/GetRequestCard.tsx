import React, { FC, useState } from "react";
import { useAppDispatch } from "../hooks";
import { makeRequest } from "../slices/loadErrorSlice";
import { InputInterface } from "../types";
import useAxios from "../utils/Axios";
import GetRequestInput from "./GetRequestInput";

interface componentProps {
  endpoint: string;
  // not sure if model needed
  model?: string;
  title: string;
  subtitle: string;
  inputArray?: InputInterface[];
}


const GetRequestCard: FC<componentProps> = ({
  endpoint,
  model,
  // params do not need to be passed through as props, it needs to be collected from the form input
  title,
  subtitle,
  inputArray
}) => {
  const dispatch = useAppDispatch();

  // this state would control the params being passed in to the request
  const [formData, setFormData] = useState<string>('');

  // formdata param being passed as a query 
  // need to solve this
  const { data } = useAxios(
    endpoint,
    {},
    "get",
    formData
  );

  console.log(formData);

  const dataToDisplay = JSON.stringify(data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(makeRequest(true));

    setTimeout(() => {
      dispatch(makeRequest(false));
    }, 1000);
  };

  return (
    <div className="card">
      <h2 className="card-heading">GET</h2>
      <h3 className="card-subheading">
        <span className="card-desc">Get {title}</span> <br /> {subtitle} -{" "}
        {endpoint}
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {/* every input will need to change depending on the request. the number of inputs will also need to change */}
        {inputArray ? (
          inputArray.map((input) => (
            // make custom get input components to accept string data type state
            <GetRequestInput
              key={input.key}
              setFormData={setFormData}
              required={input.required}
              placeholder={input.placeholder}
              type={input.type}
              label={input.label}
              id={input.id}
            />
          ))
        ) : null}
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

export default GetRequestCard;
