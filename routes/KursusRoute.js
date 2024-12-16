const express = require("express")
const { courseContoller } = require("../controller")
const router = express.Router()


router.get("/kursus", courseContoller.getKursus)
router.post("/kursus/post", courseContoller.addKursus)

module.exports = router