import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

const transactions = [
  {
    id: "1",
    type: "income",
    amount: 500,
    description: "Freelance work",
    date: "2024-11-01",
    category: "Work",
    userId: "123",
  },
  {
    id: "2",
    type: "expense",
    amount: 200,
    description: "Groceries",
    date: "2024-11-15",
    category: "Food",
    userId: "123",
  },
  {
    id: "3",
    type: "expense",
    amount: 300,
    description: "Rent",
    date: "2024-11-20",
    category: "Housing",
    userId: "123",
  },
  {
    id: "4",
    type: "income",
    amount: 1000,
    description: "Salary",
    date: "2024-12-01",
    category: "Work",
    userId: "123",
  },
  {
    id: "5",
    type: "expense",
    amount: 500,
    description: "New TV",
    date: "2024-12-05",
    category: "Electronics",
    userId: "123",
  },
];

export async function GET(req: Request) {
  try {
    const sessions = await requireAuth(req);

    const url = new URL(req.url);
    const year = url.searchParams.get("year");
    const month = url.searchParams.get("month");

    if (!year || !month) {
      return NextResponse.json(
        { error: "Missing year or month query parameters" },
        { status: 400 }
      );
    }
    const userTransactions = transactions.filter(
      (transaction) =>
        transaction.userId === sessions.user.id &&
        new Date(transaction.date).getFullYear() === parseInt(year) &&
        new Date(transaction.date).getMonth() + 1 === parseInt(month)
    );

    const income = userTransactions
      .filter((transaction) => transaction.type === "income")
      .reduce((total, transaction) => total + transaction.amount, 0);

    const expense = userTransactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((total, transaction) => total + transaction.amount, 0);

    return NextResponse.json({
      year: parseInt(year),
      month: parseInt(month),
      income,
      expense,
      balance: income - expense,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
