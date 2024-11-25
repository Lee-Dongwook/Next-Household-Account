"use client";

import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic(() => import("swagger-ui-react"));

const ApiDocs = () => {
  return <SwaggerUI url="/api/swagger" />;
};

export default ApiDocs;
