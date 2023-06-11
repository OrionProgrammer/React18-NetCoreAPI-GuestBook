namespace Guest.Api.Controllers;

using System.Threading.Tasks;
using Guest.API.Helpers;
using Guest.Repository.Helpers;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

[Route("api/[controller]")]
[ApiController]
public class GuestController : BaseController
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public GuestController(IUnitOfWork unitOfWork,
        IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    //returns all guests in databasse
    [HttpGet]
    public async Task<IActionResult> Index()
    {
        var customerist = await _unitOfWork.Guest.GetAllAsync();
        await _unitOfWork.Complete();
        return Ok(customerist);
    }

    //adds a guest to the list
    [HttpPost()]
    public async Task<IActionResult> AddGuest([FromBody] GuestModel model)
    {
        #region Validation
        if (!ModelState.IsValid)
            return BadRequest(new { message = GetErrors() });
        #endregion

        var guest = _mapper.Map<GuestDTO>(model);

        // add guest object for inserting
        await _unitOfWork.Guest.InsertAsync(guest);
        int complete = await _unitOfWork.Complete();

        return Ok(complete);
    }

    //get guest by id
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        #region Validation
        if (id <= 0)
            return BadRequest(new { message = "Id must be greater than 0!" });
        #endregion

        //fetch customer by id
        var guest = await _unitOfWork.Guest.GetByIdAsync(id);
        await _unitOfWork.Complete();

        if (guest == null)
            return BadRequest(new { message = "Guest does not exist!" });

        var guestModel = _mapper.Map<GuestDTO>(guest);

        return Ok(guestModel);
    }

    //update guest
    [HttpPut()]
    public async Task<IActionResult> UpdateCustomer([FromBody] GuestModel model)
    {
        #region Validation
        if (!ModelState.IsValid)
            return BadRequest(new { message = GetErrors() });
        #endregion

        GuestDTO guest = _mapper.Map<GuestDTO>(model);

        //add guest object for updating
        await _unitOfWork.Guest.Update(guest, model.Id);

        return Ok(await _unitOfWork.Complete());
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> RemoveCustomer(int id)
    {
        #region Validation
        if (id <= 0)
            return BadRequest(new { message = "Id must be greater than 0" });
        #endregion

        _unitOfWork.Guest.Delete(id);

        return Ok(await _unitOfWork.Complete());
    }
}
