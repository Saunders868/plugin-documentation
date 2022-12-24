import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addData } from "../slices/dataSlice";
import { loading } from "../slices/loadErrorSlice";
import { globalStateType, InputInterface } from "../types";
import { axiosCall } from "../utils/Axios";
import GetRequestInput from "./GetRequestInput";
import Spinner from "./Spinner";

interface componentProps {
  endpoint: string;
  title: string;
  subtitle: string;
  inputArray?: InputInterface[];
  initialState: any;
}

const GetRequestCard: FC<componentProps> = ({
  endpoint,
  title,
  subtitle,
  inputArray,
  initialState,
}) => {
  const dispatch = useAppDispatch();

  const data: any = useAppSelector((state: globalStateType) => state.data);
  const load: boolean = useAppSelector(
    (state: globalStateType) => state.loadError.loading
  );

  // this state would control the params being passed in to the request
  // set the param as an object with id as the starting state in the initial state passed in
  const [formData, setFormData] = useState<string>('');

  // console.log(formData);

  const dynamicEndpoint = `${endpoint}/${formData}`

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    dispatch(loading(true));

    const dataAxios: Promise<any> = await axiosCall(
      "get",
      "",
      dynamicEndpoint,
      null
    );

    // put dataAxios into global state
    console.log("AXIOS DATA",dataAxios);
    dispatch(addData(dataAxios));
    

    dispatch(loading(false));
  };

  // get data from global state
  const dataToDisplay = JSON.stringify(data);

  if (load) {
    return <Spinner />;
  }

  return (
    <div className="card">
      <h2 className="card-heading">GET</h2>
      <h3 className="card-subheading">
        <span className="card-desc">Get {title}</span> <br /> {subtitle} -{" "}
        {endpoint}
        {title === "user" ? "/:id" : ""}
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {/* every input will need to change depending on the request. the number of inputs will also need to change */}
        {inputArray
          ? inputArray.map((input) => (
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
          : null}
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
