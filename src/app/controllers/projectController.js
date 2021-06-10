const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Project = require('../models/Project');
const Task = require('../models/Task');

const router = express.Router();

router.use(authMiddleware);


router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().populate(['user', 'tasks']);
        res.send({ projects });

    } catch (err) {
        return res.status(400).send({ error: 'Error loading projects' })
    }
});

router.get('/:projectId', async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId).populate(['user', 'tasks']);
        res.send({ project });

    } catch (err) {
        return res.status(400).send({ error: 'Error loading a project' })
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description, tasks } = req.body;

        const project = await Project.create({ title, description, user: req.userId });

        // Promisse.all irá aguardar todas as iterações do "map" abaixo antes de seguir para a próxima linha
        await Promise.all(tasks.map(async task => {
            const projectTask = new Task({ ...task, project: project._id }) // ...task adiciona todos os campos da task

            await projectTask.save();

            project.tasks.push(projectTask);
        }));

        await project.save(); // O save aqui é para atualizar as tasks no banco de dados

        res.send({ project });

    } catch (err) {
        return res.status(400).send({ error: 'Error creating new project' })
    }
});

router.put('/:projectId', async (req, res) => {
    try {
        const { title, description, tasks } = req.body;

        const project = await Project.findByIdAndUpdate(req.params.projectId, {
            title,
            description
            // Por padrão quando algo é atualizado o moggose não retorna o novo valor e sim o valor antigo, porém com o {new: true} será retornado o valor atualizado
        }, { new: true });

        // Deleta as tasks assosciadas ao projeto antes de cria-las novamente
        project.tasks = [];
        await Task.remove({ project: project._id })

        // Promisse.all irá aguardar todas as iterações do "map" abaixo antes de seguir para a próxima linha
        await Promise.all(tasks.map(async task => {
            const projectTask = new Task({ ...task, project: project._id }) // ...task adiciona todos os campos da task

            await projectTask.save();

            project.tasks.push(projectTask);
        }));

        await project.save(); // O save aqui é para atualizar as tasks no banco de dados

        res.send({ project });

    } catch (err) {
        return res.status(400).send({ error: 'Error updating project' })
    }
});

router.delete('/:projectId', async (req, res) => {
    try {
        await Project.findByIdAndRemove(req.params.projectId);
        res.send();

    } catch (err) {
        return res.status(400).send({ error: 'Error deleting project' })
    }
});

module.exports = app => app.use('/projects', router);