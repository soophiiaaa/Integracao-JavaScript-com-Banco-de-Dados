### 📁 Projeto: Integração JS com Banco de Dados

Este repositório demonstra como realizar a conexão entre JavaScript (Node.js) e um banco de dados MySQL, utilizando o pacote `mysql2`.

## Objetivo

O principal objetivo deste projeto é entender mais sobre a integração do banco de dados com javascript. A proposta foi sugerida pelo **Professor Ricardo Rubens**, do **Instituto Federal de Alagoas - Campus Maceió**, como parte da matéria de **Programação Orientada a Objetos (POO)**.

#### 📂 Estrutura:
- `database/database.js` → Arquivo responsável por abrir a conexão com o banco
- `setup/setup.js` → Criação da tabela de produtos
- `insert/insert.js` → Criação da tabela de produtos
- `select/select.js` → Seleção e exibição de produtos com ou sem filtros

#### 🧪 Exemplos de uso:
```bash
node createTable.js    # Cria a tabela Products
node select.js         # Lista todos os produtos
```

---