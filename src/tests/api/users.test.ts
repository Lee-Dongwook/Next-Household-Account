import { GET } from "@/app/api/users/me/route";
import { getServerSession } from "next-auth/next";

jest.mock("next-auth/next");

describe("GET /api/users/me", () => {
  it("returns user data when authenticated", async () => {
    (getServerSession as jest.Mock).mockResolvedValue({
      user: { id: "123", name: "John Doe", email: "user@example.com" },
    });

    const response = await GET();
    expect(response.status).toBe(200);
    const json = await response.json();
    expect(json).toEqual({
      id: "123",
      name: "John Doe",
      email: "user@example.com",
    });
  });

  it("returns 401 when not authenticated", async () => {
    (getServerSession as jest.Mock).mockResolvedValue(null);

    const response = await GET();
    expect(response.status).toBe(401);
  });
});
