module.exports = (sequelize, Sequelize) => {
    const Materi = sequelize.define('materi', {
        judul: {
            type: Sequelize.STRING,
        },
        gambar: {
            type: Sequelize.STRING,
        },
        isi: {
            type: Sequelize.TEXT,
        },
    });
    return Materi;
    
    }