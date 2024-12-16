const { where } = require("sequelize");
const { Kursus, Kategori } = require("../models/UserModel");

const getKursus = async (req, res) => {
  try {
    const response = await Kursus.findAll({
      include: [
        {
          model: Kategori,
          as: "kategori",
          attributes: ["nama", "kategori_id"],
        },
      ],
    });

    // const response = await Kursus.findAll()
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


const addKursus = async (req, res) => {
    
    const {nama_kursus, harga, kategori_id} = req.body
    const id = kategori_id
    try {
        const kategori = await Kategori.findOne({
          where: { kategori_id: id },
        });
        
        console.log(`Ini kategori id : ${kategori}`);

        if (!kategori) {
            return res.status(500).json({msg : "ga ada kategori itu"})
        }
        const response = await Kursus.create(
            {
                nama_kursus : nama_kursus, 
                harga : harga, 
                kategori_id : kategori_id
            }
        )
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg : error.message})
    }
}

module.exports = {
    getKursus, addKursus
}   