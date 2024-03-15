import Boom from "@hapi/boom";
import { ProductoRepository } from "../repositories/ProductoRepositorio"


const repositorioProductos = new ProductoRepository();
export class ProductoService {
    async findProductos() {
        return repositorioProductos.findProducts();
    }
    async nuevoProducto(newProduct: AddProducto) {
        return repositorioProductos.crearProduct(newProduct);
    }
    async eliminarProducto(id_product: string) {
        const buscar = await repositorioProductos.findById(id_product);
        if (!!buscar) {
            repositorioProductos.borrarProducto(id_product);
        }
    }
}