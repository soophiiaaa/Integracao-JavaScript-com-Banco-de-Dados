const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'slbms20070511',
    database: 'sakila'
}) //configuração padrão do database, adapte de acordo com suas necessidades

connection.connect(
    function (err) {
        if (err) {
            console.error(`erro de conexão com banco de dados ${err.stack}`)
            return 
        }
        console.log(`conexão bem-sucedida! ${connection.threadId}`)
    }
)