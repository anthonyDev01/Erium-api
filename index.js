const express = require("express");
const app = express();
const PORT = 5000;
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "123456",
  database: "erium",
  port: 3306,
});

app.use(express.json());
app.use(cors());

app.post("/cadastro", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query("select * from usuario where email = ?", [email], (err, result) => {
    if (err) {
      res.send(err)
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

app.listen(PORT, () => {
  console.log("Servidor Rodando na porta " + PORT);
});