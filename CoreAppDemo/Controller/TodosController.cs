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
        public IActionResult GetCities()
        {
            return Ok(_todoService.AllAsync().Result);
        }

        [HttpPost("add")]
        public IActionResult AddTodo([FromBody] Todo todo)
        {
            return Created(string.Empty, new { id = _todoService.Add(todo) });
        }
    }
}