using System.Collections.Generic;
using System.Threading.Tasks;
using CoreAppDemo.Data.Model;

namespace CoreAppDemo.Services
{
    public interface ITodoService
    {
        Task<List<Todo>> AllAsync();

        Task<int> AddAsync(Todo todo);

        Task<int> ToggleAsync(Todo todo);

        Task<int> RemoveAsync(Todo todo);

        Task<Todo> FindByIdAsync(int id);

        Task<int> UpdateAsync(Todo todo);
    }
}