using System.Threading.Tasks;
using CoreAppDemo.Common;
using CoreAppDemo.Data.Model;
using CoreAppDemo.Services;

namespace CoreAppDemo.Controller
{
    using Microsoft.AspNetCore.Mvc;

    [Route("api/todos")]
    public class TodosController : Controller
    {
        private readonly ITodoService _todoService;

        public TodosController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetCities()
        {
            return Ok(await _todoService.AllAsync());
        }

        [HttpPost("add")]
        public IActionResult AddTodo([FromBody] Todo todo)
        {
            return Created(string.Empty, new { id = _todoService.AddAsync(todo) });
        }

        [HttpPut("toggle")]
        public async Task<IActionResult> Toggle([FromBody] Todo todo)
        {
            Todo td = await _todoService.FindByIdAsync(todo.Id);
            if (td.IsNull())
            {
                return NotFound();
            }

            return Created(string.Empty, new { id = _todoService.ToggleAsync(todo.Id) });
        }

        [HttpPut("remove")]
        public async Task<IActionResult> Remove([FromBody] Todo todo)
        {
            Todo td = await _todoService.FindByIdAsync(todo.Id);
            if (td.IsNull())
            {
                return NotFound();
            }

            return Ok(_todoService.RemoveAsync(todo.Id));
        }
    }
}