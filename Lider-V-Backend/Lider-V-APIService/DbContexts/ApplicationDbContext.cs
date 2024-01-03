using Lider_V_APIService.Models;
using Microsoft.EntityFrameworkCore;

namespace Lider_V_APIService.DbContexts
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            
        }

        public DbSet<Product> Products { get; set; }
    }
}
