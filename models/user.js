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
        allowNull: true, 
        defaultValue : "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true,    
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true, 
    },
    about: {
        type: Sequelize.STRING,
        allowNull: true, 
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
})

module.exports = User