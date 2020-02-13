let db = require("../models");

module.exports= function (app) {

    app.get("/api/burgers", function(req,res){
        db.findAll({}).then(function (results){
            res.json(results)
        });
    });

    app.post("/api/burgers", function (req,res){
        db.create({
            burger: req.body.burger
        }).then (function(results){
            res.json(results);
        });
    });
};
