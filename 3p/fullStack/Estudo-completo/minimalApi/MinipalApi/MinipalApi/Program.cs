using Microsoft.EntityFrameworkCore;
using MinipalApi.Context;
using MinipalApi.Models;

var builder = WebApplication.CreateBuilder(args);
// Habilita o cors aceitar requisição da porta 3000

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder => builder
        .WithOrigins("http://localhost:3000") // Substitua pela origem do seu aplicativo frontend
        .AllowAnyHeader()
        .AllowAnyMethod()
    );
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options => options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors();
}

app.UseHttpsRedirection();






app.MapGet("/produtos", (AppDbContext db) =>
{


    return db.Produtos.ToList();
});

app.MapGet("/produtos/{id:int}", (AppDbContext db, int id) =>
{
    var obj = db.Produtos?.FirstOrDefault(x => x.Id == id);
    if(obj == null)
    {
        return Results.NotFound("Não encontrado");
    }

   return Results.Ok(obj);
});
app.MapPost("/produtos", (AppDbContext db, Produto produto) =>
{

    db.Produtos.Add(produto);
    db.SaveChanges();

    return Results.Created($"/produtos/{produto.Id}",produto);
});


app.Run();

