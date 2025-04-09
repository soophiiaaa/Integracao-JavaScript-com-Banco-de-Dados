const mysql = require('mysql2')

function connectionFunc() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'pass',
        database: 'db'
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
    return connection
} //conexão com o banco de dados

module.exports = connectionFunc
