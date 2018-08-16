using System.Collections.Generic;
using System.Threading.Tasks;
using CoreAppDemo.Data.Model;

namespace CoreAppDemo.Services
{
    public interface ITodoService
    {
        Task<List<Todo>> AllAsync();

        int Add(Todo todo);
    }
}