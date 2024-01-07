using Kozossegi_oldal.Models;
using Kozossegi_oldal.Models.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kozossegi_oldal.Repositories
{
    public class UserService : IUserInterface
    {
        public readonly UserDbContext dbContext;

        public UserService(UserDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Users> DeleteUser(Guid id)
        {
            var user = await dbContext.Users.FindAsync(id);

            if (user == null)
            {
                return null;
            }

            dbContext.Users.Remove(user);
            await dbContext.SaveChangesAsync();

            return user;
        }

        public async Task<IEnumerable<Users>> Get()
        {
            return await dbContext.Users.ToListAsync();
        }

        public async Task<IEnumerable<object>> GetUsersWithPosts()
        {
            return await dbContext.Users.Include(u => u.Posts).ToListAsync();
        }

        public async Task<Users> GetById(Guid id)
        {
            return await dbContext.Users.FindAsync(id);
        }

        public async Task PostUser(CreateUserDto createUserDto)
        {
            var user = new Users
            {
                Id = Guid.NewGuid(),
                UserName = createUserDto.UserName,
                Name = createUserDto.UserName,
                Password = createUserDto.Password,
                Gender = createUserDto.Gender,
                Email = createUserDto.Email,
                DateOfBirth = createUserDto.DateOfBirth,
                RegisterDate = DateTime.Now
            };
            await dbContext.Users.AddAsync(user);
            await dbContext.SaveChangesAsync();
        }

        public async Task<Users> PutUser(Guid id, UpdateUserDto updateUserDto)
        {
            var userToUpdate = await dbContext.Users.FindAsync(id);

            if (userToUpdate == null)
            {
                throw new KeyNotFoundException($"A {id} id-vel a felhasználó nem található.");
            }

            userToUpdate.UserName = updateUserDto.UserName;
            userToUpdate.Name = updateUserDto.Name;
            userToUpdate.Password = updateUserDto.Password;
            userToUpdate.Gender = updateUserDto.Gender;
            userToUpdate.Email = updateUserDto.Email;
            userToUpdate.DateOfBirth = updateUserDto.DateOfBirth;

            await dbContext.SaveChangesAsync();

            return userToUpdate;
        }
    }
}