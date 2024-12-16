const Sequelize = require("sequelize")

const db = new Sequelize(`online_course`, `root`, ``,  {
    host : `localhost`,
    dialect : `mysql`
})

module.exports =  db;   