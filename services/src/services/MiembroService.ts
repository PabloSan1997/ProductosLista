import { MiembroRepositorio } from "../repositories/MiembroRepositorio";


const miembro = new MiembroRepositorio();
export class MiembroService{
    async readMiembro(){
        return miembro.leerMiembros();
    }
    async addMiembro(nuevoMiembro:AddMiembro){
        return miembro.agregarMiembro(nuevoMiembro);
    }
    async eliminarMiembro(id_miembro:string){
        const  buscar = await miembro.findOneMiembro(id_miembro);
        if(!!buscar){
            miembro.eliminarMiembro(buscar.id);
        }
    }
}