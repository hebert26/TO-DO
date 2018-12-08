using System.Threading.Tasks;
using CoreAppDemo.Common;
using CoreAppDemo.Data.Model;
using CoreAppDemo.Services;

namespace CoreAppDemo.Controller
{
    using Microsoft.AspNetCore.Mvc;

    [Route("api/todos")]
    [Produces("application/json")]
    public class TodosController : ControllerBase
    {
        private readonly ITodoService _todoService;

        public TodosController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet("all")]
        public async Task<IActionResult> All()
        { 
            return Ok(await _todoService.AllAsync());
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddTodo([FromBody] Todo todo)
        {

            if (!todo.IsNull())
            {    
                return Ok(new { id = await _todoService.AddAsync(todo) });
            }
            return BadRequest("Todo object is null");
        }

        [HttpPut("update")]
        public async Task<IActionResult> Update([FromBody] Todo todo)
        {
            if (!todo.IsNull())
            {
                Todo td = await FindByIdAsync(todo.Id);
                if (td.IsNull())
                {
                    return NotFound();
                }
                return Ok(new { id = await _todoService.UpdateAsync(todo) }); 
            }
            return BadRequest("Todo object is null");
        }

        [HttpPut("toggle")]
        public async Task<IActionResult> Toggle([FromBody] Todo todo)
        {
            if (!todo.IsNull())
            {
                Todo td = await FindByIdAsync(todo.Id);
                if (td.IsNull())
                {
                    return NotFound();
                }
                return Ok(new { id = _todoService.ToggleAsync(todo) });
            }
            return BadRequest("Todo object is null");
        }

        [HttpPut("remove")]
        public async Task<IActionResult> Remove([FromBody] Todo todo)
        {
            Todo td = await FindByIdAsync(todo.Id);
            if (td.IsNull())
            {
                return NotFound();
            }
            return Ok(_todoService.RemoveAsync(td));
        }
        private async Task<Todo> FindByIdAsync(int id)
        {  
            return await _todoService.FindByIdAsync(id);
        }
       
    }
}