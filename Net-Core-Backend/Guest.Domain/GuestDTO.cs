using System.ComponentModel.DataAnnotations;

namespace Guest.Domain { }

public class GuestDTO
{
    [Key]
    public int Id { get; set; }

    public string FirstName { get; set; }

    public string Surname { get; set; }

    [ConcurrencyCheck]
    public string Email{ get; set; }

    [ConcurrencyCheck]
    public string Mobile { get; set; }
}
