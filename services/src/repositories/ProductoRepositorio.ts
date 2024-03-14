import { Repository } from "typeorm";
import { AppDataSource } from "../db/config";
import { Product } from "../db/models/Product";


export class ProductoRepository{
    private product:Repository<Product> = AppDataSource.getRepository(Product)
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
}