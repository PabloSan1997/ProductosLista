import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { Miembro } from './Miembro';
import { Producto } from './Product';

@Entity()
export class Cantidad{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'integer'})
    cantidad: number;

    @Column({ type: 'float' })
    precio: number;

    @Column({type:'integer'})
    puntos: number;

    @Column({length:100})
    cuenta: string;

    @ManyToOne(()=>Miembro, miembro=>miembro.cantidad, {onDelete:'CASCADE'})
    @JoinColumn({name:'idMiembro'})
    miembro:Miembro;

    @ManyToOne(()=>Producto, producto => producto.cantidad, {onDelete:'CASCADE'})
    @JoinColumn({name:'idProducto'})
    producto:Producto;
}