export const authPaths = {
  "/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "User login",
      description: "Authenticate user and return a JWT token.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: { type: "string", example: "user@example.com" },
                password: { type: "string", example: "password123" },
              },
              required: ["email", "password"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Login successful",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  token: { type: "string", example: "eyJhbGci..." },
                },
              },
            },
          },
        },
        401: { description: "Unauthorized" },
      },
    },
  },
};
