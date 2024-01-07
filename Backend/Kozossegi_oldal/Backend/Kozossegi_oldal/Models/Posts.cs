using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Kozossegi_oldal.Models
{
    public class Posts
    {
        [Key]
        public Guid Id { get; set; }

        [Column(TypeName = "varchar(36)")]
        public string Title { get; set; }

        [Column(TypeName = "varchar(30)")]
        public string Author { get; set; }

        [Column(TypeName = "text")]
        public string Content { get; set; }

        [Column(TypeName = "varchar(40)")]
        public string Image { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime CreatedTime { get; set; }
    }
}