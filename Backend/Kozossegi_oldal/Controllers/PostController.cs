using Kozossegi_oldal.Models;
using Kozossegi_oldal.Models.Dtos;
using Kozossegi_oldal.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Kozossegi_oldal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        //PostService függőségi befecskendezés:
        private readonly IPostInterface postService;

        public PostController(IPostInterface postService)
        {
            this.postService = postService;
        }

        //Bejegyzések:
        [HttpPost]
        public async Task<ActionResult> Post(CreatePostDto createPostDto)
        {
            await postService.PostPost(createPostDto);
            try
            {
                return StatusCode(201, "A posztot sikeresen létrehozta.");
            }
            catch (Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Posts>>> GetPosts()
        {
            try
            {
                return StatusCode(200, await postService.Get());
            }
            catch (Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }
        [HttpGet("id")]
        public async Task<ActionResult<Posts>> GetById(Guid Id)
        {
            try
            {
                return StatusCode(200, await postService.GetById(Id));
            }
            catch (Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }
        [HttpPut("id")]
        public async Task<ActionResult<Posts>> Put(Guid Id, UpdatePostDto updatePostDto)
        {
            try
            {
                var result = await postService.PutPost(Id, updatePostDto);
                return StatusCode(201, result);
            }
            catch (Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }
        [HttpDelete]
        public async Task<ActionResult> Delete(Guid Id)
        {
            try
            {
                await postService.DeletePost(Id);
                return Ok();
            }
            catch (Exception e)
            {
                return StatusCode(400, e.Message);
            }
        }
    }
}