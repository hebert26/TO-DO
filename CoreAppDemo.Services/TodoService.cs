using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CoreAppDemo.Data;
using CoreAppDemo.Data.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace CoreAppDemo.Services
{
    public class TodoService : ITodoService
    {
        private readonly ApiContext _context;

        public TodoService(ApiContext context)
        {
            _context = context;
        }

        public async Task<List<Todo>> AllAsync()
        {
            return await _context.Todos.ToListAsync();
        }

        public async Task<int> AddAsync(Todo todo)
        {
            CheckIfTodoIsNull(todo);
            EntityEntry<Todo> result = await _context.Todos.AddAsync(todo);
            _context.SaveChanges();
            return result.Entity.Id;
        }

        public async Task<int> ToggleAsync(int id)
        {
            Todo td = await _context.Todos.FirstOrDefaultAsync(t => t.Id == id);
            CheckIfTodoIsNull(td);

            if (td != null)
            {
                td.Completed = !td.Completed;
                return await _context.SaveChangesAsync();
            }

            return _context.SaveChanges();
        }

        public async Task<Todo> FindByIdAsync(int id)
        {
            return await _context.Todos.FirstOrDefaultAsync(todo => todo.Id == id);
        }

        public async Task<int> RemoveAsync(int id)
        {
            Todo todo = await _context.Todos.FirstOrDefaultAsync(t => t.Id == id);
            if (todo != null)
            {
                _context.Todos.Remove(todo);
                return await _context.SaveChangesAsync();
            }

            return _context.SaveChanges();
        }

        private static void CheckIfTodoIsNull(Todo todo)
        {
            if (todo == null)
            {
                throw new ArgumentException($"{nameof(todo)} can be null.");
            }
        }
    }
}