const fs = require('fs');
const path = require('path');

const curriculaPath = path.join(__dirname, '..', 'data', 'curricula.json');

// Função para ler todos os currículos
const getAllCurricula = () => {
  const data = fs.readFileSync(curriculaPath);
  return JSON.parse(data);
};

// Função para obter um currículo por ID
const getCurriculumById = (id) => {
  const curricula = getAllCurricula();
  return curricula.find(c => c.id === id);
};

// Função para salvar os currículos no arquivo
const saveCurricula = (curricula) => {
  fs.writeFileSync(curriculaPath, JSON.stringify(curricula, null, 2));
};

// Função para criar um novo currículo
const createCurriculum = (curriculum) => {
  const curricula = getAllCurricula();
  const newId = curricula.length ? Math.max(curricula.map(c => c.id)) + 1 : 1;
  const newCurriculum = { id: newId, ...curriculum };
  curricula.push(newCurriculum);
  saveCurricula(curricula);
  return newCurriculum;
};

// Função para atualizar um currículo
const updateCurriculum = (id, curriculum) => {
  const curricula = getAllCurricula();
  const index = curricula.findIndex(c => c.id === id);
  if (index !== -1) {
    curricula[index] = { id, ...curriculum };
    saveCurricula(curricula);
    return curricula[index];
  }
  return null;
};

// Função para excluir um currículo
const deleteCurriculum = (id) => {
  let curricula = getAllCurricula();
  curricula = curricula.filter(c => c.id !== id);
  saveCurricula(curricula);
};

module.exports = {
  getAllCurricula,
  getCurriculumById,
  createCurriculum,
  updateCurriculum,
  deleteCurriculum,
};
