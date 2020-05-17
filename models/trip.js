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
        allowNull: false,
    },
    destination: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    from: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    to: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING, 
        allowNull: false,  
    },
    meetupPoint: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,   
    }, 
})

module.exports = Trip