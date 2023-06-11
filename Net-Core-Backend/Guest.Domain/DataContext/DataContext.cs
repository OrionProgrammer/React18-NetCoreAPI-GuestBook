namespace Guest.Domain.Helpers;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

public class DataContext : DbContext
{
    protected readonly IConfigurationRoot configuration;

    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
        configuration = new ConfigurationBuilder()
        .SetBasePath(System.AppDomain.CurrentDomain.BaseDirectory)
        .AddJsonFile("appsettings.json")
        .Build();
    }
    protected override void OnConfiguring(DbContextOptionsBuilder options)
    => options.UseSqlServer(configuration.GetConnectionString("Database"));

    public DbSet<GuestDTO> Guest{ get; set; }

}

