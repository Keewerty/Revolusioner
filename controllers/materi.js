const db = require("../models");
const Materi = db.materi;

exports.create = async (req, res) => {

    try{
        const data = await Materi.create(req.body)
        res.json({
            message: "Data berhasil ditambahkan",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

exports.getAll = async (req, res) => {

    try{
        const mats = await Materi.findAll()
        res.json({
            message: "Data berhasil ditampilkan",
            data: mats,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

exports.update = async (req, res) => {
    const id = req.params.id
    try{
        const materi = await Materi.findByPk(id, {rejectOnEmpty: true})
        quiz.update(req.body,{
            where: {id}
        })
        res.json({
            message: "Data berhasil diupdate.",
            data: materi,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving quiz" ,
            data: null,
        });
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id
    try{
        const materi = await Materi.findByPk(id, {rejectOnEmpty: true})
        krono.destroy()
        res.json({
            message: "Data berhasil dihapus",
            data: materi,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving krono" ,
            data: null,
        });
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id
    try{
        const materi = await Materi.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Data berhasil ditampilkan dengan id=${id}.`,
            data: materi,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving quiz" ,
            data: null,
        });
    }
}

