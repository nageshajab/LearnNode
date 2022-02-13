//defining middlewares
module.exports = reqfilter = (req, res, next) => {
    if (!req.query.token) {
        res.send('token missing');
    }
    else {
        next();
    }
}