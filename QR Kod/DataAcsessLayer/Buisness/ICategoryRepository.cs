using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcsessLayer.Buisness
{
    public interface ICategoryRepository:IGenericRepository<Category>
    {
        List<Product> GetProducts(int id);
    }
}
