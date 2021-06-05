const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({ error: 'No token provided' });

    const parts = authHeader.split(' ');

    if (!parts.length === 2) // Verifica se tem 2 partes, onde a primeira é o Bearer seguido do Hash
        return res.status(401).send({ error: 'Token error' });

    // scheme recebe o "Bearer" e o token recebe o hash do array "parts"
    const [scheme, token] = parts;

    // Regez para pesquisar se começa com Bearer. O "i" é para indicar que é case sensitive.
    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Bad formatted token' });

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err)
            return res.status(401).send({ error: 'Token invalid' });

        req.userId = decoded.id;
        return next();
    })
};