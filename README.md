<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://i.imgur.com/TRnGhBA.png" alt="Logo" width="180" height="80">
  </a>

  <h3 align="center">Test Back-end - WeFit</h3>

  <p align="center">
  </p>
</div>

## 📝 About The Project

The project in question is a backend challenge developed in response to an initiative promoted by the company WeFit. This challenge was conceived as an opportunity for developers to demonstrate their skills in creating robust and efficient solutions for specific problems in the software development context.

## 🔍 Prerequisites
It is necessary to have Docker and Node installed and configured.

To access any route of the application, it is essential to add an authorization token to the request header, using the Bearer Token format. The token can be configured in the .env file, using the SECRET_KEY variable.

If you are using Swagger for testing purposes, remember to insert the authorization header into the "Authorize" field located at the top of the documentation.

## 🚀 How to run

```bash
# Clone the project and access its folder.
$ git clone https://github.com/KatryelMenezesDev/wefit-test-back-end
$ cd wefit-test-back-end
```

```bash
# To start the project
$ yarn install
$ yarn docker:up
$ yarn prisma:migrate
$ yarn dev
# open Swagger [Localhost](http://localhost:3333/api-docs) in browser
```

- Open Swagger [Localhost](http://localhost:3333/api-docs) in browser.

## 🗺️ Roadmap

- [x] Add User Create
- [x] Add User Read
- [x] Add User Update
- [x] Add User Delete
