import { AppDataSource } from "../db/config";
import { Producto } from "../db/models/Product";


export class ProductoRepository{
    private product= AppDataSource.getRepository(Producto)
    async findProducts(){
        return this.product.find();
    }
    async findById(id_product:string){
        return this.product.findOne({where:{id:id_product}});
    }
    async crearProduct(newProduct:AddProducto){
        const producto = this.product.create(newProduct);
        await this.product.save(producto);
        return producto;
    }

    async borrarProducto(id_product:string){
        this.product.delete({id:id_product});
    }
}