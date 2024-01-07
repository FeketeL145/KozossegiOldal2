using Kozossegi_oldal.Models;
using Kozossegi_oldal.Models.Dtos;

namespace Kozossegi_oldal.Repositories
{
    public interface IUserInterface
    {
        Task<IEnumerable<Users>> Get();
        Task<IEnumerable<object>> GetUsersWithPosts();
        Task<Users> GetById(Guid id);
        Task PostUser(CreateUserDto createUserDto);
        Task<Users> PutUser(Guid id, UpdateUserDto updateUserDto);
        Task<Users> DeleteUser(Guid id);
    }
}