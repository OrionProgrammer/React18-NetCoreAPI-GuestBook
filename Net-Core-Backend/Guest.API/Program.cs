using Guest.API.Middleware;
using Guest.Domain.Helpers;
using Guest.Repository.Helpers;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// add services and configure DI
{
    var services = builder.Services;
    var env = builder.Environment;

    services.AddDbContext<DataContext>();
    services.AddCors();

    services.AddControllers().AddJsonOptions(x =>
    {
        // serialize enums as strings in api responses. Will come in handy when we start working with Enums
        x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });

    services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
    services.AddSwaggerGen();
    services.AddEndpointsApiExplorer();

    // configure DI for application services
    services.AddScoped<IGuestRepository, GuestRepository>();
    services.AddScoped<IUnitOfWork, UnitOfWork>();
}

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(x => x.SwaggerEndpoint("/swagger/v1/swagger.json", "Guest List Book API"));
}

// global cors policy
app.UseCors(x => x
    .SetIsOriginAllowed(origin => true)
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials());

// global error handler
app.UseMiddleware<ExceptionHandler>();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
