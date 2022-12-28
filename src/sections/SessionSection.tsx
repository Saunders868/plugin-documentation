import React from "react";
import { PostRequests, RouteInfo } from "../components";
import { sessionInitialState, sessionInputArray } from "../data";

const SessionSection = () => {
  return (
    <section>
      <RouteInfo
        routeType="Session"
        routeEndpoint={process.env.REACT_APP_API_SESSIONS_ENDPOINT!}
        routeExplaination="These routes handle the logging in and loggin out of users. The username and password is checked to ensure it matches what is present in the database, then an access token and refresh token is returned to the browser allowing the user to access restricted routes in the application. Some routes also require admin authorization. These routes can be identified when a 403 error is thown. To overcome this, please login the following admin user: {email: alejandrogarnacho@email.com, password: password}"
      />
      <PostRequests
        title={"Login user"}
        subtitle={
          "Login a user by sending a post request to the session endpoint"
        }
        endpoint={process.env.REACT_APP_API_SESSIONS_ENDPOINT!}
        initialState={sessionInitialState}
        inputArray={sessionInputArray}
        login={true}
      />
    </section>
  );
};

export default SessionSection;
