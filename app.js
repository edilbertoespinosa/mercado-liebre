const express = require("express");
const path = require("path");

const app = express();
const PUERTO = process.env.PORT || 3001;

const pathPublic = path.resolve(__dirname, "./public");
app.use(express.static(pathPublic));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/home.html"))
);

app.get("/registro", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/register.html"))
);

app.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/login.html"))
);

app.listen(PUERTO, () =>
  console.log(`Escuchando por http://localhost:${PUERTO}`)
);
