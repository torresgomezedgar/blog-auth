require("dotenv").config();
const express = require("express");
const auth = require("netlify-cms-oauth-provider").default;

const app = express();

// Configuración del provider OAuth para GitHub
app.use(
  auth({
    // estos vienen de GitHub OAuth App
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    // Render expone puerto dinámico
    port: process.env.PORT || 3000
  })
);

// Render usa PORT, no 3000 fijo
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`OAuth server running on port ${PORT}`);
});
