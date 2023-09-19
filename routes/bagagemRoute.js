const express = require("express");
const db = require("../database");
const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();

<<<<<<< HEAD
router.post("/bagagem", authenticateToken, (req, res) => {
  const email = req.user.email;
  console.log(email);
=======
router.post("/bagagem", (req, res) => {
  const email = req.user.email;
>>>>>>> 22cadf1721c3af3adf20e7f097ada68bfdf50030

  const consultaIdUsuarioEidItem = `
  SELECT usuario.idUsuario, bagagem.idBagagem
  FROM usuario
  INNER JOIN bagagem ON usuario.idUsuario = bagagem.usuario_idUsuario
  WHERE usuario.email = ?

`;

  db.query(consultaIdUsuarioEidItem, [email], (err, result) => {
    if (err) {
      res.send(err);
    }

    if (result.length != 0) {
      const idUsuario = result[0].idUsuario;
      const idBagagem = result[0].idBagagem;
      const nome = req.body.nome;
      const peso = req.body.peso;
      const imagem = req.body.imagem;
      const quantidade = req.body.quantidade;

<<<<<<< HEAD
      console.log("idUsuario recebido: ", idUsuario);
      console.log("idBagagem recebido: ", idBagagem);
=======
      /*
      console.log("idUsuario recebido: ", idUsuario);
      console.log("idBagagem recebido: ", idBagagem);
      console.log("nome recebido: ", nome);
      console.log("peso recebido: ", peso);
      console.log("imagem recebido: ", imagem);
      console.log("quantidade recebido: ", quantidade);
      */
>>>>>>> 22cadf1721c3af3adf20e7f097ada68bfdf50030

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
});

<<<<<<< HEAD
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

=======
>>>>>>> 22cadf1721c3af3adf20e7f097ada68bfdf50030
module.exports = router;
