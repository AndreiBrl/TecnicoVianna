using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using aula_5.models;
using Dapper;
using Microsoft.Data.Sqlite;

namespace aula_5.daos
{
    public class BaseDAO<T> where T : BaseModel
    {
        string NomeTabela ="";
        public void Inserir(T obj)
        {
            using (var conexao = new SqliteConnection("Data Source=db/app.db"))
            {

                conexao.Open();

                 string sql = $"INSERT INTO {NomeTabela}" +
                        " (id, nome, email)" +
                        " VALUES (@Id, @Nome, @Email)";
                conexao.Execute(sql, obj);
                // throw new NotImplementedException();
            }
        }
        public void Alterar(T obj)
        {
            using (var conexao = new SqliteConnection("Data Source=db/app.db"))
            {
                conexao.Open();
                 string sql = $"UPDATE {NomeTabela}" +
                            " SET nome =@Nome, email=@Email" +
                            " WHERE id =@Id";
                conexao.Execute(sql, obj);
            }
            // throw new NotImplementedException();

        }
        public void Excluir(string id)
        {
            using (var conexao = new SqliteConnection("Data Source=db/app.db"))
            {
                conexao.Open();
                const string sql = "DELETE from table1" +
                            " WHERE id = @Id";
                conexao.Execute(sql, new { Id = id });
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