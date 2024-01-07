using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Kozossegi_oldal.Models
{
    public class Users
    {
        [Key]
        public Guid Id { get; set; }

        [Column(TypeName = "varchar(36)")]
        public string UserName { get; set; }

        [Column(TypeName = "varchar(20)")]
        public string Name { get; set; }

        [Column(TypeName = "varchar(50)")]
        public string Password { get; set; }

        [Column(TypeName = "varchar(30)")]
        public string Gender { get; set; }

        [Column(TypeName = "varchar(15)")]
        public string Email { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime DateOfBirth { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime RegisterDate { get; set; }

        public List<Posts> Posts { get; set; }
    }
}