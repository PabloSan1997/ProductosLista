import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Cantidad } from './Cantidad';


@Entity()
export class Miembro{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length:100})
    nombre: string;

    @Column({ type: 'float', default:0 })
    total: number;

    @Column({ type: 'integer', default:0 })
    puntos: number;

    @OneToMany(()=>Cantidad, cantidad=>cantidad.miembro)
    cantidad:Cantidad[];
}