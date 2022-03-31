using Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Task
    {
        [Key]
        public Guid Id { get; set; }
        public string Description { get; set; }
        public bool IsComplete { get; set; }
        public TaskPriority Priority { get; set; }
        public TaskType Type { get; set; }

    }
}
