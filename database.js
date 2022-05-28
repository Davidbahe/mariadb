const mariadb  = require('mariadb')

const pool = mariadb.createPool({
    host:'127.0.0.1',
    port:'3307',
    user:'root',
    password:'1234',
    database:'mydatabase'
}); 

async function getConnection(){
    try{
    const Connection = await pool.getConnection();
    return Connection;
    }catch(error){
        console.log(error);
    }
}

module.exports = {getConnection};

//metoth to order from highest to lowest a list of 10 numbers without sorting the list  

