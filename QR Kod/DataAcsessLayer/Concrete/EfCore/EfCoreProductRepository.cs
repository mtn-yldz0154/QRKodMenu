using DataAcsessLayer.Buisness;
using EntityLayer;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcsessLayer.Concrete.EfCore
{
    public class EfCoreProductRepository : EfCorGenericRepository<Product, Context>, IProductRepository
    {
        public List<ProductDetails> GetProductDetails(int id)
        {
            using (var db=new Context())
            {
                var list = db.ProductDetails.Where(i => i.ProductId == id).ToList();
                
                return list;
            }
        }
    }
}
