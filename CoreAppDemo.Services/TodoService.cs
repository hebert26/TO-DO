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
            return await SaveChangesAsync(todo, EntityState.Added);
        }

        public async Task<int> UpdateAsync(Todo todo)
        {
            CheckIfTodoIsNull(todo);
            return await SaveChangesAsync(todo, EntityState.Modified); 
        }        

        public async Task<int> ToggleAsync(Todo todo)
        {  
            CheckIfTodoIsNull(todo); 
            return await SaveChangesAsync(todo, EntityState.Modified);
        }       

        public async Task<int> RemoveAsync(Todo todo)
        {  
            CheckIfTodoIsNull(todo);
            return await SaveChangesAsync(todo, EntityState.Deleted);         
        }

        public async Task<Todo> FindByIdAsync(int id)
        {
            return await _context.Todos.AsNoTracking().FirstOrDefaultAsync(todo => todo.Id == id);
        }

        private static void CheckIfTodoIsNull(Todo todo)
        {
            if (todo == null)
            {
                throw new ArgumentException($"{nameof(todo)} can be null.");
            }
        }

        public async Task<int> SaveChangesAsync(Todo todo, EntityState entityState)
        { 
           _context.Entry(todo).State = entityState; 
          return await  _context.SaveChangesAsync();
        }
    }
}