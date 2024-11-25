import { GET, POST } from "@/app/api/categories/route";
import { requireAuth } from "@/lib/auth";

jest.mock("@/lib/auth", () => ({
  requireAuth: jest.fn(),
}));

describe("GET /api/categories", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("GET /api/categories - returns categories for the authenticated user", async () => {
    (requireAuth as jest.Mock).mockResolvedValue({ user: { id: "123" } });

    const req = new Request("http://localhost");

    const response = await GET(req);
    expect(response.status).toBe(200);

    const json = await response.json();
    expect(json).toEqual([
      { id: "1", name: "Work", userId: "123" },
      { id: "2", name: "Groceries", userId: "123" },
    ]);
  });

  it("POST /api/categories - adds a new category for the authenticated user", async () => {
    (requireAuth as jest.Mock).mockResolvedValue({ user: { id: "123" } });

    const req = new Request("http://localhost", {
      method: "POST",
      body: JSON.stringify({ name: "Health" }),
    });

    const response = await POST(req);
    expect(response.status).toBe(201);

    const json = await response.json();
    expect(json.name).toBe("Health");
    expect(json.userId).toBe("123");
  });

  it("GET /api/categories - returns 401 if user is not authenticated", async () => {
    (requireAuth as jest.Mock).mockRejectedValue(new Error("Unauthorized"));

    const req = new Request("http://localhost");

    const response = await GET(req);
    expect(response.status).toBe(401);

    const json = await response.json();
    expect(json.error).toBe("Unauthorized");
  });
  it("POST /api/categories - returns 401 if user is not authenticated", async () => {
    (requireAuth as jest.Mock).mockRejectedValue(new Error("Unauthorized"));

    const req = new Request("http://localhost", {
      method: "POST",
      body: JSON.stringify({ name: "Health" }),
    });

    const response = await POST(req);
    expect(response.status).toBe(401);

    const json = await response.json();
    expect(json.error).toBe("Unauthorized");
  });
});
