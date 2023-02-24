module.exports = (sequelize, Sequelize) => {
    const Krono = sequelize.define('kronologi', {
        judul: {
            type: Sequelize.STRING,
        },
        image: {
            type: Sequelize.STRING,
        },
        konten: {
            type: Sequelize.TEXT,
        },
    });
    return Krono;
    
    }