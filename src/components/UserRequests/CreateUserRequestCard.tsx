import React, { useState } from "react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loading } from "../../slices/loadErrorSlice";
import { formType, globalStateType, sessionType, userDataInterface } from "../../types";

import { axiosCall } from "../../utils/Axios";
import CreateUserInput from "./CreateUserInput";
import Spinner from "../Spinner";
import { createUserInputArray } from "../../data";
import { addUserData } from "../../slices/userDataSlice";

const initialState: formType = {
  email: "",
  password: "",
  passwordConfirmation: "",
  username: "",
  firstName: "",
  lastName: "",
};

const Card: FC = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<formType>(initialState);

  const userData: userDataInterface = useAppSelector(
    (state: globalStateType) => state.userData
  );
  const load: boolean = useAppSelector(
    (state: globalStateType) => state.loadError.loading
  );
  const tokens: sessionType = useAppSelector((state) => state.session);

  const dataToDisplay = JSON.stringify(userData);

  const endpoint = process.env.REACT_APP_API_USERS_ENDPOINT!;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    dispatch(loading(true));

    const dataAxios: Promise<userDataInterface> = await axiosCall(
      "post",
      tokens,
      endpoint,
      {
        email: {
          address: formData.email,
        },
        password: formData.password,
        passwordConfirmation: formData.passwordConfirmation,
        username: formData.username,
        profile: {
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
      }
    );

    dispatch(addUserData(dataAxios));

    dispatch(loading(false));
  };

  if (load) {
    return <Spinner />;
  }
  return (
    <div className="card">
      <h2 className="card-heading">POST</h2>
      <h3 className="card-subheading">
        <span className="card-desc">create user</span> <br /> Create a user by
        sending a post request to the endpoint -{" "}
        {process.env.REACT_APP_API_USERS_ENDPOINT}
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {createUserInputArray.map((input) => (
          <CreateUserInput
            key={input.key}
            setFormData={setFormData}
            formData={formData}
            required={input.required}
            type={input.type}
            placeholder={input.placeholder}
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
