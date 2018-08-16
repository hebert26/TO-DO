﻿using Microsoft.EntityFrameworkCore;

namespace CoreAppDemo.Data.Model
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options)
            : base(options)
        {
        }

        public DbSet<Todo> Todos { get; set; }
    }
}