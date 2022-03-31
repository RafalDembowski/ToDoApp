using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Https.QueryParameters
{
    public class TaskQueryParameters
    {
        public bool? IsComplete { get; set; }
        public TaskPriority? Priority { get; set; }
        public TaskType? Type { get; set; }

        public TaskQueryParameters()
        {
            IsComplete = null;
            Priority = null;
            Type = null;
        }
    }
}
