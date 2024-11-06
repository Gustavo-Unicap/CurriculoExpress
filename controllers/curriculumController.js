const curriculumModel = require('../models/curriculumModel');

// Função para obter todos os currículos
const getAllCurricula = (req, res) => {
  const curricula = curriculumModel.getAllCurricula();
  res.json(curricula);
};

// Função para obter um currículo específico por ID
const getCurriculumById = (req, res) => {
  const id = parseInt(req.params.id);
  const curriculum = curriculumModel.getCurriculumById(id);
  
  if (curriculum) {
    res.json(curriculum);
  } else {
    res.status(404).json({ message: 'Currículo não encontrado' });
  }
};

// Função para criar um novo currículo
const createCurriculum = (req, res) => {
  const newCurriculum = req.body;
  
  if (!newCurriculum.name || !newCurriculum.profession) {
    return res.status(400).json({ message: 'Nome e profissão são obrigatórios.' });
  }

  const createdCurriculum = curriculumModel.createCurriculum(newCurriculum);
  res.status(201).json(createdCurriculum);
};

// Função para atualizar um currículo existente
const updateCurriculum = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedCurriculum = req.body;
  
  const result = curriculumModel.updateCurriculum(id, updatedCurriculum);
  
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: 'Currículo não encontrado' });
  }
};

// Função para excluir um currículo
const deleteCurriculum = (req, res) => {
  const id = parseInt(req.params.id);
  curriculumModel.deleteCurriculum(id);
  res.status(204).send();
};

module.exports = {
  getAllCurricula,
  getCurriculumById,
  createCurriculum,
  updateCurriculum,
  deleteCurriculum,
};
