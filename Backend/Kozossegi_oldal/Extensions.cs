using Kozossegi_oldal.Models;
using Kozossegi_oldal.Models.Dtos;
using Microsoft.Extensions.Hosting;

namespace Kozossegi_oldal
{
    public static class Extensions
    {
        public static PostDto AsDto(this Posts post)
        {
            return new PostDto(post.Id, post.Title, post.Likes, post.Content, post.Image, post.CreatedTime, post.UsersId);
        }
        public static UserDto AsDto(this Users user) 
        {
            return new UserDto(user.Id, user.UserName, user.Name, user.Password, user.Gender, user.Email, user.DateOfBirth, user.RegisterDate);
        }
    }
}