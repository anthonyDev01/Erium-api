const express = require("express");
const db = require("../database");
const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/bagagem", (req, res) => {
  const email = req.user.email;

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

      /*
      console.log("idUsuario recebido: ", idUsuario);
      console.log("idBagagem recebido: ", idBagagem);
      console.log("nome recebido: ", nome);
      console.log("peso recebido: ", peso);
      console.log("imagem recebido: ", imagem);
      console.log("quantidade recebido: ", quantidade);
      */

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

module.exports = router;
