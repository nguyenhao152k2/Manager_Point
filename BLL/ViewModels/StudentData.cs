﻿using BLL.Services.Implement;

namespace BLL.ViewModels
{
    public class StudentData
    {
        public int ClassId { get; set; }
        public string ClassName { get; set; }
        public string UserName { get; set; }
        public int UserId { get; set; }
        public int SubjectId { get; set; }
        public float TotalPoint
        {
            get => (float)Math.Round(_totalPoint, 1);
            set => _totalPoint = value;
        }

        private float _totalPoint;
        // danh hieu
        public string Rank { get; set; }
        // xep loai hoc luc
        public string AcademicAbility { get; set; }
		// Thuoc loai
		public string Conduct { get; set; }
		
		public List<SubjectByClass> SubjectClasses { get; set; }
    }
}
