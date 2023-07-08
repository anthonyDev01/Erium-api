const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../database");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();

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

          res.send({ msg: "Usuário logado com sucesso", token });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Email ou senha incorretos" });
    }
  });
});

router.get("/pagina-protegida", authenticateToken, (req, res) => {
  
  const categorias = [
    {
      roupas: {
        calca: {
          nome: "Calça",
          imagem: "",
          tipos: [
            {
              nome: "Calça Jeans",
              imagem: "",
              peso: "500g"
            },
            {
              nome: "Calça Legging",
              imagem: "",
              peso: "300g"
            },
            {
              nome: "Calça Social",
              imagem: "",
              peso: "600g"
            },
            {
              nome: "Calça Cargo",
              imagem: "",
              peso: "700g"
            },
            {
              nome: "Calça de Moletom",
              imagem: "",
              peso: "400g"
            }
          ]
        },
        meias: {
          nome: "Meias",
          imagem: "",
          tipos: [
            {
              nome: "Meias Curtas",
              imagem: "",
              peso: "50g"
            },
            {
              nome: "Meias Longas",
              imagem: "",
              peso: "80g"
            },
            {
              nome: "Meias Esportivas",
              imagem: "",
              peso: "70g"
            },
            {
              nome: "Meias de Algodão",
              imagem: "",
              peso: "60g"
            },
            {
              nome: "Meias de Lã",
              imagem: "",
              peso: "100g"
            }
          ]
        },
        blusa: {
          nome: "Blusa",
          imagem: "",
          tipos: [
            {
              nome: "Blusa de Manga Comprida",
              imagem: "",
              peso: "250g"
            },
            {
              nome: "Blusa de Alça",
              imagem: "",
              peso: "150g"
            },
            {
              nome: "Blusa de Tricô",
              imagem: "",
              peso: "350g"
            },
            {
              nome: "Blusa de Moletom",
              imagem: "",
              peso: "400g"
            },
            {
              nome: "Blusa Peplum",
              imagem: "",
              peso: "200g"
            }
          ]
        },
        bermuda: {
          nome: "Bermuda",
          imagem: "",
          tipos: [
            {
              nome: "Bermuda Jeans",
              imagem: "",
              peso: "400g"
            },
            {
              nome: "Bermuda Cargo",
              imagem: "",
              peso: "300g"
            },
            {
              nome: "Bermuda de Praia",
              imagem: "",
              peso: "200g"
            },
            {
              nome: "Bermuda de Tecido",
              imagem: "",
              peso: "250g"
            },
            {
              nome: "Bermuda Ciclista",
              imagem: "",
              peso: "350g"
            }
          ]
        },
        tenis: {
          nome: "Tênis",
          imagem: "",
          tipos: [
            {
              nome: "Tênis Esportivo",
              imagem: "",
              peso: "700g"
            },
            {
              nome: "Tênis Casual",
              imagem: "",
              peso: "600g"
            },
            {
              nome: "Tênis de Corrida",
              imagem: "",
              peso: "800g"
            },
            {
              nome: "Tênis de Skate",
              imagem: "",
              peso: "750g"
            },
            {
              nome: "Tênis de Couro",
              imagem: "",
              peso: "900g"
            }
          ]
        },
        roupas_intimas: {
          nome: "Roupas íntimas",
          imagem: "",
          tipos: [
            {
              nome: "Sutiã",
              imagem: "",
              peso: "100g"
            },
            {
              nome: "Cueca Boxer",
              imagem: "",
              peso: "80g"
            },
            {
              nome: "Calcinha",
              imagem: "",
              peso: "50g"
            },
            {
              nome: "Cueca Slip",
              imagem: "",
              peso: "70g"
            },
            {
              nome: "Camisola",
              imagem: "",
              peso: "150g"
            }
          ]
        },
        bone: {
          nome: "Boné",
          imagem: "",
          peso: "100g"
        },
        chinelos: {
          nome: "Chinelos",
          imagem: "",
          tipos: [
            {
              nome: "Chinelo de Dedo",
              imagem: "",
              peso: "200g"
            },
            {
              nome: "Chinelo Slide",
              imagem: "",
              peso: "250g"
            },
            {
              nome: "Chinelo de Pano",
              imagem: "",
              peso: "150g"
            },
            {
              nome: "Chinelo de Borracha",
              imagem: "",
              peso: "180g"
            },
            {
              nome: "Chinelo de Couro",
              imagem: "",
              peso: "300g"
            }
          ]
        },
        touca: {
          nome: "Touca",
          imagem: "",
          peso: "50g"
        },
        vestido: {
          nome: "Vestido",
          imagem: "",
          peso: "400g"
        },
        saia: {
          nome: "Saia",
          imagem: "",
          peso: "300g"
        },
        meia_calca: {
          nome: "Meia Calça",
          imagem: "",
          peso: "150g"
        },
        camiseta: {
          nome: "Camiseta",
          imagem: "",
          peso: "200g"
        },
        sutia: {
          nome: "Sutiã",
          imagem: "",
          peso: "100g"
        },
        body: {
          nome: "Body",
          imagem: "",
          peso: "250g"
        },
        botas: {
          nome: "Botas",
          imagem: "",
          peso: "900g"
        },
        cachecol: {
          nome: "Cachecol",
          imagem: "",
          peso: "150g"
        }
      }
    }
  ];
  
  res.send("Bem-vindo à página protegida");
});

module.exports = router;
