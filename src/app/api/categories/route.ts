import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

const categories = [
  { id: "1", name: "Work", userId: "123" },
  { id: "2", name: "Groceries", userId: "123" },
  { id: "3", name: "Entertainment", userId: "456" },
];

export async function GET(req: Request) {
  try {
    const session = await requireAuth(req);

    const userCategories = categories.filter(
      (category) => category.userId === session.user.id
    );

    return NextResponse.json(userCategories);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await requireAuth(req);
    const body = await req.json();

    const newCategory = {
      id: `${Date.now()}`,
      name: body.name,
      userId: session.user.id,
    };

    categories.push(newCategory);

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
