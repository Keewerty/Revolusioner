module.exports = (sequelize, Sequelize) => {
    const Materi = sequelize.define('materi', {
        judul: {
            type: Sequelize.STRING,
        },
        gambar: {
            type: Sequelize.BLOB,
        },
        isi: {
            type: Sequelize.TEXT,
        },
    });
    return Materi;
    
    }