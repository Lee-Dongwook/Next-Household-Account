export const transactionPaths = {
  "/transactions": {
    get: {
      tags: ["Transactions"],
      summary: "Get all transactions",
      description: "Retrieve all income and expense transactions for the user.",
      responses: {
        200: {
          description: "List of transactions",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "string", example: "123" },
                    type: { type: "string", example: "income" },
                    amount: { type: "number", example: 500 },
                    description: { type: "string", example: "Freelance work" },
                    date: { type: "string", example: "2024-11-25" },
                    category: { type: "string", example: "Work" },
                  },
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
