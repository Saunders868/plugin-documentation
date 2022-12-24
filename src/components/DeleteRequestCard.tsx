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
}

const GetRequestCard: FC<componentProps> = ({
  endpoint,
  title,
  subtitle,
  inputArray,
}) => {
  const dispatch = useAppDispatch();

  const data: any = useAppSelector((state: globalStateType) => state.data);
  const load: boolean = useAppSelector(
    (state: globalStateType) => state.loadError.loading
  );

  // this state would control the params being passed in to the request
  const [formData, setFormData] = useState<string>('');

  const dynamicEndpoint = `${endpoint}/${formData}`

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    dispatch(loading(true));

    const dataAxios: Promise<any> = await axiosCall(
      "delete",
      "",
      dynamicEndpoint,
      null
    )

    // put dataAxios into global state
    dispatch(addData(dataAxios));

    dispatch(loading(false));
  };

  const dataToDisplay = JSON.stringify(data);

  if (load) {
    return <Spinner />
  }

  return (
    <div className="card">
      <h2 className="card-heading">Delete</h2>
      <h3 className="card-subheading">
        <span className="card-desc">Delete {title}</span> <br /> {subtitle} -{" "}
        {endpoint}
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
            delete
          </button>
        </div>
      </form>

      {data ? <div className="card-response">{dataToDisplay}</div> : null}
    </div>
  );
};

export default GetRequestCard;
