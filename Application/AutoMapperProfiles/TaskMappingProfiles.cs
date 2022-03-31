using AutoMapper;
using Domain.Https.Dtos;
using Task = Domain.Entities.Task;

namespace Application.AutoMapperProfiles
{
    public class TaskMappingProfiles : Profile
    {
        public TaskMappingProfiles()
        {
            CreateMap<CreateTaskDto , Task>();
            CreateMap<UpdateTaskDto, Task>();
        }
    }
}
