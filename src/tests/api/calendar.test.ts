import { GET } from "@/app/api/calendar/[date]/route";
import { requireAuth } from "@/lib/auth";

jest.mock("@/lib/auth", () => ({
  requireAuth: jest.fn(),
}));

describe("GET /api/calendar/[date]", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns transactions for a specific date and user", async () => {
    (requireAuth as jest.Mock).mockResolvedValue({
      user: { id: "123" },
    });

    const req = new Request("http://localhost");
    const params = { date: "2024-11-25" };

    const response = await GET(req, { params });
    expect(response.status).toBe(200);

    const json = await response.json();
    expect(json.date).toBe("2024-11-25");
    expect(json.transactions.length).toBe(2);
  });

  it("returns 400 for invalid date format", async () => {
    const req = new Request("http://localhost");
    const params = { date: "invalid-date" };

    const response = await GET(req, { params });
    expect(response.status).toBe(400);

    const json = await response.json();
    expect(json.error).toBe("Invalid date format");
  });

  it("returns 401 for unauthorized user", async () => {
    (requireAuth as jest.Mock).mockRejectedValue(new Error("Unauthorized"));

    const req = new Request("http://localhost");
    const params = { date: "2024-11-25" };

    const response = await GET(req, { params });
    expect(response.status).toBe(401);

    const json = await response.json();
    expect(json.error).toBe("Unauthorized");
  });
});
