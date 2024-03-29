import React, { useState } from "react";
import { FC } from "react";
import { patchUserInputArray, UserParamField } from "../../data";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addData } from "../../slices/dataSlice";
import { loading } from "../../slices/loadErrorSlice";
import { formType, globalStateType, sessionType, userDataInterface } from "../../types";

import { axiosCall } from "../../utils/Axios";
import GetRequestInput from "../GetRequestInput";
import Spinner from "../Spinner";
import CreateUserInput from "./CreateUserInput";

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
  const [param, setParam] = useState<string>("");

  const dynamicEndpoint = `${process.env
    .REACT_APP_API_USERS_ENDPOINT!}/${param}`;

  const data: userDataInterface = useAppSelector((state: globalStateType) => state.userData);
  const load: boolean = useAppSelector(
    (state: globalStateType) => state.loadError.loading
  );
  const tokens: sessionType = useAppSelector((state) => state.session);

  const dataToDisplay = JSON.stringify(data);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    dispatch(loading(true));
    const dataAxios: Promise<userDataInterface> = await axiosCall(
      "patch",
      tokens,
      dynamicEndpoint,
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
    dispatch(addData(dataAxios));
    dispatch(loading(false));
  };

  // use load state to render a spinner instead of the card | Dont need error state
  if (load) {
    return <Spinner />;
  }

  return (
    <div className="card">
      <h2 className="card-heading">Patch</h2>
      <h3 className="card-subheading">
        <span className="card-desc">Update User</span> <br />
        Update a user by sending a patch request and data to the endpoint -{" "}
        {process.env.REACT_APP_API_USERS_ENDPOINT}/:id
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <GetRequestInput
          required={UserParamField.required}
          label={UserParamField.label}
          placeholder={UserParamField.placeholder}
          id={UserParamField.id}
          type={UserParamField.type}
          setFormData={setParam}
        />
        {patchUserInputArray.map((input) => (
          <CreateUserInput
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
