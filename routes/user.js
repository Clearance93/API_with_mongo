const routes = require("express").Router();


routes.get('/', (req, res) => {
    res.send("Hey you've lended at user routes")
})


module.exports = routes;