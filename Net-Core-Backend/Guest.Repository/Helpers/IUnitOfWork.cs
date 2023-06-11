namespace Guest.Repository.Helpers;

public interface IUnitOfWork
{
    IGuestRepository Guest { get; }
    Task<int> Complete();

}
