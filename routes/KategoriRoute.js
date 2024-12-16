const express = require("express")
const { kategoriController } = require("../controller")
const router = express.Router()


router.get('/kategori', kategoriController.getKategori)
router.post('/kategori/post', kategoriController.addKategori)
router.get('/kategori/kursus', kategoriController.getKategoriWithKursus)

module.exports = router