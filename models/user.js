const Sequelize = require("sequelize")
const {db} = require("../config")

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,   
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,    
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    about: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false, 
    },
    trips_created: {
        type: Sequelize.STRING,
        allowNull: false, 
    }
})

module.exports = User