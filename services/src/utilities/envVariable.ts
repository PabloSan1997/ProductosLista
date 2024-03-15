import 'dotenv/config';

export const envVariables = {
    url_database: process.env.URL_DATABASE,
    port: process.env.PORT || 3010,
    mode_dev:process.env.MODE_DEV == 'dev'
}