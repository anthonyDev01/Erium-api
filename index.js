const express = require("express");
const app = express();
const PORT = 5000;
const userRoutes = require("./routes/userRoutes");
const authenticateToken = require("./middlewares/authMiddleware");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
app.use(authenticateToken); // Aplica o middleware de autenticação antes das rotas

app.listen(PORT, () => {
  console.log("Servidor Rodando na porta " + PORT);
});
