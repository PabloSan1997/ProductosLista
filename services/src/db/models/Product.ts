import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cantidad } from './Cantidad';

@Entity()
export class Producto {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ length: 200 })
    nombre: string;

    @Column({ type: 'float' })
    precio: number;

    @Column({ type: 'integer' })
    puntos: number;

    @OneToMany(()=>Cantidad, (cantidad)=>cantidad.producto)
    cantidad:Cantidad[];
}