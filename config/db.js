module.exports ={
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'us_kk4',
    dialect : 'mysql',
    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
}