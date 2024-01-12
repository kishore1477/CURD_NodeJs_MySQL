import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config(); 

const dbData = {
    host: process.env.host,
    user: process.env.username,
    password:process.env.password,
    database: process.env.Database,
    port:process.env.port
}
console.log("dbData", dbData)
const db = mysql.createConnection(dbData
);


export default  db;
