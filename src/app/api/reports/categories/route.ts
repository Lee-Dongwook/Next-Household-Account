import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

const transactions = [
  {
    id: "1",
    type: "expense",
    amount: 200,
    description: "Groceries",
    date: "2024-11-25",
    category: "Food",
    userId: "123",
  },
  {
    id: "2",
    type: "expense",
    amount: 500,
    description: "Entertainment",
    date: "2024-11-26",
    category: "Movies",
    userId: "123",
  },
  {
    id: "3",
    type: "expense",
    amount: 100,
    description: "Snacks",
    date: "2024-11-27",
    category: "Food",
    userId: "123",
  },
  {
    id: "4",
    type: "expense",
    amount: 300,
    description: "Books",
    date: "2024-11-28",
    category: "Education",
    userId: "456",
  },
];

export async function GET(req: Request) {
  try {
    const session = await requireAuth(req);

    const userExpenses = transactions.filter(
      (transaction) =>
        transaction.type === "expense" && transaction.userId === session.user.id
    );

    const categoryTotals = userExpenses.reduce((totals, transaction) => {
      const { category, amount } = transaction;
      if (!totals[category]) {
        totals[category] = 0;
      }
      totals[category] += amount;
      return totals;
    }, {} as Record<string, number>);

    const response = Object.entries(categoryTotals).map(
      ([category, total]) => ({
        category,
        total,
      })
    );

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
