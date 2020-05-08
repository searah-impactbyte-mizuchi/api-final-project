const Sequelize = require("sequelize")
const {
    DATABASE_NAME,
    DATABASE_HOST,
    DATABASE_USER,
    DATABASE_PASSWORD,
} = require('./environment')

const db = new Sequelize
(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
    host: DATABASE_HOST,
    dialect:"mysql",
    define: {
        timestamps: false,
    },
    logging: false
})
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {db}