import { AppDataSource } from "../db/config";
import { Miembro } from "../db/models/Miembro";


export class MiembroRepositorio{
    private repositorio = AppDataSource.getRepository(Miembro);

    async findOneMiembro(id_miembro:string){
        return this.repositorio.findOne({where:{id:id_miembro}});
    }
    async leerMiembros(){
        return this.repositorio.find();
    }
    async agregarMiembro(newMiembro:AddMiembro){
        const miembro = this.repositorio.create(newMiembro);
        await this.repositorio.save(miembro);
        return miembro;
    }
    async eliminarMiembro(id_miembro:string){
        this.repositorio.delete({id:id_miembro});
    }
}