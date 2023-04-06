const db = require("../models");
const Quiz = db.quizzes;

exports.create = async (req, res) => {

    try{
        const data = await Quiz.create(req.body)
        res.json({
            message: "Quizberhasil ditambahkan",
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
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quiz berhasil ditampilkan",
            data: quizzes,
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
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        quiz.update(req.body,{
            where: {id}
        })
        res.json({
            message: "Quiz berhasil diupdate.",
            data: quiz,
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
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        quiz.destroy()
        res.json({
            message: "Quiz berhasil dihapus",
            data: quiz,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving quiz" ,
            data: null,
        });
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Quiz berhasil ditampilkan dengan id=${id}.`,
            data: quiz,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving quiz" ,
            data: null,
        });
    }
}

exports.getByCategoryId = async (req, res) => {

    const id=req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            categoryId : id
        }
    })
    res.json({
        message: `Quizzes retrieved succesfully with categoryId=${id}.`,
        data: quizzes,
    });

}
