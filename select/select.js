const open_connection = require('../database/database')

function selectTable(con) {
    let selectTable = `SELECT * FROM Products
                       WHERE preco >= 5
                      `
    con.query(selectTable, function (err, results, fields) {
        if (err) {
            console.error(`erro ao filtrar dados na tabela: ${err}`)
            return
        }
        console.log(`dados filtrados com sucesso!`)
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
selectTable(connection)
