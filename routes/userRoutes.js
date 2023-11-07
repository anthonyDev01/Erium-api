const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../database");
const jwt = require("jsonwebtoken");
const router = express.Router();
const category = require("../data/category");
const authenticateToken = require("../middlewares/authMiddleware");

// Configurações do JWT
const jwtSecret = "senzapdaspdkaspkdamdm";
const jwtExpiresIn = "1d";

router.post("/cadastro", (req, res) => {
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

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("select * from usuario where email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].senha, (erro, match) => {
        if (match) {
          // Gera o token JWT
          const token = jwt.sign({ email }, jwtSecret, {
            expiresIn: jwtExpiresIn,
          });
          
          req.email = email;

          res.send({ msg: "Usuário logado com sucesso", token });
        } else {
          res.send({ msg: "Email ou senha incorretos" });
        }
      });
    } else {
      res.send({ msg: "Email ou senha incorretos" });
    }
  });
});

router.get("/pagina-protegida", authenticateToken, (req, res) => {
  const categorias = category;

  res.json(categorias);
});

router.get("/imagens/:nome", authenticateToken, (req, res) => {
  const nomeImagem = req.params.nome;

  res.sendFile(`${__dirname}/assets/${nomeImagem}`);
});


module.exports = router
