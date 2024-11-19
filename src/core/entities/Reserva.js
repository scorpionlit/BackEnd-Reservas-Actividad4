class Reserva {
    constructor(id, usuarioId, recursoId, fecha, estado) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.recursoId = recursoId;
        this.fecha = fecha;
        this.estado = estado; // 'pendiente', 'confirmada', 'cancelada'
    }
}

module.exports = Reserva;
