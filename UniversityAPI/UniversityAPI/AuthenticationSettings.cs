namespace UniversityAPI
{
    public class AuthenticationSettings
    {
        public int Id { get; set; }
        public string JwtKey { get; set; }
        public int JwtExpireDays { get; set; }
        public string JwtIssuer { get; set; }
    }
}
