import mysql from 'mysql2/promise';
import config from "../config";

const pool = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.db,
})

export default pool;