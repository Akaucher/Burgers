module.exports = function(sequelize, DataTypes){
    let burger= sequelize.define("Burger",{
        burger: DataTypes.STRING
    });
    return burger;
};