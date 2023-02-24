const db = require("../models");
const Krono = db.kronologi;

exports.create = async (req, res) => {

    try{
        const data = await Krono.create(req.body)
        res.json({
            message: "Asik, data berhasil ditambahkan",
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
        const kronologi = await Krono.findAll()
        res.json({
            message: "quiz berhasil ditampilkan",
            data: kronologi,
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
        const krono = await Krono.findByPk(id, {rejectOnEmpty: true})
        quiz.update(req.body,{
            where: {id}
        })
        res.json({
            message: "Quiz berhasil diupdate.",
            data: krono,
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
        const krono = await Krono.findByPk(id, {rejectOnEmpty: true})
        krono.destroy()
        res.json({
            message: "quiz berhasil dihapus",
            data: krono,
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
        const krono = await krono.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `krono berhasil ditampilkan dengan id=${id}.`,
            data: krono,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving quiz" ,
            data: null,
        });
    }
}

