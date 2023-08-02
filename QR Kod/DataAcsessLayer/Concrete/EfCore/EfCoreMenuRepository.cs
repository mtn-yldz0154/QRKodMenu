using DataAcsessLayer.Buisness;
using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcsessLayer.Concrete.EfCore
{
    public class EfCoreMenuRepository : EfCorGenericRepository<Menu, Context>, IMenuRepository
    {
        public List<Category> GetCategories(int id)
        {
            using (var db=new Context())
            {
                return db.Categories.Where(i => i.MenuId == id).ToList();
            }
        }
    }
}
