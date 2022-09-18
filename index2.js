var Televisor = /** @class */ (function () {
    function Televisor(paramPrendido, paramCanal, paramVolumen, paramDecodificador) {
        this.estaPrendido = paramPrendido;
        this.canalActual = paramCanal;
        this.volumenActual = paramVolumen;
        this.decodificador = paramDecodificador;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Televisor.prototype.subirCanal = function () {
        this.canalActual = this.canalActual++;
    };
    Televisor.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual--;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual++;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual--;
    };
    return Televisor;
}());
var Decodificador = /** @class */ (function () {
    function Decodificador(paramMarca) {
        this.marca = paramMarca;
    }
    return Decodificador;
}());
var deco1 = new Decodificador("Zenith");
var deco2 = new Decodificador("Aris");
var televisor1 = new Televisor(true, 14, 10, deco1);
console.log(televisor1);
