import React from "react";
import { APIdescription, Card, GetAllUsersRequestCard, RouteInfo } from "./components";

function App() {
  const user = {
    email: {
      address: "",
    },
    password: "",
    passwordConfirmation: "",
    username: "",
    profile: {
      firstName: "",
      lastName: "",
    },
  };
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
          <Card
            method="post"
            payloadSchema={"user"}
          />
          <GetAllUsersRequestCard />
        </div>
      </main>
      <footer className="flex justify-center items-center">
        <p className="secondary-text capitalize">&copy;daniel saunders 2022</p>
      </footer>
    </>
  );
}

export default App;
