import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { z } from "zod";

const users = [
  {
    id: "123",
    name: "John Doe",
    email: "john@example.com",
    password: "oldPassword123",
  },
  {
    id: "456",
    name: "Jane Doe",
    email: "jane@example.com",
    password: "janePassword456",
  },
];

const passwordSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string().min(8, "패스워드는 8자 이상이어야 합니다."),
});

export async function PUT(req: Request) {
  try {
    const session = await requireAuth(req);

    const body = await req.json();

    const { currentPassword, newPassword } = passwordSchema.parse(body);

    const userIndex = users.findIndex((user) => user.id === session.user.id);
    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const user = users[userIndex];
    if (user.password !== currentPassword) {
      return NextResponse.json(
        { error: "Incorrect current password" },
        { status: 403 }
      );
    }

    users[userIndex].password = newPassword;
    return NextResponse.json({ message: "Password updated successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors.map((e) => e.message).join(", ") },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
