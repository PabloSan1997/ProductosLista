import {DataSource} from 'typeorm';
import { envVariables } from '../utilities/envVariable';
import { Producto } from './models/Product';
import { Miembro } from './models/Miembro';
import { Cantidad } from './models/Cantidad';


export const AppDataSource = new DataSource({
    type:'postgres',
    url:envVariables.url_database,
    entities:[Producto, Miembro, Cantidad],
    synchronize:true
})