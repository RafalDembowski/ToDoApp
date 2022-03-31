using Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Https.Dtos
{
    public class CreateTaskDto
    {
        [Required]
        public string Description { get; set; }

        [Required]
        public TaskPriority Priority { get; set; }

        [Required]
        public TaskType Type { get; set; }
    }
}
