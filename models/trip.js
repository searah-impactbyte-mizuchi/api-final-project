const Sequelize = require("sequelize")
const {db} = require("../config")

const Trip = db.define('trips', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    location: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    destination: {
        type: Sequelize.STRING,
        allowNull: true,   
    },
    from: {
        type: Sequelize.STRING,
        allowNull: true,   
    },
    to: {
        type: Sequelize.STRING,
        allowNull: true,   
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    description: {
        type: Sequelize.STRING, 
        allowNull: true,  
    },
    meetupPoint: {
        type: Sequelize.STRING,
        allowNull: true,   
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,   
    }, 
    members: {
        type: Sequelize.STRING,
        allowNull: true,   
    }, 
})

module.exports = Trip