import { authPaths } from "./paths/auth";
import { transactionPaths } from "./paths/transactions";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Ledger App API Documentation",
    version: "1.0.0",
    description: "API documentation for the Ledger app",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  paths: {
    ...authPaths,
    ...transactionPaths,
  },
};

export default swaggerDefinition;
