let express = require("express");
let app = express();
let PORT = process.env.PORT || 8080;
let db = require("./models");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/routeBois.js")(app);

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("WE IN BOYS"+ PORT);
    });
});