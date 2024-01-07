using Kozossegi_oldal.Models;
using Kozossegi_oldal.Models.Dtos;
using Kozossegi_oldal.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Kozossegi_oldal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        //UserService függőségi befecskendezés:
        private readonly IUserInterface userService;

        public UserController(IUserInterface userService)
        {
            this.userService = userService;
        }

        //Felhasználók:
        [HttpPost]
        public async Task<ActionResult> Post(CreateUserDto createUserDto)
        {
            await userService.PostUser(createUserDto);
            try
            {
                return StatusCode(201, "Sikeres regisztráció!");
            }
            catch (Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }
        [HttpGet]
        [Route("api/user/allwithposts")]
        public async Task<ActionResult<object>> GetAllUsersWithPosts()
        {
            return Ok(await userService.GetUsersWithPosts());
        }
        [HttpGet("id")]
        public async Task<ActionResult<Users>> GetById(Guid Id)
        {
            try
            {
                return StatusCode(200,  await userService.GetById(Id));
            }
            catch(Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }
        [HttpPut("id")]
        public async Task<ActionResult<Users>> Put(Guid Id, UpdateUserDto updateUserDto)
        {
            try
            {
                var result = await userService.PutUser(Id, updateUserDto);
                return StatusCode(201, result);
            }
            catch(Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }
        [HttpDelete]
        public async Task<ActionResult> Delete(Guid Id)
        {
            try
            {
                await userService.DeleteUser(Id);
                return Ok();
            }
            catch(Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }
    }
}