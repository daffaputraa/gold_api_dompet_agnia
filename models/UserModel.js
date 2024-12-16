const Sequelize = require ('sequelize')
const db = require ("../config/Database")
const { FOREIGNKEYS } = require('sequelize/lib/query-types')

const { DataTypes } = Sequelize

const User = db.define('users', {
    username : DataTypes.STRING,
    nama : DataTypes.STRING,
    email : DataTypes.STRING
}, { 
    freezeTableName : true
})

const Emas = db.define('emas', {
    tipe : DataTypes.STRING,
    harga : DataTypes.INTEGER,
}, { 
    freezeTableName : true
})

const Kategori = db.define("kategoris", {
  nama: DataTypes.STRING,
  kategori_id: DataTypes.INTEGER,
    },
    {   timestamps : false, 
        freezeTableName : true
    }

);

const Kursus = db.define('kursus', {
    nama_kursus : DataTypes.STRING,
    harga : DataTypes.STRING,
    kategori_id : DataTypes.INTEGER
    }, 
    {   timestamps : false, 
        freezeTableName : true
    },
     
    
)

Kursus.belongsTo(Kategori, {
    foreignKey: "kategori_id",
    targetKey : "kategori_id",
    as: "kategori",
});
 
Kategori.hasMany(Kursus, {
    foreignKey: "kategori_id",  
    sourceKey: "kategori_id",
    as: "kursus",
});


// Kategori.hasMany(Kursus)
// Kursus.belongsTo(Kategori)

module.exports = { User, Kursus, Kategori, Emas };  

(async ()=> {
    await db.sync()
}) () ;