const db = require("../models");
const Hero = db.pahlawan;

exports.create = async (req, res) => {

    try{
        const data = await Hero.create(req.body)
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
        const pahlawan = await Hero.findAll()
        res.json({
            message: "Data berhasil ditampilkan",
            data: pahlawan,
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
        const hero = await Hero.findByPk(id, {rejectOnEmpty: true})
        hero.update(req.body,{
            where: {id}
        })
        res.json({
            message: "Data berhasil diupdate.",
            data: hero,
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
        const hero = await Hero.findByPk(id, {rejectOnEmpty: true})
        krono.destroy()
        res.json({
            message: "Data berhasil dihapus",
            data: hero,
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
        const hero = await Hero.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Data berhasil ditampilkan dengan id=${id}.`,
            data: hero,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving data" ,
            data: null,
        });
    }
}

