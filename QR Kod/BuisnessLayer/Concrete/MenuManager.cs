using BuisnessLayer.Buisness;
using DataAcsessLayer.Buisness;
using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLayer.Concrete
{
    public class MenuManager : IMenuService
    {
        private IMenuRepository _menuRepository;

        

        public MenuManager(IMenuRepository menuRepository) {
        
        _menuRepository= menuRepository;    
        }

        public void Create(Menu menu)
        {
           _menuRepository.Create(menu);
        }

        public void Delete(int id)
        {
            _menuRepository.Delete(id);
        }

        public List<Menu> GetAll()
        {
            return _menuRepository.GetAll();
        }

        public List<Category> GetCategories(int id)
        {
          return   _menuRepository.GetCategories(id);
        }

        public Menu GetMenuById(int id)
        {
          return   _menuRepository.GetById(id);
        }

        public void Update(Menu menu)
        {
           _menuRepository.Update(menu);    
        }
    }
}
