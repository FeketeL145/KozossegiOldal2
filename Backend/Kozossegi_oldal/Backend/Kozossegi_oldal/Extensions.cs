using Kozossegi_oldal.Models;
using Kozossegi_oldal.Models.Dtos;
using Microsoft.Extensions.Hosting;

namespace Kozossegi_oldal
{
    public static class Extensions
    {
        public static PostDto AsDto(this Posts post)
        {
            return new PostDto(post.Id, post.Title, post.Author, post.Content, post.Image, post.CreatedTime);
        }
    }
}