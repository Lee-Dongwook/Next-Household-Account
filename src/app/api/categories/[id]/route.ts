import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

const categories = [
  { id: "1", name: "Work", userId: "123" },
  { id: "2", name: "Groceries", userId: "123" },
  { id: "3", name: "Entertainment", userId: "456" },
];

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireAuth(req);

    const { id } = params;

    const categoryIndex = categories.findIndex(
      (category) => category.id === id && category.userId === session.user.id
    );

    if (categoryIndex === -1) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    const deletedCategory = categories.splice(categoryIndex, 1);

    return NextResponse.json({
      message: "Category deleted",
      category: deletedCategory[0],
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
