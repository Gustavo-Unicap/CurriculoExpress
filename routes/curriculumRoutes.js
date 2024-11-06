const express = require('express');
const curriculumController = require('../controllers/curriculumController');

const router = express.Router();

// Rota para obter todos os currículos
router.get('/', curriculumController.getAllCurricula);

// Rota para obter um currículo por ID
router.get('/:id', curriculumController.getCurriculumById);

// Rota para criar um novo currículo
router.post('/', curriculumController.createCurriculum);

// Rota para atualizar um currículo
router.put('/:id', curriculumController.updateCurriculum);

// Rota para excluir um currículo
router.delete('/:id', curriculumController.deleteCurriculum);

module.exports = router;
