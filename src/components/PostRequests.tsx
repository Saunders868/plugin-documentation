import React, { useState } from "react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addCartData } from "../slices/cartDataSlice";
import { addData } from "../slices/dataSlice";
import { loading } from "../slices/loadErrorSlice";
import { addProductData } from "../slices/productDataSlice";
import { loggedIn } from "../slices/sessionSlice";
import {
  Body,
  cartDataInterface,
  InputInterface,
  orderSchema,
  productDataInterface,
  productSchema,
  sessionSchema,
  sessionType,
} from "../types";

import { axiosCall } from "../utils/Axios";
import HandleArrayInput from "./HandleArrayInput";
import Input from "./Input";
import Spinner from "./Spinner";

type componentProps = {
  initialState: any;
  inputArray: InputInterface[];
  title: string;
  subtitle: string;
  endpoint: string;
  login?: boolean;
  product?: boolean;
  cart?: boolean;
};


const Card: FC<componentProps> = ({
  initialState,
  inputArray,
  title,
  subtitle,
  endpoint,
  login,
  product,
  cart,
}: componentProps) => {
  const dispatch = useAppDispatch();

  const data: any = useAppSelector((state) => state.data);
  const load: boolean = useAppSelector((state) => state.loadError.loading);
  const tokens: sessionType = useAppSelector((state) => state.session);
  // product
  const productData: productDataInterface = useAppSelector(
    (state) => state.productData
  );
  // cart
  const cartData: cartDataInterface = useAppSelector((state) => state.cartData);

  const [formData, setFormData] = useState<
    sessionSchema | productSchema | orderSchema
  >(initialState);

  const [cartState, setCartState] = useState<Body>(initialState);
  console.log(cartState);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    dispatch(loading(true));

    // fallback
    const dataAxios: any = await axiosCall("post", tokens, endpoint, formData);
    dispatch(addData(dataAxios));

    if (login) {
      const dataAxios: Promise<sessionType> = await axiosCall(
        "post",
        tokens,
        endpoint,
        formData
      );
      dispatch(loggedIn(dataAxios));
    }

    if (product) {
      const dataAxios: Promise<productDataInterface> = await axiosCall(
        "post",
        tokens,
        endpoint,
        formData
      );
      dispatch(addProductData(dataAxios));
    }

    if (cart) {
      const dataAxios: Promise<cartDataInterface> = await axiosCall(
        "post",
        tokens,
        endpoint,
        cartState
      );
      dispatch(addCartData(dataAxios));
    }

    dispatch(loading(false));
  };

  let dataToDisplay;

  // fallback
  dataToDisplay = JSON.stringify(data);

  if (login) {
    dataToDisplay = JSON.stringify(tokens);
  }
  if (product) {
    dataToDisplay = JSON.stringify(productData);
  }
  if (cart) {
    dataToDisplay = JSON.stringify(cartData);
  }

  // use load state to render a spinner instead of the card | Dont need error state
  if (load) {
    return <Spinner />;
  }

  if (cart) {
    return (
      <div className="card">
        <h2 className="card-heading">post</h2>
        <h3 className="card-subheading">
          <span className="card-desc">{title}</span> <br />
          {subtitle} - {endpoint}
        </h3>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
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

      {dataToDisplay ? (
        <div className="card-response">{dataToDisplay}</div>
      ) : null}
    </div>
  );
};

export default Card;
