const express = require('express');
const routes = express.Router();

const users = [{
    id: 1,
    nome: 'Karla',
    email: 'karla18@gmail.com',
    password: '123456789'


}, {
    id: 2,
    email: 'celio@gmail.com',
    password: '123456789'
}
]

routes.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user, email === email && user.password === password)
    if (user) {
        res.status(200).json(user);
    }
    res.status(401).json({ menssage: 'Credenciais Invalidas' });
});

module.exports = routes