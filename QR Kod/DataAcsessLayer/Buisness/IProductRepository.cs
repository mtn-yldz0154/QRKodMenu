using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcsessLayer.Buisness
{
    public interface IProductRepository:IGenericRepository<Product>
    {
        List<ProductDetails> GetProductDetails(int id);
    }
}
