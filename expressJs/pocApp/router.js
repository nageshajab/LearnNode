module.exports = function (app) {
    const express = require('express');
    const reqfilter = require('./middleware');
    const path = require('path');
    const router = express.Router();

    router.use(reqfilter);

    //configure static folder 
    const wwwPath = path.join(__dirname, 'www');
    app.use(express.static(wwwPath));

    app.get('', (req, res) => {
        res.sendFile(`${wwwPath}/index.html`);
    });

    app.get('/about', (req, res) => {
        res.sendFile(`${wwwPath}/about.html`);
    });

    router.get('/profile', (req, res) => {
        const user = {
            name: 'nagesh ajab',
            email: 'ajab.nagesh@gmail.com',
            city: 'Pune',
            skills: ['c#', 'asp.net', 'sql server', '.net core']
        };
        res.render('profile', { user });
    });

    app.get('/login', (req, res) => {
        res.render('login');
    });

    app.use('/s/', router);

    //put this condition at bottom, when no path matches, it will return 404.html
    app.get('*', (req, res) => {
        //res.send('this is about page');sending raw test message
        res.sendFile(`${wwwPath}/404.html`);
    });

}