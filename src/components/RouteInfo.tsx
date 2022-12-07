import React from "react";
import { FC } from "react";

interface componentProps {
  routeType: string;
  routeEndpoint: string;
  routeExplaination: string;
}

const RouteInfo: FC<componentProps> = ({
  routeType,
  routeEndpoint,
  routeExplaination,
}: componentProps) => {
  return (
    <>
      <h2 className="primary-text mb-3">
        {routeType} Routes - {routeEndpoint}
      </h2>
      <p className="secondary-text mb-6">{routeExplaination}</p>
    </>
  );
};

export default RouteInfo;
