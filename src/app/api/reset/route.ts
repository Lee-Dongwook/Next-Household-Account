import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

let transactions = [
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
];

let categories = [
  { id: "1", name: "Work", userId: "123" },
  { id: "2", name: "Groceries", userId: "123" },
  { id: "3", name: "Entertainment", userId: "456" },
];

export async function DELETE(req: Request) {
  try {
    const session = await requireAuth(req);

    transactions = transactions.filter(
      (transaction) => transaction.userId !== session.user.id
    );
    categories = categories.filter(
      (category) => category.userId !== session.user.id
    );

    return NextResponse.json({ message: "All data reset for the user" });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
