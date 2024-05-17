using Dapper;
using Microsoft.Data.Sqlite;

using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
{
    conexao.Open();

    var obj = new Contato
    {
        Id = "5",
        Nome = "Zé",
        Email = "ze@email.com"
    };

    // const string sql =  "INSERT INTO contato" + 
    //                     " (id, nome, email)" + 
    //                     " VALUES (@Id, @Nome, @Email)";


    // const string sql = "UPDATE contato" +
    //                     " SET nome =@Nome, email=@Email" +
    //                     "WHERE id =@Id";

    // conexao.Execute(sql, obj);
    const string sql = " SELECT * from contato ORDER BY nome";
    var objetos = conexao.Query<Contato>(sql);


    foreach (var obj in objetos)
    {
        Console.WriteLine(obj.Nome+" - "+obj.Email);
    }
}


/*
var obj = new Contato
{
    Id = "5",
    Nome = "Zé",
    Email = "ze@email.com"
};

//Reflection

var tipo = obj.GetType();
Console.WriteLine(tipo.FullName);

foreach (var prop in tipo.GetProperties())
{
    Console.WriteLine($"{prop.Name}: {prop.GetValue(obj)}");
}
*/

/*
var prop = tipo.GetProperty("Id");

if (prop != null)
{
    Console.WriteLine($"{prop.Name}: {prop.GetValue(obj)}");
}
*/


/*
using(var conexao = new SqliteConnection("Data Source=db/dados.db"))
{
    conexao.Open();

    var obj = new Contato
    {
        Id = "5",
        Nome = "Zé",
        Email = "ze@email.com"
    };

    const string sql =  "INSERT INTO contato" + 
                        " (id, nome, email)" + 
                        " VALUES (@Id, @Nome, @Email)";
    
    conexao.Execute(sql, obj);
}
*/























/*
using(var conexao = new SqliteConnection("Data Source=db/dados.db"))
{
    conexao.Open();

    var cmd = conexao.CreateCommand();
    
    cmd.CommandText = "INSERT INTO contato" + 
                      " (id, nome, email)" + 
                      " VALUES (@id, @nome, @email)";
    cmd.CommandText = "UPDATE contato" + 
        " SET nome=@nome, email=@email WHERE id=@id";
    cmd.CommandText = "DELETE FROM contato WHERE id=@id";
    cmd.Parameters.AddWithValue("@id", 4);
    cmd.Parameters.AddWithValue("@nome", "Daniel da Silva");
    cmd.Parameters.AddWithValue("@email", 
                               "daniel@email.com");
    cmd.ExecuteNonQuery();
}
*/