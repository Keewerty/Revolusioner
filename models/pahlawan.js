module.exports = (sequelize, Sequelize) => {
    const Hero = sequelize.define('pahlawan', {
        nama: {
            type: Sequelize.STRING,
        },
        gambar: {
            type: Sequelize.STRING,
        },
        biografi: {
            type: Sequelize.TEXT,
        },
    });
    return Hero;
    
    }