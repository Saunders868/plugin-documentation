import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addCartData } from "../slices/cartDataSlice";
import { addCartsData } from "../slices/cartsDataSlice";
import { loading } from "../slices/loadErrorSlice";
import { addOrderData } from "../slices/orderDataSlice";
import { addOrdersData } from "../slices/ordersDataSlice";
import { addProductData } from "../slices/productDataSlice";
import { addProductsData } from "../slices/productsDataSlice";
import { addUserData } from "../slices/userDataSlice";
import { addUsersData } from "../slices/usersDataSlice";
import {
  cartDataInterface,
  globalStateType,
  InputInterface,
  orderDataInterface,
  productDataInterface,
  sessionType,
  userDataInterface,
} from "../types";
import { axiosCall } from "../utils/Axios";
import GetRequestInput from "./GetRequestInput";
import Spinner from "./Spinner";

interface componentProps {
  endpoint: string;
  title: string;
  subtitle: string;
  inputArray?: InputInterface[];
  user?: boolean;
  users?: boolean;
  product?: boolean;
  products?: boolean;
  cart?: boolean;
  carts?: boolean;
  order?: boolean;
  orders?: boolean;
}

const GetRequestCard: FC<componentProps> = ({
  endpoint,
  title,
  subtitle,
  inputArray,
  users,
  user,
  product,
  products,
  cart,
  carts,
  order,
  orders,
}) => {
  const dispatch = useAppDispatch();

  const data: any = useAppSelector((state: globalStateType) => state.data);
  const load: boolean = useAppSelector(
    (state: globalStateType) => state.loadError.loading
  );
  // session state
  const tokens: sessionType = useAppSelector((state) => state.session);
  // user states
  const usersData: userDataInterface[] = useAppSelector(
    (state: globalStateType) => state.usersData
  );
  const userData: userDataInterface = useAppSelector(
    (state: globalStateType) => state.userData
  );
  // product states
  const productsData: productDataInterface[] = useAppSelector(
    (state) => state.productsData
  );
  const productData: productDataInterface = useAppSelector(
    (state) => state.productData
  );
  // cart states
  const cartData: cartDataInterface = useAppSelector((state) => state.cartData);
  const cartsData: cartDataInterface[] = useAppSelector(
    (state) => state.cartsData
  );
  // order states
  const orderData: orderDataInterface = useAppSelector((state) => state.order);
  const ordersData: orderDataInterface[] = useAppSelector(
    (state) => state.orders
  );

  const [formData, setFormData] = useState<string>("");

  const dynamicEndpoint = `${endpoint}/${formData}`;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    dispatch(loading(true));

    if (users) {
      const dataAxios: Promise<userDataInterface[]> = await axiosCall(
        "get",
        tokens,
        dynamicEndpoint,
        null
      );

      dispatch(addUsersData(dataAxios));
    }

    if (user) {
      const dataAxios: Promise<userDataInterface> = await axiosCall(
        "get",
        tokens,
        dynamicEndpoint,
        null
      );

      dispatch(addUserData(dataAxios));
    }

    if (products) {
      const dataAxios: Promise<productDataInterface[]> = await axiosCall(
        "get",
        tokens,
        dynamicEndpoint,
        null
      );

      dispatch(addProductsData(dataAxios));
    }
    if (product) {
      const dataAxios: Promise<productDataInterface> = await axiosCall(
        "get",
        tokens,
        dynamicEndpoint,
        null
      );

      dispatch(addProductData(dataAxios));
    }

    if (carts) {
      const dataAxios: Promise<cartDataInterface[]> = await axiosCall(
        "get",
        tokens,
        dynamicEndpoint,
        null
      );

      dispatch(addCartsData(dataAxios));
    }

    if (cart) {
      const dataAxios: Promise<cartDataInterface> = await axiosCall(
        "get",
        tokens,
        dynamicEndpoint,
        null
      );

      dispatch(addCartData(dataAxios));
    }

    if (orders) {
      const dataAxios: Promise<orderDataInterface[]> = await axiosCall(
        "get",
        tokens,
        dynamicEndpoint,
        null
      );

      dispatch(addOrdersData(dataAxios));
    }
    if (order) {
      const dataAxios: Promise<orderDataInterface> = await axiosCall(
        "get",
        tokens,
        dynamicEndpoint,
        null
      );

      dispatch(addOrderData(dataAxios));
    }

    dispatch(loading(false));
  };

  let dataToDisplay = JSON.stringify(data);

  if (users) {
    dataToDisplay = JSON.stringify(usersData);
  }

  if (user) {
    dataToDisplay = JSON.stringify(userData);
  }

  if (product) {
    dataToDisplay = JSON.stringify(productData);
  }
  if (products) {
    dataToDisplay = JSON.stringify(productsData);
  }
  if (cart) {
    dataToDisplay = JSON.stringify(cartData);
  }
  if (carts) {
    dataToDisplay = JSON.stringify(cartsData);
  }
  if (order) {
    dataToDisplay = JSON.stringify(orderData);
  }
  if (orders) {
    dataToDisplay = JSON.stringify(ordersData);
  }

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
        {inputArray
          ? inputArray.map((input) => (
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

      {dataToDisplay ? (
        <div className="card-response">{dataToDisplay}</div>
      ) : null}
    </div>
  );
};

export default GetRequestCard;
