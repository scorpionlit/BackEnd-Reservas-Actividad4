const CrearReserva = require('../use_cases/CrearReserva');
const ReservaService = require('../../core/services/ReservaService');
const reservaRepo = require('../../infrastructure/database/models/Reserva');

const crearReserva = async (req, res) => {
    const crearReservaCaso = new CrearReserva(reservaRepo, new ReservaService());
    try {
        const reserva = await crearReservaCaso.execute(req.body);
        res.status(201).json(reserva);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { crearReserva };
