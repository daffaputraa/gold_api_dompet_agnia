const express = require("express")
const { emasController } = require("../controller")
const router = express.Router()

router.get("/emas", emasController.getEmas);
router.put("/emas/update/:id", emasController.updateEmas);


module.exports  = router