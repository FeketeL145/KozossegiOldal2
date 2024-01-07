using Microsoft.EntityFrameworkCore;

namespace Kozossegi_oldal.Models
{
    public class PostDbContext : DbContext
    {
        public PostDbContext(DbContextOptions<PostDbContext> options) : base(options)
        {

        }
        public DbSet<Posts> Posts { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                string conn = "server=188.36.87.58; Port=8081; database=kozossegioldal; user=root; password=qsrv145";

                optionsBuilder.UseMySql(conn, ServerVersion.AutoDetect(conn));
            }
        }
    }
}