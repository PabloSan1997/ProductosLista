interface ProductosInterface {
    id: string;
    nombre: string;
    precio: number;
    puntos: number;
}

interface AddProducto {
    nombre: string;
    precio: number;
    puntos: number;
}

interface MiembrosInterface {
    id: string;
    nombre: number;
    total: number;
    puntos: number;
}

interface AddMiembro {
    nombre: number;
    total: number;
    puntos: number;
}

interface CantidadInterface {
    id: string;
    cantidad: number;
    precio: number;
    puntos: number;
    cuenta: string;
}

interface AddCantidad{
    cantidad: number;
    idMiembro:string;
    idProducto:string;
}

interface EditarCantidad{
    cantidad: number;
}
