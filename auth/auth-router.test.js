const request = require("supertest");

const server = require("../api/server");

describe("users router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });
  it("allows user to login with correct credentials", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({
        username: "ken",
        password: "abc123"
      });
    expect(res.status).toBe(201);
  });

  it("denies user with incorrect credentials", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({
        username: "luigi",
        password: "mansion"
      });
    expect(res.status).toBe(401);
  });
  it("creates a new user", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({
        username: "test1",
        password: "abc123"
      });
    expect(res.status).toBe(201);
  });
  it("sends an error if credential parameter are incorrect", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({
        stupidname: "wario",
        password: "garlic"
      });
    expect(res.status).toBe(500);
  });
});
