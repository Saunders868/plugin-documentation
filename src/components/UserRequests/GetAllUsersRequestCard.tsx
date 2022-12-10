import React, { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { makeRequest } from "../../slices/loadErrorSlice";
import useAxios from "../../utils/Axios";
// import Input from "./Input";

// interface componentProps {
//   route: string;
//   model: string;
//   params: string;
// }

// need the params, url, method[will be get of the bat], inputs based on what?, route

const GetRequestCard: FC = () => {
  const dispatch = useAppDispatch();

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   passwordConfirmation: "",
  //   username: "",
  //   firstName: "",
  //   lastName: "",
  // });

  const { data } = useAxios(
    process.env.REACT_APP_API_USERS_ENDPOINT!,
    // this needs to be passed in through component or globel state
    {},
    "get",
    null
  );

  const dataToDisplay = JSON.stringify(data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(makeRequest(true));

    setTimeout(() => {
      dispatch(makeRequest(false));
    }, 1000);
  };

  return (
    <div className="card">
      <h2 className="card-heading">GET</h2>
      <h3 className="card-subheading">
        <span className="card-desc">Get users</span> <br /> Get all users by
        sending a post request to the endpoint -{" "}
        {process.env.REACT_APP_API_USERS_ENDPOINT}
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {/* every input will need to change depending on the request. the number of inputs will also need to change */}
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
