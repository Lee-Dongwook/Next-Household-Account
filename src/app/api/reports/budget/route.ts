import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

const budgets = [
  { userId: "123", budget: 4000 },
  { userId: "456", budget: 5000 },
];

const transactions = [
  {
    id: "1",
    type: "income",
    amount: 500,
    description: "Freelance work",
    date: "2024-11-25",
    category: "Work",
    userId: "123",
  },
  {
    id: "2",
    type: "expense",
    amount: 200,
    description: "Groceries",
    date: "2024-11-25",
    category: "Food",
    userId: "123",
  },
  {
    id: "3",
    type: "expense",
    amount: 500,
    description: "Entertainment",
    date: "2024-11-26",
    category: "Movies",
    userId: "123",
  },
  {
    id: "4",
    type: "expense",
    amount: 100,
    description: "Snacks",
    date: "2024-11-27",
    category: "Food",
    userId: "456",
  },
];

export async function GET(req: Request) {
  try {
    const session = await requireAuth(req);

    const userBudget = budgets.find(
      (budget) => budget.userId === session.user.id
    );

    if (!userBudget) {
      return NextResponse.json({ error: "Budget not set" }, { status: 404 });
    }

    const userExpenses = transactions
      .filter(
        (transaction) =>
          transaction.type === "expense" &&
          transaction.userId === session.user.id
      )
      .reduce((total, transaction) => total + transaction.amount, 0);

    const budgetAnalysis = {
      budget: userBudget.budget,
      actual: userExpenses,
      overBudget:
        userExpenses > userBudget.budget ? userExpenses - userBudget.budget : 0,
      withinBudget: userExpenses <= userBudget.budget,
    };

    return NextResponse.json(budgetAnalysis);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
