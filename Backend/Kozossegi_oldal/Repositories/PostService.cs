using Kozossegi_oldal.Models;
using Kozossegi_oldal.Models.Dtos;
using Microsoft.EntityFrameworkCore;

namespace Kozossegi_oldal.Repositories
{
    public class PostService : IPostInterface
    {
        private readonly PostDbContext dbContext;

        public PostService(PostDbContext dbContext)
        {
            this.dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        public async Task DeletePost(Guid id)
        {
            var postToDelete = await dbContext.Posts.FindAsync(id);

            if (postToDelete == null)
            {
                throw new KeyNotFoundException($"A {id} id-vel a bejegyzés nem található.");
            }

            dbContext.Posts.Remove(postToDelete);
            await dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Posts>> Get()
        {
            return await dbContext.Posts.ToListAsync();
        }

        public async Task<Posts> GetById(Guid id)
        {
            var post = await dbContext.Posts.FindAsync(id);

            if (post == null)
            {
                throw new KeyNotFoundException($"A {id} id-vel a bejegyzés nem található.");
            }

            return post;
        }

        public async Task PostPost(CreatePostDto createPostDto)
        {
            var post = new Posts
            {
                Id = Guid.NewGuid(),
                Title = createPostDto.Title,
                Author = createPostDto.Author,
                Category = createPostDto.Category,
                Content = createPostDto.Content,
                Image = createPostDto.Image,
                CreatedTime = DateTime.Now,
            };

            await dbContext.Posts.AddAsync(post);
            await dbContext.SaveChangesAsync();
        }

        public async Task<Posts> PutPost(Guid id, UpdatePostDto updatePostDto)
        {
            var postToUpdate = await dbContext.Posts.FindAsync(id);

            if (postToUpdate == null)
            {
                throw new KeyNotFoundException($"A {id} id-vel a bejegyzés nem található.");
            }

            postToUpdate.Title = updatePostDto.Title;
            postToUpdate.Author = updatePostDto.Author;
            postToUpdate.Content = updatePostDto.Content;
            postToUpdate.Image = updatePostDto.Image;

            await dbContext.SaveChangesAsync();

            return postToUpdate;
        }
    }
}