const express = require('express');
const bodyParser = require('body-parser');
const reservasRoutes = require('./infrastructure/routes/reservas');
const sequelize = require('./infrastructure/database/config');

const app = express();
app.use(bodyParser.json());

// Rutas
app.use('/api/reservas', reservasRoutes);

// Inicializar la base de datos
sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos sincronizada.');
});

// Servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
