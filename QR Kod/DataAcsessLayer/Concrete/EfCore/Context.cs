using EntityLayer;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcsessLayer.Concrete.EfCore
{
    public class Context:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=LAPTOP-LM2N83TK;database=QRKodDb;" +
                "integrated security=true;");
        }



           public DbSet<Menu> Menus { get; set; }
           public DbSet<Category> Categories { get; set; }
           public DbSet<Product> Products { get; set; }
           public DbSet<ProductDetails> ProductDetails { get; set; }

    }

}
