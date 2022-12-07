import React from "react";
import { Card, RouteInfo } from "./components";

function App() {
  return (
    <>
      <main className="flex justify-center w-full p-10 xl:mt-10 items-center constrain">
        <div className="w-full">
          <div>
            <h1 className="font-bold uppercase text-4xl md:text-8xl">
              Delivery API
            </h1>
            <p className="secondary-text mb-10">
              This delivery API was built with Nodejs, Typescript and MongoDB.
              All routes for this api begin with{" "}
              <span className="font-semibold underline">
                {process.env.REACT_APP_API_GENERAL_URI}
              </span>
              <br />
              <span>
                <a
                  href="https://github.com/Saunders868/deliveryAPI"
                  target={"_blank"}
                  rel="noreferrer"
                  className="btn mr-4"
                >
                  <svg
                    width="32"
                    className="mr-2 -ml-1 w-5 h-5"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9998 2.66663C8.63317 2.66663 2.66651 8.63329 2.66651 16C2.66499 18.799 3.54492 21.5274 5.18146 23.7982C6.818 26.069 9.12803 27.7667 11.7838 28.6506C12.4505 28.7666 12.6998 28.3666 12.6998 28.016C12.6998 27.7 12.6825 26.6506 12.6825 25.5333C9.33317 26.1506 8.46651 24.7173 8.19984 23.9666C8.04917 23.5826 7.39984 22.4 6.83317 22.0826C6.36651 21.8333 5.69984 21.216 6.81584 21.2C7.86651 21.1826 8.61584 22.1666 8.86651 22.5666C10.0665 24.5826 11.9838 24.016 12.7492 23.6666C12.8665 22.8 13.2158 22.2173 13.5998 21.884C10.6332 21.5506 7.53317 20.4 7.53317 15.3C7.53317 13.8493 8.04917 12.6506 8.89984 11.716C8.76651 11.3826 8.29984 10.016 9.03317 8.18263C9.03317 8.18263 10.1492 7.83329 12.6998 9.55063C13.7853 9.24937 14.9067 9.09775 16.0332 9.09996C17.1665 9.09996 18.2998 9.24929 19.3665 9.54929C21.9158 7.81596 23.0332 8.18396 23.0332 8.18396C23.7665 10.0173 23.2998 11.384 23.1665 11.7173C24.0158 12.6506 24.5332 13.8333 24.5332 15.3C24.5332 20.4173 21.4172 21.5506 18.4505 21.884C18.9332 22.3 19.3505 23.1 19.3505 24.3506C19.3505 26.1333 19.3332 27.5666 19.3332 28.0173C19.3332 28.3666 19.5838 28.7826 20.2505 28.6493C22.8972 27.7557 25.1971 26.0546 26.8264 23.7855C28.4557 21.5164 29.3324 18.7934 29.3332 16C29.3332 8.63329 23.3665 2.66663 15.9998 2.66663Z"
                      fill="white"
                    />
                  </svg>
                  github
                </a>
                <a
                  href="https://daniel-saunders-portfolio.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="btn"
                >
                  <svg
                    className="mr-2 -ml-1 w-5 h-5"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 23V24.3427C12.0001 24.8681 11.8966 25.3885 11.6955 25.8739C11.4944 26.3594 11.1996 26.8005 10.828 27.172L10 28H22L21.172 27.172C20.8004 26.8005 20.5056 26.3594 20.3045 25.8739C20.1034 25.3885 19.9999 24.8681 20 24.3427V23M28 7V20C28 20.7956 27.6839 21.5587 27.1213 22.1213C26.5587 22.6839 25.7957 23 25 23H7C6.20435 23 5.44129 22.6839 4.87868 22.1213C4.31607 21.5587 4 20.7956 4 20V7M28 7C28 6.20435 27.6839 5.44129 27.1213 4.87868C26.5587 4.31607 25.7957 4 25 4H7C6.20435 4 5.44129 4.31607 4.87868 4.87868C4.31607 5.44129 4 6.20435 4 7M28 7V16C28 16.7956 27.6839 17.5587 27.1213 18.1213C26.5587 18.6839 25.7957 19 25 19H7C6.20435 19 5.44129 18.6839 4.87868 18.1213C4.31607 17.5587 4 16.7956 4 16V7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  portfolio
                </a>
              </span>
            </p>
          </div>
          <RouteInfo
            routeType="User"
            routeEndpoint={process.env.REACT_APP_API_USERS_ENDPOINT!}
            routeExplaination='These routes handle everything user related. However, some of the routes
            are restricted to admin users only, and all routes need a user to be
            signed in before then can be used. You can start by creating a user,
            then heading to the sessions route and logging the user in before
            continuing with the rest of the app.'
          />
          <Card method="Post" />
        </div>
      </main>
      <footer className="flex justify-center items-center">
        <p className="secondary-text capitalize">&copy;daniel saunders 2022</p>
      </footer>
    </>
  );
}

export default App;
