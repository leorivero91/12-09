class Televisor{
 private estaPrendido : boolean;
 private canalActual : number;
 private volumenActual : number;
 private decodificador: Decodificador;

 public constructor(paramPrendido:boolean, paramCanal:number, paramVolumen:number,paramDecodificador:Decodificador){
    this.estaPrendido = paramPrendido;
    this.canalActual = paramCanal;
    this.volumenActual = paramVolumen;
    this.decodificador = paramDecodificador;
 }
 public prenderApagar():void{
    if(this.estaPrendido===true){
    this.estaPrendido = false;
}else {
    this.estaPrendido = true
}
 }
 public subirCanal():void{
    this.canalActual= this.canalActual++
 }
 public bajarCanal():void{
    this.canalActual = this.canalActual--
 }
 public subirVolumen():void{
    this.volumenActual=this.volumenActual++
 }
 public bajarVolumen():void{
    this.volumenActual = this.volumenActual--
 }

} 

class Decodificador{
   private marca : string;

   public constructor(paramMarca:string){
    this.marca =paramMarca;
   }

}

let deco1 = new Decodificador("Zenith");
let deco2 = new Decodificador("Aris");
let televisor1 = new Televisor(true,14,10,deco1);

console.log(televisor1);
