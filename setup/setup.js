const open_connection = require('../database/database')

function createTableProducts(con) {
    const sqlCreateTable = `CREATE TABLE IF NOT EXISTS Products (
                                id INT PRIMARY KEY AUTO_INCREMENT,
                                nome VARCHAR(100) NOT NULL,
                                preco DECIMAL(10,2) NOT NULL
                            );`

    con.query(sqlCreateTable, function (err, results, fields) {
        if (err) {
            console.error(`erro ao criar tabela: ${err}`)
            return
        }
        console.log(`tabela criada com sucesso!`)
    })

    con.end(function (err) {
        if (err) {
            console.error('erro ao encerrar conexão: ' + err.stack)
            return
        }
        console.log('conexão encerrada.')
    })
}

let connection = open_connection()
createTableProducts(connection)
