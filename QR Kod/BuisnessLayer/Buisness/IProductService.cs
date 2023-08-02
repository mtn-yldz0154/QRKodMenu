using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLayer.Buisness
{
    public interface IProductService
    {
        void Create(Product product);

        void Update(Product product);

        void Delete(int id);

        List<Product> GetAll();

        List<ProductDetails> GetProductDetails(int id);

        Product GetProductById(int id);
    }
}
