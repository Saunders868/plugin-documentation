import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addCartData } from "../slices/cartDataSlice";
import { loading } from "../slices/loadErrorSlice";
import { addOrderData } from "../slices/orderDataSlice";
import { addProductData } from "../slices/productDataSlice";
import { addUserData } from "../slices/userDataSlice";
import { cartDataInterface, globalStateType, InputInterface, orderDataInterface, productDataInterface, sessionType, userDataInterface } from "../types";
import { axiosCall } from "../utils/Axios";
import GetRequestInput from "./GetRequestInput";
import Spinner from "./Spinner";

interface componentProps {
  endpoint: string;
  title: string;
  subtitle: string;
  inputArray?: InputInterface[];
  user?: boolean;
  product?: boolean;
  cart?: boolean;
  order?: boolean;
}

const GetRequestCard: FC<componentProps> = ({
  endpoint,
  title,
  subtitle,
  inputArray,
  user,
  product,
  cart,
  order
}) => {
  const dispatch = useAppDispatch();

  const data: any = useAppSelector((state: globalStateType) => state.data);
  const load: boolean = useAppSelector(
    (state: globalStateType) => state.loadError.loading
  );
  const tokens: sessionType = useAppSelector((state) => state.session);

  const userData: userDataInterface = useAppSelector(
    (state: globalStateType) => state.userData
  );

  const productData: productDataInterface = useAppSelector(
    (state) => state.productData
  );

  const cartData: cartDataInterface = useAppSelector((state) => state.cartData);

  const orderData: orderDataInterface = useAppSelector((state) => state.order);

  // this state would control the params being passed in to the request
  const [formData, setFormData] = useState<string>('');

  const dynamicEndpoint = `${endpoint}/${formData}`

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    dispatch(loading(true));

    if (user) {
      const dataAxios: Promise<userDataInterface> = await axiosCall(
        "delete",
        tokens,
        dynamicEndpoint,
        null
      );

      dispatch(addUserData(dataAxios));
    }

    if (product) {
      const dataAxios: Promise<productDataInterface> = await axiosCall(
        "delete",
        tokens,
        dynamicEndpoint,
        null
      );

      dispatch(addProductData(dataAxios));
    }

    if (cart) {
      const dataAxios: Promise<cartDataInterface> = await axiosCall(
        "delete",
        tokens,
        dynamicEndpoint,
        null
      );

      dispatch(addCartData(dataAxios));
    }

    if (order) {
      const dataAxios: Promise<orderDataInterface> = await axiosCall(
        "delete",
        tokens,
        dynamicEndpoint,
        null
      );

      dispatch(addOrderData(dataAxios));
    }

    dispatch(loading(false));
  };

  let dataToDisplay;

  dataToDisplay = JSON.stringify(data);
  if (user) {
    dataToDisplay = JSON.stringify(userData);
  }

  if (product) {
    dataToDisplay = JSON.stringify(productData);
  }

  if (cart) {
    dataToDisplay = JSON.stringify(cartData);
  }

  if (order) {
    dataToDisplay = JSON.stringify(orderData);
  }


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

      {dataToDisplay ? <div className="card-response">{dataToDisplay}</div> : null}
    </div>
  );
};

export default GetRequestCard;
