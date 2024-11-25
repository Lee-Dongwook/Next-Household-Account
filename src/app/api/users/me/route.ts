import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

const users = [
  {
    id: "123",
    name: "John Doe",
    email: "john@example.com",
    image: "https://example.com/john.jpg",
  },
  {
    id: "456",
    name: "Jane Doe",
    email: "jane@example.com",
    image: "https://example.com/jane.jpg",
  },
];

export async function GET(req: Request) {
  try {
    const session = await requireAuth(req);

    const user = users.find((user) => user.id === session.user.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await requireAuth(req);

    const body = await req.json();
    const { name, email, image } = body;

    const userIndex = users.findIndex((user) => user.id === session.user.id);
    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 업데이트 수행
    users[userIndex] = {
      ...users[userIndex],
      name: name || users[userIndex].name,
      email: email || users[userIndex].email,
      image: image || users[userIndex].image,
    };

    return NextResponse.json({
      message: "User updated",
      user: users[userIndex],
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
