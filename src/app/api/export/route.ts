import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

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
];

const categories = [
  { id: "1", name: "Work", userId: "123" },
  { id: "2", name: "Groceries", userId: "123" },
];

export async function GET(req: Request) {
  try {
    const session = await requireAuth(req);

    const userTransactions = transactions.filter(
      (transaction) => transaction.userId === session.user.id
    );
    const userCategories = categories.filter(
      (category) => category.userId === session.user.id
    );

    const exportData = {
      user: {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
      },
      transactions: userTransactions,
      categories: userCategories,
    };

    return new NextResponse(JSON.stringify(exportData), {
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="export_${session.user.id}.json"`,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
