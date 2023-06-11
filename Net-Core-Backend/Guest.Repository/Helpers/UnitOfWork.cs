namespace Guest.Repository.Helpers;

using System;
using Guest.Domain.Helpers;
using System.Threading.Tasks;

public class UnitOfWork : IUnitOfWork
{
    private readonly DataContext _context;

    public IGuestRepository Guest { get; }

    public UnitOfWork(DataContext dataContext,
        IGuestRepository _Guest)
    {
        _context = dataContext;
        Guest = _Guest;
    }

    public async Task<int> Complete()
    {
        return await _context.SaveChangesAsync();
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (disposing)
        {
            _context.Dispose();
        }
    }
}