class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
        this.nombrePropietario = nombrePropietario;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    get datosPropietario() {
        return `El nombre del dueño es: ${this.nombrePropietario}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}.`;
    }
}

class Animal extends Propietario {
    constructor(nombrePropietario, direccion, telefono, tipo) {
        super(nombrePropietario, direccion, telefono);
        this.tipo = tipo;
    }
    get tipoAnimal() {
        return `El tipo de animal es un: ${this.tipo},`;
    }
}

class Mascota extends Animal {
    constructor(
        nombrePropietario,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad
    ) {
        super(nombrePropietario, direccion, telefono, tipo);
        this.nombreMascota = nombreMascota;
        this.enfermedad = enfermedad;
    }
    get getNombreMascota() {
        return `mientras que el nombre de la mascota es:: ${this.nombreMascota},`;
    }

    set setNombreMascota(nombreNuevo) {
        this._nombreMascota = nombreNuevo;
    }
    get getEnfermedad() {
        return `y la enfermedad es: ${this.enfermedad}.`;
    }
    set setEnfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }
}

$(document).ready(function () {
    $('#formulario-datos').on('submit', (event) => {
        event.preventDefault();

        let nombrePropietario = $('#propietario').val();
        let direccion = $('#direccion').val();
        let telefono = $('#telefono').val();
        let tipo = $('#tipo').val();
        let nombreMascota = $('#nombreMascota').val();
        let enfermedad = $('#enfermedad').val();

        let mensaje = '';
        let mensaje2 = '';

        switch (tipo) {
            case 'gato':
                let gato = new Mascota(
                    nombrePropietario,
                    direccion,
                    telefono,
                    tipo,
                    nombreMascota,
                    enfermedad
                );
                mensaje = gato.datosPropietario;
                mensaje2 = gato.tipoAnimal + ' ' + gato.getEnfermedad;
                break;
            case 'perro':
                let perro = new Mascota(
                    nombrePropietario,
                    direccion,
                    telefono,
                    tipo,
                    nombreMascota,
                    enfermedad
                );
                mensaje = perro.datosPropietario;
                mensaje2 = perro.tipoAnimal + ' ' + perro.getEnfermedad;
                break;
            case 'conejo':
                let conejo = new Mascota(
                    nombrePropietario,
                    direccion,
                    telefono,
                    tipo,
                    nombreMascota,
                    enfermedad
                );
                mensaje = conejo.datosPropietario;
                mensaje2 = conejo.tipoAnimal + ' ' + conejo.getEnfermedad;
                break;
        }

        $('#resultado').html(`<p>${mensaje}</p>  <p>${mensaje2}</p>`);
    });
});