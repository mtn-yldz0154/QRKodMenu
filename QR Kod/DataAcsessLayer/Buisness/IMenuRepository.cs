using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcsessLayer.Buisness
{
    public interface IMenuRepository : IGenericRepository<Menu>
    {
        List<Category> GetCategories(int id);
    }
}
