require("dotenv").config();
const express = require("express");
const auth = require("netlify-cms-oauth-provider-node"); // 👈 importa todo el server

const app = express();

// El paquete ya es un middleware de Express
app.use(
  "/auth",
  auth({
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    repo: "torresgomezedgar/blog-decap",
    branch: "main"
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ OAuth server running on http://localhost:${PORT}`);
});
