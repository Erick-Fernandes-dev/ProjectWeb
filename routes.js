const express = require('express')
const routes = express.Router()

routes.get('/', function (req, res) {
    return res.redirect("teachers")
})

routes.get('/teachers', function (req, res) {
    return res.render('teachers/teacher')
})

routes.get("/student", function (req, res) {
    return res.send("Wellcome") 
})

module.exports = routes

