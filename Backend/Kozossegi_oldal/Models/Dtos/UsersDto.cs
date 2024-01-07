namespace Kozossegi_oldal.Models.Dtos
{
        public record UserDto(Guid Id, string UserName, string Name, string Password, string Gender, string Email, DateTime DateOfBirth, DateTime RegisterDate);
        public record CreateUserDto(string UserName, string Name, string Password, string Gender, string Email, DateTime DateOfBirth);
        public record RemoveUserDto(Guid Id);
        public record UpdateUserDto(string UserName, string Name, string Password, string Gender, string Email, DateTime DateOfBirth);
}