using Microsoft.EntityFrameworkCore.Infrastructure;

namespace UniversityAPI.Data
{
    [DbContext(typeof(DataContext))]
    partial class DbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns();

            modelBuilder.Entity("UniversityAPI.Role", b =>
            {
                b.Property<int>("Id")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int")
                    .UseIdentityColumn();

                b.Property<string>("Name")
                    .IsRequired()
                    .HasColumnType("nvarchar(max)");

                b.HasKey("Id");

                b.ToTable("Roles");
            });

            modelBuilder.Entity("UniversityAPI.User", b =>
            {
                b.Property<int>("Id")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int")
                    .UseIdentityColumn();

                b.Property<DateTime?>("DateOfBirth")
                    .HasColumnType("datetime2");

                b.Property<string>("Email")
                    .IsRequired()
                    .HasColumnType("nvarchar(max)");

                b.Property<string>("FirstName")
                    .HasColumnType("nvarchar(max)");

                b.Property<string>("LastName")
                    .HasColumnType("nvarchar(max)");

                b.Property<string>("PasswordHash")
                    .HasColumnType("nvarchar(max)");

                b.Property<int>("RoleId")
                    .HasColumnType("int");

                b.HasKey("Id");

                b.HasIndex("RoleId");

                b.ToTable("Users");
            });

            modelBuilder.Entity("UniversityAPI.User", b =>
            {
                b.HasOne("RestaurantAPI.Entities.Role", "Role")
                    .WithMany()
                    .HasForeignKey("RoleId")
                    .OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();

                b.Navigation("Role");
            });

#pragma warning restore 612, 618
        }
    }
}
