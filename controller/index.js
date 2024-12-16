const UserController = require("./UserController"); // assuming UserController is a file, not a default export
const CourseController = require("./CourseController"); // assuming UserController is a file, not a default export
const KategoriController = require("./KategoriController"); // assuming UserController is a file, not a default export
const EmasController = require("./EmasController"); // assuming UserController is a file, not a default export

module.exports = {
  userController: UserController,
  kategoriController: KategoriController,
  courseContoller: CourseController,
  emasController : EmasController
};
