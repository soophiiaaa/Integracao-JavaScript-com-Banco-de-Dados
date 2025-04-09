const open_connection = require('../database/database')

function insertTable(con) {
    let sqlInsert = `INSERT INTO Products(id, nome, preco)
                     VALUES(14, 'maçã', 6.5);
                    `
    con.query(sqlInsert, function (err, results, fields) {
        if (err) {
            console.error(`erro ao inserir dados na tabela: ${err}`)
            return
        }
        console.log(`dados inseridos com sucesso!`)
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
insertTable(connection)