namespace Guest.API.Helpers;

using AutoMapper;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<GuestDTO, GuestModel>().ReverseMap();
        CreateMap<GuestDTO, GuestModel>();
    }
}
