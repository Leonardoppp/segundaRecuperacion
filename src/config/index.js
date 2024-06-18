import {config} from "dotenv";
config();
export default {
    app:{
        port: process.env.PORT,
    },
    mysql:{
    db: process.env.MYSQL_ADDON_DB,
    host: process.env.MYSQL_ADDON_HOST,
    password: process.env.MYSQL_ADDON_PASSWORD,
    user: process.env.MYSQL_ADDON_USER,

    }

    
}