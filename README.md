Para rodar o projeto e: npm run dev

para rodar o sequelize para criar o banco: npx sequelize db:create

depois de criado rode as migrations: npx sequelize db:migrate{
    aqui j´avai criar todas as tabelas
}

se você quiser criar outra migration: npx sequelize migration:create --name=add-age-field-to-(nome da tanela)

fiz o relacionamento de um endereço pertence a um usuario (belongsTo)