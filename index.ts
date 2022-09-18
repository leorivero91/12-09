class Alumno{
    private nombreAlumno : string;
    private apAlumno: string;
    private notaAlumno : number;

    constructor (pnombreAlumno:string,pApAlumno: string, pnotaAlumno: number){
        this.nombreAlumno = pnombreAlumno;
        this.apAlumno = pApAlumno;
        this.notaAlumno = pnotaAlumno;    
     }
//El dato importante es la nota del alumno, para saber si aprueba o desaprueba.
    //Alumnos
    public getNombre():string{
        return this.nombreAlumno;
    }
    public setNombre(pnombreAlumno):void{
        this.nombreAlumno = pnombreAlumno;
    }
    public getApellido():string{
        return this.apAlumno;
    }
    public setApellido(pApellido):void{
        this.apAlumno = pApellido;
    }
    public getNota():string{
        if(this.notaAlumno >= 7) {
            return "Aprobado";
        }else{
            return "Desaprobado";
        }
    }
}

//Maestros
    class Maestro{
        private nombMaestro : string;
        private apMaestro: string;
        private listaDeAlumnos : Alumno[];
    
        constructor (pnombMaestro:string,papMaestro: string,plistaDeAlumnos : Alumno[]) {
           this.nombMaestro = pnombMaestro;
           this.apMaestro = papMaestro; 
           this.listaDeAlumnos= plistaDeAlumnos;
        }
        public getNombre():string{
            return this.nombMaestro;  
        }  
        public getApellido():string{
            return this.apMaestro;
        }
    }

    class Escuela{
        private nombreEscuela :string;
        private listadoAlumnos: Alumno[];
        private listadoMaestros: Maestro[];

        constructor(pNombre:string,pListadoAlumnos:Alumno[],pListadoMaestros: Maestro[]){
            this.nombreEscuela= pNombre;
            this.listadoAlumnos= pListadoAlumnos;
            this.listadoMaestros = pListadoMaestros;
        }

        public getNombreEscuela():string{
            return this.nombreEscuela;
        }
        public setNombreEscuela(pNombre):void{
            this.nombreEscuela=pNombre;
        }
        public contrataMaestro(pMaestro:Maestro):void{
            this.listadoMaestros.push(pMaestro);
            console.log("Maestro Contratado");
        }
        public despedirMaestro(pMaestro:Maestro):void{
            for(let i:number=0;i<this.listadoMaestros.length;i++){
                if(pMaestro.getApellido() === this.listadoMaestros[i].getApellido()){
                    this.listadoMaestros.splice(i,1);
                    console.log("Maestro Despedido" + pMaestro.getApellido);
                }else{
                    console.log("no se encontró el maestro");
                }
            }

        }

        public matricularAlumno(pAlumno:Alumno):void{
            this.listadoAlumnos.push(pAlumno);
        }
        public expulsarAlumno(pAlumno:Alumno):void{
            for(let i:number=0;i<this.listadoAlumnos.length;i++){
                if(pAlumno.getApellido()===this.listadoAlumnos[i].getApellido())
                this.listadoAlumnos.splice(i,1);
            }
        }

    }
    let alumnoA = new Alumno("Juan","Salvo",4,);
    let alumnoB = new Alumno("Jose","Perez",7);
    let alumnoC = new Alumno("Julian","Alvarez",9);

    let listadoAl:Alumno[] = [alumnoA,alumnoB,alumnoC];

    let docenteD = new Maestro("Daniel", "Listorti", listadoAl);
    let docenteF= new Maestro("Rene","Lagart", listadoAl);
    let docenteJ= new Maestro("Felipe","Pigna",listadoAl);

    let listadoDocentes :Maestro[] = [docenteD,docenteF,docenteJ];

    let EscuelaPrimaria:Escuela= new Escuela("Escuela 2", listadoAl, listadoDocentes);

EscuelaPrimaria.matricularAlumno(alumnoA);
EscuelaPrimaria.contrataMaestro(docenteJ);
EscuelaPrimaria.expulsarAlumno(alumnoB);

console.log("Alumno ",listadoAl[0].getNombre(),listadoAl[0].getApellido(), listadoAl[0].getNota());
console.log("Alumno ",listadoAl[2].getNombre(),listadoAl[2].getApellido(), listadoAl[2].getNota());
console.log("Maestro ",listadoDocentes[0].getNombre(), listadoDocentes[0].getApellido());
console.log(listadoAl,listadoDocentes);
