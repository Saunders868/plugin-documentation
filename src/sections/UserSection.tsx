import React from "react";
import {
  CreateUserRequestCard,
  DeleteRequestCard,
  GetRequestCard,
  RouteInfo,
  UserPatchRequest,
} from "../components";
import { paramInputArray } from "../data";

const USER_ENDPOINT: string = process.env.REACT_APP_API_USERS_ENDPOINT!;

const initialStateUser = {
  id: ''
}

const UserSection = () => {
  return (
    <section>
      <RouteInfo
        routeType="User"
        routeEndpoint={USER_ENDPOINT}
        routeExplaination="These routes handle everything user related. However, some of the routes
            are restricted to admin users only, and all routes need a user to be
            signed in before then can be used. You can start by creating a user,
            then heading to the sessions route and logging the user in before
            continuing with the rest of the app."
      />
      <CreateUserRequestCard />
      <GetRequestCard
        endpoint={USER_ENDPOINT}
        title="users"
        subtitle="Get all users by sending a get request to the endpoint"
        initialState={initialStateUser}
      />
      <GetRequestCard
        endpoint={USER_ENDPOINT}
        title="user"
        subtitle="Get a user by sending a get request to the endpoint"
        inputArray={paramInputArray}
        initialState={initialStateUser}
      />
      <UserPatchRequest />
      <DeleteRequestCard
        endpoint={USER_ENDPOINT}
        title="user"
        subtitle="Delete a user by sending a delete request to the endpoint"
        inputArray={paramInputArray}
      />
    </section>
  );
};

export default UserSection;
