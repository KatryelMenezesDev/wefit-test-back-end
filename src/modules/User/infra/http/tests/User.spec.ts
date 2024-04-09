import request from "supertest";

import app from "@shared/infra/http/server";

describe("User Create", () => {
  test("Should check if create user", async () => {
    const response = await request(app).post("/user/create").send({
      name: "Victor Noah Campos",
      cpf: "54155005026",
      cnpj: null,
      email: "victor_campos@gmail.com",
      cel: "47992962810",
      tel: "4735058490",
      cep: "89227146",
      street: "Rua José Dias",
      number: "182",
      city: "Joinville",
      district: "Iririú",
      state: "Santa Catarina"
    });

    expect(response.body).toHaveProperty("id");
    expect(response.status).toBe(201);
  });

  test("Should check if read user", async () => {
    const response = await request(app).get("/user/read/1");

    expect(response.body).toHaveProperty("id");
    expect(response.status).toBe(200);
  });

  test("Should check if update user", async () => {
    const response = await request(app).patch("/user/update/1").send({
      name: "Victor Noah Campos",
      cpf: "54155005026",
      cnpj: null,
      email: "victor_campos@gmail.com",
      cel: "47992962810",
      tel: "4735058490",
      cep: "89227146",
      street: "Rua José Dias",
      number: "182",
      city: "Joinville",
      district: "Iririú",
      state: "Santa Catarina"
    });

    expect(response.body).toHaveProperty("id");
    expect(response.status).toBe(200);
  });

  test("Should check if delete user", async () => {
    const response = await request(app).delete("/user/delete/1");

    expect(response.status).toBe(200);
  });
});
