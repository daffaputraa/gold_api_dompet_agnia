const { SELECT } = require("sequelize/lib/query-types");
const { Kategori, Kursus } = require("../models/UserModel");
const db = require("../config/Database");
const { where, Model } = require("sequelize");

const getKategori = async (req, res) => {
    try {
        const response = await Kategori.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg : error.message})
    }
}

const addKategori = async (req, res) => {

    const {nama, kategori_id} = req.body

    try {
        const response = await Kategori.create({
            nama : nama, 
            kategori_id : kategori_id
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg : error.message})
    }
}

const getKategoriWithKursus = async (req, res)  => {


    try {
    const kategori = await Kategori.findAll({
      include: {
        model: Kursus,
        as : "kursus",
        attributes: ["nama_kursus", "kategori_id"],
      },
    });
    res.status(200).json(kategori)

    } catch (error) {
        res.status(500).json({"duh error nih" : error.message})
    }
}

module.exports = {
    getKategori, 
    addKategori, 
    getKategoriWithKursus
}