module.exports = (sequelize, Sequelize) => {
    const Hero = sequelize.define('pahlawan', {
        nama: {
            type: Sequelize.STRING,
        },
        gambar: {
            type: Sequelize.BLOB,
        },
        biografi: {
            type: Sequelize.TEXT,
        },
    });
    return Hero;
    
    }