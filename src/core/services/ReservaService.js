class ReservaService {
    validarFecha(fecha) {
        const ahora = new Date();
        if (new Date(fecha) < ahora) {
            throw new Error('La fecha de la reserva no puede ser en el pasado.');
        }
        return true;
    }
}

module.exports = ReservaService;
