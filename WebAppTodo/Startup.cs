using CoreAppDemo.Data;
using CoreAppDemo.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace WebAppTodo
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //services.Configure<CookiePolicyOptions>(options =>
            //{
            //    // This lambda determines whether user consent for non-essential cookies is needed for a given request.
            //    options.CheckConsentNeeded = context => true;
            //    options.MinimumSameSitePolicy = SameSiteMode.None;
            //});


            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            //In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration => configuration.RootPath = "wwwroot");
            services.AddTransient<ITodoService, TodoService>();

            //Just for test purpose
            services.AddDbContext<ApiContext>(opt => opt.UseInMemoryDatabase("TodoDb"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseExceptionHandler(config => config.Run(async context =>
            {
                context.Response.StatusCode = 500;
                context.Response.ContentType = "application/json";

                var error = context.Features.Get<IExceptionHandlerFeature>();
                if (error != null)
                {
                    var ex = error.Error;
                    // TODO: HG. Add logs 
                    await context.Response.WriteAsync(new ErrorModel()
                    {
                        StatusCode = 500,
                        ErrorMessage = ex.Message
                    }.ToString());
                }
            }));


            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseStatusCodePages();
            app.UseHttpsRedirection();
            app.UseMvc();
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "wwwroot";
                //spa.UseAngularCliServer(npmScript: "start");
            });
        }
    }
}
