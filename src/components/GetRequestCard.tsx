import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addData } from "../slices/dataSlice";
import { loading } from "../slices/loadErrorSlice";
import { addProductData } from "../slices/productDataSlice";
import { addProductsData } from "../slices/productsDataSlice";
import { addUserData } from "../slices/userDataSlice";
import { addUsersData } from "../slices/usersDataSlice";
import {
  globalStateType,
  InputInterface,
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

  const [formData, setFormData] = useState<string>("");

  const dynamicEndpoint = `${endpoint}/${formData}`;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    dispatch(loading(true));

    const dataAxios: any = await axiosCall("get", tokens, dynamicEndpoint, null);

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

    dispatch(addData(dataAxios));

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

      {dataToDisplay ? <div className="card-response">{dataToDisplay}</div> : null}
    </div>
  );
};

export default GetRequestCard;
