import request from "supertest";

import app from "@shared/infra/http/server";

describe("User Creation", () => {
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
});