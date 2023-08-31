namespace UniversityAPI
{
    public class Grade
    {
        public int Id { get; set; }
        
        public Grades Value { get; set; }

        public int StudentId { get; set; }

        public virtual Student Student { get; set; }

        public int LecturerId { get; set; }

        public virtual Lecturer Lecturer { get; set; }
    }
}
