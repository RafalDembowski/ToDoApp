using Application.Interfaces;
using AutoMapper;
using Domain.Exceptions;
using Domain.Https.Dtos;
using Domain.Https.QueryParameters;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        public TaskRepository(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public async Task<Domain.Entities.Task> AddTaskAsync(CreateTaskDto task)
        {
            var entity = _mapper.Map<Domain.Entities.Task>(task);
            await _dataContext.Tasks.AddAsync(entity);
            await _dataContext.SaveChangesAsync();
            return entity;
        }

        public async Task<Domain.Entities.Task?> DeleteTaskAsync(Guid Id)
        {
            var entity = await GetTaskByIdAsync(Id);
            _dataContext.Tasks.Remove(entity);
            await _dataContext.SaveChangesAsync();
            return null;
        }

        public async Task<List<Domain.Entities.Task>> GetAllTasksAsync(TaskQueryParameters? taskQueryParameters)
        {
            var query = _dataContext.Tasks.AsQueryable();
            
            if(taskQueryParameters != null)
            {
                if (taskQueryParameters.IsComplete != null)
                {
                    query = query.Where(t => t.IsComplete == taskQueryParameters.IsComplete);
                }

                if (taskQueryParameters.Priority != null)
                {
                    query = query.Where(t => t.Priority == taskQueryParameters.Priority);
                }

                if (taskQueryParameters.Type != null)
                {
                    query = query.Where(t => t.Type == taskQueryParameters.Type);
                }
            }

            return await query.ToListAsync();
        }

        public async Task<Domain.Entities.Task> GetTaskByIdAsync(Guid Id)
        {
            var entity = await _dataContext.Tasks.FindAsync(Id);
            if (entity == null)
            {
                throw new NotFoundException();
            }
            return entity;
        }

        public async Task<Domain.Entities.Task> UpdateTaskAsync(Guid Id , UpdateTaskDto task)
        {
            var entity = await GetTaskByIdAsync(Id);
            _mapper.Map(task , entity);
            await _dataContext.SaveChangesAsync();
            return entity;
        }
    }
}
