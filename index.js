var Alumno = /** @class */ (function () {
    function Alumno(pnombreAlumno, pApAlumno, pnotaAlumno) {
        this.nombreAlumno = pnombreAlumno;
        this.apAlumno = pApAlumno;
        this.notaAlumno = pnotaAlumno;
    }
    //El dato importante es la nota del alumno, para saber si aprueba o desaprueba.
    //Alumnos
    Alumno.prototype.getNombre = function () {
        return this.nombreAlumno;
    };
    Alumno.prototype.setNombre = function (pnombreAlumno) {
        this.nombreAlumno = pnombreAlumno;
    };
    Alumno.prototype.getApellido = function () {
        return this.apAlumno;
    };
    Alumno.prototype.setApellido = function (pApellido) {
        this.apAlumno = pApellido;
    };
    Alumno.prototype.getNota = function () {
        if (this.notaAlumno >= 7) {
            return "Aprobado";
        }
        else {
            return "Desaprobado";
        }
    };
    return Alumno;
}());
//Maestros
var Maestro = /** @class */ (function () {
    function Maestro(pnombMaestro, papMaestro, plistaDeAlumnos) {
        this.nombMaestro = pnombMaestro;
        this.apMaestro = papMaestro;
        this.listaDeAlumnos = plistaDeAlumnos;
    }
    Maestro.prototype.getNombre = function () {
        return this.nombMaestro;
    };
    Maestro.prototype.getApellido = function () {
        return this.apMaestro;
    };
    return Maestro;
}());
var Escuela = /** @class */ (function () {
    function Escuela(pNombre, pListadoAlumnos, pListadoMaestros) {
        this.nombreEscuela = pNombre;
        this.listadoAlumnos = pListadoAlumnos;
        this.listadoMaestros = pListadoMaestros;
    }
    Escuela.prototype.getNombreEscuela = function () {
        return this.nombreEscuela;
    };
    Escuela.prototype.setNombreEscuela = function (pNombre) {
        this.nombreEscuela = pNombre;
    };
    Escuela.prototype.contrataMaestro = function (pMaestro) {
        this.listadoMaestros.push(pMaestro);
        console.log("Maestro Contratado");
    };
    Escuela.prototype.despedirMaestro = function (pMaestro) {
        for (var i = 0; i < this.listadoMaestros.length; i++) {
            if (pMaestro.getApellido() === this.listadoMaestros[i].getApellido()) {
                this.listadoMaestros.splice(i, 1);
                console.log("Maestro Despedido" + pMaestro.getApellido);
            }
            else {
                console.log("no se encontró el maestro");
            }
        }
    };
    Escuela.prototype.matricularAlumno = function (pAlumno) {
        this.listadoAlumnos.push(pAlumno);
    };
    Escuela.prototype.expulsarAlumno = function (pAlumno) {
        for (var i = 0; i < this.listadoAlumnos.length; i++) {
            if (pAlumno.getApellido() === this.listadoAlumnos[i].getApellido())
                this.listadoAlumnos.splice(i, 1);
        }
    };
    return Escuela;
}());
var alumnoA = new Alumno("Juan", "Salvo", 4);
var alumnoB = new Alumno("Jose", "Perez", 7);
var alumnoC = new Alumno("Julian", "Alvarez", 9);
var listadoAl = [alumnoA, alumnoB, alumnoC];
var docenteD = new Maestro("Daniel", "Listorti", listadoAl);
var docenteF = new Maestro("Rene", "Lagart", listadoAl);
var docenteJ = new Maestro("Felipe", "Pigna", listadoAl);
var listadoDocentes = [docenteD, docenteF, docenteJ];
var EscuelaPrimaria = new Escuela("Escuela 2", listadoAl, listadoDocentes);
EscuelaPrimaria.matricularAlumno(alumnoA);
EscuelaPrimaria.contrataMaestro(docenteJ);
EscuelaPrimaria.expulsarAlumno(alumnoB);
console.log("Alumno ", listadoAl[0].getNombre(), listadoAl[0].getApellido(), listadoAl[0].getNota());
console.log("Alumno ", listadoAl[2].getNombre(), listadoAl[2].getApellido(), listadoAl[2].getNota());
console.log("Maestro ", listadoDocentes[0].getNombre(), listadoDocentes[0].getApellido());
console.log(listadoAl, listadoDocentes);
