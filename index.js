const express = require("express");
const app = express();
require("dotenv").config();

const mysql = require("mysql");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/", (req, res) => {
  console.log("DB_HOST:", process.env.DB_HOST);
  console.log("DB_USERNAME:", process.env.DB_USERNAME);
  console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
  console.log("DB_DBNAME:", process.env.DB_DBNAME);
});

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USERNAME:", process.env.DB_USERNAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_DBNAME:", process.env.DB_DBNAME);

app.use(express.json());

app.post("/cadastro", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query("select * from usuario where email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (erro, hash) => {
        db.query(
          "insert into usuario (nome, email, senha) values (?, ?, ?)",
          [name, email, hash],
          (err, response) => {
            if (err) {
              res.send(err);
            }
            res.send({ msg: "Cadastrado(a) com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("select * from usuario where email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].senha, (erro, match) => {
        if (match) {
          res.send({ msg: "Usuário logado com sucesso" });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Email ou senha incorretos" });
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Servidor Rodando na porta " + port);
});
