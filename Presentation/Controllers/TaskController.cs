using Application.Interfaces;
using Domain.Https.Dtos;
using Domain.Https.QueryParameters;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers
{
    [Route("api/Tasks")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ITaskRepository _taskRepository;
        public TaskController(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTasks([FromQuery] TaskQueryParameters? taskQueryParameters)
        {
            var tasks = await _taskRepository.GetAllTasksAsync(taskQueryParameters);
            return Ok(tasks);
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetTaskById(Guid Id)
        {
            var task = await _taskRepository.GetTaskByIdAsync(Id);
            return Ok(task);
        }

        [HttpPost()]
        public async Task<IActionResult> PostTask([FromBody] CreateTaskDto task)
        {
            var createdTask = await _taskRepository.AddTaskAsync(task);
            return Created($"api/Tasks/{createdTask.Id}", createdTask);
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> PutTask(Guid Id , [FromBody] UpdateTaskDto task)
        {
            var updatedTask = await _taskRepository.UpdateTaskAsync(Id , task);
            return Ok(updatedTask);
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteTaskById(Guid Id)
        {
            await _taskRepository.DeleteTaskAsync(Id);
            return NoContent();
        }

    }
}
