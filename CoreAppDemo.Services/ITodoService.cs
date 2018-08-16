using System.Collections.Generic;
using System.Threading.Tasks;
using CoreAppDemo.Data.Model;

namespace CoreAppDemo.Services
{
    public interface ITodoService
    {
        Task<List<Todo>> AllAsync();

        Task<int> AddAsync(Todo todo);

        Task<int> ToggleAsync(int id);

        Task<int> RemoveAsync(int id);

        Task<Todo> FindByIdAsync(int id);
    }
}