const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Project = require('../models/Project');
const Task = require('../models/Task');

const router = express.Router();

router.use(authMiddleware);


router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId });
});

// router.get('/:projectId', async )

module.exports = app => app.use('/projects', router);