class Alumno{
    private nombAlumno : string;
    private notaAlumno : number;

    constructor (pnAlumno:string,pnotaAlumno: number){
        this.nombAlumno = pnAlumno;
        this.notaAlumno = pnotaAlumno;    
     }
//El dato importante es la nota del alumno, para saber si aprueba o desaprueba.
    //Alumnos
    public getNombre():string{
        return this.nombAlumno;
    }
    public matricularAlumno(){
        return this.nombAlumno;
    }
    public expulsarAlumno(){
        return this.nombAlumno;
    }
    public getNota():number{
        return this.notaAlumno;
    }
    public obtenAprobadoDesaprobado(){
        if(this.notaAlumno >= 7) {
            let aprobado : string = "Aprobó";
            return aprobado
        }else{
            let aprobado : string = "Desaprobó";
            return aprobado
        }
    }
}
        
    //Maestros
    class Maestro{
        private nombMaestro : string;
        private situacion : string;
    
        constructor (pnMaestro:string,pSituacion: string){
           this.nombMaestro = pnMaestro;
           this.situacion = pSituacion;    
        }
        public getNombre():string{
            return this.nombMaestro;  
        }  

        public getSituacion() {
            if (this.situacion === "Despedido"){
                let situacion: string  = "Contratado";
                return situacion
            }else{ 
                let situacion: string  = "Despedido";
                return situacion;
            }
        }
    }
       
  let alumno1 : Alumno = new Alumno("Julian Alvarez",9);
  let alumno2 : Alumno = new Alumno("Juan Perez",4);
  let alumno3 : Alumno = new Alumno("Pedro Martin",7);

  let maestro1 : Maestro = new Maestro("Felipe Pigna","Contratado");
  let maestro2 : Maestro = new Maestro("Manuel Belgrano",'Despedido');

  let arregloAlumnos : Alumno [] = [alumno1,alumno2,alumno3];
  let arregloMaestros : Maestro [] = [maestro1,maestro2];

  console.log("Alumno ",arregloAlumnos[0].getNombre(), arregloAlumnos[0].getNota(),arregloAlumnos[0].obtenAprobadoDesaprobado());
  console.log("Maestro ",arregloMaestros[0].getNombre(), arregloMaestros[0].getSituacion());
 