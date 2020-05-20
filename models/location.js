onst Sequelize = require("sequelize")
const {db} = require("../config")

const Location = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,  
    },
    scenery: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    image1: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    image2: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
})

module.exports = Location