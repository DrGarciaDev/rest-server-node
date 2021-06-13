const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CONEXION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Base de datos MONGO DB online');
    } catch (error) {
        console.log(error);
        throw new Error('Falló la conexión con la base de datos');
    }
}

module.exports = {
    dbConnection
}