const express = require('express');
const bodyParser = require('body-parser');
const curriculumRoutes = require('./routes/curriculumRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/curricula', curriculumRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API de currículos rodando na porta ${port}`);
});
