using Microsoft.EntityFrameworkCore;
using MinipalApi.Models;

namespace MinipalApi.Context;



public class AppDbContext : DbContext
{
public AppDbContext(DbContextOptions options) : base(options)
{
}

    public DbSet<Produto> Produtos { get; set; }

}