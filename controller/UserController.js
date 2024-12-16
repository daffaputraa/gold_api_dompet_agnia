const { where } = require("sequelize");
const db = require("../config/Database");
const {User} = require("../models/UserModel"); 



const getUser = async (req, res) => {
    try {
        const response = await User.findAll()
        res.status(200).json(response)

    } catch (error) {
        console.error(`Ini pesan errornya : ${error.message}`)
    }
}

const addUser = async (req, res) => {

    try {
        const response = await User.create(req.body);
        res.status(201).json({msg : 'user created!'})

    } catch (error) {
        console.error(`Ini pesan errornya : ${error.message}`)
    }
}


const deleteUser = async (req, res) => {

    const idParams = req.params['id']


    try {
        const response = await User.destroy({
            where : { id  : idParams }
        });
        res.status(201).json({msg : 'user delete!'})

    } catch (error) {
        console.error(`Ini pesan errornya : ${error.message}`)
    }
}

const updateUser = async (req, res) => {

    const idParams = req.params['id']
    const {tipe, nama, email} = req.body

      try {
        // Cari user berdasarkan ID
        const user = await User.findOne({ where: { id: idParams } });

        if (user) {
            // Jika user ditemukan, lakukan update
            await User.update(
                {
                    tipe: tipe,
                    harga: nama,
                    email: email,
                },
                {
                    where: { id: idParams },
                }
            );

            res.status(200).json({ msg: 'User updated successfully!' });
        } else {
            // Jika user tidak ditemukan, kirimkan respons 404
            res.status(404).json({ msg: 'User not found!' });
        }
    } catch (error) {
        console.error(`Ini pesan errornya : ${error.message}`)
    }
}


module.exports = { getUser, addUser, deleteUser, updateUser}