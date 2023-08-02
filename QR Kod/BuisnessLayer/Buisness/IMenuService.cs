using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLayer.Buisness
{
    public interface IMenuService
    {
        List<Category> GetCategories(int id);
        void Create(Menu menu);

        void Update(Menu menu);

        void Delete(int id);

        List<Menu> GetAll();

        Menu GetMenuById(int id);
       



    }
}
