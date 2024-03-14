import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ length: 200 })
    nombre: string;

    @Column({ type: 'numeric', precision: 8, scale: 2 })
    precio: number;

    @Column({ type: 'integer' })
    puntos: number;
}