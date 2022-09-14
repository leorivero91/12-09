var Alumno = /** @class */ (function () {
    function Alumno(pnAlumno, pnotaAlumno) {
        this.nombAlumno = pnAlumno;
        this.notaAlumno = pnotaAlumno;
    }
    //El dato importante es la nota del alumno, para saber si aprueba o desaprueba.
    //Alumnos
    Alumno.prototype.getNombre = function () {
        return this.nombAlumno;
    };
    Alumno.prototype.matricularAlumno = function () {
        return this.nombAlumno;
    };
    Alumno.prototype.expulsarAlumno = function () {
        return this.nombAlumno;
    };
    Alumno.prototype.getNota = function () {
        return this.notaAlumno;
    };
    Alumno.prototype.obtenAprobadoDesaprobado = function () {
        if (this.notaAlumno >= 7) {
            var aprobado = "Aprobó";
            return aprobado;
        }
        else {
            var aprobado = "Desaprobó";
            return aprobado;
        }
    };
    return Alumno;
}());
//Maestros
var Maestro = /** @class */ (function () {
    function Maestro(pnMaestro, pSituacion) {
        this.nombMaestro = pnMaestro;
        this.situacion = pSituacion;
    }
    Maestro.prototype.getNombre = function () {
        return this.nombMaestro;
    };
    Maestro.prototype.getSituacion = function () {
        if (this.situacion === "Despedido") {
            var situacion = "Contratado";
            return situacion;
        }
        else {
            var situacion = "Despedido";
            return situacion;
        }
    };
    return Maestro;
}());
var alumno1 = new Alumno("Julian Alvarez", 9);
var alumno2 = new Alumno("Juan Perez", 4);
var alumno3 = new Alumno("Pedro Martin", 7);
var maestro1 = new Maestro("Felipe Pigna", "Contratado");
var maestro2 = new Maestro("Manuel Belgrano", 'Despedido');
var arregloAlumnos = [alumno1, alumno2, alumno3];
var arregloMaestros = [maestro1, maestro2];
console.log("Alumno ", arregloAlumnos[0].getNombre(), arregloAlumnos[0].getNota(), arregloAlumnos[0].obtenAprobadoDesaprobado());
console.log("Maestro ", arregloMaestros[0].getNombre(), arregloMaestros[0].getSituacion());
