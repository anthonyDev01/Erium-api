const jtw = require("jsonwebtoken");
const jwtSecret = "senzapdaspdkaspkdamdm";

// Middleware para verificar a autenticação do usuário
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; //Essa linha de código extrai o token JWT do cabeçalho Authorization da requisição

  //verifica se o token é valido
  if (token) {
    jtw.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.sendStatus(403);
      }

      // O token é válido, podemos prosseguir para a próxima rota
      req.user = decodedToken;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = authenticateToken;
