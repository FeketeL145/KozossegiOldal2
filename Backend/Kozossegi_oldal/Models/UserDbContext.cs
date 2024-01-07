using Microsoft.EntityFrameworkCore;

namespace Kozossegi_oldal.Models
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        {

        }

        public DbSet<Users> Users { get; set; } = null!;
        public DbSet<Posts> Posts { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Posts>()
                .HasOne(e => e.Users)
                .WithMany(d => d.Posts);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                string conn = "server=localhost; database=kozossegioldal; user=root; password=";

                optionsBuilder.UseMySql(conn, ServerVersion.AutoDetect(conn));
            }
        }
    }
}