using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using aula_5.models;
using Dapper;
using Microsoft.Data.Sqlite;

namespace aula_5.daos
{
    public class ContatoDao
    {

        public void Inserir(Contato obj)
        {
            using (var conexao = new SqliteConnection("Data Source=db/app.db"))
            {

                conexao.Open();

                const string sql = "INSERT INTO table1" +
                        " (id, nome, email)" +
                        " VALUES (@Id, @Nome, @Email)";
                conexao.Execute(sql, obj);
                // throw new NotImplementedException();
            }
        }
        public void Alterar(Contato obj)
        {
            using (var conexao = new SqliteConnection("Data Source=db/app.db"))
            {
                conexao.Open();
                const string sql = "UPDATE table1" +
                            " SET nome =@Nome, email=@Email" +
                            " WHERE id =@Id";
                conexao.Execute(sql, obj);
            }
            // throw new NotImplementedException();

        }
        public void Excluir(string idContato)
        {
            using (var conexao = new SqliteConnection("Data Source=db/app.db"))
            {
                conexao.Open();
                const string sql = "DELETE from table1" +
                            " WHERE id = @Id";
                conexao.Execute(sql, new { Id = idContato });
            }

        }
        public IList<Contato> RretornarTodos()
        {
            throw new NotImplementedException();
        }
        public Contato RetornarPorId(string id)
        {
            throw new NotImplementedException();

        }

    }
}