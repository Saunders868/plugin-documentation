import React, { useState } from "react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addData } from "../slices/dataSlice";
import { loading } from "../slices/loadErrorSlice";
import { addProductData } from "../slices/productDataSlice";
import {
  globalStateType,
  InputInterface,
  orderSchema,
  productDataInterface,
  productSchema,
  sessionSchema,
  sessionType,
} from "../types";

import { axiosCall } from "../utils/Axios";
import GetRequestInput from "./GetRequestInput";
import Input from "./Input";
import Spinner from "./Spinner";

// try defining the form types in types file first, then passig the type down as props, then rendering different inputs based on the types and getting back different data based on each as well

type componentProps = {
  initialState: any;
  inputArray: InputInterface[];
  title: string;
  subtitle: string;
  endpoint: string;
  paramField: InputInterface;
  product?: boolean;
};

// payload in formData gotten from input are not of correct type

const Card: FC<componentProps> = ({
  initialState,
  inputArray,
  title,
  subtitle,
  endpoint,
  paramField,
  product
}: componentProps) => {
  const dispatch = useAppDispatch();

  const data: any = useAppSelector((state: globalStateType) => state.data);
  const load: boolean = useAppSelector(
    (state: globalStateType) => state.loadError.loading
  );
  const tokens: sessionType = useAppSelector((state) => state.session);
  const productData: productDataInterface = useAppSelector((state) => state.productData)

  // could pass type through or make open to all possible types
  const [formData, setFormData] = useState<
    sessionSchema | productSchema | orderSchema
  >(initialState);

  const [param, setParam] = useState<string>("");

  const dynamicEndpoint = `${endpoint}/${param}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    dispatch(loading(true));
    const dataAxios: Promise<any> = await axiosCall(
      "patch",
      tokens,
      dynamicEndpoint,
      formData
    );

    if (product) {
      const dataAxios: Promise<productDataInterface> = await axiosCall(
        "patch",
        tokens,
        dynamicEndpoint,
        formData
      );

      dispatch(addProductData(dataAxios));
    }

    dispatch(loading(false));

    dispatch(addData(dataAxios));
  };

  let dataToDisplay;

  // fallback
  dataToDisplay = JSON.stringify(data);

  if (product) {
    dataToDisplay = JSON.stringify(productData);
  }

  // use load state to render a spinner instead of the card | Dont need error state
  if (load) {
    return <Spinner />;
  }

  return (
    <div className="card">
      <h2 className="card-heading">Patch</h2>
      <h3 className="card-subheading">
        <span className="card-desc">{title}</span> <br />
        {subtitle} - {endpoint}
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <GetRequestInput
          required={paramField.required}
          label={paramField.label}
          placeholder={paramField.placeholder}
          id={paramField.id}
          type={paramField.type}
          setFormData={setParam}
        />

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
            update
          </button>
        </div>
      </form>

      {data ? <div className="card-response">{dataToDisplay}</div> : null}
    </div>
  );
};

export default Card;
