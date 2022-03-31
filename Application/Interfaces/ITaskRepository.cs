using Domain.Https.Dtos;
using Domain.Https.QueryParameters;
using Task = Domain.Entities.Task;

namespace Application.Interfaces
{
    public interface ITaskRepository
    {
        Task<Task> AddTaskAsync(CreateTaskDto task);
        Task<Task?> DeleteTaskAsync(Guid Id);
        Task<List<Task>> GetAllTasksAsync(TaskQueryParameters? taskQueryParameters);
        Task<Task> GetTaskByIdAsync(Guid Id);
        Task<Task> UpdateTaskAsync(Guid id , UpdateTaskDto task);
    }
}
