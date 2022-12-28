import React, { useState } from "react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addCartData } from "../slices/cartDataSlice";
import { loading } from "../slices/loadErrorSlice";
import { addOrderData } from "../slices/orderDataSlice";
import { addProductData } from "../slices/productDataSlice";
import {
  Body,
  cartDataInterface,
  globalStateType,
  InputInterface,
  orderDataInterface,
  orderSchema,
  productDataInterface,
  productSchema,
  sessionSchema,
  sessionType,
} from "../types";

import { axiosCall } from "../utils/Axios";
import GetRequestInput from "./GetRequestInput";
import HandleArrayInput from "./HandleArrayInput";
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
  cart?: boolean;
  order?: boolean;
};

// payload in formData gotten from input are not of correct type

const Card: FC<componentProps> = ({
  initialState,
  inputArray,
  title,
  subtitle,
  endpoint,
  paramField,
  product,
  cart,
  order,
}: componentProps) => {
  const dispatch = useAppDispatch();

  const load: boolean = useAppSelector(
    (state: globalStateType) => state.loadError.loading
  );
  const tokens: sessionType = useAppSelector((state) => state.session);
  const productData: productDataInterface = useAppSelector(
    (state) => state.productData
  );
  const cartData: cartDataInterface = useAppSelector((state) => state.cartData);
  const orderData: orderDataInterface = useAppSelector((state) => state.order);

  // could pass type through or make open to all possible types
  const [formData, setFormData] = useState<
    sessionSchema | productSchema | orderSchema
  >(initialState);

  const [param, setParam] = useState<string>("");

  const [cartState, setCartState] = useState<Body>(initialState);

  const dynamicEndpoint = `${endpoint}/${param}`;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    dispatch(loading(true));

    if (product) {
      const dataAxios: Promise<productDataInterface> = await axiosCall(
        "patch",
        tokens,
        dynamicEndpoint,
        formData
      );

      dispatch(addProductData(dataAxios));
    }
    if (cart) {
      const dataAxios: Promise<cartDataInterface> = await axiosCall(
        "patch",
        tokens,
        dynamicEndpoint,
        cartState
      );

      dispatch(addCartData(dataAxios));
    }
    if (order) {
      const dataAxios: Promise<cartDataInterface> = await axiosCall(
        "patch",
        tokens,
        dynamicEndpoint,
        formData
      );

      dispatch(addOrderData(dataAxios));
    }

    dispatch(loading(false));
  };

  let dataToDisplay;

  if (product) {
    dataToDisplay = JSON.stringify(productData);
  }

  if (cart) {
    dataToDisplay = JSON.stringify(cartData);
  }
  if (order) {
    dataToDisplay = JSON.stringify(orderData);
  }

  // use load state to render a spinner instead of the card | Dont need error state
  if (load) {
    return <Spinner />;
  }

  if (cart) {
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
            <HandleArrayInput
              key={input.key}
              setCartState={setCartState}
              cartState={cartState}
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

        {dataToDisplay ? (
          <div className="card-response">{dataToDisplay}</div>
        ) : null}
      </div>
    );
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

      {dataToDisplay ? <div className="card-response">{dataToDisplay}</div> : null}
    </div>
  );
};

export default Card;
