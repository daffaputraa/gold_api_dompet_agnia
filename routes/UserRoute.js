const express = require("express")
const router = express.Router()
const { userController }  = require("../controller")

router.get("/users", userController.getUser)
router.post("/post/users", userController.addUser)
router.delete("/post/users/delete/:id", userController.deleteUser)
router.put("/post/users/update/:id", userController.updateUser)


module.exports = router