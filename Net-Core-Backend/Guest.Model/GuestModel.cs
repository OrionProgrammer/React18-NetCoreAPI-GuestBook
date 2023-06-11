
using System.ComponentModel.DataAnnotations;

namespace Guest.Model { }

public class GuestModel
{

    public int Id { get; set; } = 0;

    [Required(ErrorMessage = "First Name is required!")]
    [StringLength(50, ErrorMessage = "First Name cannot be longer than 50 characters!")]
    public string FirstName { get; set; }

    [Required(ErrorMessage = "Surname is required!")]
    [StringLength(50, ErrorMessage = "Surname cannot be longer than 50 characters!")]
    public string Surname { get; set; }

    [Required(ErrorMessage = "Email is required!")]
    [StringLength(100, ErrorMessage = "Email cannot be longer than 100 characters!")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Mobile is required!")]
    [StringLength(15, ErrorMessage = "Mobile cannot be longer than 15 characters!")]
    public string Mobile { get; set; }
}