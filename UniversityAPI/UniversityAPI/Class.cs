namespace UniversityAPI
{
    public class Class
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public int LecturerId { get; set; }
        public virtual Lecturer Lecturer { get; set; }

    }
}
