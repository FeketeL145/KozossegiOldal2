namespace Kozossegi_oldal.Models.Dtos
{
    public record PostDto(Guid Id, string Title, int Likes, string Content, string Image, DateTime CreatedTime, Guid UsersId);
    public record CreatePostDto(string Title, int Likes, string Content, string Image, Guid UsersId);
    public record RemovePostDto(Guid Id);
    public record UpdatePostDto(string Title, int Likes, string Content, string Image);
}