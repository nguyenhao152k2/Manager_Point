﻿using Manager_Point.Models.Enum;

namespace BLL.ViewModels.Class
{
    public class vm_create_class
    {
        public int CourseId { get; set; }
        public required string ClassCode { get; set; }
        public string? Name { get; set; }
        public int GradeLevel { get; set; }
        public string? Years { get; set; }
        public Status Status { get; set; }
    }
}
