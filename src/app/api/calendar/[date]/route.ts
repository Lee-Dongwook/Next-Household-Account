import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAuth } from "@/lib/auth";
const transactions: Array<{
  id: string;
  type: string;
  amount: number;
  description: string;
  date: string;
  category: string;
  userId: string;
}> = [
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
    amount: 50,
    description: "Movie ticket",
    date: "2024-11-26",
    category: "Entertainment",
    userId: "456",
  },
];

const dateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format");

export async function GET(
  req: Request,
  { params }: { params: { date: string } }
) {
  try {
    const session = await requireAuth(req);

    const { date } = params;
    dateSchema.parse(date);

    const userTransactions = transactions.filter(
      (transaction) =>
        transaction.date === date && transaction.userId === session.user.id
    );

    return NextResponse.json({
      date,
      transactions: userTransactions,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
