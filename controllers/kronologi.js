const db = require("../models");
const Krono = db.kronologi;

exports.create = async (req, res) => {

    try{
        const data = await Krono.create(req.body)
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
        const kronologi = await Krono.findAll()
        res.json({
            message: "Data berhasil ditampilkan",
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
        krono.update(req.body,{
            where: {id}
        })
        res.json({
            message: "Data berhasil diupdate.",
            data: krono,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving data" ,
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
            message: "Data berhasil dihapus",
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
        const krono = await Krono.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Data berhasil ditampilkan dengan id=${id}.`,
            data: krono,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving data" ,
            data: null,
        });
    }
}

