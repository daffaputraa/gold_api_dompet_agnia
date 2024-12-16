const { Emas } = require("../models/UserModel");

// Endpoint untuk mendapatkan semua data emas
const getEmas = async (req, res) => {
  try {
    const emasList = await Emas.findAll(); // Menggunakan nama yang lebih jelas
    res.status(200).json(emasList);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data emas.", error });
  }

  
};


// Endpoint untuk memperbarui harga emas
const updateEmas = async (req, res) => {
  const emasId = req.params.id; // Ubah nama variabel agar lebih jelas
  const { tipe, harga } = req.body;

  try {
    const emasRecord = await Emas.findOne({ where: { id: emasId } });

    if (emasRecord) {
      // Jika emas ditemukan, lakukan update
      await Emas.update({ tipe, harga }, { where: { id: emasId } });

      const updatedEmas = await Emas.findOne({ where: { id: emasId } }); // Ambil data yang sudah diperbarui
      res.status(200).json({
        message: "Harga emas berhasil diperbarui!",
        data: updatedEmas,
      });
    } else {
      // Jika tidak ditemukan, kirimkan respons 404
      res.status(404).json({ message: "Data emas tidak ditemukan." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat memperbarui data emas.",
      error,
    });
  }
};

module.exports = {
  getEmas,
  updateEmas,
};
