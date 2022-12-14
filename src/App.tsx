import React from "react";
import {
  APIdescription,
  Card,
  GetRequestCard,
  PostRequests,
  RouteInfo,
} from "./components";
import { InputInterface, sessionSchema } from "./types";
import uuid  from 'react-uuid';

function App() {

  // put these into an external file
  const sessionInitialState: sessionSchema = {
    email: "",
    password: "",
  };

  const sessionInputArray: InputInterface[]  = [
    {
      type: "email",
      placeholder: "email",
      label: "Email",
      id: "email",
      required: true,
      key: uuid(),
    },
    {
      type: "password",
      placeholder: "password",
      label: "Password",
      id: "password",
      required: true,
      key: uuid(),
    },
  ];

  const getInputArray: InputInterface[] = [
    {
      type: "text",
      placeholder: "param",
      label: "Param",
      id: "param",
      required: true,
      key: uuid(),
    },
  ]
  return (
    <>
      <main className="flex justify-center w-full p-10 xl:mt-10 items-center constrain">
        <div className="w-full">
          <APIdescription />
          <RouteInfo
            routeType="User"
            routeEndpoint={process.env.REACT_APP_API_USERS_ENDPOINT!}
            routeExplaination="These routes handle everything user related. However, some of the routes
            are restricted to admin users only, and all routes need a user to be
            signed in before then can be used. You can start by creating a user,
            then heading to the sessions route and logging the user in before
            continuing with the rest of the app."
          />
          <Card method="post" />
          <GetRequestCard
            endpoint={process.env.REACT_APP_API_USERS_ENDPOINT!}
            title="users"
            subtitle="Get all users by sending a post request to the endpoint"
            inputArray={getInputArray}
          />
          <RouteInfo
            routeType="Session"
            routeEndpoint={process.env.REACT_APP_API_SESSIONS_ENDPOINT!}
            routeExplaination="These routes handle the logging in and loggin out of users. The username and password is checked to ensure it matches what is present in the database, then an access token and refresh token is returned to the browser allowing the user to access restricted routes in the application."
          />
          <PostRequests
            endpoint={process.env.REACT_APP_API_SESSIONS_ENDPOINT!}
            method="post"
            initialState={sessionInitialState}
            inputArray={sessionInputArray}
            title={"Login user"}
            subtitle={
              "Login a user by sending a post request to the user endpoint"
            }
          />
        </div>
      </main>
      <footer className="flex justify-center items-center">
        <p className="secondary-text capitalize">&copy;daniel saunders 2022</p>
      </footer>
    </>
  );
}

export default App;
