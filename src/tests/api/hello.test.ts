import { GET } from "@/app/api/hello/route";

describe("Hello API", () => {
  it("should return a greeting message", async () => {
    const response = await GET();
    expect(response.status).toBe(200);

    const json = await response.json();
    expect(json).toEqual({ message: "Hello, World!" });
  });
});
