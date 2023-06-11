using Guest.Domain.Helpers;
using Guest.Repository.Helpers;

namespace Guest.Repository { }

public class GuestRepository : GenericRepository<GuestDTO>, IGuestRepository
{
    public GuestRepository(DataContext context) : base(context) { }

}
