using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;
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

        public int Add(Todo todo)
        {
            if (todo == null)
            {
                throw new ArgumentException($"{nameof(todo)} can be null.");
            }

            EntityEntry<Todo> result = _context.Todos.Add(todo);
            _context.SaveChanges();
            return result.Entity.Id;
        }

        public int Remove(int id)
        {
            var todo = _context.Todos.FirstOrDefault(t => t.Id == 1);
            if (todo != null)
            {
                _context.Todos.Remove(todo);
                return _context.SaveChanges();
            }

            return _context.SaveChanges();
        }
    }
}