class CrearReserva {
    constructor(reservaRepo, reservaService) {
        this.reservaRepo = reservaRepo; // Repositorio para acceso a datos
        this.reservaService = reservaService; // Servicio de validación
    }

    async execute(data) {
        this.reservaService.validarFecha(data.fecha); // Validación
        return await this.reservaRepo.crear(data); // Crear reserva
    }
}

module.exports = CrearReserva;
