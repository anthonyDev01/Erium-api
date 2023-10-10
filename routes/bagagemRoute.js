const express = require("express");
const db = require("../database");
const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();


router.get("/bagagem", authenticateToken, (req, res) => {
  const idMala = req.query.id;

  db.query("select * from itembagagem where bagagem_idBagagem = ?", [idMala], (err, result) => {
    if (err) {
      res.send(err);
    }

    if (result.length != 0) {
      
      res.json(result);
      
    }
  });
});


router.post("/bagagem", authenticateToken, (req, res) => {
  const email = req.user.email;
  const idSalvo = req.body.idMala;
  const itens = req.body.itens; 


  for (let item of itens) {
    const consultaIdUsuarioEidItem = `
      SELECT usuario.idUsuario, bagagem.idBagagem
      FROM usuario
      INNER JOIN bagagem ON usuario.idUsuario = bagagem.usuario_idUsuario
      WHERE usuario.email = ?`;

    db.query(consultaIdUsuarioEidItem, [email], (err, result) => {
      if (err) {
        res.send(err);
      }

      if (result.length != 0) {
        const idUsuario = result[0].idUsuario;
        let idBagagem = 0;

        if (idSalvo.length > 0) {
          idBagagem = idSalvo;
        } else {
          idBagagem = result.pop().idBagagem;
        }

        const nome = item.nome;
        const peso = item.peso;
        const imagem = item.imagem;
        const quantidade = item.quantidade;

        db.query(
          "insert into itembagagem(nome, peso, imagem, quantidade, bagagem_idBagagem, bagagem_usuario_idUsuario) values (?, ?, ?, ?, ?, ?)",
          [nome, peso, imagem, quantidade, idBagagem, idUsuario],
          (error, resposta) => {
            if (error) {
              res.send(err);
            }
          }
        );
      }
    });
  }

  res.status(200).json({ message: "Itens inseridos com sucesso" });
});



router.post("/malaUsuario", authenticateToken, (req, res) => {
  const email = req.user.email;

  db.query(
    "select idUsuario from usuario where email = ?",
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      }

      const idUsuario = result[0].idUsuario;
      const nome = req.body.nome;
      const tipo = req.body.tipo;
      const peso = req.body.peso;

      db.query(
        "insert into bagagem(nomeBagagem, tipoBagagem, pesoBagagem, usuario_idUsuario) values (?, ?, ?, ?)",
        [nome, tipo, peso, idUsuario],
        (error, resposta) => {
          if (error) {
            res.send(err);
          }
        }
      );
    }
  );
});

router.get("/malaUsuario", authenticateToken, (req, res) => {
  const email = req.user.email;

  db.query(
    "select idUsuario from usuario where email = ?",
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      }

      const idUsuario = result[0].idUsuario;

      db.query(
        "select * from bagagem where usuario_idUsuario = ?",
        [idUsuario],
        (error, resposta) => {
          if (error) {
            res.send(err);
          }
          res.json(resposta);
        }
      );
    }
  );
});


module.exports = router;
