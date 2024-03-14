import {DataSource} from 'typeorm';
import { envVariables } from '../utilities/envVariable';
import { Product } from './models/Product';


export const AppDataSource = new DataSource({
    type:'postgres',
    url:envVariables.url_database,
    entities:[Product],
    synchronize:true
})